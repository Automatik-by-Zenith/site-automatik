import { LucideIcon } from "lucide-react";

/**
 * Représente un indicateur de performance clé affiché sous forme de carte
 */
export interface CaseStudyMetric {
  label: string;
  value: string;
  icon: string; // Nom de l'icône Lucide (ex: "Clock", "TrendingUp", etc.)
}

/**
 * Représente un point fort mis en avant dans l'étude de cas
 */
export interface CaseStudyHighlight {
  icon: string; // Nom de l'icône Lucide utilisée dans iconMap
  label: string;
  value: string;
}

/**
 * Structure complète d'une étude de cas
 */
export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  subtitle: string;
  category: string;
  client: string;
  sector: string;
  tools: string[];
  metrics: CaseStudyMetric[];
  highlights: CaseStudyHighlight[];
  context: string;
  problem: string[];
  solution: string[];
  results: string[];
  stack: string;
  nextSteps: string[];
}

/**
 * Type pour la map d'icônes Lucide
 */
export type IconMap = Record<string, LucideIcon>;
