import { Search, Zap, Users } from "lucide-react";
import { IconCard } from "@/components/ui/icon-card";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostic 360°",
    description:
      "Nous analysons vos données, cartographions vos processus et animons des ateliers collaboratifs pour identifier ensemble les leviers d’impact.",
    highlight:
      "Vous êtes au cœur de cette phase : vos équipes partagent leur vision terrain, nous traduisons cela en opportunités d'optimisation concrètes.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Conception & itérations agiles",
    description:
      "Nous concevons et faisons évoluer la solution par cycles courts, avec des démonstrations et validations à chaque étape.",
    highlight:
      "Vous testez, challengez et validez les choix en continu — chaque itération renforce la justesse et l'appropriation de la solution.",
  },
  {
    number: "03",
    icon: Users,
    title: "Mise en production & transfert",
    description:
      "Nous préparons la mise en ligne, accompagnons la transition et assurons la continuité opérationnelle.",
    highlight:
      "Nous documentons, accompagnons et formons vos équipes pour qu'elles deviennent autonomes et gardent la main sur leurs outils.",
  },
];

export const ProcessSteps = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Notre méthodologie{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              d'intervention
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <IconCard
              key={index}
              icon={step.icon}
              title={step.title}
              className="relative overflow-hidden"
              badge={
                <div className="absolute top-4 right-4 text-7xl font-bold text-foreground/10 group-hover:text-foreground/15 transition-colors duration-500" aria-hidden="true">
                  {step.number}
                </div>
              }
            >
              <p className="text-base text-muted-foreground leading-relaxed mb-4">{step.description}</p>
              <p className="text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-3">{step.highlight}</p>
            </IconCard>
          ))}
        </div>
      </div>
    </section>
  );
};
