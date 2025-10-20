import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Workflow, Code, ArrowRight, Calendar, CheckCircle2, Target } from "lucide-react";
import Link from "next/link";
import { ServiceIcon } from "@/components/ui/service-icon";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Nos{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  services
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Conseil, ingénierie et accompagnement pour des solutions fiables et maîtrisables
              </p>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-4">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Chez <span className="font-bold text-primary">Automatik</span>{" "}
                <span className="text-base font-light text-muted-foreground/70">by Zenith</span>, nous allions conseil, développement et formation pour bâtir des systèmes clairs, robustes et évolutifs.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Chaque mission est menée avec la rigueur de l'Artisanat : précision, transparence et exigence à chaque étape.
              </p>
            </div>
          </div>
        </section>

        {/* Service 1 - Direction & pilotage */}
        <section id="direction" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <ServiceIcon icon={Target} />
                <div>
                  <h2 className="text-4xl font-bold">Direction & pilotage de projets IA / Web</h2>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Garder une vision claire, du cadrage à la livraison
              </p>

              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Nous assurons la direction produit et le pilotage de projets IA ou web pour garantir la cohérence entre stratégie, exécution et résultats.
                Nos chefs de projet orchestrent les équipes, cadrent les besoins et assurent un suivi rigoureux jusqu'à la mise en production.
              </p>

              <Card variant="glass" className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Ce que nous apportons</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Une gouvernance fluide et documentée</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Des arbitrages clairs et fondés sur les données</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Des projets livrés dans le bon rythme, sans perte de sens</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Une direction produit exigeante, qui parle autant le langage métier que technique.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Button className="bg-primary hover:shadow-lg hover:shadow-primary/50" asChild>
                <Link href="/contact">
                  Discuter d'un projet de pilotage
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service 2 - Développement Web */}
        <section id="developpement" className="py-24 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <ServiceIcon icon={Code} />
                <div>
                  <h2 className="text-4xl font-bold">Développement web & logiciels sur mesure</h2>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Concevoir des outils qui soutiennent la performance
              </p>

              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Nous concevons des applications web et des portails métiers qui simplifient le travail des équipes.
                Chaque projet est pensé pour durer : architecture claire, usage intuitif et fiabilité au quotidien.
              </p>

              <Card variant="glass" className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Nous réalisons</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Applications et portails internes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Espaces clients et extranets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Tableaux de bord et interfaces de pilotage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Nos solutions sont livrées clé en main, hébergées et maintenues par nos soins.
                Si vous le souhaitez, un déploiement sur votre propre infrastructure est également possible.
              </p>

              <Card variant="glass" className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Vos bénéfices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Expérience fluide et données cohérentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Outils durables et évolutifs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Décisions facilitées par une meilleure visibilité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Un développement mené comme un artisanat : sobre, solide, documenté.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Button className="bg-primary hover:shadow-lg hover:shadow-primary/50" asChild>
                <Link href="/contact">
                  Démarrer un projet web
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service 3 - Automatisation */}
        <section id="automatisation" className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <ServiceIcon icon={Workflow} />
                <div>
                  <h2 className="text-4xl font-bold">Automatisation des processus métiers</h2>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Des processus fiables, mesurables et durables
              </p>

              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Nous analysons vos processus pour concevoir des automatisations sur mesure : claires, testées et documentées.
                Objectif : supprimer les tâches répétitives et fiabiliser vos flux sans créer de dépendance technique.
              </p>

              <Card variant="glass" className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Notre démarche</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Diagnostic des flux et identification des leviers à fort impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Conception et validation par itérations courtes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Déploiement, tests et formation des équipes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Suivi et amélioration continue</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card variant="glass" className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Vos bénéfices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Réduction des erreurs et des délais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Visibilité totale sur vos opérations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Sérénité et continuité d'activité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Une automatisation conçue comme un produit, avec la même exigence de qualité qu'un logiciel.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Button className="bg-primary hover:shadow-lg hover:shadow-primary/50" asChild>
                <Link href="/contact">
                  Démarrer un projet d'automatisation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Service 4 - Formation */}
        <section id="formation" className="py-24 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <ServiceIcon icon={GraduationCap} />
                <div>
                  <h2 className="text-4xl font-bold">Formation & acculturation à l'IA</h2>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Des formations sur mesure pour équipes modernes et autonomes
              </p>

              <p className="text-base text-muted-foreground mb-8 leading-relaxed">
                Nous concevons des formations 100 % sur mesure, centrées sur vos outils, vos cas d'usage et vos objectifs.
                Elles allient pédagogie concrète et rigueur technique, pour développer la compétence et la confiance.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card variant="glass">
                  <CardHeader>
                    <CardTitle className="text-lg">Nos thématiques</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Low-code et automatisation de processus</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Usage raisonné et efficace de l'intelligence artificielle</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Acculturation aux nouveaux usages et enjeux de l'IA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Nouvelles méthodes de développement assistées par IA</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card variant="glass">
                  <CardHeader>
                    <CardTitle className="text-lg">Formats</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Sessions courtes ou journées complètes, en visio ou présentiel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Supports PDF, replays et exercices pratiques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>Option coaching post-formation (30 / 60 / 90 jours)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card variant="glass" className="mb-8">
                <CardHeader>
                  <CardTitle className="text-lg">Vos bénéfices</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Des équipes autonomes et responsables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Une meilleure qualité de production et de décision</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Une culture de la performance durable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>La formation comme un savoir-faire, pas un savoir-dire : transmettre avec exigence, pour former des concepteurs, pas des exécutants.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Button className="bg-primary hover:shadow-lg hover:shadow-primary/50" asChild>
                <Link href="/contact">
                  Réserver votre formation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Approche unifiée */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto space-y-6">
              <h2 className="text-4xl font-bold">
                Une approche{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  unifiée
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pilotage, développement, automatisation et formation ne sont pas des services séparés —
                ce sont quatre facettes d'une même exigence : la fiabilité.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaque projet suit la même méthode : analyse 360°, itérations courtes, documentation soignée et transfert complet.
              </p>
              <p className="text-lg font-medium">
                Notre promesse : des systèmes robustes, des équipes confiantes et une performance durable.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold">
                Réserver un{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  RDV visio de 30 min
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Session gratuite • Google Meet • Sans engagement
              </p>
              <Button
                size="lg"
                className="bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Réserver un créneau
                  <Calendar className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
