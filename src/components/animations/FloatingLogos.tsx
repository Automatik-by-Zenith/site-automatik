"use client";

import { useEffect, useRef, useState } from "react";

interface Logo {
  src: string;
  alt: string;
  x: number;
  y: number;
  size: number;
  offsetX: number;
  offsetY: number;
}

const logosData: Omit<Logo, 'offsetX' | 'offsetY'>[] = [
  { src: "/assets/logos/openai.svg", alt: "OpenAI", x: 15, y: 20, size: 80 },
  { src: "/assets/logos/google.png", alt: "Google", x: 85, y: 25, size: 72 },
  { src: "/assets/logos/notion.png", alt: "Notion", x: 88, y: 60, size: 68 },
  { src: "/assets/logos/n8n.png", alt: "n8n", x: 12, y: 65, size: 76 },
  { src: "/assets/logos/messenger.png", alt: "Messenger", x: 82, y: 85, size: 64 },
  { src: "/assets/logos/gmail.svg", alt: "Gmail", x: 18, y: 88, size: 60 },
];

export const FloatingLogos = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [logos, setLogos] = useState<Logo[]>(
    logosData.map(logo => ({ ...logo, offsetX: 0, offsetY: 0 }))
  );
  const [connections, setConnections] = useState<[number, number][]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [lineProgress, setLineProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  // Generate random connections
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const generateConnections = () => {
      // Start fade out
      setIsFadingOut(true);
      setLineProgress(1);

      timeoutId = setTimeout(() => {
        const newConnections: [number, number][] = [];
        const numConnections = Math.floor(Math.random() * 3) + 2; // 2-4 connections

        for (let i = 0; i < numConnections; i++) {
          const from = Math.floor(Math.random() * logosData.length);
          let to = Math.floor(Math.random() * logosData.length);

          // Ensure not connecting to itself
          while (to === from) {
            to = Math.floor(Math.random() * logosData.length);
          }

          // Check if connection already exists
          const exists = newConnections.some(
            ([a, b]) => (a === from && b === to) || (a === to && b === from)
          );

          if (!exists) {
            newConnections.push([from, to]);
          }
        }

        setConnections(newConnections);
        setLineProgress(0);
        setIsFadingOut(false);
      }, 500); // Wait for fade out
    };

    generateConnections();
    const interval = setInterval(generateConnections, 4000); // Change every 4 seconds

    return () => {
      clearInterval(interval);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // Animate line drawing
  useEffect(() => {
    if (isFadingOut) return;
    
    if (lineProgress < 1) {
      const timer = setTimeout(() => {
        setLineProgress(prev => Math.min(prev + 0.02, 1));
      }, 16); // ~60fps
      
      return () => clearTimeout(timer);
    }
  }, [lineProgress, isFadingOut]);

  // Mouse tracking
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Update logo positions based on mouse
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    
    const newLogos = logosData.map((logo) => {
      const logoX = (logo.x / 100) * rect.width;
      const logoY = (logo.y / 100) * rect.height;
      
      const dx = logoX - mousePos.x;
      const dy = logoY - mousePos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const repelRadius = 150;
      let offsetX = 0;
      let offsetY = 0;
      
      if (distance < repelRadius && distance > 0) {
        const force = (repelRadius - distance) / repelRadius;
        offsetX = (dx / distance) * force * 30;
        offsetY = (dy / distance) * force * 30;
      }
      
      return { ...logo, offsetX, offsetY };
    });

    setLogos(newLogos);
  }, [mousePos]);

  // Draw connections
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;

      canvas.width = rect.width;
      canvas.height = rect.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "hsl(var(--primary))";
      ctx.lineWidth = 2;

      // Calculate opacity based on fade state
      const opacity = isFadingOut ? (1 - lineProgress) * 0.25 : lineProgress * 0.25;
      ctx.globalAlpha = opacity;

      connections.forEach(([fromIdx, toIdx]) => {
        const from = logos[fromIdx];
        const to = logos[toIdx];

        const x1 = (from.x / 100) * canvas.width + from.offsetX;
        const y1 = (from.y / 100) * canvas.height + from.offsetY;
        const x2 = (to.x / 100) * canvas.width + to.offsetX;
        const y2 = (to.y / 100) * canvas.height + to.offsetY;

        // Calculate the end point based on progress
        const currentX2 = isFadingOut ? x2 : x1 + (x2 - x1) * lineProgress;
        const currentY2 = isFadingOut ? y2 : y1 + (y2 - y1) * lineProgress;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(currentX2, currentY2);
        ctx.stroke();
      });
    };

    updateCanvas();

    window.addEventListener("resize", updateCanvas);
    return () => {
      window.removeEventListener("resize", updateCanvas);
    };
  }, [logos, connections, lineProgress, isFadingOut]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      
      {logos.map((logo, index) => (
        <div
          key={index}
          className="absolute animate-float transition-transform duration-300 ease-out"
          style={{
            left: `${logo.x}%`,
            top: `${logo.y}%`,
            transform: `translate(calc(-50% + ${logo.offsetX}px), calc(-50% + ${logo.offsetY}px))`,
            animationDelay: `${index * 0.5}s`,
            animationDuration: `${3 + index * 0.3}s`,
          }}
        >
          <div
            className="glass-interactive flex items-center justify-center p-4 rounded-2xl"
            style={{
              width: `${logo.size}px`,
              height: `${logo.size}px`,
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain"
              style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.15))" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};