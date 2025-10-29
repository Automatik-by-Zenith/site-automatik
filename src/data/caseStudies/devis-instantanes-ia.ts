import { CaseStudy } from "@/types/caseStudy";

export const devisInstantenesIA: CaseStudy = {
  id: "devis-instantanes-ia",
  title: "Du mail client au devis PDF en 90 secondes",
  summary: "Extraction, règles métiers, rendu PDF, relecture humaine puis envoi.",
  category: "commercial",
  client: "Entreprise de services",
  sector: "Commercial",
  tools: ["n8n", "gmail", "openai"],
  timeline: "Déployé en 2 semaines",
  highlights: [
    {
      icon: "Clock",
      label: "Temps par devis",
      value: "45 min → 1:30",
    },
    {
      icon: "TrendingUp",
      label: "Conversion sous 2h",
      value: "32% → 67%",
    },
    {
      icon: "Zap",
      label: "SLA réponse < 2h",
      value: "92% des cas",
    },
  ],
  context: "Entreprise de services recevant 15-20 demandes/jour via email. Chaque devis nécessite d'extraire infos (nombre de personnes, options, allergies), appliquer règles tarifaires complexes, formater un PDF pro, puis valider.",
  trigger: "Après avoir perdu un contrat de 12K€ parce que le devis est parti 3h trop tard (concurrence arrivée d'abord), et que le client a changé d'avis.",
  challenges: [
    "❌ Traitement lent (45 min/devis) : les demandes après 14h n'ont pas de réponse le jour même",
    "❌ Au-delà de 2h, les chances de signature chutent de 60% (comparaison avec concurrence)",
    "❌ Variabilité du chiffrage et PDFs mal formatés = perte de crédibilité et allers-retours",
  ],
  howItWorks: [
    {
      step: 1,
      emoji: "📧",
      icon: "Mail",
      title: "Extraction automatique",
      description: "Webhook email → parsing intelligent du contenu : nombre personnes, options, allergies, budget",
    },
    {
      step: 2,
      emoji: "🤖",
      icon: "Zap",
      title: "Calcul métier",
      description: "Agent IA applique règles tarifaires : remises volume, seuils d'options, variations saisonnières",
    },
    {
      step: 3,
      emoji: "✅",
      icon: "CheckCircle",
      title: "Validation humaine",
      description: "Devis généré en PDF + brouillon email. L'équipe vérifie et envoie en un clic",
    },
    {
      step: 4,
      emoji: "📊",
      icon: "BarChart3",
      title: "Suivi et traçabilité",
      description: "Chaque devis est loggé : temps de réaction, montant, conversion, pour analytics et KPI",
    },
  ],
  results: [
    "Temps moyen par devis : **45 min → 1:30**",
    "Taux d'envoi < 2h : **92%** (SLA critique)",
    "Conversion : **67%** (+35%)",
    "Heures économisées : **60h/mois**",
  ],
  impact: "Les devis arrivent avant la concurrence. Les clients voient de la réactivité et du sérieux (PDF pro, chiffres cohérents). La conversion double parce que le timing est bon et le document inspire confiance.",
  testimonial: {
    quote: "Les clients reçoivent le devis une heure après leur demande. On signe 2x plus parce qu'on arrive en premier.",
    author: "Directeur commercial, Groupe Services événementiel",
  },
  idealFor: [
    "Équipes commerciales de 3-10 personnes traitant >50 devis/mois",
    "Services avec tarification basée sur des variables (volume, options, saisonnalité)",
    "Secteurs où le timing SLA < 2h est compétitif (événements, prestations)",
  ],
  deployment: {
    duration: "2 semaines",
    training: "60 minutes (configuration règles tarifaires + validation workflow)",
    validation: "Validation humaine obligatoire sur chaque devis avant envoi (workflow d'approbation)",
  },
  opportunities: [
    "Contrôle IA de second niveau (QA) pour vérifier cohérence tarifs avant envoi",
    "Vérification dispo/ERP en temps réel pour refuser/adapter automatiquement les devis impossibles",
    "Signature électronique (e-IDAS) intégrée pour augmenter le taux de signature instantanée",
  ],
};
