"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/utilities/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentSection } from "@/components/ui/ContentSection";
import { ArrowLeft, ArrowRight, Clock, TrendingUp } from "lucide-react";
import caseStudiesData from "@/data/caseStudies.json";
import { CaseStudy, CaseStudyHighlight } from "@/types/caseStudy";
import { iconMap } from "@/config/icons";
import { GradientText } from "@/components/ui/GradientText";

export function EtudeDeCasDetailClient() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;

  // Memoize case study lookup to avoid repeated searches
  const etude = useMemo(() => {
    return (caseStudiesData as CaseStudy[]).find(cas => cas.id === id);
  }, [id]);

  // Memoize highlights with icon transformations
  const highlightsWithIcons = useMemo(() => {
    if (!etude) return [];
    return etude.highlights.map((highlight: CaseStudyHighlight) => ({
      ...highlight,
      Icon: iconMap[highlight.icon] || Clock
    }));
  }, [etude]);

  if (!etude) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Étude de cas non trouvée</h1>
            <Button asChild>
              <Link href="/etudes-de-cas">
                <ArrowLeft className="mr-2 w-4 h-4" aria-hidden="true" />
                Retour aux études de cas
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/etudes-de-cas">
                <ArrowLeft className="mr-2 w-4 h-4" aria-hidden="true" />
                Retour aux études de cas
              </Link>
            </Button>

            <Badge className="mb-4">{etude.sector}</Badge>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{etude.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{etude.subtitle}</p>
            <p className="text-sm text-muted-foreground">Client : {etude.client}</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightsWithIcons.map((highlight, idx: number) => {
              const Icon = highlight.Icon;
              return (
                <Card key={idx} variant="glass">
                  <CardContent className="p-6 text-center space-y-2">
                    <Icon className="w-8 h-8 mx-auto text-primary mb-2" aria-hidden="true" />
                    <p className="text-sm text-muted-foreground">{highlight.label}</p>
                    <p className="text-2xl font-bold">{highlight.value}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Context */}
      <ContentSection
        title="Contexte"
        content={etude.context}
        variant="default"
      />

      {/* Problem */}
      <ContentSection
        title="Problème"
        items={etude.problem}
        iconElement="•"
        variant="bg-card"
      />

      {/* Solution */}
      <ContentSection
        title="Solution"
        items={etude.solution}
        iconElement="✓"
        variant="default"
        footer={{
          title: "Architecture & stack",
          content: etude.stack
        }}
      />

      {/* Results */}
      <ContentSection
        title="Résultats"
        items={etude.results}
        icon={TrendingUp}
        variant="bg-card"
      />

      {/* Next Steps */}
      <ContentSection
        title="Prochaines étapes"
        items={etude.nextSteps}
        icon={ArrowRight}
        variant="bg-card"
      />

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="glass" className="max-w-4xl mx-auto p-8 md:p-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Besoin d'une solution{" "}
                <GradientText>
                  similaire ?
                </GradientText>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discutons de votre projet lors d'un rendez-vous de 30 minutes.
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
