"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Star {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  baseY: number;
}

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

export const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const wavesRef = useRef<Wave[]>([]);
  const waveOffsetRef = useRef(0);
  const scrollYRef = useRef(0);
  const prevScrollYRef = useRef(0);
  const animationTimeRef = useRef(0);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initWaves();
    };

    const initStars = () => {
      const stars: Star[] = [];
      const numStars = 200;

      for (let i = 0; i < numStars; i++) {
        const rand = Math.random();
        const size = rand < 0.8 ? Math.random() * 0.8 + 0.3 : Math.random() * 1.2 + 0.8;
        const baseY = Math.random() * canvas.height;

        stars.push({
          x: Math.random() * canvas.width,
          y: baseY,
          size: size,
          speedY: Math.random() * 0.3 + 0.1,
          opacity: Math.random() * 0.4 + 0.4,
          baseY: baseY,
        });
      }

      starsRef.current = stars;
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

    const handleScroll = () => {
      prevScrollYRef.current = scrollYRef.current;
      scrollYRef.current = window.scrollY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark =
        theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

      const scrollDelta = scrollYRef.current - prevScrollYRef.current;
      animationTimeRef.current += 1;

      if (isDark) {
        // Mode sombre: étoiles avec parallax au scroll uniquement
        const parallaxFactor = 0.25;
        starsRef.current.forEach((star) => {
          const parallax = scrollYRef.current * parallaxFactor * star.speedY;
          star.y = star.baseY + parallax;

          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fill();
        });
      } else {
        // Mode clair: vagues avec mouvement proportionnel au scroll
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
      }

      prevScrollYRef.current = scrollYRef.current;

      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: -1 }} />;
};
