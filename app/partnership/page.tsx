import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Partnership | Veldon Paints',
  description:
    'Start a partnership with Veldon Paints. Contact us for custom paint formulations and bulk manufacturing solutions.',
};

export default function PartnershipPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-navy to-navy-dark text-cream py-16 md:py-24">
        <div className="container-custom max-w-7xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Partnership Opportunities
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Let's collaborate to create the perfect paint solution for your manufacturing
            needs. Contact our team today.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-white to-light-gray">
        <div className="container-custom max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
                <h2 className="text-3xl font-bold text-navy mb-2">
                  Request Partnership Discussion
                </h2>
                <p className="text-charcoal text-opacity-70 mb-8">
                  Fill out the form below and our team will reach out within 24 hours to
                  discuss your specific requirements.
                </p>

                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Email */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex gap-4 mb-4">
                  <div className="text-gold-accent">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">Email</h3>
                    <a
                      href="mailto:veldonpaintsindia@gmail.com"
                      className="text-red-accent hover:text-red-600 font-semibold break-all"
                    >
                      veldonpaintsindia@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex gap-4 mb-4">
                  <div className="text-teal-accent">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">Location</h3>
                    <p className="text-charcoal text-opacity-70">
                      Veldon Paints (India)
                      <br />
                      Manufacturing & Head Office
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex gap-4 mb-4">
                  <div className="text-blue-400">
                    <Clock size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">
                      Response Time
                    </h3>
                    <p className="text-charcoal text-opacity-70">
                      We typically respond to all inquiries within 24 business hours.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-red-accent to-gold-accent rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Urgent Inquiries?</h3>
                <p className="mb-6">
                  For time-sensitive requests, reach out directly via email. Our team monitors
                  inquiries closely.
                </p>
                <a
                  href="mailto:veldonpaintsindia@gmail.com?subject=Urgent%20Inquiry"
                  className="inline-block bg-white text-red-accent font-bold px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300"
                >
                  Send Urgent Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is the minimum order quantity?',
                a: 'We can handle orders starting from 100 liters. This is perfect for testing new formulations or smaller production needs. For smaller quantities, please contact us directly.',
              },
              {
                q: 'How long does custom formulation take?',
                a: 'Standard custom formulations typically take 5-10 business days from approval of specifications. Rush options are available for time-sensitive projects.',
              },
              {
                q: 'Do you provide technical support?',
                a: 'Yes, our technical team is available to assist with application guidance, troubleshooting, and optimization of paint performance for your specific use case.',
              },
              {
                q: 'What certifications and quality standards do you follow?',
                a: 'We maintain ISO 9001 certification and conduct rigorous testing for all batches. Our products meet or exceed Indian Standards and international specifications as required.',
              },
              {
                q: 'Can you match existing paint colors?',
                a: 'Absolutely. Bring us a sample or provide color specifications, and our lab will create a precise match. We use advanced color matching equipment for accuracy.',
              },
              {
                q: 'What about delivery and logistics?',
                a: 'We arrange delivery based on your location and order size. We work with reliable logistics partners and can accommodate bulk shipments, partial deliveries, or scheduled production runs.',
              },
              {
                q: 'Do you offer payment terms?',
                a: 'Yes, we work with established clients on flexible payment terms. For new partnerships, we typically start with advance payment or COD, then establish account terms based on the relationship.',
              },
              {
                q: 'How do I get a custom quote?',
                a: 'Use our partnership form to provide your requirements, or email us directly. Include details about paint type, volume, specifications, and timeline. We will prepare a detailed quote within 24 hours.',
              },
            ].map((item, index) => (
              <details
                key={index}
                className="bg-light-gray rounded-lg p-6 cursor-pointer group"
              >
                <summary className="font-bold text-navy text-lg group-hover:text-red-accent transition-colors">
                  {item.q}
                </summary>
                <p className="mt-4 text-charcoal text-opacity-80 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-light-gray to-white">
        <div className="container-custom max-w-7xl">
          <h2 className="text-4xl font-bold text-navy mb-12 text-center">
            Our Partnership Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                description:
                  'We discuss your requirements, specifications, volume, and timeline.',
              },
              {
                step: '2',
                title: 'Formulation & Testing',
                description:
                  'Our team develops a custom formulation and conducts comprehensive testing.',
              },
              {
                step: '3',
                title: 'Approval & Production',
                description:
                  'You approve the sample, and we schedule production with detailed documentation.',
              },
              {
                step: '4',
                title: 'Delivery & Support',
                description:
                  'We deliver on schedule with batch certificates and ongoing technical support.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-accent to-gold-accent text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-charcoal text-opacity-70 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-navy via-navy to-navy-dark text-cream">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait. Reach out today and let's build a partnership that drives your
            manufacturing success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact-form"
              className="bg-red-accent hover:bg-red-600 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Fill Out Partnership Form
            </a>
            <a
              href="mailto:veldonpaintsindia@gmail.com"
              className="bg-transparent border-2 border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-navy font-bold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Email Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
