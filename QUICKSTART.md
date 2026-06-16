# JOOF Website - Quick Start Guide

Get the JOOF Foundation website running in minutes!

> [!TIP]
> **Monorepo Workspace usage:**
> Since this project is structured as a monorepo, you can run both the frontend and backend concurrently from the root directory:
> ```bash
> npm run dev
> ```
> Alternatively, you can run `npm run dev:frontend` or `npm run dev:backend` from the root, or use the traditional directory-specific commands listed below.

## Prerequisites

- Node.js 18+ installed
- Two terminal windows

## Step 1: Start Strapi CMS (Terminal 1)

```bash
cd backend
npm run develop
```

- Opens at: `http://localhost:1337/admin`
- **First time?** Create an admin account when prompted
- Wait for "Server started" message

## Step 2: Configure Strapi (First Time Only)

1. **Access admin panel:** `http://localhost:1337/admin`
2. **Create content types** (see [STRAPI_SETUP.md](./STRAPI_SETUP.md) for detailed instructions):
   - Team Member
   - Program
   - Testimonial
   - Impact Stat
   - Contact Submission
   - Newsletter Subscription

3. **Set permissions:**
   - Settings → Users & Permissions → Roles → Public
   - Enable `find` and `findOne` for: Team Members, Programs, Testimonials, Impact Stats
   - Enable `create` for: Contact Submissions, Newsletter Subscriptions
   - Click **Save**

4. **Add sample content** (at minimum):
   - 2-3 Team Members
   - 3 Programs (healthcare, education, community)
   - 1-2 Testimonials
   - 4 Impact Stats

## Step 3: Start Frontend (Terminal 2)

```bash
cd frontend
npm run dev
```

Opens at: `http://localhost:5175/` (or similar)

## Step 4: Test

Visit these pages:
- ✅ Home: `http://localhost:5175/`
- ✅ Team: `http://localhost:5175/about/team`
- ✅ Programs: `http://localhost:5175/programs`
- ✅ Contact: `http://localhost:5175/contact`
- ✅ Donate: `http://localhost:5175/donate`

## Common Issues

### "Cannot connect to Strapi"
- Make sure Strapi is running in terminal 1
- Check that both servers are on different ports
- Restart frontend after starting Strapi

### "No data showing"
- Add content in Strapi admin panel
- Check that permissions are set correctly
- Verify content is published (not draft)

### "403 Forbidden"
- Go to Strapi Settings → Roles → Public
- Enable correct permissions
- Click Save

## Project Structure

```
Joof/
├── backend/               # Strapi CMS backend (formerly joof-cms)
│   └── Run: npm run develop
│
├── frontend/              # React frontend (formerly joof-website)
│   └── Run: npm run dev
│
├── STRAPI_SETUP.md        # Detailed Strapi setup
└── QUICKSTART.md          # This file
```

## Key URLs

| Service | Development URL |
|---------|----------------|
| Frontend | http://localhost:5175 |
| Strapi Admin | http://localhost:1337/admin |
| Strapi API | http://localhost:1337/api |

## Next Steps

1. Follow [STRAPI_SETUP.md](./STRAPI_SETUP.md) for complete content type configuration
2. Add real content, images, and team information
3. Update bank details on the donate page
4. Replace placeholder text with actual foundation information
5. Test contact form and newsletter subscription

## Need Help?

- 📖 Full Setup Guide: [STRAPI_SETUP.md](./STRAPI_SETUP.md)
- 📋 Implementation Plan: [plan.md](./plan.md)
- 📧 Contact: joofoundationhub@gmail.com

---

**Happy Building! 🚀**
