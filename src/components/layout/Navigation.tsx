"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { useThrottledScroll } from "@/hooks/useThrottledScroll";
import { navItems, navCtaButton } from "@/config/navigation";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useThrottledScroll(() => {
    setIsScrolled(window.scrollY > 20);
  }, 100);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    // Handle Escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }

      // Handle Tab and Shift+Tab for focus trap
      if (e.key === 'Tab') {
        const mobileMenu = mobileMenuRef.current;
        if (!mobileMenu) return;

        const focusableElements = mobileMenu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const focusableArray = Array.from(focusableElements);

        if (focusableArray.length === 0) return;

        const firstElement = focusableArray[0];
        const lastElement = focusableArray[focusableArray.length - 1];
        const activeElement = document.activeElement as HTMLElement;

        // Shift+Tab on first element: go to last
        if (e.shiftKey && activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
        // Tab on last element: go to first
        else if (!e.shiftKey && activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <nav aria-label="Main navigation" className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-500 ${isScrolled ? 'bg-background/95 border-b border-border/50' : 'bg-transparent border-b border-transparent'}`}>
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
            <Button size="sm" className="bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 text-primary-foreground" asChild>
              <Link href={navCtaButton.href}>{navCtaButton.label}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            ref={menuButtonRef}
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
          <div
            ref={mobileMenuRef}
            className="lg:hidden py-4 space-y-3 animate-in slide-in-from-top-2 duration-200"
          >
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
