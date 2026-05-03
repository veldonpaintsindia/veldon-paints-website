'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/capabilities', label: 'Capabilities' },
    { href: '/about', label: 'About Us' },
    { href: '/partnership', label: 'Partnership' },
  ];

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy shadow-lg'
          : 'bg-navy bg-opacity-95 backdrop-blur-sm'
      }`}
    >
      <div className="container-custom max-w-7xl">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-gold-accent to-red-accent rounded-lg flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">VP</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-cream font-bold text-lg leading-none">
                Veldon
              </p>
              <p className="text-xs text-gold-accent font-semibold">
                PAINTS
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream hover:text-gold-accent transition-colors font-medium text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/partnership"
              className="bg-gold-accent hover:bg-red-accent text-navy font-bold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-cream hover:text-gold-accent transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-navy-dark border-t border-gold-accent border-opacity-20 py-4">
            <div className="container-custom flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-cream hover:text-gold-accent transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/partnership"
                className="bg-gold-accent hover:bg-red-accent text-navy font-bold px-6 py-2 rounded-lg text-center transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
