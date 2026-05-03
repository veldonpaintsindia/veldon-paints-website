import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream">
      <div className="container-custom max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-accent to-red-accent rounded-lg flex items-center justify-center">
                <span className="text-navy font-bold text-lg">VP</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-none">Veldon</p>
                <p className="text-xs text-gold-accent font-semibold">PAINTS</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Delivering superior industrial paint solutions for over 35 years.
              Custom formulations that meet the demands of modern manufacturing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold-accent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm hover:text-gold-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities"
                  className="text-sm hover:text-gold-accent transition-colors"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm hover:text-gold-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/partnership"
                  className="text-sm hover:text-gold-accent transition-colors"
                >
                  Partnership
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold-accent">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-gold-accent mt-1 flex-shrink-0" />
                <a
                  href="mailto:veldonpaintsindia@gmail.com"
                  className="text-sm hover:text-gold-accent transition-colors"
                >
                  veldonpaintsindia@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-accent mt-1 flex-shrink-0" />
                <p className="text-sm">India</p>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-gold-accent mt-1 flex-shrink-0" />
                <p className="text-sm">Contact via email for inquiries</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Veldon Paints (India). All rights reserved.
          </p>
          <div className="flex gap-6">
            <p className="text-xs text-gray-400">Privacy Policy</p>
            <p className="text-xs text-gray-400">Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
