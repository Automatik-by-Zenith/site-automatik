"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/utilities/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { CaseStudyCard } from "./components/CaseStudyCard";
import caseStudiesData from "@/data/caseStudies.json";
import { GradientText } from "@/components/ui/GradientText";

const categories = [
  { id: "all", label: "Tous" },
  { id: "hotellerie", label: "Hôtellerie" },
  { id: "commercial", label: "Commercial" },
  { id: "support", label: "Support client" },
  { id: "gestion", label: "Gestion" },
];

export default function EtudesDeCas() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCases = selectedCategory === "all" 
    ? caseStudiesData 
    : caseStudiesData.filter(c => c.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl font-bold">
              Études de{" "}
              <GradientText>
                cas réelles
              </GradientText>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez comment nos clients ont transformé leurs processus avec des solutions IA et automatisation sur mesure.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className="rounded-full"
                aria-pressed={selectedCategory === cat.id}
                aria-label={`Filtrer par ${cat.label}`}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((cas) => (
              <CaseStudyCard
                key={cas.id}
                id={cas.id}
                title={cas.title}
                summary={cas.summary}
                client={cas.client}
                tools={cas.tools}
                metrics={cas.metrics}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="glass" className="max-w-4xl mx-auto p-8 md:p-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Prêt à transformer{" "}
                <GradientText>
                  votre activité ?
                </GradientText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discutons de votre prochain projet d'automatisation.
              </p>
              <Button
                size="lg"
                className="bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Réserver un RDV visio de 30 min
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
