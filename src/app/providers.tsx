"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WavesBackground } from "@/components/layout/WavesBackground";
import { PullToRefresh } from "@/components/utilities/PullToRefresh";
import { ScrollToTopOnRouteChange } from "@/components/utilities/ScrollToTopOnRouteChange";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export function RootProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <PullToRefresh />
      <Toaster />
      <Sonner />
      <ScrollToTopOnRouteChange />
      <WavesBackground />
      {children}
    </QueryClientProvider>
  );
}
