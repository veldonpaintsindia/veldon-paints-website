'use client';

import { useEffect, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  color: string;
  opacity: number;
  width: number;
  timestamp: number;
}

const COLORS = ['#E63946', '#06A77D', '#C8922A', '#1B2A4A'];
const TRAIL_LIFETIME = 1000;
const TRAIL_MAX_WIDTH = 18;
const TRAIL_MIN_WIDTH = 4;

export default function PaintBrushCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailRef = useRef<TrailPoint[]>([]);
  const colorIndexRef = useRef<number>(0);
  const colorChangeCounterRef = useRef<number>(0);
  const animFrameRef = useRef<number>(0);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const brushPosRef = useRef<{ x: number; y: number }>({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      brushPosRef.current = { x, y };

      // Change color every ~40 points for smooth color transitions
      colorChangeCounterRef.current += 1;
      if (colorChangeCounterRef.current > 40) {
        colorIndexRef.current = (colorIndexRef.current + 1) % COLORS.length;
        colorChangeCounterRef.current = 0;
      }

      // Only add trail points if mouse actually moved
      if (lastPosRef.current) {
        const dx = x - lastPosRef.current.x;
        const dy = y - lastPosRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > 2) {
          const speed = Math.min(dist, 30);
          const width = TRAIL_MAX_WIDTH - (speed / 30) * (TRAIL_MAX_WIDTH - TRAIL_MIN_WIDTH);
          trailRef.current.push({
            x,
            y,
            color: COLORS[colorIndexRef.current],
            opacity: 1,
            width,
            timestamp: Date.now(),
          });
        }
      }
      lastPosRef.current = { x, y };
    };

    const drawBrush = (x: number, y: number) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(Math.PI / 6);

      // Handle (stick)
      ctx.fillStyle = '#8B5E3C';
      ctx.beginPath();
      ctx.roundRect(-3, -30, 6, 34, 2);
      ctx.fill();

      // Ferrule (metal band)
      ctx.fillStyle = '#C0C0C0';
      ctx.fillRect(-4, 4, 8, 5);

      // Bristles
      const gradient = ctx.createLinearGradient(-5, 9, 5, 24);
      gradient.addColorStop(0, COLORS[colorIndexRef.current]);
      gradient.addColorStop(1, COLORS[(colorIndexRef.current + 1) % COLORS.length]);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.moveTo(-5, 9);
      ctx.lineTo(5, 9);
      ctx.lineTo(3, 24);
      ctx.lineTo(-3, 24);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = Date.now();

      // Remove expired points
      trailRef.current = trailRef.current.filter(
        (p) => now - p.timestamp < TRAIL_LIFETIME
      );

      // Draw trail as connected strokes
      if (trailRef.current.length > 1) {
        for (let i = 1; i < trailRef.current.length; i++) {
          const prev = trailRef.current[i - 1];
          const curr = trailRef.current[i];
          const age = now - curr.timestamp;
          const fade = 1 - age / TRAIL_LIFETIME;

          ctx.save();
          ctx.globalAlpha = fade * 0.85;
          ctx.strokeStyle = curr.color;
          ctx.lineWidth = curr.width * fade;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';

          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(curr.x, curr.y);
          ctx.stroke();
          ctx.restore();
        }
      }

      // Draw brush icon at cursor
      drawBrush(brushPosRef.current.x, brushPosRef.current.y);

      animFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 9999, cursor: 'none' }}
    />
  );
}
