# Feature: Content Editing via Sanity CMS

## 1. Problem Statement & Why Now

The JOOF website is a client-rendered Vite/React SPA. Its content is scattered and not editable by non-developers:

- **Hardcoded JSX strings** — Hero headline, Mission, DualFocus, Programs pages, Donate, About story, Timeline, ContactInfo, Footer.
- **`src/utils/constants.js`** — team members, contact info (email/phone/address), social links.
- **A scaffolded-but-dead Strapi layer** — `api/services/*` and `hooks/useApi.js` define hooks for team, programs, testimonials, impact stats, blog, categories, and contact, pointing at a Strapi instance that **was never running**.

Crucially, **only 4 files actually consume the data-hook layer today** (verified against the code):
`pages/News/NewsList.jsx`, `pages/News/NewsPost.jsx`, `components/contact/ContactForm.jsx`, `components/blog/CategoryFilter.jsx`. Every other content component is hardcoded — the matching hooks exist but were never wired in.

**Why now:** A non-technical org admin needs to publish/edit content on a real cadence — news/blog posts **weekly**, programs **quarterly**, and the About/Contact/Donate/Home pages **~annually** — without involving a developer. Today that requires a code change and a redeploy for every word.

**What breaks if we don't build it:** The org stays dependent on a developer for routine copy changes; the news section (the highest-frequency need) cannot be updated by staff at all; the dead Strapi layer remains misleading dead weight.

---

## 2. Goals and Non-Goals

### Goals
- A non-technical admin can edit **all site content** (pages, news/blog, programs, team, advisors, reports, testimonials, impact stats, site settings) through a hosted UI, with **no code access**.
- Changes are **self-service and visible within ~60 seconds of saving** (Sanity CDN cache TTL).
- The admin can **undo their own changes** via built-in version history/restore.
- Image management happens inside the same UI, backed by the **existing Cloudinary** account.
- The admin's blast radius is limited: they can see/edit content only, not project settings or source.
- **$0/month** at current scale.

### Non-Goals
- **Server-side rendering / SSG / SEO prerendering.** The site stays a client-rendered SPA; content is fetched at runtime. (Status quo — not regressing, not improving.)
- **Newsletter.** The newsletter component was never wired up (currently a `setTimeout` placeholder). It is explicitly descoped — the component will remain on the page but stay non-functional until a future decision is made on a mailing-list service.
- **Contact-form *submissions*.** This is a *write from the public*, not CMS content. Sanity is read-only from the browser. The contact form will be rerouted to **Formspree** (free tier, 50 submissions/month) — handled as required side-work alongside this feature (see §6). The CMS swap must not silently break it.
- **Multi-stage editorial workflow** (draft → review → approval). The admin publishes directly; "undo" is the safety net, not gated review.
- **Custom granular per-field roles** (paid Sanity tier). The standard Editor role is sufficient.
- **Migrating away from Cloudflare Pages or Cloudinary.** Both stay.
- **Localization / multi-language content.**

---

## 3. Proposed Solution (plain English)

Adopt **Sanity** as the content store and editing UI.

- The admin logs into **Sanity Studio**, a hosted editing app at `joof.sanity.studio`. They never see GitHub or code. They see forms: "Home Page," "News Posts," "Team Members," etc.
- When they save, the content is stored in Sanity's cloud. Because the website fetches content in the browser at load time, the change appears within ~60 seconds (Sanity CDN cache TTL) — **no rebuild, no deploy**.
- Images are picked/uploaded through a **Cloudinary panel inside Studio**, reusing the existing Cloudinary account. Images are stored as `secure_url` strings on the Sanity document.
- If the admin makes a mistake, Sanity's **document history** lets them restore a previous version with one click.
- On the website side, we replace the dead Strapi calls with Sanity GROQ queries, keeping the existing React Query hook names so consuming components barely change. Then we progressively move the hardcoded content into Sanity and wire those components to the hooks.

