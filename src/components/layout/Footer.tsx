import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-card/20 backdrop-blur-sm">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo variant="gradient" />
            <p className="text-sm text-muted-foreground">
              Votre partenaire en intelligence artificielle pour transformer votre entreprise.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="space-y-4">
            <h3 className="font-semibold text-base">Navigation</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Accueil</a></li>
              <li><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="/a-propos" className="hover:text-primary transition-colors">À propos</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services navigation" className="space-y-4">
            <h3 className="font-semibold text-base">Nos Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/services#direction" className="hover:text-primary transition-colors">Direction de projets IA</a></li>
              <li><a href="/services#developpement" className="hover:text-primary transition-colors">Développement web</a></li>
              <li><a href="/services#automatisation" className="hover:text-primary transition-colors">Automatisation</a></li>
              <li><a href="/services#formation" className="hover:text-primary transition-colors">Formation IA</a></li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <a href="mailto:contact@automatik.com" className="hover:text-primary transition-colors">
                  contact@automatik.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <a href="tel:+33123456789" className="hover:text-primary transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" aria-hidden="true" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Automatik by Zenith. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
