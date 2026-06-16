# JOOF Foundation Website

Official website for the John Oyediran Olabisi Foundation (JOOF) - dedicated to improving healthcare and education access in underserved communities.

## 🚀 Quick Start

**New to the project?** Start here: [QUICKSTART.md](./QUICKSTART.md)

**Setting up Strapi?** Follow: [STRAPI_SETUP.md](./STRAPI_SETUP.md)

**Full implementation plan:** [plan.md](./plan.md)

## 📁 Project Structure

```
Joof/
├── joof-cms/                    # Strapi CMS Backend
│   ├── config/                  # Strapi configuration
│   ├── src/api/                 # API routes and controllers
│   └── public/                  # Uploaded media files
│
├── joof-website/                # React Frontend
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── api/                 # API client and services
│   │   │   ├── client.js        # Axios instance
│   │   │   └── services/        # Service modules
│   │   ├── components/          # React components
│   │   │   ├── common/          # Reusable UI components
│   │   │   ├── layout/          # Layout components
│   │   │   ├── home/            # Home page components
│   │   │   ├── about/           # About page components
│   │   │   ├── programs/        # Programs components
│   │   │   └── contact/         # Contact page components
│   │   ├── pages/               # Page components
│   │   ├── hooks/               # Custom React hooks
│   │   ├── utils/               # Utility functions
│   │   ├── context/             # React Context providers
│   │   └── styles/              # Global styles
│   └── .env                     # Environment variables
│
├── QUICKSTART.md                # Quick start guide
├── STRAPI_SETUP.md              # Detailed Strapi setup
├── plan.md                      # Full implementation plan
└── README.md                    # This file
```

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **State Management:** React Query + Context API
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Carousel:** Swiper
- **Maps:** React Leaflet

### Backend
- **CMS:** Strapi v5
- **Database:** SQLite (development)
- **API:** REST API

## 🚦 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. **Clone the repository** (if not already done)

2. **Setup Backend (Strapi):**
   ```bash
   cd joof-cms
   npm install
   npm run develop
   ```
   - Admin panel: `http://localhost:1337/admin`
   - Follow [STRAPI_SETUP.md](./STRAPI_SETUP.md) for content types and configuration

3. **Setup Frontend:**
   ```bash
   cd joof-website
   npm install
   npm run dev
   ```
   - Website: `http://localhost:5175`

## 📄 Available Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, mission, impact stats, testimonials |
| About | `/about` | Foundation overview and history |
| Team | `/about/team` | Team members (from Strapi) |
| Our Story | `/about/our-story` | Foundation timeline |
| Programs | `/programs` | All programs overview |
| Healthcare | `/programs/healthcare` | Healthcare initiatives |
| Education | `/programs/education` | Education programs |
| Community | `/programs/community` | Community outreach |
| Donate | `/donate` | Donation information and bank details |
| Contact | `/contact` | Contact form and location map |

## 🎨 Design System

### Colors
- **Primary (Teal):** `#14b8a6` (teal-500)
- **Secondary (Yellow):** `#facc15` (yellow-400)
- **Neutral:** Gray shades

### Components
- Button (primary, secondary, outline variants)
- Card (elevated, flat, bordered variants)
- Input (with validation and error states)
- Section wrapper

## 🔧 Development

### Frontend Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Strapi Commands
```bash
npm run develop  # Start in development mode
npm run start    # Start in production mode
npm run build    # Build admin panel
npm run deploy   # Deploy Strapi
```

## 📊 Phase Status

- ✅ Phase 1: Foundation Setup
- ✅ Phase 2: Common Component Library
- ✅ Phase 3: Home Page - Core Sections
- ✅ Phase 4: About Pages
- ✅ Phase 5: Programs Pages
- ✅ Phase 6: Contact & Donate Pages
- ✅ Phase 7: Strapi Basic Setup & Integration
- ⏳ Phase 8: Polish & Optimization (next)

## 🔌 API Integration

### Available Hooks (React Query)
- `useTeamMembers()` - Fetch all team members
- `usePrograms()` - Fetch all programs
- `useProgramsByType(type)` - Fetch programs by type
- `useTestimonials()` - Fetch testimonials
- `useImpactStats()` - Fetch impact statistics
- `useContactForm()` - Submit contact form
- `useNewsletterSubscription()` - Subscribe to newsletter

### Example Usage
```jsx
import { useTeamMembers } from '../hooks/useApi';

function TeamPage() {
  const { data, isLoading, error } = useTeamMembers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading team</div>;

  return (
    <div>
      {data?.map(member => (
        <TeamMemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
```

## 🌐 Environment Variables

Create a `.env` file in `joof-website/`:

```env
VITE_STRAPI_URL=http://localhost:1337
```

For production, update to your production Strapi URL.

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy the `dist` folder
3. Set environment variable: `VITE_STRAPI_URL=<production-strapi-url>`

### Backend (Strapi)
1. Choose hosting: Railway, Heroku, DigitalOcean, etc.
2. Configure production database (PostgreSQL recommended)
3. Set up file storage (AWS S3, Cloudinary)
4. Enable SSL/HTTPS

## 📝 Content Management

1. Access Strapi admin: `http://localhost:1337/admin`
2. Go to Content Manager
3. Add/edit/delete content:
   - Team Members
   - Programs
   - Testimonials
   - Impact Stats
4. Changes appear on frontend automatically (thanks to React Query caching)

## 🐛 Troubleshooting

See [STRAPI_SETUP.md](./STRAPI_SETUP.md#troubleshooting) for common issues and solutions.

## 📧 Contact

**JOOF Foundation**
- Email: joofoundationhub@gmail.com
- Website: [To be deployed]

## 📄 License

© 2026 John Oyediran Olabisi Foundation. All rights reserved.

---

**For a Brighter Future** 🌟
