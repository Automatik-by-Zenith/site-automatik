"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/utilities/ThemeToggle";
import { Logo } from "./Logo";
import { useThrottledScroll } from "@/hooks/useThrottledScroll";
import { navItems, navCtaButton } from "@/config/navigation";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useThrottledScroll(() => {
    setIsScrolled(window.scrollY > 20);
  }, 100);

  return (
    <nav className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-500 ${isScrolled ? 'bg-background/95 border-b border-border/50' : 'bg-transparent border-b border-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <Link href="/" className={`flex-shrink-0 flex items-center gap-3 hover:opacity-80 transition-all duration-500 ${isScrolled ? 'scale-100' : 'scale-110 md:scale-125 lg:scale-150'}`}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
            <Button size="sm" className="bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-primary-foreground" asChild>
              <Link href={navCtaButton.href}>{navCtaButton.label}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors text-foreground"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button size="sm" className="w-full bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-primary-foreground" asChild>
              <Link href={navCtaButton.href} onClick={() => setIsOpen(false)}>{navCtaButton.label}</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
