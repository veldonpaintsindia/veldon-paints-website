# Quick Start Guide

## 5-Minute Setup

### 1. Install Dependencies
```bash
cd "/Users/nikhil/Desktop/Veldon Paints/veldon-paints-website"
npm install
```

### 2. Set Up Environment
```bash
cp .env.example .env.local
```

### 3. Get Formspree ID (for contact form)
1. Go to https://formspree.io
2. Sign up (free)
3. Create new form
4. Copy your form ID (looks like: `f/abc123def`)
5. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=f/your_id_here
   ```

### 4. Start Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure at a Glance

```
Components:
- Navbar: Navigation with mobile menu
- Footer: Company info and links
- PaintBrushCursor: Interactive animated cursor (the signature feature!)
- ContactForm: Partnership inquiry form
- HeroSection, CapabilitiesGrid, BenefitCards: Home page sections

Pages:
- / (Home)
- /capabilities
- /about
- /partnership (Contact form)

Config:
- tailwind.config.ts: Colors, spacing, animations
- tsconfig.json: TypeScript settings
- package.json: Dependencies
```

## Key Features Ready to Use

### 1. Paint Brush Cursor
The interactive paint brush cursor is already enabled globally. It:
- Follows your mouse
- Creates a colorful paint trail
- Fades out like wet paint drying
- Works on all pages

No additional setup needed!

### 2. Responsive Navigation
- Mobile hamburger menu (tested)
- Desktop nav bar with smooth transitions
- Logo branding
- "Get Started" CTA button

### 3. Contact Form
- Integrated with Formspree
- Validates required fields
- Shows success/error messages
- Sends emails to veldonpaintsindia@gmail.com

### 4. Color System
All brand colors configured in Tailwind:
- `navy` - Primary color
- `red-accent` - Call to action
- `teal-accent` - Secondary accent
- `gold-accent` - Highlights
- `cream` - Text/backgrounds

Use in components: `className="text-navy bg-gold-accent"`

## Making Changes

### Edit Content
- Home page: `app/page.tsx`
- Capabilities: `app/capabilities/page.tsx`
- About: `app/about/page.tsx`
- Partnership form: `app/partnership/page.tsx`

### Edit Components
- Navbar: `components/Navbar.tsx`
- Footer: `components/Footer.tsx`
- Form: `components/ContactForm.tsx`

### Edit Styling
- Global styles: `styles/globals.css`
- Tailwind config: `tailwind.config.ts`
- Colors defined in Tailwind config

### Edit Navigation Links
In `components/Navbar.tsx`:
```tsx
const navLinks = [
  { href: '/', label: 'Home' },
  // Add more links here
];
```

## Common Tasks

### Change Contact Email
Update in multiple places:
1. `components/Footer.tsx` - Footer email link
2. `app/partnership/page.tsx` - Partnership page contact
3. `.env.local` - If you add the env var

### Add a New Page
1. Create folder: `app/newpage/`
2. Create file: `app/newpage/page.tsx`
3. Add content and imports
4. Add to nav in `components/Navbar.tsx`

### Change Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  navy: '#1B2A4A',
  'red-accent': '#E63946',
  // etc.
}
```

### Customize Form Fields
Edit `components/ContactForm.tsx`:
- INDUSTRIES array
- PAINT_TYPES array
- VOLUMES array
- Form field structure

### Change Company Info
- Email: Search `veldonpaintsindia@gmail.com` in components
- Address: Update in `components/Footer.tsx` and `app/partnership/page.tsx`
- Phone: Add to relevant components
- Social links: Add to Footer

## Testing Locally

### Test Contact Form
1. Fill out form at http://localhost:3000/partnership
2. Check your Formspree dashboard for submission
3. Verify email if Formspree sends it

### Test Mobile View
```bash
# In browser DevTools: Press Ctrl+Shift+M (Windows) or Cmd+Shift+M (Mac)
# Or resize browser window
```

### Test Cursor Animation
- Move mouse around any page
- You should see colorful paint strokes following your cursor
- Strokes fade out gradually

### Test Navigation
- Click all nav links - they should work
- Test hamburger menu on mobile view
- Test "Get Started" buttons

## Before Going Live

### Checklist
- [ ] Formspree ID added to `.env.local`
- [ ] Contact form tested (send test submission)
- [ ] Company email addresses verified
- [ ] All internal links work (try all nav items)
- [ ] Mobile view looks good
- [ ] Paint cursor animates smoothly
- [ ] Tried on actual mobile device if possible

### Build for Production
```bash
npm run build
npm start
```

Then test at http://localhost:3000

## Deployment (Choose One)

### Option 1: Vercel (Easiest)
```bash
npm install -g vercel
vercel
# Follow prompts
# Add NEXT_PUBLIC_FORMSPREE_ID when asked for env vars
```

### Option 2: Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### Option 3: Other Platforms
See `DEPLOYMENT.md` for Docker, AWS, Railway, etc.

## Troubleshooting

### "Cannot find module" error
```bash
rm -rf node_modules
npm install
```

### Form not sending emails
1. Check Formspree form ID in `.env.local`
2. Verify form ID format: `f/xxxxxxxx`
3. Check Formspree dashboard for submissions
4. Test at https://formspree.io directly

### Styles not applying
1. Check Tailwind class names are correct
2. Verify `styles/globals.css` is imported in `app/layout.tsx`
3. Run `npm run build` to check for errors

### Cursor not animating
1. Check browser console for errors
2. Ensure JavaScript is enabled
3. Try different browser
4. Check `components/PaintBrushCursor.tsx` for issues

### Mobile menu not working
1. Check browser console for errors
2. Test in different browser
3. Clear browser cache
4. Check `components/Navbar.tsx` state management

## Next Steps

1. **Customize colors**: Update `tailwind.config.ts` to match any brand updates
2. **Add more content**: Create additional pages in `app/` folder
3. **Optimize images**: Add real images in `public/` folder
4. **Set up analytics**: Add Google Analytics ID to `.env.local`
5. **Configure domain**: Point your domain to deployment service
6. **Monitor performance**: Set up error tracking and analytics

## Support

- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Formspree docs: https://formspree.io/docs
- Lucide icons: https://lucide.dev

## Getting Help

If something isn't working:
1. Check the browser console (F12 → Console tab)
2. Check terminal for build errors
3. Review the README.md for detailed info
4. See DEPLOYMENT.md for deployment-specific help
