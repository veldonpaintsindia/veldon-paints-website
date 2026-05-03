# Veldon Paints Website

A modern, production-ready Next.js 14 website for Veldon Paints - custom industrial paint solutions for manufacturing.

## Features

- **Next.js 14** with App Router and TypeScript
- **Responsive Design** - Mobile-first approach
- **Interactive Paint Brush Cursor** - Signature animated cursor with paint trail effects
- **Tailwind CSS** - Utility-first styling
- **Lucide React Icons** - Beautiful icon system
- **SEO Optimized** - Metadata, semantic HTML, structured data
- **Accessibility** - WCAG compliant, keyboard navigation, ARIA labels
- **Contact Form** - Integrated with Formspree for email submissions
- **Production Ready** - Optimized for Vercel deployment

## Pages

- **Home** (`/`) - Hero section with capabilities grid and partnership benefits
- **Capabilities** (`/capabilities`) - Detailed services and product offerings
- **About Us** (`/about`) - Company story, values, and milestones
- **Partnership** (`/partnership`) - Contact form and partnership inquiries

## Color Palette

- Primary Navy: `#1B2A4A`
- Accent Red: `#E63946`
- Accent Teal: `#06A77D`
- Accent Gold: `#C8922A`
- Cream: `#F8F5F0`
- Charcoal: `#2C2C2C`
- Light Gray: `#E8E8E8`

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Update NEXT_PUBLIC_FORMSPREE_ID with your Formspree form ID
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
veldon-paints-website/
├── app/
│   ├── layout.tsx              # Root layout with fonts and providers
│   ├── page.tsx                # Home page
│   ├── capabilities/
│   │   └── page.tsx            # Capabilities page
│   ├── about/
│   │   └── page.tsx            # About page
│   └── partnership/
│       └── page.tsx            # Partnership/Contact page
├── components/
│   ├── Navbar.tsx              # Navigation bar with mobile menu
│   ├── Footer.tsx              # Footer with company info
│   ├── PaintBrushCursor.tsx    # Interactive paint brush cursor
│   ├── HeroSection.tsx         # Home hero section
│   ├── CapabilitiesGrid.tsx    # Capabilities cards
│   ├── BenefitCards.tsx        # Partnership benefits
│   └── ContactForm.tsx         # Contact/Partnership form
├── styles/
│   └── globals.css             # Global styles and animations
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── postcss.config.mjs
```

## Key Features

### Interactive Paint Brush Cursor

The signature interactive element features:
- Custom SVG paint brush icon
- Colorful trail effect with 4-color rotation
- Smooth 60fps animation using requestAnimationFrame
- Paint stroke fade-out over 800-1200ms
- Works seamlessly across all pages
- Doesn't interfere with click events

### Contact Form

- Integrated with Formspree for email submission
- Fields: Name, Email, Phone, Company, Industry, Paint Type, Volume, Message
- Form validation and error handling
- Success/error message feedback
- 24-hour response SLA messaging

### Responsive Navigation

- Sticky navbar with gradient styling
- Mobile hamburger menu
- Quick navigation links
- "Get Started" CTA button

### Performance Optimizations

- Image optimization (next/image)
- Font subsetting from Google Fonts
- CSS minification via Tailwind
- Code splitting via Next.js
- 60fps animations with GPU acceleration

## Formspree Setup

1. Go to [formspree.io](https://formspree.io/)
2. Sign up and create a new form
3. Get your form ID (format: `f/xxxxxxxx`)
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=f/your_id_here
   ```

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The site can be deployed to any Node.js compatible platform:
- Netlify
- AWS Amplify
- Railway
- Render

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- WCAG 2.1 Level AA compliant
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratios meet standards
- Accessible form labels and error messages

## SEO

- Meta tags and Open Graph data
- Semantic HTML
- Mobile-friendly responsive design
- Fast page load times
- Structured data ready for implementation

## Development

### Code Quality

- TypeScript strict mode enabled
- ESLint configured
- Tailwind CSS for consistent styling
- Component-based architecture

### Styling Approach

- Tailwind CSS utility classes
- CSS custom properties for colors
- Mobile-first responsive design
- Smooth transitions and animations

## Environment Variables

See `.env.example` for available configuration options.

## Support & Maintenance

For updates and support, contact the development team or create an issue in the repository.

## License

© 2026 Veldon Paints (India). All rights reserved.
