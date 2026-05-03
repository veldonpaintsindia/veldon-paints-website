import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-navy via-navy to-navy-dark pt-32 pb-20 flex items-center">
      <div className="container-custom max-w-7xl w-full">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="bg-red-accent bg-opacity-20 text-red-accent px-4 py-2 rounded-full text-sm font-semibold">
              Trusted Since 1990
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
            Custom Industrial Paint Solutions for
            <span className="text-gradient"> Manufacturing</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
            Precision formulations trusted by Ramco Steel, Visaka Steel, and leading
            manufacturers across India. Custom bulk paint, rapid turnaround, and
            unwavering quality assurance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/partnership"
              className="bg-red-accent hover:bg-red-accent hover:shadow-lg text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Request Custom Formulation
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/capabilities"
              className="bg-transparent border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-navy font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Our Capabilities
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-700 border-opacity-30">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-gold-accent">
                35+
              </p>
              <p className="text-sm text-gray-300">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-teal-accent">
                500+
              </p>
              <p className="text-sm text-gray-300">Formulations</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-red-accent">
                1000T+
              </p>
              <p className="text-sm text-gray-300">Monthly Capacity</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-cream">
                24h
              </p>
              <p className="text-sm text-gray-300">Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