**Why this is sound:** it removes the need to run/maintain a backend server (the reason Strapi was abandoned), it gives non-technical staff a real UI, and the SPA's runtime-fetch model means "publish" needs no build pipeline.

---

## 4. Architecture & Data Flow

### Editing flow
```
Admin → Sanity Studio (joof.sanity.studio) → Sanity Content Lake (cloud)
                                                      │
                          (browser fetch at runtime)  │
                                                      ▼
Visitor → Cloudflare Pages (static SPA) → @sanity/client → GROQ query → Sanity CDN → Content Lake
```
- No webhook/deploy-hook is required for content changes; the SPA reads live data per visit.
- Sanity CDN cache means updates are visible within ~60 seconds, not instantly. This is expected behavior — not a bug.
- Cloudflare Pages still rebuilds only on **code** pushes to GitHub (unchanged).

### Image flow
```
Admin (in Studio) → Cloudinary asset source plugin → uploads to Cloudinary account
Sanity document stores Cloudinary secure_url (plain string)
Frontend reads secure_url string → renders <img src={secure_url} />
```
No Sanity image transform pipeline is used. The URL is a plain Cloudinary string.

### Existing codebase touchpoints (verified)

**Files deleted in this migration:**
- `src/api/client.js` — axios Strapi client
- `src/api/services/blog.service.js`
- `src/api/services/team.service.js`
- `src/api/services/programs.service.js`
- `src/api/services/testimonials.service.js`
- `src/api/services/impact-stats.service.js`
- `src/api/services/categories.service.js`
- `src/api/services/contact.service.js` (Strapi POST replaced by Formspree; service file deleted)

**Files rewritten:**
- `src/api/sanityClient.js` *(new)* — Sanity client replacing `api/client.js`
- `src/hooks/useApi.js` — same hook names/signatures; `queryFn` bodies replaced with GROQ queries
- `src/components/blog/RichTextRenderer.jsx` — `@strapi/blocks-react-renderer` → `@portabletext/react`
- `src/utils/formatters.js` — `getStrapiImageUrl` replaced with `getImageUrl` (returns string directly); `formatStrapiDate` stays as-is; `extractStrapiData` deleted
- `src/utils/constants.js` — `TEAM_MEMBERS`, `CONTACT_INFO` removed (moved to Sanity); type constants stay

**Files first-time wired to hooks (currently hardcoded):**
- `components/home/Hero.jsx` → `useHomePage`
- `components/home/MissionSection.jsx` → `useHomePage`
- `components/home/DualFocus.jsx` → `usePrograms`
- `components/home/ImpactStats.jsx` → `useImpactStats`
- `components/home/TestimonialsCarousel.jsx` → `useTestimonials`
- `components/about/TeamGrid.jsx` + `pages/About/Team.jsx` → `useTeamMembers`
- `pages/About/About.jsx` → `useAboutPage`
- `pages/About/Advisors.jsx` → `useAdvisors` *(new hook)*
- `pages/About/Reports.jsx` → `useReports` *(new hook)*
- `components/contact/ContactInfo.jsx` → `useSiteSettings`
- `components/layout/Footer/Footer.jsx` + `SocialLinks.jsx` → `useSiteSettings`

**Consumers already using hooks (minimal change — queryFn only):**
- `pages/News/NewsList.jsx` — uses `useBlogPosts`
- `pages/News/NewsPost.jsx` — uses `useBlogPostBySlug`, `useRelatedBlogPosts`
- `components/blog/CategoryFilter.jsx` — uses `useCategories`
- `components/contact/ContactForm.jsx` — mutation replaced with Formspree fetch

### Route inventory (verified from `routes.jsx`)
`/` · `/about` (+`/team`, `/advisors`, `/reports`) · `/programs` (+`/education`, `/healthcare`, `/community`) · `/donate` · `/contact` · `/news` · `/news/:slug`

---

## 5. API Contracts / Interface Definitions

### Environment variables

**Remove:**
```
VITE_STRAPI_URL
```

