import Link from "next/link";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/utilities/ScrollToTop";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentSection } from "@/components/ui/ContentSection";
import { ArrowLeft, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { caseStudies } from "@/data/caseStudies/index";
import { CaseStudy, CaseStudyHighlight } from "@/types/caseStudy";
import { iconMap } from "@/config/icons";
import { GradientText } from "@/components/ui/GradientText";

interface EtudeDeCasDetailProps {
  params: Promise<{ id: string }>;
}

export async function EtudeDeCasDetail({ params }: EtudeDeCasDetailProps) {
  const { id } = await params;

  // Find case study from static data
  const etude = caseStudies.find(cas => cas.id === id);

  if (!etude) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Étude de cas non trouvée</h1>
            <Link
              href="/etudes-de-cas"
              className="inline-flex items-center text-foreground hover:text-primary transition-colors duration-300"
            >
              <ArrowLeft className="mr-2 w-4 h-4" aria-hidden="true" />
              Retour aux études de cas
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Transform highlights with icons
  const highlightsWithIcons = etude.highlights.map((highlight: CaseStudyHighlight) => ({
    ...highlight,
    Icon: iconMap[highlight.icon] || Clock
  }));

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <Link
                href="/etudes-de-cas"
                className="inline-flex items-center text-foreground hover:text-primary transition-colors duration-300"
              >
                <ArrowLeft className="mr-2 w-4 h-4" aria-hidden="true" />
                Retour aux études de cas
              </Link>

              <Badge>{etude.sector}</Badge>
              <Badge variant="outline">{etude.timeline}</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{etude.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{etude.summary}</p>
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

      {/* Trigger (optionnel) */}
      {etude.trigger && (
        <ContentSection
          title="Le moment déclic"
          content={etude.trigger}
          variant="bg-card"
        />
      )}

      {/* Challenges */}
      <ContentSection
        title="Les défis"
        items={etude.challenges}
        iconElement="❌"
        variant="bg-card"
      />

      {/* How it works */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Comment ça marche</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {etude.howItWorks.map((step, idx) => (
                <Card key={idx} variant="glass">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{step.emoji}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                            Étape {step.step}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <ContentSection
        title="Résultats"
        items={etude.results}
        icon={TrendingUp}
        variant="bg-card"
      />

      {/* Impact */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card variant="glass" className="p-8 md:p-12">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold">L'impact global</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {etude.impact}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card variant="glass" className="p-8 md:p-12 border-l-4 border-primary">
              <div className="space-y-4">
                <p className="text-lg italic text-foreground">
                  "{etude.testimonial.quote}"
                </p>
                <p className="text-sm font-semibold text-muted-foreground">
                  — {etude.testimonial.author}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <ContentSection
        title="Pour qui ?"
        items={etude.idealFor}
        iconElement="✓"
        variant="default"
      />

      {/* Deployment */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Déploiement & formation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="glass">
                <CardContent className="p-6 space-y-3">
                  <Clock className="w-8 h-8 text-primary" aria-hidden="true" />
                  <h3 className="font-semibold">Durée</h3>
                  <p className="text-sm text-muted-foreground">{etude.deployment.duration}</p>
                </CardContent>
              </Card>
              <Card variant="glass">
                <CardContent className="p-6 space-y-3">
                  <span className="text-3xl">👥</span>
                  <h3 className="font-semibold">Formation</h3>
                  <p className="text-sm text-muted-foreground">{etude.deployment.training}</p>
                </CardContent>
              </Card>
              <Card variant="glass">
                <CardContent className="p-6 space-y-3">
                  <span className="text-3xl">✅</span>
                  <h3 className="font-semibold">Validation</h3>
                  <p className="text-sm text-muted-foreground">{etude.deployment.validation}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <ContentSection
        title="Et après ? Les opportunités"
        items={etude.opportunities}
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
