"use client";

import { Button } from "@/components/ui/button";
import { Shield, Eye, Users, TrendingUp, Key, ArrowRight } from "lucide-react";
import { IconCard } from "@/components/ui/icon-card";

const benefits = [
  {
    icon: Shield,
    title: "Fiabilité sans faille",
    description: "Des systèmes robustes, testés, et documentés.",
  },
  {
    icon: TrendingUp,
    title: "Du temps retrouvé",
    description: "Chaque automatisation rend vos journées plus légères.",
  },
  {
    icon: Key,
    title: "Clé en main",
    description: "Rien à installer, rien à configurer. Juste à en profiter.",
  },
  {
    icon: TrendingUp,
    title: "Conçu pour durer",
    description: "Des process élégants, simples à faire évoluer, jamais obsolètes.",
  },
];

export const Benefits = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Vos bénéfices{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              immédiats
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <IconCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              iconSize="sm"
            />
          ))}
        </div>

        {/* CTA en dehors */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="group bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('lead-magnet');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Réserver un RDV visio de 30 min
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
