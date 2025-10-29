import { CaseStudy } from "@/types/caseStudy";

export const triageEmailsIA: CaseStudy = {
  id: "triage-emails-ia",
  title: "Inbox sous contrôle en quelques jours",
  summary: "Classement automatique par catégorie, 3 brouillons proposés, vous validez et envoyez.",
  category: "support",
  client: "PME multi-secteurs",
  sector: "Support client",
  tools: ["gmail", "n8n", "openai"],
  timeline: "Déployé en 1 semaine",
  highlights: [
    {
      icon: "TrendingUp",
      label: "Réduction du backlog",
      value: "1200 → 240",
    },
    {
      icon: "Clock",
      label: "Temps de traitement/mail",
      value: "8 min → 3 min",
    },
    {
      icon: "Zap",
      label: "% mails traités / jour",
      value: "95%",
    },
  ],
  context: "PME dont l'inbox accumule 100-150 emails/jour (prospection, fournisseurs, support, RH). Sans tri, impossible de distinguer urgent de peut-attendre. Les mails importants se perdent, la réactivité s'effondre.",
  trigger: "Quand l'inbox atteint 1200 emails non traités et que le responsable ne sait même pas s'il manque des commandes fournisseur ou des demandes clients.",
  challenges: [
    "❌ Perte d'emails importants noyés dans la masse (support client, commandes)",
    "❌ Fatigue décisionnelle : trier manuellement chaque email tue la productivité",
    "❌ Manque de traçabilité : impossible de savoir quel email a reçu une réponse",
  ],
  howItWorks: [
    {
      step: 1,
      emoji: "📧",
      title: "Tri intelligent",
      description: "Agent IA analyse chaque email : intent (support/vente/admin), sentiment (urgent/normal), catégorie",
    },
    {
      step: 2,
      emoji: "🤖",
      title: "Génération de brouillons",
      description: "3 réponses proposées selon le ton : positive, neutre, négative. Variables dynamiques incluses",
    },
    {
      step: 3,
      emoji: "✅",
      title: "Validation et envoi",
      description: "Vous choisissez le brouillon, adaptez si besoin, et envoyez en 1 clic",
    },
    {
      step: 4,
      emoji: "📊",
      title: "Reporting",
      description: "Tableau Notion avec KPI : mails traités/jour, temps par catégorie, tendances",
    },
  ],
  results: [
    "Backlog divisé par 5 : **1200 → 240** en une semaine",
    "Temps par mail : **8 min → 3 min** (−62%)",
    "SLA interne respecté à : **95%** (<24h réponse)",
    "Productivité globale : **+40%** sur autres tâches",
  ],
  impact: "L'inbox devient un système, pas un cauchemar. Les emails importants remontent d'eux-mêmes. L'équipe traite 95% du flux en fin de journée sans fatigue décisionnelle. C'est de l'ordre retrouvé.",
  testimonial: {
    quote: "Mon inbox était un dépotoir. Maintenant c'est un système. Je vois tout ce qui compte et j'envoie des réponses en 3 min.",
    author: "Responsable client, PME services",
  },
  idealFor: [
    "PME recevant 80-200 emails/jour sans système de tri",
    "Équipes support/administratif avec inbox surchargée >500 emails non traités",
    "Organisations cherchant à améliorer CSAT avec réponses plus rapides",
  ],
  deployment: {
    duration: "1 semaine",
    training: "20 minutes (configuration catégories + lancement du tri)",
    validation: "Génération de brouillons, vous choisissez et envoyez (zéro automatisme, 100% contrôle)",
  },
  opportunities: [
    "Apprentissage supervisé sur vos réponses 'golden' pour affiner progressivement la génération",
    "Règles de priorisation par contact VIP (clients importants, fournisseurs critiques)",
    "Intégration avec CRM pour lier emails aux contacts et automatiser les mises à jour",
  ],
};
