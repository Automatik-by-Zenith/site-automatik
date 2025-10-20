import { Target, Code, Workflow, GraduationCap } from "lucide-react";
import type { UseCase } from "@/types/components";

export const USE_CASES: UseCase[] = [
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
      "Du prototypage au projet complet, avec les standards de l'Artisanat numérique. Des bases solides et durables pour vos applications.",
  },
  {
    icon: Workflow,
    title: "Automatisation des processus métiers",
    description:
      "Analyse, conception et déploiement de processus automatisés, low-code ou développés sur mesure. Objectif : libérer vos équipes des tâches répétitives et fiabiliser vos flux quotidiens.",
  },
  {
    icon: GraduationCap,
    title: "Formation & acculturation à l'IA",
    description:
      "Accompagnement des équipes à l'usage des outils mis en place et découverte des nouvelles pratiques liées à l'intelligence artificielle.",
  },
];