**Add to `.env`, `.env.production`, and `.env.example`:**
```
VITE_SANITY_PROJECT_ID=        # from sanity.io/manage after project creation
VITE_SANITY_DATASET=production
VITE_FORMSPREE_ENDPOINT=       # e.g. https://formspree.io/f/xpzgdkve (create form first)
```

Cloudinary vars (verify these already exist in `.env` from prior setup — if not, add):
```
VITE_CLOUDINARY_CLOUD_NAME=    # needed by the Cloudinary asset source plugin in Studio
```

### Sanity client
```js
// src/api/sanityClient.js
import { createClient } from '@sanity/client';
export const sanity = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset:   import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,  // read-only, CDN-cached; updates visible within ~60s
});
```

Dataset must be created as **public** in `sanity.io/manage` — no auth token needed for reads on a public marketing site.

### Normalized type shapes (source of truth for hook contracts)

These are the exact field names each consuming component reads (verified from source). The `queryFn` in each hook MUST normalize GROQ results to match these shapes exactly.

```js
// Post — used by BlogCard, NewsList (list view)
{
  id: string,            // Sanity _id
  title: string,
  slug: string,          // GROQ: "slug": slug.current
  excerpt: string,
  publishedAt: string,   // ISO 8601 date string
  readTime: number,      // minutes (integer)
  featuredImage: string, // Cloudinary secure_url (plain string, may be null)
  category: {
    id: string,          // _id
    name: string,
    slug: string,
  } | null,
}

// PostDetail — used by NewsPost (detail view); extends Post
{
  ...Post,
  content: PortableTextBlock[], // field named "content" in schema — NewsPost reads post.content
  author: string | null,
  tags: string[],
}
// WARNING: field is named "content" (not "body") — must match NewsPost.jsx line: post.content

// Category — used by CategoryFilter
{
  id: string,
  name: string,
  slug: string,
  icon: string,   // emoji string, e.g. "🏥"
  color: string,  // slug-style string used for class lookup, e.g. "teal"
}

// TeamMember — used by TeamMemberCard
{
  id: string,
  name: string,
  role: string,
  bio: string,
  image: string,      // Cloudinary secure_url (may be null — component has avatar fallback)
  linkedin: string | null,
}

// Testimonial — used by TestimonialsCarousel
{
  quote: string,
  author: string,
  role: string,
  location: string,
}

// ImpactStat — used by ImpactStats
// NOTE: "icon" is NOT stored in Sanity. ImpactStats.jsx maps icons by array index.
// Only number, label, and order are fetched; the component keeps its icon array hardcoded.
{
  number: number,
  label: string,
  order: number,
}

// Program — used by DualFocus and individual program pages
// NOTE: type, color, gradient, link, and fallback image URL are structural (hardcoded).
// Only description, stats, and image are editable in Sanity.
{
  id: string,
  type: 'healthcare' | 'education' | 'community',
  description: string,
  stats: string[],    // array of bullet-point strings
  image: string,      // Cloudinary secure_url
}

// SiteSettings singleton — used by ContactInfo, Footer, SocialLinks
{
  email: string,
  phone: string,
  address: string,
  social: {
    instagram: string,
    facebook: string,
    youtube: string,
    linkedin: string,
  },
}

// homePage singleton — used by Hero, MissionSection
{
  hero: {
    subtitle: string,        // e.g. "John Oyediran Olabisi Foundation"
    headline: string,        // e.g. "FOR A BRIGHTER"
    headlineAccent: string,  // e.g. "FUTURE" (rendered in yellow)
    tagline: string,
    backgroundImage: string, // Cloudinary secure_url
  },
  mission: {
    heading: string,
    body: string,
    image: string,           // Cloudinary secure_url
    yearsOfImpact: number,
  },
}

// aboutPage singleton — used by About.jsx
{
  missionStatement: string,  // maps to MISSION_VISION.mission in constants.js
  coreValues: Array<{ title: string, desc: string }>,
  foundersQuote: string,
}

// useBlogPosts return shape (wraps Post[])
{
  items: Post[],
  pagination: {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number,
  }
}
// NewsList.jsx reads: data.data (array) and data.meta.pagination
// The queryFn must return { data: Post[], meta: { pagination: {...} } }
// to avoid changing NewsList.jsx's destructuring.
```

