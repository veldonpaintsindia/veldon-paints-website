import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FlaskConical, Shield, Truck, Factory, Paintbrush } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import { whoWeAre, capabilities, productLines, industriesServed, cta } from '@/content/home';

export const metadata: Metadata = {
  title: 'Veldon Paints — Industrial Paint Manufacturer, Hyderabad',
  description:
    'Custom industrial paint formulations in bulk for steel fabricators, construction firms, and manufacturers across India. B2B paint manufacturer since 1975, Hyderabad.',
};

const iconMap: Record<string, React.ElementType> = {
  FlaskConical, Shield, Truck, Factory,
};

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Who We Are */}
      <section className="py-24 bg-navy text-white">
        <div className="container-custom max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <p className="text-gold-accent font-semibold uppercase tracking-widest text-sm mb-4">
              {whoWeAre.sectionLabel}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight whitespace-pre-line">
              {whoWeAre.headline}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">{whoWeAre.body}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c) => {
              const Icon = iconMap[c.icon];
              return (
                <div
                  key={c.title}
                  className={`bg-white bg-opacity-5 border-l-4 ${c.border} rounded-xl p-6 hover:bg-opacity-10 transition-all duration-300`}
                >
                  <div className="w-12 h-12 rounded-lg bg-white bg-opacity-10 flex items-center justify-center mb-4">
                    {Icon && <Icon className={c.color} size={24} />}
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
              <p className="text-red-accent font-semibold uppercase tracking-widest text-sm mb-4">
                What We Manufacture
              </p>
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
                className={`bg-white border-l-4 ${p.border} rounded-xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-3">
                  <Paintbrush className="text-gray-400" size={20} />
                  <span className={`${p.tagBg} text-white text-xs font-bold px-2 py-1 rounded-full`}>
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

      {/* Industries */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-custom max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-center text-gray-400 text-sm font-semibold uppercase tracking-widest mb-8">
            Industries we serve
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {industriesServed.map((industry) => (
              <span
                key={industry}
                className="text-gray-600 font-semibold text-sm bg-gray-50 border border-gray-200 px-5 py-2 rounded-full"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-teal-accent font-semibold uppercase tracking-widest text-sm mb-4">
            {cta.sectionLabel}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight whitespace-pre-line">
            {cta.headline}
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">{cta.body}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={cta.primary.href}
              className="bg-navy text-white font-bold px-10 py-4 rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              {cta.primary.label}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href={cta.secondary.href}
              className="border-2 border-navy text-navy font-bold px-10 py-4 rounded-lg hover:bg-navy hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              {cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
