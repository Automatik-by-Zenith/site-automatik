"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/utilities/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import caseStudiesData from "@/data/caseStudies.json";
import { CaseStudy, CaseStudyHighlight } from "@/types/caseStudy";
import { iconMap } from "@/config/icons";

export function EtudeDeCasDetailClient() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : params?.id;
  const etude = (caseStudiesData as CaseStudy[]).find(cas => cas.id === id);

  if (!etude) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Étude de cas non trouvée</h1>
            <Button asChild>
              <Link href="/etudes-de-cas">
                <ArrowLeft className="mr-2 w-4 h-4" />
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
                <ArrowLeft className="mr-2 w-4 h-4" />
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
            {etude.highlights.map((highlight: CaseStudyHighlight, idx: number) => {
              const Icon = iconMap[highlight.icon] || Clock;
              return (
                <Card key={idx} variant="glass">
                  <CardContent className="p-6 text-center space-y-2">
                    <Icon className="w-8 h-8 mx-auto text-primary mb-2" />
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
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Contexte</h2>
            <Card variant="glass">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed">{etude.context}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Problème</h2>
            <Card variant="glass">
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {etude.problem.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Solution</h2>
            <Card variant="glass">
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {etude.solution.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Separator className="my-6" />
                <div>
                  <h3 className="font-semibold mb-3">Architecture & stack</h3>
                  <p className="text-sm text-muted-foreground font-mono">{etude.stack}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Résultats</h2>
            <Card variant="glass">
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {etude.results.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-12 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Prochaines étapes</h2>
            <Card variant="glass">
              <CardContent className="p-8">
                <ul className="space-y-3">
                  {etude.nextSteps.map((item: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card variant="glass" className="max-w-4xl mx-auto p-8 md:p-12">
            <div className="text-center space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Besoin d'une solution{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  similaire ?
                </span>
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
                  <ArrowRight className="ml-2 w-4 h-4" />
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
