# JOOF Foundation Website - Implementation Plan

## Context

The John Oyediran Olabisi Foundation (JOOF) needs a modern, professional website to showcase their healthcare and education initiatives, share their impact stories, and enable community support. The website will serve as the primary digital presence for the foundation, featuring their programs, team, and mission while providing pathways for donations and engagement.

This implementation follows an MVP-first approach, prioritizing core pages and essential features to get a functional website live quickly, with plans to expand features iteratively (blog/CMS, advanced forms, etc.) in subsequent phases.

**Design Reference:** Chan Zuckerberg Initiative website (chanzuckerberg.com) - clean, modern, compassionate design with bold colors and strong visual hierarchy.

---

## Technical Stack

- **Frontend:** React 18 with Vite (fast development, optimized builds)
- **Styling:** Tailwind CSS (utility-first, rapid UI development)
- **Routing:** React Router v6 (nested routes for subpages)
- **State Management:** React Context + local state (sufficient for project scope)
- **Animations:** Framer Motion (hero animations, counters, transitions)
- **Carousel:** Swiper (testimonials, touch-enabled)
- **Forms:** React Hook Form + Zod (validation, performance)
- **CMS:** Strapi (local development initially)
- **API Layer:** Axios + React Query (data fetching, caching)
- **Icons:** React Icons
- **Map:** React Leaflet
- **Color Palette:** Teal (#14b8a6), Bright Yellow (#facc15), Gray shades, White

---

## Project Structure

```
joof-website/
├── public/
│   └── images/              # Static assets (logo, placeholder images)
├── src/
│   ├── api/
│   │   ├── client.js        # Axios instance with base config
│   │   └── services/        # API service modules
│   │       ├── team.service.js
│   │       ├── programs.service.js
│   │       └── contact.service.js
│   ├── assets/
│   │   └── images/          # Component-specific images
│   ├── components/
│   │   ├── common/          # Reusable UI components
│   │   │   ├── Button/
│   │   │   ├── Card/
│   │   │   ├── Input/
│   │   │   └── Section/
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Navigation.jsx
│   │   │   │   ├── MobileMenu.jsx
│   │   │   │   └── DropdownMenu.jsx
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── SocialLinks.jsx
│   │   │   └── Layout.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── MissionSection.jsx
│   │   │   ├── DualFocus.jsx
│   │   │   ├── ImpactStats.jsx
│   │   │   ├── TestimonialsCarousel.jsx
│   │   │   └── Newsletter.jsx
│   │   ├── about/
│   │   │   ├── TeamGrid.jsx
│   │   │   ├── TeamMemberCard.jsx
│   │   │   └── Timeline.jsx
│   │   ├── programs/
│   │   │   ├── ProgramCard.jsx
│   │   │   └── ProgramHero.jsx
│   │   └── contact/
│   │       ├── ContactForm.jsx
│   │       ├── ContactInfo.jsx
│   │       └── Map.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   ├── Team.jsx
│   │   │   └── OurStory.jsx
│   │   ├── Programs/
│   │   │   ├── Programs.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Healthcare.jsx
│   │   │   └── Community.jsx
│   │   ├── Donate.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   ├── useApi.js        # React Query wrapper hooks
│   │   ├── useCountUp.js    # Animated counter hook
│   │   └── useIntersectionObserver.js
│   ├── context/
│   │   └── AppContext.jsx   # Mobile menu state, etc.
│   ├── utils/
│   │   ├── validation.js    # Form validation schemas
│   │   ├── formatters.js    # Strapi image URL helpers
│   │   └── constants.js     # Color palette, URLs, etc.
│   ├── styles/
│   │   └── index.css        # Tailwind imports + global styles
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx           # Route configuration
├── .env.example
├── .env                     # VITE_STRAPI_URL=http://localhost:1337
├── tailwind.config.js       # Custom colors, fonts, animations
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## MVP Implementation Phases

### Phase 1: Foundation Setup (Week 1)

**Goal:** Project infrastructure and basic layout

#### Tasks

1. Initialize Vite React project:
   ```bash
   npm create vite@latest joof-website -- --template react
   ```

2. Install core dependencies:
   ```bash
   npm install react-router-dom tailwindcss autoprefixer postcss
   npm install framer-motion swiper axios @tanstack/react-query
   npm install react-hook-form zod react-icons clsx date-fns
   npm install react-leaflet leaflet
   npm install -D @tailwindcss/typography @tailwindcss/forms
   ```

3. Configure Tailwind CSS (tailwind.config.js) with JOOF color palette
4. Create folder structure as outlined above
5. Setup routing structure with React Router v6
6. Build Layout component with Header and Footer
7. Implement Navigation (desktop + mobile hamburger menu with dropdowns)
8. Create placeholder pages for all routes

#### Critical Files

- `vite.config.js` - Build configuration
- `tailwind.config.js` - Design system (colors: teal-500, yellow-400, gray shades)
- `src/routes.jsx` - Route definitions with nested routes
- `src/components/layout/Layout.jsx` - Main layout wrapper
- `src/components/layout/Header/Header.jsx` - Navigation bar
- `src/components/layout/Footer/Footer.jsx` - Footer with social links

#### Verification

- ✓ Run `npm run dev` - dev server starts successfully
- ✓ Navigate to all routes - placeholder pages render
- ✓ Responsive navigation works (hamburger menu on mobile)
- ✓ Header and footer visible on all pages

---

### Phase 2: Common Component Library (Week 2)

**Goal:** Build reusable UI components

#### Tasks

1. Create Button component (variants: primary, secondary, outline)
2. Create Card component (elevated, flat, bordered variants)
3. Create Input component with error display
4. Create Section wrapper component
5. Setup global Tailwind utility classes (btn-primary, card, section, etc.)
6. Implement DropdownMenu for navigation submenus
7. Complete MobileMenu with smooth animations (Framer Motion)
8. Build Footer with SocialLinks component

#### Critical Files

- `src/components/common/Button/Button.jsx`
- `src/components/common/Card/Card.jsx`
- `src/components/common/Input/Input.jsx`
- `src/components/layout/Header/DropdownMenu.jsx`
- `src/components/layout/Header/MobileMenu.jsx`
- `src/styles/index.css` - Custom Tailwind component classes

#### Verification

- ✓ All button variants render with correct colors
- ✓ Card component reusable across different contexts
- ✓ Dropdown menus work on hover (desktop) and click (mobile)
- ✓ Mobile menu slides in smoothly with animation

---

### Phase 3: Home Page - Core Sections (Week 3)

**Goal:** Build home page with key features

#### Tasks

**Hero Section:**
- Large background image area
- Headline: "FOR A BRIGHTER FUTURE"
- Subheadline/tagline
- CTA buttons (Discover More, Donate)
- Entrance animation with Framer Motion

**Mission Section:**
- Foundation mission statement
- Supporting visual/image

**Dual Focus Section:**
- Two-column layout (Healthcare | Education)
- Icons and descriptions
- Links to respective program pages

**Impact Stats:**
- Create `useCountUp` hook with Intersection Observer
- Animated counters: 1,651 medical care, 29 deliveries, 15 surgeries, 3 outreach
- Grid layout (2x2 or single row)
- Count-up animation triggers when scrolled into view

**Testimonials Carousel:**
- Integrate Swiper library
- Quote cards (Omoboye family testimonial)
- Auto-play with manual navigation
- Touch/swipe support
- Initially use static data, prepare for Strapi integration

**Newsletter Signup:**
- Email input with validation
- Submit button
- Success/error message display
- Prepare for Strapi submission (can store locally first)

#### Critical Files

- `src/pages/Home.jsx` - Main home page composition
- `src/components/home/Hero.jsx`
- `src/components/home/MissionSection.jsx`
- `src/components/home/DualFocus.jsx`
- `src/components/home/ImpactStats.jsx`
- `src/components/home/TestimonialsCarousel.jsx`
- `src/components/home/Newsletter.jsx`
- `src/hooks/useCountUp.js` - Counter animation logic
- `src/hooks/useIntersectionObserver.js` - Scroll-based triggers

#### Verification

- ✓ Home page fully responsive (mobile to desktop)
- ✓ Hero animation plays on load
- ✓ Impact counters animate when scrolled into view
- ✓ Carousel auto-plays and responds to swipe gestures
- ✓ Newsletter form validates email format

---

### Phase 4: About Pages (Week 4)

**Goal:** Complete About section with Team and Story

#### Tasks

**About Main Page:**
- Foundation history and overview
- Vision and mission statements
- Core values section
- Registered charity information

**Team Page:**
- TeamGrid component (responsive grid)
- TeamMemberCard with photo, name, role, short bio
- Initially use static data (array of team members in constants)
- Prepare data structure for eventual Strapi integration

**Our Story Page:**
- Timeline component with milestones
- Founder's vision (John Oyediran Olabisi)
- Key achievements over time
- Historical photos

#### Critical Files

- `src/pages/About/About.jsx`
- `src/pages/About/Team.jsx`
- `src/pages/About/OurStory.jsx`
- `src/components/about/TeamGrid.jsx`
- `src/components/about/TeamMemberCard.jsx`
- `src/components/about/Timeline.jsx`
- `src/utils/constants.js` - Static team member data

#### Verification

- ✓ All About subpages accessible via dropdown navigation
- ✓ Team grid responsive (1-2-3-4 columns)
- ✓ Timeline displays chronologically
- ✓ Content reads well on mobile

---

### Phase 5: Programs Pages (Week 5)

**Goal:** Showcase foundation programs

#### Tasks

**Programs Overview Page:**
- Grid of ProgramCard components (Healthcare, Education, Community)
- Each card: image, title, description, "Learn More" link
- Hover effects

**Healthcare Program Page:**
- ProgramHero with large header image
- Detailed program information
- Impact stats specific to healthcare (deliveries, surgeries, medical care)
- Photo gallery or grid

**Education Program Page:**
- Similar structure to Healthcare
- Education-specific content (scholarships, mentorship, learning resources)
- Success stories

**Community Program Page:**
- Community outreach details
- Local impact stories

#### Critical Files

- `src/pages/Programs/Programs.jsx`
- `src/pages/Programs/Healthcare.jsx`
- `src/pages/Programs/Education.jsx`
- `src/pages/Programs/Community.jsx`
- `src/components/programs/ProgramCard.jsx`
- `src/components/programs/ProgramHero.jsx`

#### Verification

- ✓ Programs overview displays all three programs
- ✓ Individual program pages have engaging layouts
- ✓ Images and content render properly
- ✓ Cards link correctly to detail pages

---

### Phase 6: Contact & Donate Pages (Week 6)

**Goal:** Enable user contact and donation information

#### Tasks

**Contact Page:**
- ContactForm with React Hook Form + Zod validation
- Fields: name, email, subject, message
- Validation (required fields, email format)
- Submit to Strapi (or log to console for MVP)
- Success/error states
- ContactInfo component: email (joofoundationhub@gmail.com), phone, address
- Social media links (Instagram, Facebook, YouTube, LinkedIn)
- Embedded map with React Leaflet showing office location

**Donate Page (Placeholder):**
- Compelling copy about foundation needs
- Bank details/donation instructions
- Impact statements ("$50 provides...", "$100 funds...", etc.)
- Prominent "Donate via Bank Transfer" section
- Note about future online payment integration

#### Critical Files

- `src/pages/Contact.jsx`
- `src/pages/Donate.jsx`
- `src/components/contact/ContactForm.jsx`
- `src/components/contact/ContactInfo.jsx`
- `src/components/contact/Map.jsx`
- `src/utils/validation.js` - Zod schemas for form validation

#### Verification

- ✓ Contact form validates inputs correctly
- ✓ Form submission works (console log or Strapi)
- ✓ Error messages display for invalid inputs
- ✓ Map displays with correct location marker
- ✓ Donate page has clear instructions for donations

---

### Phase 7: Strapi Basic Setup (Week 6-7)

**Goal:** Setup Strapi locally and integrate with frontend

#### Tasks

**Strapi Installation:**
```bash
npx create-strapi-app@latest joof-cms --quickstart
```

**Create Content Types:**
- Team Member (name, role, photo, bio, linkedin)
- Program (title, type enum, description, images, impact_stats)
- Testimonial (quote, author, photo, order)
- Impact Stat (number, label, icon, order)
- Contact Submission (name, email, subject, message, created_at)
- Newsletter Subscription (email, subscribed_at)

**Configure Permissions:**
- Public read access for: Team Members, Programs, Testimonials, Impact Stats
- Public create access for: Contact Submissions, Newsletter Subscriptions

**Populate Sample Content:**
- Add team members with photos
- Create three programs (Healthcare, Education, Community)
- Add testimonials (Omoboye family, etc.)
- Set impact stats (1651, 29, 15, 3)

**Frontend Integration:**
- Create API client (src/api/client.js) with axios
- Build service modules (team.service.js, programs.service.js, contact.service.js)
- Setup React Query in App.jsx
- Create custom hooks (useTeamMembers, usePrograms, useTestimonials, useImpactStats)
- Implement image URL helper (getStrapiImageUrl in formatters.js)
- Connect Team page to fetch from Strapi
- Connect Home page impact stats and testimonials to Strapi
- Connect Programs pages to Strapi

**Environment Variables:**
- Create .env file: `VITE_STRAPI_URL=http://localhost:1337`
- Add .env to .gitignore

#### Critical Files

- `src/api/client.js` - Axios instance with Strapi base URL
- `src/api/services/team.service.js` - Team member API calls
- `src/api/services/programs.service.js` - Programs API calls
- `src/api/services/contact.service.js` - Form submission API calls
- `src/hooks/useApi.js` - React Query wrapper hooks
- `src/utils/formatters.js` - getStrapiImageUrl helper
- `.env` - VITE_STRAPI_URL configuration

#### Verification

- ✓ Strapi admin accessible at http://localhost:1337/admin
- ✓ All content types created and populated
- ✓ API endpoints return data correctly
- ✓ Team page displays team members from Strapi with photos
- ✓ Home page impact stats pull from Strapi
- ✓ Testimonials carousel uses Strapi data
- ✓ Contact form submits to Strapi successfully

---

### Phase 8: Polish & Optimization (Week 7-8)

**Goal:** Refine, test, and optimize

#### Tasks

**Responsive Testing:**
- Test all pages on mobile (375px), tablet (768px), desktop (1280px+)
- Fix any layout issues
- Ensure images scale properly

**Performance:**
- Implement lazy loading for images (`loading="lazy"`)
- Code split routes with React.lazy
- Optimize bundle size
- Run Lighthouse audit (target 90+ performance score)

**Accessibility:**
- Keyboard navigation testing
- ARIA labels for icons and interactive elements
- Focus states on all interactive elements
- Color contrast check (WCAG AA compliance)
- Alt text for all images

**Cross-browser Testing:**
- Chrome, Firefox, Safari, Edge
- Mobile Safari and Chrome Mobile

**Animation Refinement:**
- Smooth transitions everywhere
- Respect prefers-reduced-motion media query
- Check animation performance on lower-end devices

**Content Review:**
- Proofread all static text
- Verify all links work
- Check email and social media links

**SEO Basics:**
- Meta tags for each page (title, description)
- Open Graph tags for social sharing
- Favicon

#### Verification

- ✓ Lighthouse score: Performance 90+, Accessibility 90+, Best Practices 90+, SEO 90+
- ✓ Works smoothly on all major browsers
- ✓ Mobile experience polished
- ✓ All forms functional
- ✓ No console errors

---

## Post-MVP Enhancements (Future Phases)

After MVP launch, consider these additions:

### Blog/News Section
- Blog listing page with pagination
- Individual blog post pages
- Rich text rendering
- Category filtering
- Strapi content type for blog posts

### Support Us Pages
- Volunteer page with volunteer form
- Partner page with partnership information
- Ways to support beyond donations

### Reports Section
- Annual reports page (About subpage)
- Downloadable PDF reports from Strapi

### Advanced Features
- Newsletter integration with email service (Mailchimp, SendGrid)
- Payment gateway integration for donations (Stripe)
- Search functionality
- Multi-language support

### Deployment
- Deploy frontend to Vercel/Netlify
- Deploy Strapi to production hosting
- Custom domain setup
- SSL certificates

---

## Critical Success Factors

1. **Mobile-First Design:** Design and test for mobile first, then enhance for desktop
2. **Performance:** Keep bundle size small, lazy load images, optimize animations
3. **Accessibility:** Semantic HTML, keyboard navigation, ARIA labels
4. **Content Management:** Make Strapi intuitive for non-technical users to update content
5. **Visual Impact:** Use high-quality images, bold colors (teal/yellow), and smooth animations to create emotional connection

---

## Reference Patterns from chanzuckerberg.com

- Large hero sections with compelling imagery
- Clean typography with ample whitespace
- Card-based layouts for programs/initiatives
- Testimonial/impact story highlighting
- Bold CTAs with clear color contrast
- Smooth scroll animations and transitions
- Mobile-optimized navigation
- Professional yet warm color scheme

---

## Dependencies Summary

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^10.16.16",
    "swiper": "^11.0.5",
    "axios": "^1.6.2",
    "@tanstack/react-query": "^5.13.0",
    "react-hook-form": "^7.49.2",
    "zod": "^3.22.4",
    "react-icons": "^4.12.0",
    "react-leaflet": "^4.2.1",
    "leaflet": "^1.9.4",
    "clsx": "^2.0.0",
    "date-fns": "^3.0.0"
  },
  "devDependencies": {
    "vite": "^5.0.8",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "@tailwindcss/typography": "^0.5.10",
    "@tailwindcss/forms": "^0.5.7"
  }
}
```

---

## Timeline Estimate

**MVP Completion:** 7-8 weeks (full-time development)

- Phase 1 (Foundation): 1 week
- Phase 2 (Components): 1 week
- Phase 3 (Home Page): 1 week
- Phase 4 (About Pages): 1 week
- Phase 5 (Programs): 1 week
- Phase 6 (Contact/Donate): 1 week
- Phase 7 (Strapi Integration): 1 week
- Phase 8 (Polish): 1 week

**Note:** Adjust timeline for part-time work or if additional help is available.
