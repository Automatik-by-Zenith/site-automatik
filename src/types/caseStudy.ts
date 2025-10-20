/**
 * Représente un indicateur de performance clé affiché sous forme de carte
 */
export interface CaseStudyMetric {
  /** Libellé de la métrique (ex: "Taux de réponse") */
  label: string;
  /** Valeur de la métrique (ex: "95%", "12h") */
  value: string;
  /** Nom de l'icône Lucide (ex: "Clock", "TrendingUp", "CheckCircle") */
  icon: string;
}

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
 * Structure complète d'une étude de cas
 */
export interface CaseStudy {
  /** Identifiant unique de l'étude de cas (slug) */
  id: string;
  /** Titre principal de l'étude de cas */
  title: string;
  /** Résumé court affiché dans les cartes */
  summary: string;
  /** Sous-titre descriptif */
  subtitle: string;
  /** Catégorie de l'étude de cas (ex: "hotellerie", "commercial", "support") */
  category: string;
  /** Nom du client (peut être anonymisé) */
  client: string;
  /** Secteur d'activité */
  sector: string;
  /** Liste des outils utilisés (ex: ["openai", "n8n", "google"]) */
  tools: string[];
  /** Métriques clés affichées en haut de l'étude de cas */
  metrics: CaseStudyMetric[];
  /** Points forts mis en avant avec évolution avant/après */
  highlights: CaseStudyHighlight[];
  /** Contexte et situation initiale du client */
  context: string;
  /** Liste des problèmes rencontrés */
  problem: string[];
  /** Liste des solutions apportées */
  solution: string[];
  /** Liste des résultats obtenus */
  results: string[];
  /** Stack technique détaillée */
  stack: string;
  /** Prochaines étapes et évolutions possibles */
  nextSteps: string[];
}
