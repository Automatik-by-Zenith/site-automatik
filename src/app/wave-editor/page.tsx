"use client";

import { useState, useEffect, useRef } from "react";
import { initWaves, drawWave, WaveParams } from "@/utils/waveRenderer";

export default function WaveEditorPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wavesRef = useRef<any[]>([]);
  const [params, setParams] = useState<WaveParams>({
    speed: 0.28,
    randomScale: 10.0,
    randomFrequency: 0.016,
    randomTimeSpeed: 0.17,
  });
  const timeRef = useRef(0);

  useEffect(() => {

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Redimensionner le canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    wavesRef.current = initWaves(canvas.width, canvas.height);

    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Animation avec paramètres
      timeRef.current += params.speed;
      const time = timeRef.current;

      // Dessiner les vagues
      wavesRef.current.forEach((wave: any, index: number) => {
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

    animate();

    return () => cancelAnimationFrame(animationId);
  }, [params]);

  const handleParamChange = (key: keyof WaveParams, value: number) => {
    setParams((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-white/95 to-gray-100">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Panel de contrôle */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/20 p-6 z-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-white text-xl font-bold mb-4">Wave Parameters</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Speed */}
            <div className="space-y-2">
              <label className="text-white/70 text-sm font-medium block">
                Speed: <span className="text-primary font-bold">{params.speed.toFixed(2)}</span>
              </label>
              <input
                type="range"
                min="0"
                max="3"
                step="0.01"
                value={params.speed}
                onChange={(e) => handleParamChange("speed", parseFloat(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-white/50 text-xs">Animation speed</p>
            </div>

            {/* Random Scale */}
            <div className="space-y-2">
              <label className="text-white/70 text-sm font-medium block">
                Random Scale: <span className="text-primary font-bold">{params.randomScale.toFixed(1)}</span>
              </label>
              <input
                type="range"
                min="0"
                max="30"
                step="0.5"
                value={params.randomScale}
                onChange={(e) => handleParamChange("randomScale", parseFloat(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-white/50 text-xs">Amplitude of random variation</p>
            </div>

            {/* Random Frequency */}
            <div className="space-y-2">
              <label className="text-white/70 text-sm font-medium block">
                Random Freq: <span className="text-primary font-bold">{params.randomFrequency.toFixed(3)}</span>
              </label>
              <input
                type="range"
                min="0"
                max="0.2"
                step="0.001"
                value={params.randomFrequency}
                onChange={(e) => handleParamChange("randomFrequency", parseFloat(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-white/50 text-xs">Frequency of randomness</p>
            </div>

            {/* Random Time Speed */}
            <div className="space-y-2">
              <label className="text-white/70 text-sm font-medium block">
                Random Time Speed: <span className="text-primary font-bold">{params.randomTimeSpeed.toFixed(2)}</span>
              </label>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={params.randomTimeSpeed}
                onChange={(e) => handleParamChange("randomTimeSpeed", parseFloat(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
              <p className="text-white/50 text-xs">Speed of random animation</p>
            </div>
          </div>

          {/* JSON Export */}
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-white/70 text-sm mb-2">Copy these values to WavesBackground.tsx:</p>
            <code className="text-xs text-primary/80 font-mono block p-2 bg-black/50 rounded overflow-auto">
              {`// In animate function:
timeRef.current += ${params.speed};

// In drawing loop:
const randomVariation = Math.sin(x * ${params.randomFrequency.toFixed(4)} + time * ${params.randomTimeSpeed.toFixed(2)}) * ${params.randomScale.toFixed(1)};`}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
