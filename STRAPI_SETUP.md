# Strapi CMS Setup Guide for JOOF Website

This guide will walk you through setting up Strapi CMS for the John Oyediran Olabisi Foundation (JOOF) website.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Starting Strapi](#starting-strapi)
3. [Initial Admin Setup](#initial-admin-setup)
4. [Creating Content Types](#creating-content-types)
5. [Configuring Permissions](#configuring-permissions)
6. [Adding Sample Content](#adding-sample-content)
7. [Testing the Integration](#testing-the-integration)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Strapi has been installed in the `backend` directory

## Starting Strapi

### First Time Setup

1. **Navigate to the Strapi directory:**
   ```bash
   cd backend
   ```

2. **Start Strapi in development mode:**
   ```bash
   npm run develop
   ```

   This will:
   - Build the admin panel
   - Start the Strapi server on `http://localhost:1337`
   - Open the admin panel in your browser automatically

3. **Server URLs:**
   - Admin Panel: `http://localhost:1337/admin`
   - API Base URL: `http://localhost:1337/api`

---

## Initial Admin Setup

When you first access the admin panel, you'll need to create an admin account:

1. **Fill in the registration form:**
   - First Name: Your first name
   - Last Name: Your last name
   - Email: Your email address (use a valid email)
   - Password: Strong password (min 8 characters)

2. **Click "Let's start"**

3. **You'll be redirected to the admin dashboard**

---

## Creating Content Types

You need to create the following content types. For each, follow these steps:

### 1. Team Members

**Path:** Content-Type Builder → Create new collection type

**Name:** `team-member` (API ID: `team-member`)

**Fields:**

| Field Name | Type | Required | Additional Options |
|------------|------|----------|-------------------|
| name | Text (Short) | Yes | - |
| role | Text (Short) | Yes | - |
| bio | Text (Long) | No | - |
| linkedin | Text (Short) | No | - |
| photo | Media (Single) | No | Allowed types: Images only |
| order | Number (Integer) | No | Default: 0 |

### 2. Programs

**Name:** `program` (API ID: `program`)

**Fields:**

| Field Name | Type | Required | Additional Options |
|------------|------|----------|-------------------|
| title | Text (Short) | Yes | - |
| type | Enumeration | Yes | Values: `healthcare`, `education`, `community` |
| description | Rich Text | Yes | - |
| shortDescription | Text (Long) | No | Max length: 200 |
| images | Media (Multiple) | No | Allowed types: Images only |
| impactStats | JSON | No | For custom stats data |
| order | Number (Integer) | No | Default: 0 |

### 3. Testimonials

**Name:** `testimonial` (API ID: `testimonial`)

**Fields:**

| Field Name | Type | Required | Additional Options |
|------------|------|----------|-------------------|
| quote | Text (Long) | Yes | - |
| author | Text (Short) | Yes | - |
| location | Text (Short) | No | - |
| photo | Media (Single) | No | Allowed types: Images only |
| order | Number (Integer) | No | Default: 0 |

### 4. Impact Stats

**Name:** `impact-stat` (API ID: `impact-stat`)

**Fields:**

| Field Name | Type | Required | Additional Options |
|------------|------|----------|-------------------|
| number | Number (Integer) | Yes | - |
| label | Text (Short) | Yes | - |
| icon | Text (Short) | No | Icon name from React Icons |
| description | Text (Long) | No | - |
| order | Number (Integer) | No | Default: 0 |

### 5. Contact Submissions

**Name:** `contact-submission` (API ID: `contact-submission`)

**Fields:**

| Field Name | Type | Required | Additional Options |
|------------|------|----------|-------------------|
| name | Text (Short) | Yes | - |
| email | Email | Yes | - |
| subject | Text (Short) | Yes | - |
| message | Text (Long) | Yes | - |

### 6. Newsletter Subscriptions

**Name:** `newsletter-subscription` (API ID: `newsletter-subscription`)

**Fields:**

| Field Name | Type | Required | Additional Options |
|------------|------|----------|-------------------|
| email | Email | Yes | Unique: true |

**Important:** After creating each content type, click **"Save"** button in the top right.

---

## Configuring Permissions

After creating all content types, you need to configure API permissions:

### Public Access Configuration

1. **Go to:** Settings → Users & Permissions plugin → Roles → Public

2. **Configure permissions for each content type:**

   **Team Members:**
   - ✅ find (get all)
   - ✅ findOne (get single)

   **Programs:**
   - ✅ find (get all)
   - ✅ findOne (get single)

   **Testimonials:**
   - ✅ find (get all)
   - ✅ findOne (get single)

   **Impact Stats:**
   - ✅ find (get all)
   - ✅ findOne (get single)

   **Contact Submissions:**
   - ✅ create (allow form submissions)

   **Newsletter Subscriptions:**
   - ✅ create (allow subscriptions)

3. **Click "Save"** at the top right

---

## Adding Sample Content

Now populate your Strapi with sample content:

### Team Members

1. Go to Content Manager → Team Member → Create new entry

**Example Entry:**
```
Name: Dr. John Oyediran Olabisi
Role: Founder & Executive Director
Bio: Dr. John Oyediran Olabisi is the visionary founder of JOOF Foundation, dedicated to improving healthcare and education access in underserved communities.
LinkedIn: https://linkedin.com/in/example
Photo: [Upload a team photo]
Order: 1
```

Add 3-5 team members.

### Programs

1. Go to Content Manager → Program → Create new entry

**Healthcare Program:**
```
Title: Healthcare Initiative
Type: healthcare
Description: Providing essential medical care, safe deliveries, and surgical procedures to communities in need.
Short Description: Essential medical care for underserved communities
Images: [Upload 2-3 relevant images]
Order: 1
```

**Education Program:**
```
Title: Education Empowerment
Type: education
Description: Supporting students through scholarships, learning materials, and mentorship programs.
Short Description: Empowering students through education support
Images: [Upload 2-3 relevant images]
Order: 2
```

**Community Program:**
```
Title: Community Outreach
Type: community
Description: Strengthening communities through outreach programs and local partnerships.
Short Description: Building stronger, healthier communities
Images: [Upload 2-3 relevant images]
Order: 3
```

### Testimonials

**Example:**
```
Quote: "The JOOF Foundation supported our family during a difficult time. The medical care provided was exceptional, and we are forever grateful for their compassion and dedication."
Author: Omoboye Family
Location: Lagos, Nigeria
Photo: [Upload a photo if available]
Order: 1
```

Add 2-3 testimonials.

### Impact Stats

Add these four key statistics:

```
1. Number: 1651, Label: "Medical Care Provided", Icon: "FaHeartbeat", Order: 1
2. Number: 29, Label: "Safe Deliveries", Icon: "FaBaby", Order: 2
3. Number: 15, Label: "Surgical Procedures", Icon: "FaHospital", Order: 3
4. Number: 3, Label: "Community Outreach", Icon: "FaUsers", Order: 4
```

---

## Testing the Integration

### 1. Verify Strapi is Running

Make sure Strapi is running on `http://localhost:1337`

### 2. Start the Frontend

In a new terminal:

```bash
cd joof-website
npm run dev
```

The frontend should start on `http://localhost:5175` (or similar)

### 3. Test API Endpoints

Open your browser console and test these URLs:

- Team Members: `http://localhost:1337/api/team-members?populate=*`
- Programs: `http://localhost:1337/api/programs?populate=*`
- Testimonials: `http://localhost:1337/api/testimonials?populate=*`
- Impact Stats: `http://localhost:1337/api/impact-stats`

You should see JSON responses with your data.

### 4. Test Frontend Pages

Navigate to these pages and verify data is loading:

- `/about/team` - Should show team members from Strapi
- `/` - Home page should show impact stats and testimonials
- `/programs` - Should show programs from Strapi
- `/contact` - Test the contact form submission

### 5. Test Contact Form

1. Go to `/contact`
2. Fill out the contact form
3. Submit the form
4. Check Strapi admin panel → Contact Submissions
5. You should see the new submission

---

## Environment Variables

The frontend connects to Strapi using environment variables:

**File:** `frontend/.env`

```env
VITE_STRAPI_URL=http://localhost:1337
```

For production deployment, change this to your production Strapi URL.

---

## Troubleshooting

### Issue: Cannot connect to Strapi

**Solution:**
- Verify Strapi is running: `cd backend && npm run develop`
- Check console for error messages
- Verify `.env` file has correct `VITE_STRAPI_URL`
- Restart the frontend dev server after changing `.env`

### Issue: 403 Forbidden errors

**Solution:**
- Check permissions in Strapi admin: Settings → Roles → Public
- Ensure the correct endpoints are enabled for public access

### Issue: Images not displaying

**Solution:**
- Make sure images are uploaded in Strapi
- Check that `populate=*` or `populate=photo` is in the API call
- Verify the `getStrapiImageUrl` helper is being used in components

### Issue: Data not appearing on frontend

**Solution:**
- Open browser console and check for errors
- Verify React Query is fetching data (check Network tab)
- Check that content is published in Strapi (not just draft)
- Ensure the API response format matches what the frontend expects

### Issue: CORS errors

**Solution:**
Strapi should be configured for CORS by default in development. If you see CORS issues:

1. Go to `backend/config/middlewares.js`
2. Ensure the `strapi::cors` middleware is enabled
3. Restart Strapi

---

## Next Steps

After completing the setup:

1. ✅ Verify all content types are created
2. ✅ Configure permissions correctly
3. ✅ Add sample content
4. ✅ Test frontend integration
5. 🔄 Replace placeholder content with real content
6. 🔄 Add actual team photos and program images
7. 🔄 Update bank details on donate page
8. 🔄 Plan for production deployment

---

## Production Deployment Notes

When deploying to production:

1. **Strapi:**
   - Deploy Strapi to a hosting service (Heroku, DigitalOcean, Railway, etc.)
   - Configure production database (PostgreSQL recommended)
   - Set up file storage (AWS S3, Cloudinary, etc.)
   - Enable SSL/HTTPS

2. **Frontend:**
   - Update `VITE_STRAPI_URL` to production Strapi URL
   - Build the frontend: `npm run build`
   - Deploy to Vercel, Netlify, or similar

3. **Security:**
   - Change default admin password
   - Enable rate limiting
   - Configure production environment variables
   - Set up regular backups

---

## Support

For questions or issues:
- Email: joofoundationhub@gmail.com
- Check Strapi documentation: https://docs.strapi.io

---

**Last Updated:** February 2026
**Version:** 1.0
