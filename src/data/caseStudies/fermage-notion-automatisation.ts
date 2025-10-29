import { CaseStudy } from "@/types/caseStudy";

export const fermageNotionAutomatisation: CaseStudy = {
  id: "fermage-notion-automatisation",
  title: "Le fermage sans tableurs ni papier",
  summary: "Un espace Notion structuré + automatisations email pour les quittances.",
  category: "gestion",
  client: "Propriétaire foncier",
  sector: "Gestion",
  tools: ["notion", "n8n", "gmail"],
  timeline: "Déployé en 3-4 semaines",
  highlights: [
    {
      icon: "Users",
      label: "Dossiers consolidés",
      value: "45 baux / 28 fermiers",
    },
    {
      icon: "TrendingUp",
      label: "Quittances générées",
      value: "180 / an",
    },
    {
      icon: "Clock",
      label: "Temps clôture fiscale",
      value: "8h → 2h",
    },
  ],
  context: "Propriétaire foncier avec 45 baux répartis sur plusieurs parcelles, fermiers, avenants. Paiements mensuels ou trimestriels, parfois partiels ou en retard. Historique éparpillé : factures papier, tableurs Excel, emails perdus.",
  trigger: "Après avoir passé 8h à reconstituer les paiements pour la déclaration fiscale, sans être certain que tout était exact, générant stress et risque d'erreur.",
  challenges: [
    "❌ Information éparpillée : papier, Excel, emails, notes diverses = impossible de retrouver l'historique complet",
    "❌ Historique flou : quelle année exactement payée ? quelles parcelles ? quels avenants appliqués ?",
    "❌ Clôture fiscale pénible : 8h de tri/vérification/reconstitution des paiements par fermier/année",
  ],
  howItWorks: [
    {
      step: 1,
      emoji: "📋",
      title: "Structure Notion",
      description: "Base relationnel : Fermiers, Baux, Avenants, Parcelles, Paiements. Relations + vues filtrées par année/statut",
    },
    {
      step: 2,
      emoji: "🤖",
      title: "Enregistrement des paiements",
      description: "Nouvelle ligne dans Paiements : date, montant, parcelles, notes. Notion applique automatiquement les tarifs et avenants",
    },
    {
      step: 3,
      emoji: "✅",
      title: "Génération quittance",
      description: "Vous générez et envoyez quittance en 1 clic : PDF + email brouillon avec tout paramétré",
    },
    {
      step: 4,
      emoji: "📊",
      title: "Rapports impôts",
      description: "Vues Notion prêtes : totaux par fermier/année, état des paiements, anomalies, retards",
    },
  ],
  results: [
    "Quittances générées en **1 clic** : **180/an** sans effort manuel",
    "Clôture fiscale simplifiée : **8h → 2h** (vues prêtes à l'export)",
    "Temps administratif : **−15h/mois**",
    "Zéro perte d'historique : **100%** de traçabilité retrouvée",
  ],
  impact: "Plus jamais de reconstitution pénible avant la fiscalité. Chaque paiement est tracé en temps réel. Les fermiers reçoivent leurs quittances immédiatement. Et quand arrive l'expert-comptable, tout est prêt en 5 min.",
  testimonial: {
    quote: "Avant je feriais des heures à reconstituer mes fichiers. Maintenant tout est clair. Et mes fermiers reçoivent leur quittance dans l'heure.",
    author: "Propriétaire foncier, agriculteur",
  },
  idealFor: [
    "Propriétaires fonciers avec 20-100+ baux à gérer",
    "Exploitants agricoles avec plusieurs fermiers et parcelles",
    "Gestionnaires de patrimoine foncier cherchant clarté fiscale et traçabilité",
  ],
  deployment: {
    duration: "3-4 semaines",
    training: "45 minutes (Notion + workflow d'envoi)",
    validation: "Vous générez et envoyez quittance en 1 clic via Notion (workflow automatisé)",
  },
  opportunities: [
    "Tableau de bord paiements en retard avec rappels visuels",
    "Rappels SMS/Email planifiés pour les paiements à venir ou en retard",
    "Signature électronique (e-IDAS) intégrée pour avenants et contrats",
  ],
};
