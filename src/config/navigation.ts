/**
 * Item de navigation
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * Liste des items de navigation principaux
 */
export const navItems: NavItem[] = [
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Études de cas",
    href: "/etudes-de-cas",
  },
  {
    label: "À propos",
    href: "/a-propos",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

/**
 * Configuration du bouton CTA de la navigation
 */
export const navCtaButton = {
  label: "Réserver un appel",
  href: "/reservation",
};
