import companyInfo from "@/data/companyInfo.json";
import { Mail, Phone } from "lucide-react";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { GradientText } from "@/components/ui/GradientText";

export const metadata = {
  title: "Politique de Confidentialité - Automatik",
  description: "Politique de confidentialité et traitement des données personnelles d'Automatik",
};

export default function PolitiqueConfidentialite() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-4">
                Politique de{" "}
                <GradientText>Confidentialité</GradientText>
              </h1>
              <p className="text-lg text-muted-foreground">
                Informations sur le traitement de vos données personnelles
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12 text-muted-foreground">
              {/* Last update */}
              <div className="text-sm text-muted-foreground/80 p-4 bg-card/20 rounded-lg">
                <strong>Dernière mise à jour :</strong> 21 octobre 2025
              </div>

              {/* 1. Responsable du traitement */}
              <section className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">1. Responsable du traitement</h2>
                <div className="space-y-2">
                  <p><strong className="text-foreground">ZenithSAS</strong></p>
                  <p>SIREN : {companyInfo.siren}</p>
                  <p>Siège social : {companyInfo.address}</p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" aria-hidden="true" />
                    <a href={`mailto:${companyInfo.email}`} className="text-primary hover:underline">
                      {companyInfo.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" aria-hidden="true" />
                    <a href={`tel:${companyInfo.phoneHref}`} className="text-primary hover:underline">
                      {companyInfo.phone}
                    </a>
                  </p>
                </div>
              </section>

              {/* 2. Données collectées */}
              <section className="space-y-4 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold text-foreground">2. Données collectées</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2.1 Données de prise de rendez-vous</h3>
                    <p className="mb-2">Lorsque vous prenez rendez-vous via notre site, nous collectons les informations suivantes :</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone (si fourni)</li>
                      <li>Date et heure du rendez-vous souhaité</li>
                      <li>Informations complémentaires que vous choisissez de nous communiquer</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">2.2 Données de navigation</h3>
                    <p>Notre site utilise des cookies provenant de Cal.com, strictement nécessaires au fonctionnement du système de prise de rendez-vous.</p>
                  </div>
                </div>
              </section>

              {/* 3. Finalité et base légale */}
              <section className="space-y-4 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold text-foreground">3. Finalité et base légale</h2>
                <p>Les données sont collectées pour :</p>
                <ul className="space-y-2 ml-4">
                  <li><strong className="text-foreground">Finalité :</strong> Gérer vos demandes de rendez-vous et assurer le suivi de nos échanges</li>
                  <li><strong className="text-foreground">Base légale :</strong> Exécution de mesures précontractuelles prises à votre demande (article 6.1.b du RGPD)</li>
                </ul>
              </section>

              {/* 4. Cookies */}
              <section className="space-y-4 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold text-foreground">4. Cookies</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Cookies de Cal.com</h3>
                    <p className="mb-2">Notre site utilise Cal.com pour la gestion des rendez-vous. Ces cookies sont nécessaires au fonctionnement du système de réservation et permettent de :</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Maintenir votre session lors de la prise de rendez-vous</li>
                      <li>Mémoriser vos préférences de réservation</li>
                      <li>Assurer le bon fonctionnement de l'interface de réservation</li>
                    </ul>
                  </div>

                  <div className="bg-card/20 rounded-lg p-4 space-y-2">
                    <p><strong className="text-foreground">Type :</strong> Cookies strictement nécessaires (fonctionnels)</p>
                    <p><strong className="text-foreground">Durée :</strong> Session ou durée limitée nécessaire au service</p>
                  </div>

                  <p>En utilisant notre système de prise de rendez-vous, vous acceptez l'utilisation de ces cookies nécessaires à son fonctionnement.</p>
                </div>
              </section>

              {/* 5. Destinataires des données */}
              <section className="space-y-4 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold text-foreground">5. Destinataires des données</h2>
                <p>Vos données sont traitées par :</p>
                <ul className="space-y-2 ml-4">
                  <li><strong className="text-foreground">ZenithSAS</strong> (responsable du traitement)</li>
                  <li><strong className="text-foreground">Cal.com</strong> (sous-traitant) - Plateforme hébergeant le système de prise de rendez-vous</li>
                  <li><strong className="text-foreground">{companyInfo.hoster.name}</strong> - Hébergeur du site</li>
                </ul>
                <p className="mt-4">
                  Cal.com s'engage à respecter le RGPD. Vous pouvez consulter leur{" "}
                  <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    politique de confidentialité
                  </a>
                </p>
              </section>

              {/* 6. Durée de conservation */}
              <section className="space-y-4 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold text-foreground">6. Durée de conservation</h2>
                <p>Vos données sont conservées :</p>
                <ul className="space-y-2 ml-4">
                  <li><strong className="text-foreground">Données de rendez-vous :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong className="text-foreground">Cookies :</strong> Durée de la session ou selon la durée indiquée par Cal.com</li>
                </ul>
              </section>

              {/* 7. Vos droits */}
              <section className="space-y-4 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold text-foreground">7. Vos droits</h2>
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="space-y-2 ml-4">
                  <li><strong className="text-foreground">Droit d'accès :</strong> Obtenir la confirmation que vos données sont traitées et en obtenir une copie</li>
                  <li><strong className="text-foreground">Droit de rectification :</strong> Corriger vos données inexactes ou incomplètes</li>
                  <li><strong className="text-foreground">Droit à l'effacement :</strong> Demander la suppression de vos données</li>
                  <li><strong className="text-foreground">Droit à la limitation :</strong> Limiter le traitement de vos données</li>
                  <li><strong className="text-foreground">Droit d'opposition :</strong> Vous opposer au traitement de vos données</li>
                  <li><strong className="text-foreground">Droit à la portabilité :</strong> Récupérer vos données dans un format structuré</li>
                </ul>

                <p className="mt-4">Pour exercer vos droits, contactez-nous :</p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                  <a href={`mailto:${companyInfo.email}`} className="text-primary hover:underline">
                    {companyInfo.email}
                  </a>
                </p>

                <p className="mt-4">
                  Vous disposez également du droit d'introduire une réclamation auprès de la{" "}
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    CNIL
                  </a>
                </p>
              </section>

              {/* 8. Sécurité */}
              <section className="space-y-4 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold text-foreground">8. Sécurité</h2>
                <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction.</p>
              </section>

              {/* 9. Modifications */}
              <section className="space-y-4 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold text-foreground">9. Modifications</h2>
                <p>Nous nous réservons le droit de modifier cette politique de confidentialité. La date de dernière mise à jour est indiquée en haut de cette page.</p>
              </section>

              {/* 10. Contact */}
              <section className="space-y-4 border-t border-border/40 pt-8">
                <h2 className="text-2xl font-bold text-foreground">10. Contact</h2>
                <p>Pour toute question concernant cette politique de confidentialité :</p>
                <div className="space-y-2 ml-4">
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                    <a href={`mailto:${companyInfo.email}`} className="text-primary hover:underline">
                      {companyInfo.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                    <a href={`tel:${companyInfo.phoneHref}`} className="text-primary hover:underline">
                      {companyInfo.phone}
                    </a>
                  </p>
                  <p><strong className="text-foreground">Adresse :</strong> {companyInfo.address}</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
