# Deployment Guide

## Prerequisites

- Node.js 18 or higher
- Git repository (optional but recommended)
- Formspree account for contact form handling

## Local Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your Formspree ID to .env.local
NEXT_PUBLIC_FORMSPREE_ID=f/your_form_id

# Run development server
npm run dev
```

## Build for Production

```bash
# Create production build
npm run build

# Start production server locally
npm start
```

## Vercel Deployment (Recommended)

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Set production environment variables
vercel env add NEXT_PUBLIC_FORMSPREE_ID
# Enter your Formspree ID when prompted

# Deploy to production
vercel --prod
```

### Option 2: Using Git Integration

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your Git repository
5. Configure environment variables in project settings
6. Click "Deploy"

### Vercel Environment Variables

Add these in Vercel dashboard under Project Settings → Environment Variables:

```
NEXT_PUBLIC_FORMSPREE_ID = your_formspree_id_here
```

## Other Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=.next
```

Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = ".next"

[functions]
  node_bundler = "esbuild"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Railway

1. Connect your Git repository to Railway
2. Select Node.js runtime
3. Add environment variables in Railway dashboard
4. Deploy

### AWS Amplify

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize
amplify init

# Deploy
amplify publish
```

### Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t veldon-paints .
docker run -p 3000:3000 -e NEXT_PUBLIC_FORMSPREE_ID=your_id veldon-paints
```

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Contact form Formspree ID added
- [ ] Test contact form submission
- [ ] Verify responsive design on mobile
- [ ] Check accessibility with WAVE or axe DevTools
- [ ] Test all navigation links
- [ ] Verify meta tags in head
- [ ] Test paint brush cursor animation
- [ ] Check page load performance
- [ ] Verify 404 page handling

## Post-Deployment Verification

1. **Test Contact Form**
   - Fill and submit contact form
   - Verify email received at veldonpaintsindia@gmail.com

2. **Check Performance**
   - Run Lighthouse audit
   - Verify Core Web Vitals
   - Check bundle size

3. **Mobile Testing**
   - Test on iPhone/Android
   - Verify touch interactions
   - Check hamburger menu

4. **SEO Verification**
   - Check meta tags
   - Verify OpenGraph tags
   - Test social sharing

## Monitoring

### Vercel Analytics
- Automatically enabled on Vercel
- Monitor Core Web Vitals
- Track analytics and performance

### Error Tracking
Consider adding Sentry for production error monitoring:

```bash
npm install @sentry/nextjs
```

Add to `next.config.ts`:
```typescript
import { withSentry } from "@sentry/nextjs";

const nextConfig = { /* ... */ };

export default withSentry(nextConfig);
```

## Domain Configuration

### Point domain to deployment

**For Vercel:**
1. Go to Vercel project settings
2. Navigate to Domains
3. Add your custom domain
4. Follow DNS configuration instructions

**For other providers:**
- Contact your hosting provider's support
- Point domain nameservers or DNS records to deployment service

### SSL/TLS Certificate

- Vercel: Automatic (Let's Encrypt)
- Netlify: Automatic
- Others: Check provider docs

## Environment Variables

Required for production:
```
NEXT_PUBLIC_FORMSPREE_ID=f/your_formspree_form_id
```

Optional:
```
NEXT_PUBLIC_CONTACT_EMAIL=veldonpaintsindia@gmail.com
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Continuous Deployment

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          production: true
```

## Rollback

### Vercel
1. Go to Deployments
2. Click on previous deployment
3. Click "Promote to Production"

## Support

For deployment issues:
- Check build logs in your deployment dashboard
- Verify all environment variables are set
- Ensure Node.js version compatibility
- Review .gitignore to avoid committing sensitive files

## Performance Tips

1. **Image Optimization**
   - Use next/image component
   - Optimize image sizes
   - Consider WebP format

2. **Code Splitting**
   - Next.js automatic route-based splitting
   - Dynamic imports for heavy components

3. **Caching**
   - Set appropriate cache headers
   - Use incremental static regeneration

4. **Analytics**
   - Monitor Core Web Vitals
   - Track user interactions
   - Identify performance bottlenecks

## Maintenance

- Keep dependencies updated: `npm update`
- Monitor security advisories: `npm audit`
- Review deployment logs regularly
- Test form submissions monthly
- Update content as needed