### Hook contracts (preserved signatures)

| Hook | Args | Returns |
|---|---|---|
| `useBlogPosts` | `{ page, pageSize, category }` | `{ data: Post[], meta: { pagination } }` |
| `useBlogPostBySlug` | `slug: string` | `PostDetail \| null` |
| `useRelatedBlogPosts` | `categoryId: string, excludeId: string, limit: number` | `{ data: Post[] }` |
| `useCategories` | — | `{ data: Category[] }` |
| `useTeamMembers` | — | `TeamMember[]` |
| `usePrograms` | — | `Program[]` |
| `useProgramsByType` | `type: string` | `Program[]` |
| `useTestimonials` | — | `Testimonial[]` |
| `useImpactStats` | — | `ImpactStat[]` |
| `useSiteSettings` *(new)* | — | `SiteSettings` |
| `useHomePage` *(new)* | — | `homePage` singleton |
| `useAboutPage` *(new)* | — | `aboutPage` singleton |
| `useAdvisors` *(new)* | — | `Advisor[]` |
| `useReports` *(new)* | — | `Report[]` |

### Corrected GROQ queries

**Blog list with pagination:**
```groq
{
  "data": *[_type == "blogPost"] | order(publishedAt desc)
    [($page - 1) * $pageSize ... $page * $pageSize] {
      "_id": _id,
      "id": _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      readTime,
      "featuredImage": featuredImage.secure_url,
      "category": category->{
        "id": _id, name, "slug": slug.current
      }
    },
  "meta": {
    "pagination": {
      "page": $page,
      "pageSize": $pageSize,
      "total": count(*[_type == "blogPost"]),
      "pageCount": round(count(*[_type == "blogPost"]) / $pageSize + 0.5)
    }
  }
}
```
With category filter append: `[_type == "blogPost" && ($category == null || category._ref == $category)]`

**Single post by slug:**
```groq
*[_type == "blogPost" && slug.current == $slug][0] {
  "id": _id,
  title,
  "slug": slug.current,
  content,           // Portable Text — field named "content" in schema
  excerpt,
  author,
  publishedAt,
  readTime,
  tags,
  "featuredImage": featuredImage.secure_url,
  "category": category->{ "id": _id, name, "slug": slug.current }
}
```

**Note on Cloudinary images in GROQ:**
The `sanity-plugin-cloudinary` stores images as a `cloudinary.asset` object containing `secure_url`, `public_id`, `format`, `resource_type`, and `url`. Use `featuredImage.secure_url` (not `featuredImage.url`) for HTTPS-guaranteed URLs. If `secure_url` is null, fall back to `featuredImage.url`.

### Formspree contact form replacement

Replace `api/services/contact.service.js` with:
```js
// Replaces submitContactForm; called by the existing useContactForm mutation in useApi.js
export const submitContactForm = async (data) => {
  const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Form submission failed');
  return response.json();
};
```
Fields sent: `name`, `email`, `subject`, `message` — match Formspree's default field capture. No changes to `ContactForm.jsx` or the mutation hook.

### Rich text

- Sanity schema field type: `array` of `block` (Portable Text), named **`content`** (matches `NewsPost.jsx`).
- Renderer: `@portabletext/react` `<PortableText value={content} />` inside `RichTextRenderer.jsx`.
- Tailwind `prose` wrapper class preserved; only the inner renderer changes.

### Schema definitions (Sanity Studio)

**Singletons** (create one, enforce via Studio structure, no "create new" button):
`homePage`, `aboutPage`, `contactPage`, `donatePage`, `siteSettings`

**Collections:**
`blogPost`, `category`, `program`, `teamMember`, `testimonial`, `impactStat`, `advisor`, `report`

Studio lives in a `/studio` subdirectory in the same repo. Deployed via `sanity deploy` to `joof.sanity.studio`.

