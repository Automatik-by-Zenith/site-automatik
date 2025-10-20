"use client";
import { useCallback, useEffect, useRef } from 'react';

export const useThrottledScroll = (callback: () => void, delay: number = 100) => {
  const throttleRef = useRef<NodeJS.Timeout | null>(null);
  const throttledCallback = useCallback(() => {
    if (throttleRef.current) return;
    callback();
    throttleRef.current = setTimeout(() => {
      throttleRef.current = null;
    }, delay);
  }, [callback, delay]);

  useEffect(() => {
    window.addEventListener('scroll', throttledCallback);
    return () => window.removeEventListener('scroll', throttledCallback);
  }, [throttledCallback]);
};
