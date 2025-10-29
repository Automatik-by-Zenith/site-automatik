import { CaseStudy } from "@/types/caseStudy";

export const hotelAvisGoogleIA: CaseStudy = {
  id: "hotel-avis-google-ia",
  title: "Réponses aux avis Google, 100% dans le ton de la marque",
  summary: "Un agent IA rédige, relit et programme l'envoi. L'équipe ne fait que valider.",
  category: "hotellerie",
  client: "Hôtel multi-sites",
  sector: "Hôtellerie",
  tools: ["openai", "google", "n8n"],
  timeline: "Déployé en 2-3 semaines",
  highlights: [
    {
      icon: "Clock",
      label: "Temps gagné / semaine",
      value: "20h → 8h",
    },
    {
      icon: "Star",
      label: "Taux de réponse aux avis",
      value: "45% → 95%",
    },
    {
      icon: "TrendingUp",
      label: "Note moyenne",
      value: "4.1 → 4.6",
    },
  ],
  context: "Hôtel multi-sites qui reçoit 30-40 avis par semaine. Chaque avis non répondu en moins de 2h a 40% de chances d'être amplifié par d'autres commentaires négatifs. L'équipe de réception noyée sous les demandes de rédaction ne pouvait pas suivre.",
  trigger: "Le jour où un avis négatif est resté sans réponse pendant 48h et a généré 3 autres commentaires négatifs en cascade, impactant la note moyenne de 0.3 points.",
  challenges: [
    "❌ L'équipe perd 20h/semaine à rédiger des avis avec des tons incohérents",
    "❌ Au-delà de 2h, les réponses tardives font partir les clients ailleurs et amplifient les avis négatifs",
    "❌ Maintenir un ton de marque cohérent sur plusieurs sites et types de clients (familles, voyageurs affaires)",
  ],
  howItWorks: [
    {
      step: 1,
      emoji: "📧",
      icon: "Mail",
      title: "Réception",
      description: "Scraping sécurisé via API : les nouveaux avis arrivent automatiquement, l'IA extrait note, commentaire et type de client",
    },
    {
      step: 2,
      emoji: "🤖",
      icon: "Zap",
      title: "Génération",
      description: "Agent IA applique le prompt de marque : empathie, variantes selon la note, lignes rouges du secteur, cohérence tonale",
    },
    {
      step: 3,
      emoji: "✅",
      icon: "CheckCircle",
      title: "Validation",
      description: "Envoi automatique après période de test et validation. Brouillon systématique pour garder le contrôle",
    },
    {
      step: 4,
      emoji: "📊",
      icon: "BarChart3",
      title: "Suivi",
      description: "Tout est tracé : temps de réaction, sentiments détectés, variations de note par segment",
    },
  ],
  results: [
    "Taux de réponse porté à **95%** (avant 45%)",
    "Délai moyen de réponse : **48h → 2h** (critique en hôtellerie)",
    "Heures économisées : **48h/mois**",
    "Note moyenne stabilisée à **4.6** (+0.5)",
  ],
  impact: "L'équipe retrouve du temps pour faire de l'accueil de qualité au lieu de passer ses journées au clavier. Les clients voient que leurs avis sont importants, ce qui crée une boucle de fidélisation visible dans le taux de rétention.",
  testimonial: {
    quote: "On a retrouvé du temps pour faire de l'accueil, pas du clavier. Et les avis négatifs ne s'amplifient plus.",
    author: "Responsable qualité, Hôtel Prestige",
  },
  idealFor: [
    "Hôtels 10-50 chambres recevant >20 avis/mois sur Google Business Profile",
    "Groupes hôteliers avec plusieurs sites et besoin de cohérence tonale",
    "Établissements avec taux de réponse actuel <70% ou délais >4h",
  ],
  deployment: {
    duration: "2-3 semaines",
    training: "45 minutes (interface de validation)",
    validation: "Envoi automatique après période de test et validation des premières réponses",
  },
  opportunities: [
    "Analyse de sentiment par segment client (familles vs. voyageurs affaires) pour affiner les réponses",
    "Rapports mensuels d'e-réputation dans Notion avec tendances et recommandations",
    "A/B testing de variantes de ton pour optimiser le CSAT",
  ],
};
