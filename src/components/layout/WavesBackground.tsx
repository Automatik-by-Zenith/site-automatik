"use client";

import { useEffect, useRef } from "react";
import { initWaves, drawWave, Wave, WaveParams } from "@/utils/waveRenderer";

export const WavesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wavesRef = useRef<Wave[]>([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Paramètres d'animation
    const params: WaveParams = {
      speed: 0.28,
      randomScale: 10.0,
      randomFrequency: 0.016,
      randomTimeSpeed: 0.17,
    };

    // Redimensionner le canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      wavesRef.current = initWaves(canvas.width, canvas.height);
    };

    // Boucle d'animation
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animation constante et douce
      timeRef.current += params.speed;
      const time = timeRef.current;

      // Dessiner chaque vague
      wavesRef.current.forEach((wave, index) => {
        drawWave(
          ctx,
          wave,
          index,
          canvas.width,
          canvas.height,
          time,
          params,
          wavesRef.current.length
        );
      });

      animationId = requestAnimationFrame(animate);
    };

    // Initialiser et lancer l'animation
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};
