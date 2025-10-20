"use client";

import { useEffect, useRef, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export const PullToRefresh = () => {
  const [pullDistance, setPullDistance] = useState(0);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isPulling, setIsPulling] = useState(false);
  const startYRef = useRef(0);
  const currentYRef = useRef(0);

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      if (window.scrollY === 0) {
        startYRef.current = e.touches[0].clientY;
        setIsPulling(true);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isPulling || window.scrollY > 0) return;

      currentYRef.current = e.touches[0].clientY;
      const distance = currentYRef.current - startYRef.current;

      if (distance > 0) {
        // Résistance élastique: distance réelle × 0.5
        const actualDistance = Math.min(distance * 0.5, 80);
        setPullDistance(actualDistance);
        
        // Empêcher le scroll natif pendant le pull
        if (distance > 10) {
          e.preventDefault();
        }
      }
    };

    const handleTouchEnd = () => {
      if (!isPulling) return;
      
      setIsPulling(false);

      if (pullDistance > 60) {
        // Déclencher le refresh
        setIsRefreshing(true);
        setPullDistance(60); // Fixer la distance pendant le refresh
        
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        // Pas assez tiré, annuler
        setPullDistance(0);
      }
    };

    document.addEventListener("touchstart", handleTouchStart, { passive: true });
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);

    return () => {
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isPulling, pullDistance]);

  const opacity = Math.min(pullDistance / 60, 1);
  const isVisible = pullDistance > 0 || isRefreshing;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center pointer-events-none"
      style={{
        transform: `translateY(${isVisible ? pullDistance - 60 : -100}px)`,
        opacity: opacity,
        transition: isPulling ? "none" : "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="backdrop-blur-md bg-background/80 rounded-full p-4 shadow-lg">
        <Spinner 
          size="md" 
          color="primary"
          className={isRefreshing ? "animate-spin" : ""}
        />
      </div>
    </div>
  );
};
