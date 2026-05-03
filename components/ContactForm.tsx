'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  paintType: string;
  volume: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const INDUSTRIES = [
  'Automotive',
  'Steel & Metal',
  'Manufacturing',
  'Construction',
  'Heavy Equipment',
  'Textiles',
  'Other',
];

const PAINT_TYPES = [
  'Industrial Enamel',
  'Primer',
  'Protective Coatings',
  'Specialty Paint',
  'Custom Formulation',
  'Not Sure',
];

const VOLUMES = [
  '100-500 liters/month',
  '500-2000 liters/month',
  '2000-10000 liters/month',
  '10000+ liters/month',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    paintType: '',
    volume: '',
    message: '',
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending your inquiry...' });

    // Validate required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.company
    ) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.',
      });
      return;
    }

    try {
      // Using Formspree for email submission
      const response = await fetch('https://formspree.io/f/mzzybnno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Partnership Inquiry from ${formData.company}`,
        }),
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message:
            'Thank you! We received your inquiry. Our team will respond within 24 hours.',
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          paintType: '',
          volume: '',
          message: '',
        });

        // Reset form after 5 seconds
        setTimeout(() => {
          setStatus({ type: 'idle', message: '' });
        }, 5000);
      } else {
        setStatus({
          type: 'error',
          message:
            'Failed to send your inquiry. Please try again or contact us directly.',
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'An error occurred. Please try again or email us at veldonpaintsindia@gmail.com',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Status Messages */}
      {status.type === 'success' && (
        <div className="bg-teal-accent bg-opacity-10 border-l-4 border-teal-accent p-4 rounded-lg flex gap-3">
          <CheckCircle className="text-teal-accent flex-shrink-0 mt-1" size={20} />
          <p className="text-teal-accent font-medium">{status.message}</p>
        </div>
      )}

      {status.type === 'error' && (
        <div className="bg-red-accent bg-opacity-10 border-l-4 border-red-accent p-4 rounded-lg flex gap-3">
          <AlertCircle className="text-red-accent flex-shrink-0 mt-1" size={20} />
          <p className="text-red-accent font-medium">{status.message}</p>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent bg-white"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent bg-white"
          placeholder="john@company.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent bg-white"
          placeholder="+91 XXXXX XXXXX"
        />
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
          Company Name *
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent bg-white"
          placeholder="Your Company"
        />
      </div>

      {/* Industry */}
      <div>
        <label htmlFor="industry" className="block text-sm font-semibold text-navy mb-2">
          Industry
        </label>
        <select
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent bg-white"
        >
          <option value="">Select an industry</option>
          {INDUSTRIES.map((ind) => (
            <option key={ind} value={ind}>
              {ind}
            </option>
          ))}
        </select>
      </div>

      {/* Paint Type */}
      <div>
        <label htmlFor="paintType" className="block text-sm font-semibold text-navy mb-2">
          Paint Type Needed
        </label>
        <select
          id="paintType"
          name="paintType"
          value={formData.paintType}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent bg-white"
        >
          <option value="">Select paint type</option>
          {PAINT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Volume */}
      <div>
        <label htmlFor="volume" className="block text-sm font-semibold text-navy mb-2">
          Estimated Monthly Volume
        </label>
        <select
          id="volume"
          name="volume"
          value={formData.volume}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent bg-white"
        >
          <option value="">Select volume range</option>
          {VOLUMES.map((vol) => (
            <option key={vol} value={vol}>
              {vol}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
          Additional Details
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-accent focus:border-transparent bg-white resize-none"
          placeholder="Tell us about your specific requirements, current paint supplier, or any special formulation needs..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full bg-gradient-to-r from-red-accent to-gold-accent hover:from-red-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
      >
        {status.type === 'loading' ? (
          'Sending...'
        ) : (
          <>
            Request Partnership Discussion
            <Send size={20} className="group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <p className="text-xs text-charcoal text-opacity-60 text-center">
        We typically respond within 24 hours. For urgent inquiries, please call or
        email directly.
      </p>
    </form>
  );
}
