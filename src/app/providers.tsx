"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { StarryBackground } from "@/components/layout/StarryBackground";
import { PullToRefresh } from "@/components/utilities/PullToRefresh";
import { ScrollToTopOnRouteChange } from "@/components/utilities/ScrollToTopOnRouteChange";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export function RootProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <PullToRefresh />
        <Toaster />
        <Sonner />
        <ScrollToTopOnRouteChange />
        <StarryBackground />
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
