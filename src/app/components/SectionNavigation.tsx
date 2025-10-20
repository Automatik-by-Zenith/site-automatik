"use client";

import { useState, useEffect } from "react";
import { Home, Sparkles, BookOpen, Route, Trophy, FileText, Gift, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThrottledScroll } from "@/hooks/useThrottledScroll";

const sections = [
  { id: "hero", label: "Accueil", icon: Home },
  { id: "why-us", label: "Pourquoi nous", icon: Sparkles },
  { id: "use-cases", label: "Cas d'usage", icon: BookOpen },
  { id: "benefits", label: "Avantages", icon: Trophy },
  { id: "process", label: "Processus", icon: Route },
  { id: "case-studies", label: "Études de cas", icon: FileText },
  { id: "faq", label: "FAQ", icon: HelpCircle },
];

export const SectionNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = () => {
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section.id);
          break;
        }
      }
    }
  };

  useThrottledScroll(handleScroll, 100);

  useEffect(() => {
    handleScroll();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
      <div className="glass-card p-2 space-y-1 rounded-full">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-accent text-muted-foreground hover:text-accent-foreground"
              )}
              aria-label={section.label}
            >
              <Icon className="w-4 h-4" />
              
              {/* Tooltip */}
              <span className="absolute right-full mr-4 px-3 py-2 bg-popover text-popover-foreground text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap shadow-lg border">
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
