export interface FAQ {
  question: string;
  answer: string;
  category: string;
  showOnHome: boolean;
}

export const categories = [
  { id: "services", label: "Services" },
  { id: "projets", label: "Projets" },
  { id: "formations", label: "Formations" },
  { id: "technique", label: "Technique" },
  { id: "support", label: "Support" },
];

export const allFAQs: FAQ[] = [
  // Questions visibles sur homepage ET FAQ
  {
    question: "Pour quels types d'entreprises travaillez-vous ?",
    answer: "Nous accompagnons principalement des PME et ETI, mais aussi des structures plus grandes cherchant à rendre leurs outils plus fiables et leurs équipes plus autonomes. Nos approches sont modulables : que vous souhaitiez cadrer un premier projet IA ou structurer une transformation plus globale, nous adaptons notre méthode à votre contexte et à vos ressources.",
    category: "services",
    showOnHome: true,
  },
  {
    question: "Quels sont vos principaux domaines d'intervention ?",
    answer: "Nous intervenons sur quatre axes complémentaires : le pilotage de projets IA et web, le développement d'applications sur mesure, l'automatisation des processus métiers et la formation à l'usage intelligent de l'IA et du low-code.",
    category: "services",
    showOnHome: true,
  },
  {
    question: "Proposez-vous des solutions clés en main ?",
    answer: "Oui. Toutes nos solutions incluent la conception, la mise en ligne, la documentation et la maintenance. Vous n'avez rien à gérer côté hébergement, sécurité ou intégrations techniques — nous livrons des systèmes entièrement fonctionnels et maintenables.",
    category: "services",
    showOnHome: true,
  },
  {
    question: "Proposez-vous un accompagnement après la mise en ligne ?",
    answer: "Oui, chaque projet inclut une période de suivi et de support. Nous assurons la supervision des flux automatisés, les mises à jour fonctionnelles et les évolutions liées à vos règles métier. L'objectif : garantir la stabilité et la performance dans le temps.",
    category: "support",
    showOnHome: true,
  },
  {
    question: "Vos formations sont-elles standards ou sur mesure ?",
    answer: "Toutes nos formations sont sur mesure. Nous partons de vos outils, de vos processus et du niveau réel de vos équipes pour concevoir un parcours adapté. L'objectif est d'ancrer les savoirs dans la pratique quotidienne, pas d'enseigner des concepts déconnectés.",
    category: "formations",
    showOnHome: true,
  },
  {
    question: "Quels sujets proposez-vous en formation ?",
    answer: "Nous formons sur quatre grands thèmes : l'automatisation low-code, l'usage raisonné de l'IA, l'acculturation à ses enjeux et limites, et les nouvelles méthodes de développement assistées par IA. Ces formations visent à renforcer la productivité sans sacrifier la qualité.",
    category: "formations",
    showOnHome: true,
  },
  {
    question: "Quels types de projets web réalisez-vous ?",
    answer: "Nous concevons des applications web, portails métiers, espaces clients, extranets et tableaux de bord. Chaque projet est pensé pour être fluide, durable et évolutif, sans dépendance technique.",
    category: "projets",
    showOnHome: true,
  },
  {
    question: "Intégrez-vous des outils externes ou des APIs ?",
    answer: "Oui, mais toujours dans une logique de simplicité et de cohérence. Nous intégrons vos outils existants lorsque cela apporte une réelle valeur, tout en veillant à conserver la lisibilité et la stabilité du système global.",
    category: "technique",
    showOnHome: true,
  },
  {
    question: "Comment gérez-vous la sécurité et la confidentialité ?",
    answer: "Toutes nos solutions respectent le RGPD et les meilleures pratiques de sécurité. Les accès sont chiffrés, segmentés et documentés. Nous signons des accords de confidentialité (NDA) et des avenants RGPD (DPA) sur demande.",
    category: "technique",
    showOnHome: true,
  },

  // Questions uniquement visibles sur la page FAQ
  {
    question: "Combien de temps dure un projet typique ?",
    answer: "La durée varie selon la complexité et le périmètre. Un projet d'automatisation simple peut être livré en 2 à 4 semaines, tandis qu'une application web complète peut demander 2 à 3 mois. Nous privilégions toujours une approche par étapes pour garantir des résultats rapides et mesurables.",
    category: "projets",
    showOnHome: false,
  },
  {
    question: "Pouvez-vous intervenir à distance ?",
    answer: "Oui, nous travaillons régulièrement à distance avec nos clients partout en France et en Europe. Nous utilisons des outils collaboratifs performants et organisons des points réguliers pour maintenir une communication fluide tout au long du projet.",
    category: "projets",
    showOnHome: false,
  },
  {
    question: "Puis-je combiner plusieurs services ?",
    answer: "Absolument. Nos services sont conçus pour être complémentaires. Par exemple, nous pouvons démarrer par une formation pour acculturer vos équipes, puis piloter le développement d'une application web, et enfin automatiser certains de vos processus métiers. Nous adaptons nos interventions à votre stratégie.",
    category: "services",
    showOnHome: false,
  },
  {
    question: "Comment se déroulent vos formations ?",
    answer: "Nos formations alternent théorie et pratique directement sur vos outils et cas d'usage réels. Elles se déroulent en présentiel ou à distance, par sessions de 2 à 4 heures, sur une ou plusieurs journées selon les besoins. Chaque participant repart avec des supports personnalisés et des exercices applicables immédiatement.",
    category: "formations",
    showOnHome: false,
  },
  {
    question: "Est-ce que vos solutions nécessitent une maintenance technique de notre part ?",
    answer: "Non. Nos solutions sont livrées clés en main avec maintenance incluse. Vous n'avez pas besoin de compétences techniques en interne pour gérer le système au quotidien. Nous restons responsables de la stabilité, des mises à jour et de la supervision technique.",
    category: "technique",
    showOnHome: false,
  },
  {
    question: "Qu'entendez-vous par \"automatisation fiable\" ?",
    answer: "Une automatisation fiable, c'est un système qui fonctionne de manière stable dans le temps, qui gère les cas d'erreur de façon prévisible, et qui reste maintenable par votre équipe ou la nôtre. Nous privilégions la simplicité et la lisibilité pour éviter les systèmes fragiles ou opaques.",
    category: "technique",
    showOnHome: false,
  },
  {
    question: "Comment identifiez-vous les processus à automatiser ?",
    answer: "Nous commençons par un audit de vos flux métiers actuels. Nous identifions les tâches répétitives, chronophages ou sources d'erreurs, puis nous priorisons celles qui apportent le meilleur rapport gain/complexité. L'objectif est de maximiser votre retour sur investissement dès les premières étapes.",
    category: "projets",
    showOnHome: false,
  },
  {
    question: "Offrez-vous un support continu après déploiement ?",
    answer: "Oui. Chaque projet inclut une période de support post-déploiement. Selon vos besoins, nous pouvons également proposer des contrats de maintenance longue durée pour assurer le suivi, les évolutions et l'optimisation continue de vos systèmes.",
    category: "support",
    showOnHome: false,
  },
  {
    question: "Comment garantissez-vous la qualité de vos livrables ?",
    answer: "Nous appliquons des méthodes de développement éprouvées : tests systématiques, revues de code, documentation complète et validation par étapes. Chaque livrable est testé dans des conditions réelles avant mise en production. Nous privilégions la qualité sur la vitesse.",
    category: "projets",
    showOnHome: false,
  },
  {
    question: "Que se passe-t-il si nous ne sommes pas satisfaits ?",
    answer: "Nous travaillons de manière itérative avec des points de validation réguliers pour éviter les mauvaises surprises. Si un livrable ne correspond pas à vos attentes, nous le révisons jusqu'à satisfaction. Notre priorité est votre réussite, pas la facturation rapide.",
    category: "support",
    showOnHome: false,
  },
];
