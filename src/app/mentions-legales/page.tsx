import companyInfo from "@/data/companyInfo.json";
import { Mail, Phone, Globe } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { GradientText } from "@/components/ui/GradientText";

export const metadata = {
  title: "Mentions Légales - Automatik",
  description: "Mentions légales et informations légales d'Automatik",
};

export default function MentionsLegales() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                Mentions{" "}
                <GradientText>Légales</GradientText>
              </h1>
              <p className="text-lg text-muted-foreground">
                Informations légales et d'identification de ZenithSAS
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12">
              {/* Éditeur du site */}
              <section className="space-y-6">
                <h2 className="text-2xl font-bold">Éditeur du site</h2>

                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Raison sociale</p>
                    <p>{companyInfo.legalName}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-1">Forme juridique</p>
                    <p>{companyInfo.legalForm}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-1">Capital social</p>
                    <p>{companyInfo.capital} €</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-1">Siège social</p>
                    <p>{companyInfo.address}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 mt-6">
                    <div>
                      <p className="font-semibold text-foreground mb-1">SIREN</p>
                      <p>{companyInfo.siren}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">SIRET</p>
                      <p>{companyInfo.siret}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">RCS</p>
                      <p>{companyInfo.rcsNumber} R.C.S. {companyInfo.rcsCity}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">TVA intracommunautaire</p>
                      <p>{companyInfo.tvaNumber}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Directeur de la publication */}
              <section className="space-y-4 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold">Directeur de la publication</h2>
                <p className="text-muted-foreground">{companyInfo.legalRepresentative}</p>
              </section>

              {/* Contact */}
              <section className="space-y-6 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold">Coordonnées de contact</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-primary hover:underline transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Téléphone</p>
                      <a
                        href={`tel:${companyInfo.phoneHref}`}
                        className="text-primary hover:underline transition-colors"
                      >
                        {companyInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Hébergement */}
              <section className="space-y-6 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold">Hébergement</h2>

                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Hébergeur</p>
                    <p>{companyInfo.hoster.name}</p>
                  </div>

                  <div>
                    <p className="font-semibold text-foreground mb-1">Adresse</p>
                    <p>{companyInfo.hoster.address}</p>
                  </div>

                  <div className="flex items-start gap-3 pt-2">
                    <Globe className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Site web</p>
                      <a
                        href={companyInfo.hoster.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline transition-colors"
                      >
                        {companyInfo.hoster.website}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">Contact</p>
                      <a
                        href={companyInfo.hoster.contact}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline transition-colors"
                      >
                        {companyInfo.hoster.contact}
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Informations complémentaires */}
              <section className="space-y-4 border-t border-border/40 pt-8 text-sm text-muted-foreground">
                <h2 className="text-2xl font-bold text-foreground">Informations complémentaires</h2>
                <p>
                  Le site Automatik est un site à titre informatif. Les informations présentes sur ce site
                  sont données à titre indicatif et ne constituent en aucun cas une offre contractuelle.
                </p>
                <p>
                  ZenithSAS se réserve le droit de modifier ou d'actualiser les contenus de ce site sans
                  préavis.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
