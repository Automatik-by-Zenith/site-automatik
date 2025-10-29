/**
 * Représente un point fort mis en avant dans l'étude de cas
 */
export interface CaseStudyHighlight {
  /** Nom de l'icône Lucide utilisée dans iconMap */
  icon: string;
  /** Libellé du point fort */
  label: string;
  /** Valeur affichée (ex: "20h → 8h", "45% → 95%") */
  value: string;
}

/**
 * Représente une étape du workflow "Comment ça marche"
 */
export interface WorkflowStep {
  /** Numéro de l'étape */
  step: number;
  /** Emoji représentant l'étape (ex: "📧", "🤖", "✅", "📊") - utilisé comme fallback si icon n'est pas fourni */
  emoji: string;
  /** Nom de l'icône Lucide (ex: "Mail", "Zap", "CheckCircle", "BarChart3") */
  icon?: string;
  /** Titre court de l'étape */
  title: string;
  /** Description détaillée (1-2 phrases) */
  description: string;
}

/**
 * Représente le déploiement et la formation
 */
export interface DeploymentInfo {
  /** Durée du déploiement (ex: "2-3 semaines") */
  duration: string;
  /** Durée de formation estimée (ex: "45 minutes") */
  training: string;
  /** Description du processus de validation */
  validation: string;
}

/**
 * Représente un témoignage client
 */
export interface Testimonial {
  /** Citation du client (80-120 caractères) */
  quote: string;
  /** Auteur du témoignage (ex: "Prénom, Fonction") */
  author: string;
}

/**
 * Structure complète d'une étude de cas
 */
export interface CaseStudy {
  /** Identifiant unique de l'étude de cas (slug) */
  id: string;
  /** Titre principal de l'étude de cas */
  title: string;
  /** Résumé court affiché dans les cartes */
  summary: string;
  /** Catégorie de l'étude de cas (ex: "hotellerie", "commercial", "support") */
  category: string;
  /** Nom du client (peut être anonymisé) */
  client: string;
  /** Secteur d'activité */
  sector: string;
  /** Timeline de déploiement (ex: "Déployé en 2-3 semaines") */
  timeline: string;
  /** Liste des outils utilisés (ex: ["openai", "n8n", "google"]) */
  tools: string[];
  /** Points forts mis en avant avec évolution avant/après */
  highlights: CaseStudyHighlight[];
  /** Contexte et situation initiale du client */
  context: string;
  /** Le moment déclic qui a motivé le changement (optionnel) */
  trigger?: string;
  /** Liste des défis identifiés */
  challenges: string[];
  /** Étapes du workflow "Comment ça marche" */
  howItWorks: WorkflowStep[];
  /** Liste des résultats obtenus (supports markdown **bold**) */
  results: string[];
  /** Description de l'impact global */
  impact: string;
  /** Témoignage client */
  testimonial: Testimonial;
  /** Pour qui cette solution est faite */
  idealFor: string[];
  /** Informations de déploiement */
  deployment: DeploymentInfo;
  /** Opportunités et évolutions possibles */
  opportunities: string[];
}
