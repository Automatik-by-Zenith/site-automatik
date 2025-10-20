"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { StarryBackground } from "@/components/StarryBackground";
import { PullToRefresh } from "@/components/PullToRefresh";
import { ScrollToTopOnRouteChange } from "@/components/ScrollToTopOnRouteChange";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export function RootProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <PullToRefresh />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTopOnRouteChange />
          <StarryBackground />
          {children}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
