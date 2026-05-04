import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import Link from 'next/link';
import { ArrowRight, FlaskConical, Shield, Truck, Factory, Paintbrush } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Veldon Paints — Industrial Paint Manufacturer, Hyderabad',
  description:
    'Custom industrial paint formulations in bulk for steel fabricators, construction firms, and manufacturers across India. B2B paint manufacturer since 1975, Hyderabad.',
};

const capabilities = [
  {
    icon: FlaskConical,
    color: 'text-red-accent',
    bg: 'bg-red-50',
    border: 'border-red-accent',
    title: 'Custom Formulations',
    desc: 'We work directly with your engineering team to develop paint formulations that meet your exact specifications — viscosity, adhesion, weather resistance, and more.',
  },
  {
    icon: Factory,
    color: 'text-teal-accent',
    bg: 'bg-teal-50',
    border: 'border-teal-accent',
    title: 'Bulk Manufacturing',
    desc: 'From 100 litres to 100+ tonnes per order. We scale to your production schedule with consistent quality across every batch.',
  },
  {
    icon: Shield,
    color: 'text-gold-accent',
    bg: 'bg-amber-50',
    border: 'border-gold-accent',
    title: 'Quality Assurance',
    desc: 'Rigorous batch testing at every stage. Consistent colour, finish, and performance guaranteed across all deliveries.',
  },
  {
    icon: Truck,
    color: 'text-navy',
    bg: 'bg-blue-50',
    border: 'border-navy',
    title: 'Reliable Supply',
    desc: 'On-time delivery with dedicated account support. We integrate into your supply chain as a long-term manufacturing partner.',
  },
];

const productLines = [
  {
    name: 'White & Wall Paints',
    desc: 'Premium interior and exterior white paints including acrylic distemper and emulsion grades for construction and industrial use.',
    tag: 'High Volume',
    color: 'border-teal-accent',
    tagColor: 'bg-teal-accent',
  },
  {
    name: 'Protective Coatings',
    desc: 'Anti-corrosion, weatherproof, and chemical-resistant coatings for steel structures, machinery, and industrial equipment.',
    tag: 'Industrial Grade',
    color: 'border-red-accent',
    tagColor: 'bg-red-accent',
  },
  {
    name: 'Cement Primers',
    desc: 'Water-thinnable acrylic cement primers for interior and exterior surfaces. Excellent bonding and coverage.',
    tag: 'Construction',
    color: 'border-gold-accent',
    tagColor: 'bg-gold-accent',
  },
  {
    name: 'Wall Putty & Compounds',
    desc: 'Acrylic wall putty paste and polymer-based flexible jointing compounds for smooth, durable surface preparation.',
    tag: 'Surface Prep',
    color: 'border-navy',
    tagColor: 'bg-navy',
  },
  {
    name: 'Texture Finishes',
    desc: 'Decorative texture coatings (VEL-TEXURA) for premium interior and exterior architectural finishes.',
    tag: 'Specialty',
    color: 'border-teal-accent',
    tagColor: 'bg-teal-accent',
  },
  {
    name: 'Custom Formulations',
    desc: "Tell us your performance requirements — we'll engineer the formulation. Any colour, any finish, any specification.",
    tag: 'Bespoke',
    color: 'border-red-accent',
    tagColor: 'bg-red-accent',
  },
];

const clients = ['Steel Fabricators', 'Construction Companies', 'Automotive Manufacturers', 'Heavy Equipment OEMs', 'Industrial Manufacturers'];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* What We Do */}
      <section className="py-24 bg-navy text-white">
        <div className="container-custom max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-gold-accent font-semibold uppercase tracking-widest text-sm mb-4">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              We don't sell retail paint.<br />We manufacture it — in bulk, to your specs.
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Veldon Paints is a B2B industrial paint manufacturer based in Hyderabad, operating since 1975. We work exclusively with manufacturing companies, steel fabricators, and construction firms that need reliable bulk paint supply with consistent quality.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className={`bg-white bg-opacity-5 border-l-4 ${c.border} rounded-xl p-6 hover:bg-opacity-10 transition-all duration-300`}
                >
                  <div className={`${c.bg} bg-opacity-10 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className={c.color} size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Lines */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <p className="text-red-accent font-semibold uppercase tracking-widest text-sm mb-4">What We Manufacture</p>
              <h2 className="text-4xl md:text-5xl font-bold text-navy leading-tight">
                Our Product Lines
              </h2>
              <p className="text-gray-500 mt-4 text-lg max-w-xl">
                We manufacture a full range of industrial and construction paints. All products available in bulk. All formulations customisable.
              </p>
            </div>
            <Link
              href="/capabilities"
              className="flex items-center gap-2 text-navy font-bold hover:text-red-accent transition-colors whitespace-nowrap"
            >
              View Full Capabilities <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productLines.map((p) => (
              <div
                key={p.name}
                className={`bg-white border-l-4 ${p.color} rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-3">
                  <Paintbrush className="text-gray-400" size={20} />
                  <span className={`${p.tagColor} text-white text-xs font-bold px-2 py-1 rounded-full`}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <Link
                  href="/partnership"
                  className="text-sm font-semibold text-navy hover:text-red-accent transition-colors flex items-center gap-1"
                >
                  Enquire about this <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-custom max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">Trusted by India's manufacturers</p>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((c) => (
              <span key={c} className="text-gray-600 font-semibold text-sm bg-gray-50 px-5 py-2 rounded-full">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-teal-accent font-semibold uppercase tracking-widest text-sm mb-4">Ready to Partner?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            Tell us your paint requirements.<br />We'll handle the rest.
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
            Share your specifications — volume, finish, application, industry. Our technical team will reach out within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/partnership"
              className="bg-navy text-white font-bold px-10 py-4 rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Request Partnership Discussion
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/capabilities"
              className="border-2 border-navy text-navy font-bold px-10 py-4 rounded-lg hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
