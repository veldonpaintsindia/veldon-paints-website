import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Target, Users, Award, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | Veldon Paints',
  description:
    'Learn about Veldon Paints - 35+ years of industrial paint expertise serving manufacturers across India.',
};

interface ValueCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const values: ValueCard[] = [
  {
    title: 'Innovation',
    description:
      'Continuous research and development to create formulations that exceed industry standards and solve emerging challenges.',
    icon: <Target size={32} />,
  },
  {
    title: 'Partnership',
    description:
      'Your success is our success. We collaborate closely with your team to understand and exceed your requirements.',
    icon: <Users size={32} />,
  },
  {
    title: 'Quality',
    description:
      'Unwavering commitment to quality at every stage - from raw materials to final batch testing and delivery.',
    icon: <Award size={32} />,
  },
  {
    title: 'Reliability',
    description:
      'Consistent delivery, dedicated account management, and responsive support you can count on.',
    icon: <TrendingUp size={32} />,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-cream py-16 md:py-24">
        <div className="container-custom max-w-7xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Veldon Paints</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Three decades of expertise in industrial paint formulation, serving manufacturers
            across India with precision, quality, and innovation.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-charcoal text-opacity-80">
                <p className="text-lg leading-relaxed">
                  Since 1990, Veldon Paints has been at the forefront of industrial paint
                  manufacturing in India. What began as a small operation focused on basic
                  paint solutions has evolved into a sophisticated manufacturing facility
                  serving the most demanding industrial clients.
                </p>
                <p className="text-lg leading-relaxed">
                  Our journey reflects the changing landscape of Indian manufacturing. As
                  industries grew more competitive and requirements became more stringent,
                  we invested in technology, talent, and process excellence to stay ahead.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're trusted by leading manufacturers across automotive, heavy equipment,
                  construction, and steel fabrication sectors across India. But we never lost sight of what
                  made us successful: listening to customers and delivering exactly what they
                  need.
                </p>
                <p className="text-lg leading-relaxed font-semibold text-navy">
                  We don't just sell paint. We solve coating challenges.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-red-accent to-red-600 text-white p-8 rounded-xl shadow-lg">
                <p className="text-4xl font-bold mb-2">35+</p>
                <p className="text-sm font-semibold">Years of Heritage</p>
              </div>
              <div className="bg-gradient-to-br from-teal-accent to-teal-600 text-white p-8 rounded-xl shadow-lg">
                <p className="text-4xl font-bold mb-2">500+</p>
                <p className="text-sm font-semibold">Formulations</p>
              </div>
              <div className="bg-gradient-to-br from-gold-accent to-yellow-600 text-white p-8 rounded-xl shadow-lg">
                <p className="text-4xl font-bold mb-2">1000T+</p>
                <p className="text-sm font-semibold">Monthly Capacity</p>
              </div>
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 text-white p-8 rounded-xl shadow-lg">
                <p className="text-4xl font-bold mb-2">100+</p>
                <p className="text-sm font-semibold">Active Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-gradient-to-b from-light-gray to-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-charcoal text-opacity-70 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-navy to-navy-dark text-cream p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover group"
              >
                <div className="text-gold-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-gold-accent transition-colors">
                  {value.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Milestones
            </h2>
            <p className="text-lg text-charcoal text-opacity-70 max-w-2xl mx-auto">
              Key moments in our growth journey
            </p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {[
              {
                year: '1990',
                title: 'Foundation',
                description: 'Veldon Paints established with focus on basic industrial paints',
              },
              {
                year: '1998',
                title: 'First Major Client',
                description: 'Partnered with leading steel manufacturer, marking our expansion',
              },
              {
                year: '2005',
                title: 'Facility Expansion',
                description: 'New manufacturing plant with advanced testing laboratory',
              },
              {
                year: '2012',
                title: 'ISO 9001 Certification',
                description: 'Achieved international quality management certification',
              },
              {
                year: '2018',
                title: 'Technology Upgrade',
                description: 'Implemented state-of-the-art color matching and batch systems',
              },
              {
                year: '2025',
                title: 'Digital Transformation',
                description: 'Launched online platform for custom quotes and order management',
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-gold-accent rounded-full"></div>
                  {index < 5 && <div className="w-1 h-20 bg-light-gray mt-1"></div>}
                </div>

                <div className="pb-8">
                  <p className="text-sm font-bold text-gold-accent mb-1">
                    {milestone.year}
                  </p>
                  <h3 className="text-xl font-bold text-navy mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-charcoal text-opacity-70">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-r from-navy via-navy-dark to-navy text-cream">
        <div className="container-custom max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="border border-gold-accent border-opacity-30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gold-accent">
                Customer First
              </h3>
              <p className="text-gray-300">
                Every decision we make starts with your needs. Your success is our measure
                of success.
              </p>
            </div>
            <div className="border border-gold-accent border-opacity-30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gold-accent">
                Excellence
              </h3>
              <p className="text-gray-300">
                We pursue excellence in every formula, every batch, every interaction with
                our partners.
              </p>
            </div>
            <div className="border border-gold-accent border-opacity-30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gold-accent">
                Sustainability
              </h3>
              <p className="text-gray-300">
                Responsible manufacturing practices that protect our environment for future
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-xl text-charcoal text-opacity-70 mb-8 max-w-2xl mx-auto">
            Ready to experience the Veldon Paints difference? Get in touch with our team today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/partnership"
              className="bg-red-accent hover:bg-red-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group"
            >
              Start a Partnership
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/capabilities"
              className="bg-navy hover:bg-navy-dark text-cream font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
