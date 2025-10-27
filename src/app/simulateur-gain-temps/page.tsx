import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { TimeSavingSimulator } from "@/components/TimeSavingSimulator";
import { GradientText } from "@/components/ui/GradientText";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, BarChart3, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Simulateur de Gain de Temps | Automatik",
  description:
    "Calculez les économies potentielles en automatisant la gestion de vos messages, avis et devis avec Automatik",
};

export default function TimeSavingSimulatorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Découvrez vos <GradientText>économies potentielles</GradientText>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Calculez le temps perdu et le coût associé à la gestion manuelle
                de vos messages, avis et devis. Voyez l'impact direct de
                l'automatisation sur votre activité.
              </p>

              {/* Avantages clés */}
              <div className="grid sm:grid-cols-3 gap-4 mt-12">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Calcul instantané</p>
                    <p className="text-sm text-muted-foreground">
                      Ajustez et voyez les résultats en temps réel
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Précis et détaillé</p>
                    <p className="text-sm text-muted-foreground">
                      Basé sur vos paramètres réels
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Actionnable</p>
                    <p className="text-sm text-muted-foreground">
                      Découvrez votre ROI potentiel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Simulateur Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <TimeSavingSimulator />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 border-primary/20 glass">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold">
                    Prêt à <GradientText>transformer</GradientText> votre hôtel ?
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Automatisez dès maintenant la gestion de vos messages, avis
                    et devis. Concentrez-vous sur l'expérience client pendant
                    que l'IA gère l'administratif.
                  </p>

                  <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <p className="font-medium">
                        Réponses intelligentes en 2 secondes
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <p className="font-medium">
                        Cohérence garantie avec votre marque
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <p className="font-medium">
                        Disponible 24/7 pour vos clients
                      </p>
                    </div>
                  </div>

                  <Link href="/reservation">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto gap-2 mt-6"
                    >
                      Réserver un appel gratuit
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>

                <div className="hidden md:block">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="p-6 glass">
                      <p className="text-sm text-muted-foreground mb-2">
                        Temps économisé/jour
                      </p>
                      <p className="text-3xl font-bold text-primary">
                        2-4h
                      </p>
                    </Card>
                    <Card className="p-6 glass">
                      <p className="text-sm text-muted-foreground mb-2">
                        ROI moyen
                      </p>
                      <p className="text-3xl font-bold text-primary">
                        300%
                      </p>
                    </Card>
                    <Card className="p-6 glass">
                      <p className="text-sm text-muted-foreground mb-2">
                        Économies/an
                      </p>
                      <p className="text-3xl font-bold text-primary">
                        10-50k€
                      </p>
                    </Card>
                    <Card className="p-6 glass">
                      <p className="text-sm text-muted-foreground mb-2">
                        Taux de satisfaction
                      </p>
                      <p className="text-3xl font-bold text-primary">
                        98%
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Questions <GradientText>fréquentes</GradientText>
            </h2>

            <div className="max-w-2xl mx-auto space-y-4">
              <Card className="p-6 glass">
                <h3 className="font-semibold mb-2">
                  Comment sont calculées les économies ?
                </h3>
                <p className="text-muted-foreground">
                  Nous utilisons le nombre de tâches, le temps estimé pour
                  chacune, et votre coût horaire pour calculer les économies.
                  Le calcul se base sur 250 jours ouvrables par an.
                </p>
              </Card>

              <Card className="p-6 glass">
                <h3 className="font-semibold mb-2">
                  Ces chiffres sont-ils réalistes ?
                </h3>
                <p className="text-muted-foreground">
                  Oui, ils sont basés sur nos observations sur des centaines
                  d'hôtels. Les estimations par défaut correspondent aux moyennes
                  observées, mais vous pouvez les ajuster selon votre activité.
                </p>
              </Card>

              <Card className="p-6 glass">
                <h3 className="font-semibold mb-2">
                  Peut-on vraiment automatiser tout ça ?
                </h3>
                <p className="text-muted-foreground">
                  Oui ! Notre IA gère 90% des messages, avis et devis de
                  manière autonome. Le reste est soumis à votre validation
                  avant envoi.
                </p>
              </Card>

              <Card className="p-6 glass">
                <h3 className="font-semibold mb-2">
                  Comment ça marche en pratique ?
                </h3>
                <p className="text-muted-foreground">
                  L'IA analyse chaque message/avis/devis et génère une réponse
                  dans le ton de votre marque. Elle apprend de vos corrections
                  et s'améliore continuellement.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
