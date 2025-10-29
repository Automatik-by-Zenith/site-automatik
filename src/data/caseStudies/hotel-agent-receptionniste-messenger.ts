import { CaseStudy } from "@/types/caseStudy";

export const hotelAgentReceptionniste: CaseStudy = {
  id: "hotel-agent-receptionniste-messenger",
  title: "Un réceptionniste virtuel qui répond en 3 secondes",
  summary: "Infos, disponibilités, collecte de téléphone, et escalade propre vers la réception.",
  category: "hotellerie",
  client: "Établissement hôtelier",
  sector: "Hôtellerie",
  tools: ["messenger", "openai", "n8n"],
  timeline: "Déployé en 3 semaines",
  highlights: [
    {
      icon: "Clock",
      label: "Délai de première réponse",
      value: "15 min → 3s",
    },
    {
      icon: "Users",
      label: "Leads avec n° récupéré",
      value: "78%",
    },
    {
      icon: "TrendingUp",
      label: "Taux de résolution 1er contact",
      value: "65%",
    },
  ],
  context: "Le Messenger de l'hôtel saturait l'équipe de réception avec des questions récurrentes pendant les pics : disponibilités, tarifs, conditions d'annulation. Les vraies urgences se perdaient dans la masse.",
  trigger: "Le jour où 15 messages sont restés sans réponse pendant 90 minutes de rush de check-in, générant des clients frustrés qui ont réservé ailleurs.",
  challenges: [
    "❌ Perte de leads : la première réponse > 15 min réduit les chances de booking de 35%",
    "❌ Réponses inégales et sans traçabilité : chaque réceptionniste répond différemment",
    "❌ Pas de collecte systématique de numéros : difficulté à contacter les leads non convertis",
  ],
  howItWorks: [
    {
      step: 1,
      emoji: "📧",
      title: "Réception instantanée",
      description: "Agent réceptionniste IA avec persona (prénoms variables, ton chaleureux) accuse réception en <3s",
    },
    {
      step: 2,
      emoji: "🤖",
      title: "Réponse intelligente",
      description: "Accès à base des infos hôtel, tarifs, FAQ, politiques. Répond directement ou demande le n° pour un suivi commercial",
    },
    {
      step: 3,
      emoji: "✅",
      title: "Escalade propre",
      description: "Si question complexe : collecte du n°, contexte → email récap à l'équipe avec tout en un seul message",
    },
    {
      step: 4,
      emoji: "📊",
      title: "Suivi commercial",
      description: "Chaque conversation est classée (lead/info/support) et archivée pour un suivi humain intelligent",
    },
  ],
  results: [
    "Réponse instantanée : **<3s** (vs. 15 min avant)",
    "Collecte de numéros : **78%** des conversations éligibles",
    "Décharge équipe réception : **−18h/semaine**",
    "Satisfaction client (CSAT chat) : **4.7/5**",
  ],
  impact: "La réception se concentre sur l'expérience client en face-à-face. Les leads ne s'évaporent plus. Les conversations banales sont déléguées, les vraies urgences remontes proprement.",
  testimonial: {
    quote: "Fini les vendredis à courir après les messages. On peut enfin accueillir les clients sans culpabilité.",
    author: "Directeur de réception, Hôtel Central",
  },
  idealFor: [
    "Hôtels 20-100 chambres avec >50 messages Messenger/semaine",
    "Établissements avec réception surchargée pendant peak hours",
    "Groupes hôteliers voulant systématiser la collecte de leads",
  ],
  deployment: {
    duration: "3 semaines",
    training: "30 minutes (configuration FAQ + personas)",
    validation: "Collecte d'infos automatique, escalade vers humain si conversation complexe détectée",
  },
  opportunities: [
    "Connexion inventaire/agenda pour réponses dispo/prix en temps réel via PMS",
    "Voicebot en français pour appels entrants (quand latences <200ms)",
    "Notifications temps réel à l'équipe pour leads de grande valeur (groupes, événements)",
  ],
};
