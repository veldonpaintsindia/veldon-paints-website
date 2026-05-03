import {
  Palette,
  BarChart3,
  Shield,
  Zap,
} from 'lucide-react';

interface CapabilityCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const capabilities: CapabilityCard[] = [
  {
    title: 'Custom Formulations',
    description:
      'Precision-engineered paint compositions tailored to your exact specifications and manufacturing requirements.',
    icon: <Palette size={32} />,
    color: 'from-red-accent to-red-600',
  },
  {
    title: 'Bulk Manufacturing',
    description:
      'Industrial-scale production with capacity to handle orders from 100 liters to 1000+ metric tons monthly.',
    icon: <BarChart3 size={32} />,
    color: 'from-teal-accent to-teal-600',
  },
  {
    title: 'Quality Assurance',
    description:
      'Rigorous testing protocols ensuring every batch meets international standards and customer specifications.',
    icon: <Shield size={32} />,
    color: 'from-gold-accent to-yellow-600',
  },
  {
    title: 'Fast Turnaround',
    description:
      'Rapid production cycles and express delivery options to keep your production schedules on track.',
    icon: <Zap size={32} />,
    color: 'from-blue-400 to-blue-600',
  },
];

export default function CapabilitiesGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-light-gray">
      <div className="container-custom max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            Our Capabilities
          </h2>
          <p className="text-lg text-charcoal text-opacity-70 max-w-2xl mx-auto">
            Comprehensive paint solutions designed for modern manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover group"
            >
              {/* Color border top */}
              <div
                className={`h-1 bg-gradient-to-r ${capability.color}`}
              ></div>

              <div className="p-6">
                <div className={`text-transparent bg-clip-text bg-gradient-to-r ${capability.color} mb-4 inline-block`}>
                  {capability.icon}
                </div>

                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-red-accent transition-colors">
                  {capability.title}
                </h3>

                <p className="text-charcoal text-opacity-70 text-sm leading-relaxed">
                  {capability.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