---

## 6. Dependencies & Risk

### Systems touched
- **New:** `@sanity/client`, `@portabletext/react`, `sanity-plugin-cloudinary`, Sanity project + hosted Studio.
- **Removed:** `axios` (check no other file imports it first), `@strapi/blocks-react-renderer`, `api/client.js`, all `api/services/*`.
- **Unchanged:** Cloudflare Pages hosting, Cloudinary account, React Query, react-router-dom, all UI components.

### Risks & mitigations

**Contact form is a public write, not CMS content.**
It currently POSTs to Strapi via `useContactForm`. Removing Strapi breaks it.
*Mitigation:* Replace `submitContactForm` in `contact.service.js` with a Formspree `fetch` call (see §5). Mutation hook signature, validation, and UI stay unchanged. Must ship alongside the CMS swap so the form doesn't silently fail. Formspree form must be created and `VITE_FORMSPREE_ENDPOINT` set before the PR merges.

**Newsletter is descoped.**
`Newsletter.jsx` stays on the page but remains non-functional (it was already a placeholder — `setTimeout` only). `useNewsletterSubscription` hook and `subscribeNewsletter` service are deleted with the Strapi layer. No user-facing regression since the newsletter never actually worked.

**CDN cache delay vs. "instant" claim.**
`useCdn: true` means updates are visible within ~60 seconds, not on the next page reload. Admin must be told this during handoff. It is expected behavior, not a bug.

**Sanity Content Lake not yet populated — hard crash risk.**
If a singleton document (e.g. `homePage`) doesn't exist in Sanity when the site loads, `useHomePage` returns `null`. Components that destructure it directly will crash. *Mitigation:* Every hook that fetches a singleton must return a safe default object when the result is null. Every component consuming singleton hooks must guard against null/undefined fields. Seed all singleton documents before cutting over to Sanity.

**Return-shape drift.**
Old Strapi responses were nested (`data.attributes`); GROQ is flat. Normalization in `queryFn` must match exactly what `NewsList`, `NewsPost`, and `CategoryFilter` read. *Mitigation:* The exact field names are documented in §5. Treat them as a contract. Verify each of the 4 existing consumers against the contract after rewrite.

**`featuredImage` null handling.**
`BlogCard.jsx` calls `getImageUrl(post.featuredImage)` — if `featuredImage` is null, the component falls back to `/images/blog/default-blog.jpg`. The new `getImageUrl` utility must handle null input and return null (not throw). `BlogCard` already has a fallback; `NewsPost` checks `if (post.featuredImage)` before using it.

**ImpactStats icons are not stored in Sanity.**
`ImpactStats.jsx` maps icons by array index (hardcoded React Icons). Sanity stores only `number`, `label`, `order`. The component's icon array must stay in sync with the order of stats returned from Sanity. Document this constraint in a code comment at the icon array in `ImpactStats.jsx`.

**Free-tier version-history retention.**
"Admin can undo themselves" depends on Sanity history. The free plan retains limited history (verify at signup). *Mitigation:* Confirm retention window during Phase 1 setup. If insufficient, Sanity's Growth plan (~$15/mo) extends it.

**Free-tier API limits.**
3 users, 2 datasets, 500K CDN-cached API requests/month. *Mitigation:* `useCdn: true` keeps most reads CDN-cached. Monitor via Sanity Dashboard monthly.

**Public dataset exposure.**
A public dataset means content is world-readable via the Sanity API. Acceptable — this is a public marketing site. Do not store any private org data (donor emails, financials) in Sanity.

**`axios` removal.**
Confirm no file other than the deleted Strapi services imports `axios` before removing the dependency from `package.json`. Run `grep -r "from 'axios'" src` before deleting.

### Rollback plan
- All work on a feature branch. Cloudflare Pages preview URL validates before merge to `main`.
- Rollback = revert the branch. No production data is destroyed (Strapi was never running; Sanity data seeded is additive).
- Vertical slice (news/blog) ships first, so the riskiest integration is proven before the bulk migration begins.

