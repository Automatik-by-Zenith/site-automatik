import { Search, Zap, Users } from "lucide-react";
import type { ProcessStep } from "@/types/components";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostic 360°",
    description:
      "Nous analysons vos données, cartographions vos processus et animons des ateliers collaboratifs pour identifier ensemble les leviers d'impact.",
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
