import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Capabilities | Veldon Paints',
  description:
    'Explore Veldon Paints capabilities - custom formulations, bulk manufacturing, quality assurance, and fast turnaround.',
};

interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

interface CapabilitySection {
  title: string;
  description: string;
  features: FeatureCard[];
  highlight?: string;
}

const capabilitySections: CapabilitySection[] = [
  {
    title: 'Industries We Serve',
    description:
      'Proven expertise across diverse manufacturing sectors with specialized formulations for each industry.',
    features: [
      {
        title: 'Automotive',
        description: 'OEM and aftermarket paint solutions for vehicles and components',
        icon: '🚗',
      },
      {
        title: 'Steel & Metal',
        description: 'Protective coatings for structural steel, fabricated products, and metal surfaces',
        icon: '⚙️',
      },
      {
        title: 'Heavy Equipment',
        description: 'Durable finishes for machinery, equipment, and industrial components',
        icon: '🏭',
      },
      {
        title: 'Construction',
        description: 'Building coatings and architectural paint systems',
        icon: '🏢',
      },
    ],
  },
  {
    title: 'Production Capacity',
    description:
      'State-of-the-art manufacturing facility with flexible batch capabilities.',
    features: [
      {
        title: 'Minimum Batch',
        description: '100 liters - Perfect for testing or small runs',
        icon: '📦',
      },
      {
        title: 'Standard Batch',
        description: '500-2000 liters - Most common production size',
        icon: '📊',
      },
      {
        title: 'Large Batch',
        description: '5000-50000 liters - Bulk manufacturing capability',
        icon: '📈',
      },
      {
        title: 'Monthly Capacity',
        description: '1000+ metric tons - Dedicated production schedule',
        icon: '🎯',
      },
    ],
  },
  {
    title: 'Customization Services',
    description:
      'From color matching to specialized performance requirements, we customize everything.',
    features: [
      {
        title: 'Color Matching',
        description: 'Precise color formulation from samples or specifications',
        icon: '🎨',
      },
      {
        title: 'Performance Specs',
        description: 'UV resistance, chemical resistance, temperature range optimization',
        icon: '⚡',
      },
      {
        title: 'Additives & Modifiers',
        description: 'Anti-corrosion agents, anti-foaming, viscosity control',
        icon: '🧪',
      },
      {
        title: 'Packaging Solutions',
        description: 'Drums, cans, bulk tanks, or customer-supplied containers',
        icon: '📫',
      },
    ],
  },
  {
    title: 'Quality Standards',
    description:
      'Rigorous testing ensures every batch meets international specifications and your requirements.',
    features: [
      {
        title: 'ISO 9001 Compliance',
        description: 'International quality management certification',
        icon: '✓',
      },
      {
        title: 'Batch Testing',
        description: 'Color, viscosity, coverage, adhesion, and durability tests',
        icon: '🔬',
      },
      {
        title: 'Documentation',
        description: 'Complete batch certificates and technical data sheets provided',
        icon: '📋',
      },
      {
        title: 'Quality Assurance',
        description: 'On-site laboratory analysis before dispatch',
        icon: '👍',
      },
    ],
  },
  {
    title: 'Paint Types & Formulations',
    description:
      'Wide range of paint systems available for any industrial application.',
    features: [
      {
        title: 'Industrial Enamels',
        description: 'Durable, weather-resistant finish for harsh environments',
        icon: '🛡️',
      },
      {
        title: 'Primers',
        description: 'Surface preparation paints for metal, wood, and specialty substrates',
        icon: '🎯',
      },
      {
        title: 'Protective Coatings',
        description: 'Anti-corrosion and protective systems for long-term durability',
        icon: '🔐',
      },
      {
        title: 'Specialty Paints',
        description: 'Heat-resistant, electrical conductive, anti-slip, and custom formulations',
        icon: '⭐',
      },
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-cream py-16 md:py-24">
        <div className="container-custom max-w-7xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Capabilities</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive industrial paint solutions designed for modern manufacturing.
            From custom formulations to large-scale production, we deliver excellence.
          </p>
        </div>
      </section>

      {/* Capabilities Sections */}
      {capabilitySections.map((section, sectionIndex) => (
        <section
          key={sectionIndex}
          className={`py-20 ${
            sectionIndex % 2 === 0
              ? 'bg-gradient-to-b from-white to-light-gray'
              : 'bg-white'
          }`}
        >
          <div className="container-custom max-w-7xl">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
                {section.title}
              </h2>
              <p className="text-lg text-charcoal text-opacity-70 max-w-3xl">
                {section.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover group"
                >
                  <div className="h-1 bg-gradient-to-r from-red-accent via-teal-accent to-gold-accent"></div>

                  <div className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>

                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-red-accent transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-charcoal text-opacity-70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy via-navy to-navy-dark text-cream">
        <div className="container-custom max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Paint Supply?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how Veldon Paints can support your manufacturing operations
            with custom formulations and reliable supply.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partnership"
              className="bg-red-accent hover:bg-red-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Request Custom Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/"
              className="bg-transparent border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-navy font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
