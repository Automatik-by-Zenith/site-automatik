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

/**
 * Représente une tâche dans le simulateur de gain de temps
 */
export interface TimeSavingTask {
  /** Identifiant unique de la tâche */
  id: string;
  /** Icône Lucide représentant la tâche */
  icon: LucideIcon;
  /** Titre de la tâche */
  title: string;
  /** Description de la tâche */
  description: string;
  /** Temps moyen en minutes pour accomplir la tâche */
  estimatedTime: number;
  /** Nombre moyen de fois par jour/semaine */
  frequency: number;
}

/**
 * Résultat du calcul du simulateur
 */
export interface SimulatorResults {
  /** Total des minutes perdues par jour */
  totalMinutesPerDay: number;
  /** Total des heures perdues par semaine */
  totalHoursPerWeek: number;
  /** Total des jours perdus par an */
  totalDaysPerYear: number;
  /** Coût total par jour */
  costPerDay: number;
  /** Coût total par mois */
  costPerMonth: number;
  /** Coût total par an */
  costPerYear: number;
}