### Data seeding approach
Sanity starts empty. Before cutting traffic to Sanity, all singleton documents and current live copy must be seeded manually via Sanity Studio. Checklist:
1. Create `siteSettings` singleton with current contact info and social links from `constants.js`.
2. Create `homePage` singleton with current Hero copy and Mission copy.
3. Create `aboutPage` singleton with current mission statement and core values from `About.jsx`.
4. Create `program` documents for Healthcare, Education, Community with current copy from `DualFocus.jsx`.
5. Create `teamMember` documents from `constants.js` `TEAM_MEMBERS` array.
6. Create `testimonial` documents from `TestimonialsCarousel.jsx`.
7. Create `impactStat` documents from `ImpactStats.jsx`.
8. Blog posts start fresh — admin creates them from day one in Studio (Strapi was never running, no posts to migrate).

---

## 7. Acceptance Criteria

### Setup & access
- Given the admin's invited account (Editor role), when they visit `joof.sanity.studio` and log in, they can open every defined document type and **cannot** access project settings, dataset management, or member management.
- Given an admin editing a document, when they add an image, they pick/upload it via the Cloudinary panel inside Studio. The saved document stores a `secure_url` string.
- Given the Sanity project is set to public dataset, the frontend fetches content with no auth token and receives data.

### Data layer — news/blog (vertical slice)
- Given a published `blogPost` in Sanity, when a visitor loads `/news`, the post title, `featuredImage` (Cloudinary URL rendered as `<img>`), and category badge appear on the card.
- Given `/news` with no posts in Sanity, the page renders the empty state ("no posts") without throwing.
- Given a `blogPost` with no `featuredImage`, `BlogCard` renders the fallback image `/images/blog/default-blog.jpg` without throwing.
- Given a valid `slug`, when a visitor loads `/news/:slug`, the Portable Text body renders correctly (headings, lists, links, block quotes, images) styled by the existing `prose` classes.
- Given an invalid slug, `/news/:slug` renders the "Post Not Found" state with a "Back to News" link — does not crash.
- Given a `category` filter selection, `/news` returns only posts in that category; clearing the filter returns all posts.
- Given the admin edits a post title in Studio and saves, when the visitor reloads `/news` after ~60 seconds, the new title appears.
- Given the admin opens a post's revision history in Studio and restores a prior version, the restored content renders on reload.
- Given page 2 of pagination when fewer than `pageSize` posts exist, the pagination renders correctly and does not throw.

### Full content migration
- Given each migrated section (Hero, Mission, DualFocus, About, Team, Testimonials, ImpactStats, ContactInfo, Footer), when content is edited in Studio, the corresponding rendered output changes after ~60 seconds.
- Given all singletons are seeded with current copy, the site renders **visually identical** to the hardcoded version across all routes on desktop and mobile (verified manually against each route listed in §4).
- Given `homePage` singleton is deleted from Sanity (accident), the site does not hard crash — it renders a safe fallback or empty state.

### Contact form
- Given a visitor submits the contact form with valid data, the submission is delivered to the org's inbox via Formspree. The success message appears and the form resets.
- Given Formspree returns an error (network failure, 4xx), the error message renders as it does today.
- Given the form is submitted with invalid data, Zod validation blocks submission before it reaches Formspree (unchanged behavior).

### Cleanup
- `npm run build` passes with zero errors.
- `npm run lint` passes with zero errors.
- `grep -r "strapi" src` (case-insensitive) returns no results.
- `grep -r "axios" src` returns no results.
- `@strapi/blocks-react-renderer` is absent from `package.json`.
- `VITE_STRAPI_URL` is absent from `.env.example`.

---

## 8. What We Explicitly Decided Against (and Why)

