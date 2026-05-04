'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Paint drip particles
    interface Drip {
      x: number;
      y: number;
      vy: number;
      radius: number;
      color: string;
      opacity: number;
      trail: { x: number; y: number }[];
    }

    const PAINT_COLORS = ['#E63946', '#06A77D', '#C8922A', '#1B2A4A', '#F8F5F0'];
    const drips: Drip[] = [];

    const spawnDrip = () => {
      drips.push({
        x: Math.random() * canvas.width,
        y: -20,
        vy: 0.8 + Math.random() * 1.2,
        radius: 6 + Math.random() * 8,
        color: PAINT_COLORS[Math.floor(Math.random() * PAINT_COLORS.length)],
        opacity: 0.12 + Math.random() * 0.12,
        trail: [],
      });
    };

    let spawnTimer = 0;
    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      spawnTimer++;
      if (spawnTimer % 45 === 0) spawnDrip();

      for (let i = drips.length - 1; i >= 0; i--) {
        const d = drips[i];
        d.trail.push({ x: d.x, y: d.y });
        if (d.trail.length > 30) d.trail.shift();
        d.y += d.vy;

        // Draw drip trail
        if (d.trail.length > 1) {
          ctx.save();
          ctx.strokeStyle = d.color;
          ctx.lineWidth = d.radius * 0.7;
          ctx.lineCap = 'round';
          ctx.globalAlpha = d.opacity * 0.5;
          ctx.beginPath();
          ctx.moveTo(d.trail[0].x, d.trail[0].y);
          for (const pt of d.trail) ctx.lineTo(pt.x, pt.y);
          ctx.stroke();
          ctx.restore();
        }

        // Draw drip head (teardrop)
        ctx.save();
        ctx.globalAlpha = d.opacity;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (d.y > canvas.height + 50) drips.splice(i, 1);
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Animated paint drips canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#1B2A4A 1px, transparent 1px), linear-gradient(90deg, #1B2A4A 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Paint bucket illustration — right side */}
      <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center pointer-events-none select-none">
        <svg
          viewBox="0 0 320 480"
          className="w-72 md:w-96 opacity-90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Bucket body */}
          <rect x="60" y="120" width="200" height="280" rx="16" fill="#1B2A4A" />
          <rect x="60" y="120" width="200" height="30" rx="8" fill="#C8922A" />
          {/* Bucket label */}
          <rect x="80" y="200" width="160" height="100" rx="8" fill="white" opacity="0.95" />
          <text x="160" y="245" textAnchor="middle" fill="#1B2A4A" fontSize="16" fontWeight="bold" fontFamily="sans-serif">VELDON</text>
          <text x="160" y="268" textAnchor="middle" fill="#C8922A" fontSize="11" fontFamily="sans-serif">INDUSTRIAL PAINTS</text>
          {/* Handle */}
          <path d="M100 120 Q160 70 220 120" stroke="#C8922A" strokeWidth="8" strokeLinecap="round" fill="none" />
          {/* Paint pour — animated via CSS */}
          <g className="paint-pour">
            <path d="M160 400 Q155 440 150 480 Q160 490 170 480 Q165 440 160 400Z" fill="#E63946" opacity="0.85" />
            <ellipse cx="160" cy="400" rx="18" ry="8" fill="#E63946" opacity="0.9" />
          </g>
          {/* Color drips on bucket side */}
          <path d="M80 350 Q78 370 76 390" stroke="#E63946" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M140 380 Q138 400 137 420" stroke="#06A77D" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M200 360 Q202 385 204 410" stroke="#C8922A" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 container-custom max-w-7xl w-full px-6 md:px-12">
        <div className="max-w-2xl">
          <span className="inline-block bg-navy text-gold-accent text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            Est. 1975 · Hyderabad, India
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy leading-tight mb-6">
            Industrial Paint
            <br />
            <span className="text-red-accent">Manufactured</span>
            <br />
            for You
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We manufacture custom paint formulations in bulk — from 100 litres to 100+ tonnes — for India's leading steel fabricators, construction firms, and industrial manufacturers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link
              href="/partnership"
              className="bg-navy hover:bg-navy text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              Request Custom Formulation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/capabilities"
              className="border-2 border-navy text-navy hover:bg-navy hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Our Capabilities
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
            <div>
              <p className="text-3xl font-bold text-gold-accent">35+</p>
              <p className="text-sm text-gray-500 mt-1">Years Manufacturing</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-teal-accent">100T+</p>
              <p className="text-sm text-gray-500 mt-1">Per Order Capacity</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-red-accent">B2B</p>
              <p className="text-sm text-gray-500 mt-1">Industrial Only</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy">24h</p>
              <p className="text-sm text-gray-500 mt-1">Response Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
