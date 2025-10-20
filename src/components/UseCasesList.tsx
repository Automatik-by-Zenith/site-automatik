import { Target, Code, Workflow, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IconCard } from "@/components/ui/icon-card";

const useCases = [
  {
    icon: Target,
    title: "Direction & pilotage de projets IA / web",
    description:
      "Direction produit, coordination des équipes et cadrage des besoins. Nous assurons la cohérence entre vision stratégique et exécution technique.",
  },
  {
    icon: Code,
    title: "Développement web & logiciels sur-mesure",
    description:
      "Du MVP au projet complet, avec les standards du software craftsmanship. Des bases solides et durables pour vos applications.",
  },
  {
    icon: Workflow,
    title: "Automatisation des processus métiers",
    description:
      "Analyse, conception et déploiement de workflows automatisés, low-code ou développés sur mesure. Objectif : libérer vos équipes des tâches répétitives et fiabiliser vos flux quotidiens.",
  },
  {
    icon: GraduationCap,
    title: "Formation & acculturation à l'IA",
    description:
      "Accompagnement des équipes à l'usage des outils mis en place et découverte des nouvelles pratiques liées à l'intelligence artificielle.",
  },
];

export const UseCasesList = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            À votre service{" "}
            <span className="text-primary">
              pour…
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {useCases.map((useCase, index) => (
            <IconCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>

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
