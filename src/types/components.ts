import { LucideIcon } from "lucide-react";

/**
 * Représente un bénéfice affiché dans la section Benefits
 */
export interface Benefit {
  /** Icône Lucide représentant le bénéfice */
  icon: LucideIcon;
  /** Titre du bénéfice */
  title: string;
  /** Description du bénéfice */
  description: string;
}

/**
 * Représente une étape du processus d'intervention
 */
export interface ProcessStep {
  /** Numéro de l'étape (ex: "01", "02", "03") */
  number: string;
  /** Icône Lucide représentant l'étape */
  icon: LucideIcon;
  /** Titre de l'étape */
  title: string;
  /** Description détaillée de l'étape */
  description: string;
  /** Point fort ou information complémentaire sur l'étape */
  highlight: string;
}

/**
 * Représente un cas d'usage ou service proposé
 */
export interface UseCase {
  /** Icône Lucide représentant le cas d'usage */
  icon: LucideIcon;
  /** Titre du cas d'usage */
  title: string;
  /** Description du cas d'usage */
  description: string;
}
