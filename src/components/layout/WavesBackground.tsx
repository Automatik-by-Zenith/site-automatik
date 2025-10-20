"use client";

import { useEffect, useRef } from "react";
import { useThrottledScroll } from "@/hooks/useThrottledScroll";

interface Wave {
  y: number;
  baseY: number;
  length: number;
  amplitude: number;
  baseAmplitude: number;
  amplitudeVariation: number;
  amplitudeSpeed: number;
  frequency: number;
  speed: number;
  opacity: number;
  phaseOffset: number;
  yVariationSpeed: number;
  yVariationAmount: number;
  lineWidth: number;
}

export const WavesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wavesRef = useRef<Wave[]>([]);
  const waveOffsetRef = useRef(0);
  const scrollYRef = useRef(0);
  const prevScrollYRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initWaves();
    };

    const initWaves = () => {
      const waves: Wave[] = [];
      const numWaves = 18;

      let currentY = 0.1;

      for (let i = 0; i < numWaves; i++) {
        if (i > 0) {
          const spacingFactor = 1 - i / numWaves;
          const spacing = 0.03 + spacingFactor * 0.08;
          currentY += spacing;
        }

        const baseY = canvas.height * currentY;
        const lineWidths = [1, 2, 3];
        const lineWidth = lineWidths[i % 3];

        waves.push({
          y: baseY,
          baseY: baseY,
          length: 0.003 + (i % 3) * 0.002 + Math.random() * 0.001,
          amplitude: 35 + Math.random() * 20,
          baseAmplitude: 40,
          amplitudeVariation: 12 + Math.random() * 6,
          amplitudeSpeed: 0.0005 + i * 0.00008,
          frequency: 0.01,
          speed: 0.0006 + (i % 3) * 0.0003,
          opacity: 0.06 + Math.random() * 0.03,
          phaseOffset: (i / numWaves) * (Math.PI * 0.35),
          yVariationSpeed: 0.0002 + Math.random() * 0.0001,
          yVariationAmount: 12 + Math.random() * 8,
          lineWidth: lineWidth,
        });
      }

      wavesRef.current = waves;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scrollDelta = scrollYRef.current - prevScrollYRef.current;

      const baseSpeed = 0.08;
      const scrollSpeed = Math.abs(scrollDelta) * 0.75;
      waveOffsetRef.current += baseSpeed + scrollSpeed;

      wavesRef.current.forEach((wave, index) => {
        const timeFactor = waveOffsetRef.current * wave.amplitudeSpeed;
        wave.amplitude = wave.baseAmplitude + Math.sin(timeFactor + wave.phaseOffset) * wave.amplitudeVariation;

        const yOffset = Math.sin(waveOffsetRef.current * wave.yVariationSpeed * 0.5) * wave.yVariationAmount;
        wave.y = wave.baseY + yOffset;

        const gradient = ctx.createLinearGradient(0, wave.y, 0, canvas.height);
        const blueIntensity = 0.08 + (index / wavesRef.current.length) * 0.12;
        gradient.addColorStop(0, `rgba(214, 226, 245, ${blueIntensity})`);
        gradient.addColorStop(1, `rgba(240, 245, 255, ${blueIntensity * 0.4})`);

        ctx.beginPath();
        ctx.moveTo(0, wave.y);

        for (let x = 0; x < canvas.width; x += 2) {
          const y =
            wave.y +
            Math.sin(x * wave.length + waveOffsetRef.current * wave.speed + wave.phaseOffset) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, wave.y);

        for (let x = 0; x < canvas.width; x += 2) {
          const y =
            wave.y +
            Math.sin(x * wave.length + waveOffsetRef.current * wave.speed + wave.phaseOffset) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `rgba(0, 113, 227, ${wave.opacity})`;
        ctx.lineWidth = wave.lineWidth;
        ctx.stroke();
      });

      prevScrollYRef.current = scrollYRef.current;

      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    return () => {
      // Cancel animation frame to prevent memory leak
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }

      // Remove event listeners
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  useThrottledScroll(() => {
    prevScrollYRef.current = scrollYRef.current;
    scrollYRef.current = window.scrollY;
  }, 50);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }} />;
};