| Option | Why rejected |
|---|---|
| **Keep/finish Strapi** | Requires a hosted, maintained backend server — the exact burden the org wants to avoid. Costs money to host; was never actually running. |
| **Git-based CMS** (Decap, TinaCMS, Keystatic) | "Admin can undo themselves" would rely on GitHub commit/revert — not self-service for a non-technical user. Repo-stored binary images also conflict with the existing Cloudinary setup. |
| **Contentful** | Free tier's API-call/record caps are easy for a real org to hit; less generous than Sanity for this shape of use. |
| **Branch-workflow + Cloudflare deploy-hook rebuilds** | Adds a build-gated delay and a review step the org explicitly didn't want; unnecessary because the SPA fetches content at runtime. |
| **SSG/prerender for SEO** | Out of scope; the site is already a runtime-fetch SPA. Adding SSG would reintroduce a build-on-publish pipeline, contradicting the instant-self-service goal. |
| **Custom granular Sanity roles** | Paid tier; the standard Editor role already limits the admin to content only. |
| **Storing images in Sanity's own asset pipeline** | Cloudinary is already set up; reusing it avoids a second asset store and keeps existing image URLs/transforms. |
| **Resend for contact form + newsletter** | Resend requires a secret API key that cannot be exposed in the browser — a Cloudflare Pages Function is needed as a proxy. Formspree handles the contact form with zero server-side code. |
| **Mailchimp / Brevo for newsletter** | Newsletter is descoped. Was never functional (placeholder code). Revisit when the org is ready to send campaigns. |
| **Storing `icon` for ImpactStats in Sanity** | Icons are React component references (`FaUserMd`, etc.) — not a type a CMS can store. Admin does not need to change icons; only numbers and labels change. Icons stay hardcoded, mapped by order. |

---

## 9. Observability

### Who monitors what
The site has no error monitoring today. These are the minimum signals to establish at launch.

**Sanity API usage — check monthly**
Location: `sanity.io/manage` → project → Usage tab.
What to watch: API request count vs. free-tier limit (500K CDN-cached/month). If approaching the limit, switch to a paid plan before the org hits 0.

**Formspree delivery — verify at launch, spot-check weekly**
Location: Formspree dashboard → form → Submissions tab.
What to watch: each submission appears with timestamp and field values. Org inbox receives notification email per submission.
*At launch:* submit a test contact form and confirm (a) it appears in Formspree dashboard, and (b) the org's email inbox receives the notification. This is the acceptance test for the Formspree integration.

**Cloudflare Pages deploy status — configure before launch**
Location: Cloudflare Pages → project → Settings → Notifications.
Action: enable email notifications for failed deployments to the developer's email. A failed deploy on a code push is the primary build-failure signal.

**Client-side errors — no automated monitoring today**
If `useBlogPosts` throws in production, visitors see the error state in `NewsList.jsx` ("Error loading news posts. Please try again later."). There is no alerting. The developer only finds out if a user reports it.
*Acceptable for now* given the org's scale. If the site grows, add Cloudflare Web Analytics (free) or Sentry (free tier) in a follow-up.

**Content update propagation — admin expectation**
Document in the admin handoff guide: after saving in Studio, wait up to 60 seconds and hard-refresh (`Cmd+Shift+R`) to see changes. If changes don't appear after 2 minutes, contact the developer — this indicates a Sanity outage or misconfiguration, not a user error.

---

## Recommended Build Order

**Vertical slice first: news/blog.** It is the only content area already wired to the hook layer and the highest-frequency editing need.

1. Create Sanity project, deploy Studio, define all schemas, invite admin.
2. Wire `@sanity/client` + GROQ queries for `useBlogPosts`, `useBlogPostBySlug`, `useRelatedBlogPosts`, `useCategories`.
3. Rewrite `RichTextRenderer.jsx` for Portable Text.
4. Replace `submitContactForm` with Formspree. Verify delivery end-to-end.
5. Seed a test blog post in Studio. Confirm `/news` and `/news/:slug` render correctly.
6. Confirm admin can restore a prior version of the test post.
7. Expand to singletons and hardcoded components, one section at a time.
8. Seed all content from current live copy. Visual regression check across all routes.
9. Delete Strapi layer. Run cleanup criteria from §7.
