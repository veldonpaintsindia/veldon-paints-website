// ============================================================
// HOME PAGE CONTENT
// Edit text, stats, capabilities cards, product lines here
// ============================================================

export const hero = {
  badge: 'Est. 1975 · Hyderabad, India',
  headline: ['Industrial Paint', 'Manufactured', 'for You'],
  highlightLine: 1, // which line gets the red accent colour (0-indexed)
  subtext:
    'We manufacture custom paint formulations in bulk — from 100 litres to 100+ tonnes — for India\'s leading steel fabricators, construction firms, and industrial manufacturers.',
  cta: {
    primary: { label: 'Request Custom Formulation', href: '/partnership' },
    secondary: { label: 'Our Capabilities', href: '/capabilities' },
  },
  stats: [
    { value: '35+', label: 'Years Manufacturing', color: 'text-gold-accent' },
    { value: '100T+', label: 'Per Order Capacity', color: 'text-teal-accent' },
    { value: 'B2B', label: 'Industrial Only', color: 'text-red-accent' },
    { value: '24h', label: 'Response Time', color: 'text-navy' },
  ],
};

export const whoWeAre = {
  sectionLabel: 'Who We Are',
  headline: "We don't sell retail paint.\nWe manufacture it — in bulk, to your specs.",
  body: 'Veldon Paints is a B2B industrial paint manufacturer based in Hyderabad, operating since 1975. We work exclusively with manufacturing companies, steel fabricators, and construction firms that need reliable bulk paint supply with consistent quality.',
};

export const capabilities = [
  {
    icon: 'FlaskConical',
    color: 'text-red-accent',
    border: 'border-red-accent',
    title: 'Custom Formulations',
    desc: 'We work directly with your engineering team to develop paint formulations that meet your exact specifications — viscosity, adhesion, weather resistance, and more.',
  },
  {
    icon: 'Factory',
    color: 'text-teal-accent',
    border: 'border-teal-accent',
    title: 'Bulk Manufacturing',
    desc: 'From 100 litres to 100+ tonnes per order. We scale to your production schedule with consistent quality across every batch.',
  },
  {
    icon: 'Shield',
    color: 'text-gold-accent',
    border: 'border-gold-accent',
    title: 'Quality Assurance',
    desc: 'Rigorous batch testing at every stage. Consistent colour, finish, and performance guaranteed across all deliveries.',
  },
  {
    icon: 'Truck',
    color: 'text-navy',
    border: 'border-navy',
    title: 'Reliable Supply',
    desc: 'On-time delivery with dedicated account support. We integrate into your supply chain as a long-term manufacturing partner.',
  },
];

export const productLines = [
  {
    name: 'White & Wall Paints',
    desc: 'Premium interior and exterior white paints including acrylic distemper and emulsion grades for construction and industrial use.',
    tag: 'High Volume',
    border: 'border-teal-accent',
    tagBg: 'bg-teal-accent',
  },
  {
    name: 'Protective Coatings',
    desc: 'Anti-corrosion, weatherproof, and chemical-resistant coatings for steel structures, machinery, and industrial equipment.',
    tag: 'Industrial Grade',
    border: 'border-red-accent',
    tagBg: 'bg-red-accent',
  },
  {
    name: 'Cement Primers',
    desc: 'Water-thinnable acrylic cement primers for interior and exterior surfaces. Excellent bonding and coverage.',
    tag: 'Construction',
    border: 'border-gold-accent',
    tagBg: 'bg-gold-accent',
  },
  {
    name: 'Wall Putty & Compounds',
    desc: 'Acrylic wall putty paste and polymer-based flexible jointing compounds for smooth, durable surface preparation.',
    tag: 'Surface Prep',
    border: 'border-navy',
    tagBg: 'bg-navy',
  },
  {
    name: 'Texture Finishes',
    desc: 'Decorative texture coatings (VEL-TEXURA) for premium interior and exterior architectural finishes.',
    tag: 'Specialty',
    border: 'border-teal-accent',
    tagBg: 'bg-teal-accent',
  },
  {
    name: 'Custom Formulations',
    desc: "Tell us your performance requirements — we'll engineer the formulation. Any colour, any finish, any specification.",
    tag: 'Bespoke',
    border: 'border-red-accent',
    tagBg: 'bg-red-accent',
  },
];

export const industriesServed = [
  'Steel Fabricators',
  'Construction Companies',
  'Automotive Manufacturers',
  'Heavy Equipment OEMs',
  'Industrial Manufacturers',
];

export const cta = {
  sectionLabel: 'Ready to Partner?',
  headline: 'Tell us your paint requirements.\nWe\'ll handle the rest.',
  body: 'Share your specifications — volume, finish, application, industry. Our technical team will reach out within 24 hours.',
  primary: { label: 'Request Partnership Discussion', href: '/partnership' },
  secondary: { label: 'View Capabilities', href: '/capabilities' },
};
