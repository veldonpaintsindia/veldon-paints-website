import { Award, Truck, Wrench, TrendingUp } from 'lucide-react';

interface BenefitCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
}

const benefits: BenefitCard[] = [
  {
    title: '35+ Years Heritage',
    description:
      'Three decades of expertise in industrial paint formulation, trusted by manufacturers across India.',
    icon: <Award size={32} />,
    accentColor: 'text-red-accent',
  },
  {
    title: 'Bulk Capacity',
    description:
      'State-of-the-art facilities capable of producing 1000+ metric tons monthly without compromise on quality.',
    icon: <Truck size={32} />,
    accentColor: 'text-teal-accent',
  },
  {
    title: 'Custom Solutions',
    description:
      'Bespoke formulations developed in collaboration with your engineering team for optimal performance.',
    icon: <Wrench size={32} />,
    accentColor: 'text-gold-accent',
  },
  {
    title: 'Reliable Supply',
    description:
      'Consistent delivery schedules and dedicated account management ensuring uninterrupted production.',
    icon: <TrendingUp size={32} />,
    accentColor: 'text-blue-400',
  },
];

export default function BenefitCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Why Partner With Veldon?
          </h2>
          <p className="text-lg text-charcoal text-opacity-70 max-w-2xl mx-auto">
            Strategic advantages for your manufacturing operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-navy to-navy-dark rounded-xl p-8 text-cream hover:shadow-2xl transition-all duration-300 card-hover group"
            >
              <div className={`${benefit.accentColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-gold-accent transition-colors">
                {benefit.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Paint Calculator Coming Soon */}
        <div className="mt-20 bg-gradient-to-r from-red-accent to-gold-accent rounded-xl p-8 md:p-12 text-white">
          <div className="max-w-2xl">
            <div className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold">Coming Soon</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Paint Calculator Tool
            </h3>
            <p className="text-lg text-white text-opacity-90 mb-6">
              Instantly calculate your paint requirements, estimate costs, and
              generate custom formulation proposals. Available in Q3 2026.
            </p>
            <button className="bg-white text-red-accent font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300">
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
