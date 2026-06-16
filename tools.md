Strapi: Render Free
Database: Supabase Free (500MB, no 90-day expiration)
Frontend: Cloudflare Pages Free
Cron Job: https://cron-job.org/en/
Cost: $0/month


CronJob
// cron-job.org (free)
URL: https://your-strapi.onrender.com/api/health
Schedule: */14 * * * * (every 14 minutes)
```
Cronitor/Github Actions to keep alive
Email - make use of Resend | Brevo

I want to be able to spin off the backend and apply the tools above to it



Resend

## **Complete Resend Setup Guide**

### **Step 1: Sign Up**
```
1. Go to resend.com
2. Sign up with GitHub or email
3. Verify your email
4. No credit card required!
```

### **Step 2: Add Domain (Optional for Production)**

**For Testing:**
- Use Resend's test domain: `onboarding@resend.dev`
- Works immediately, no setup

**For Production:**
- Add your domain
- Add DNS records (SPF, DKIM)
- Verify (takes 5-10 minutes)

### **Step 3: Get API Key**
```
1. Dashboard → API Keys
2. Create API Key
3. Copy it (shown once only)
4. Add to .env file

# Install the provider
npm install @strapi/provider-email-resend

NEED TO RUN THESE NEXT
Would you like me to:

✅ Update the other pages to use Strapi data?

Programs pages
Home page (impact stats & testimonials)
📚 Help you add more content to Strapi?

More team members
Programs (healthcare, education, community)
Impact statistics
Testimonials



Using webhook
3. Webhook-Based Auto-Invalidation (Recommended for Production)
Set up a Strapi webhook to notify your app when team data changes:

In Strapi Admin → Settings → Webhooks → Create:

URL: https://yoursite.com/api/webhook/invalidate
Events: entry.create, entry.update, entry.delete for team-members
Frontend Implementation (would need to add):


// In About.jsx or App.jsx
useEffect(() => {
  // Listen for server-sent events or WebSocket
  const eventSource = new EventSource('/api/invalidation-stream');
  
  eventSource.addEventListener('team-updated', () => {
    queryClient.invalidateQueries(queryKeys.teamMembers.all);
  });

  return () => eventSource.close();
}, [queryClient]);