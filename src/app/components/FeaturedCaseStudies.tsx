import { CaseStudyCard } from "../etudes-de-cas/components/CaseStudyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies/index";
export const FeaturedCaseStudies = () => {
  // Display first 3 case studies
  const featuredCases = caseStudies.slice(0, 3);
  return <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Études de{" "}
            <span className="text-primary">cas</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Découvrez comment nos clients ont transformé leurs processus avec des solutions IA et automatisation sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCases.map(cas => {
            // Convert highlights to metrics format for card display
            const metrics = cas.highlights.map(h => ({
              label: h.label,
              value: h.value,
              icon: h.icon
            }));
            return <CaseStudyCard key={cas.id} id={cas.id} title={cas.title} summary={cas.summary} client={cas.client} tools={cas.tools} metrics={metrics} />;
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link href="/etudes-de-cas">
              Voir toutes les études de cas
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>;
};