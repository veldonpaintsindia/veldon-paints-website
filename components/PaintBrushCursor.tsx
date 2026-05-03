'use client';

import { useEffect, useRef } from 'react';

interface Stroke {
  x: number;
  y: number;
  color: string;
  size: number;
  opacity: number;
  startTime: number;
  duration: number;
}

const COLORS = ['#E63946', '#06A77D', '#C8922A', '#F8F5F0'];
const STROKE_DURATION_MIN = 800;
const STROKE_DURATION_MAX = 1200;
const STROKE_SIZE = 12;
const STROKE_INTERVAL = 20;

export default function PaintBrushCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const strokesRef = useRef<Stroke[]>([]);
  const lastStrokeTimeRef = useRef<number>(0);
  const currentColorIndexRef = useRef<number>(0);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();

      if (now - lastStrokeTimeRef.current > STROKE_INTERVAL) {
        const colorIndex = currentColorIndexRef.current % COLORS.length;
        const stroke: Stroke = {
          x: e.clientX,
          y: e.clientY,
          color: COLORS[colorIndex],
          size: STROKE_SIZE,
          opacity: 1,
          startTime: now,
          duration:
            STROKE_DURATION_MIN +
            Math.random() * (STROKE_DURATION_MAX - STROKE_DURATION_MIN),
        };

        strokesRef.current.push(stroke);
        currentColorIndexRef.current += 1;
        lastStrokeTimeRef.current = now;
      }
    };

    const animate = () => {
      const now = Date.now();
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      strokesRef.current = strokesRef.current.filter((stroke) => {
        const elapsed = now - stroke.startTime;
        const progress = Math.min(elapsed / stroke.duration, 1);
        const opacity = stroke.opacity * (1 - progress);

        if (opacity <= 0) {
          return false;
        }

        ctx.save();
        ctx.globalAlpha = opacity;

        ctx.fillStyle = stroke.color;
        ctx.beginPath();

        const brushSize = stroke.size * (1 - progress * 0.3);
        ctx.arc(stroke.x, stroke.y, brushSize / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        return true;
      });

      drawBrushIcon(ctx, e);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    let e = { clientX: 0, clientY: 0 };

    const updateMousePosition = (event: MouseEvent) => {
      e = event;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', updateMousePosition);

    const drawBrushIcon = (ctx: CanvasRenderingContext2D, mouseEvent: MouseEvent) => {
      const x = mouseEvent.clientX;
      const y = mouseEvent.clientY;

      ctx.save();

      ctx.translate(x, y);
      ctx.rotate(-Math.PI / 4);

      const brushWidth = 8;
      const brushHeight = 24;

      ctx.fillStyle = '#C8922A';
      ctx.fillRect(-brushWidth / 2, 0, brushWidth, brushHeight);

      ctx.fillStyle = '#E8E8E8';
      ctx.fillRect(-brushWidth / 2, 0, brushWidth, brushHeight * 0.3);

      ctx.fillStyle = '#2C2C2C';
      ctx.fillRect(-brushWidth / 2, brushHeight * 0.25, brushWidth, 3);

      ctx.restore();
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      id="paint-cursor"
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-9999"
    />
  );
}
