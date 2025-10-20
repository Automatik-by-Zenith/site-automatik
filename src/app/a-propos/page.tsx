import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Award, Users, Search, Zap, ArrowRight, Lightbulb, Rocket, Package, Globe } from "lucide-react";
import Link from "next/link";
import { IconCard } from "@/components/ui/icon-card";
import { BlockQuote } from "@/components/ui/blockquote";
import { GradientText } from "@/components/ui/GradientText";

const values = [
  {
    icon: Target,
    title: "Exigence",
    description: "Chaque solution est conçue, testée et documentée avec soin — rien n'est laissé au hasard.",
  },
  {
    icon: Eye,
    title: "Clarté",
    description: "Des processus observables, des indicateurs précis, aucune boîte noire. Chaque automatisation reste lisible et mesurable.",
  },
  {
    icon: Award,
    title: "Transmission",
    description: "Former, expliquer, documenter. Nos clients gardent la main sur leurs outils et savent les faire évoluer.",
  },
  {
    icon: Users,
    title: "Humanité",
    description: "Nos solutions libèrent le temps et l'esprit. L'outil n'est pas là pour remplacer, mais pour soulager.",
  },
];

const processSteps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostic 360°",
    description: "Nous analysons vos processus, identifions les points de friction et hiérarchisons les leviers de valeur. L'objectif : agir là où l'automatisation a un impact réel — gain de temps, réduction d'erreurs ou meilleure visibilité.",
  },
  {
    number: "02",
    icon: Zap,
    title: "Itérations agiles",
    description: "Nous concevons, testons et ajustons les solutions en cycles courts. Chaque livrable est documenté et validé en continu avec vos équipes.",
  },
  {
    number: "03",
    icon: Users,
    title: "Transfert & autonomie",
    description: "Nous documentons chaque processus, formons vos collaborateurs et transmettons les outils. Vous gardez le contrôle complet — sans dépendance, sans zone grise.",
  },
];

const timeline = [
  { 
    year: "2024",
    icon: Lightbulb,
    title: "L'idée fondatrice",
    description: "Concevoir des automatisations claires et durables, au service du temps humain." 
  },
  { 
    year: "2025",
    icon: Rocket,
    title: "Naissance officielle",
    description: "Automatik by Zenith voit le jour et réalise ses premiers projets clients." 
  },
  { 
    year: "2026",
    icon: Package,
    title: "Lancement des premiers SaaS",
    description: "Développement des logiciels 'by Zenith', inspirés des besoins réels des clients." 
  },
  { 
    year: "2027",
    icon: Globe,
    title: "Croissance 100 % remote",
    description: "Automatik devient une agence distribuée, axée sur la qualité de vie et la rigueur du travail à distance." 
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-1000">
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight text-center">
                Automatiser pour libérer le temps,{" "}
                <GradientText>
                  pas pour le remplir
                </GradientText>
              </h1>
              <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
                Nous aidons les entreprises à se concentrer sur ce qui crée réellement de la valeur, en supprimant les tâches répétitives pour redonner du temps aux équipes.
              </p>
              <Card variant="glass">
                <CardContent className="p-8 space-y-6">
              <p className="text-lg leading-relaxed">
                Chez <strong>Automatik by Zenith</strong>, nous croyons que la technologie n'a de valeur que si elle rend la vie plus simple. Nous concevons des automatisations utiles, mesurables et durables pour améliorer le quotidien.
              </p>
              <BlockQuote>
                Automatiser, ce n'est pas faire moins d'humain. C'est rendre à l'humain le temps de créer de la valeur.
              </BlockQuote>
              <div className="flex justify-center pt-4">
                <Button asChild size="lg" className="group bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                  <Link href="/services">
                    Découvrir nos services
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Philosophy / Values */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl font-bold">
                Notre{" "}
                <GradientText>
                  philosophie
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground">
                L'Artisanat appliqué à l'automatisation
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Automatik by Zenith est née d'une conviction : l'automatisation doit être rigoureuse, claire et humaine. Nous appliquons la qualité artisanale du développement logiciel à la création de processus automatisés fiables et compréhensibles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <IconCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  iconSize="sm"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Process / Method */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl font-bold">
                Notre{" "}
                <GradientText>
                  méthode
                </GradientText>
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprendre, construire, transmettre
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chaque mission suit une approche claire et progressive, pensée pour garantir la qualité, la maîtrise et la durabilité de vos outils.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {processSteps.map((step, index) => (
                <IconCard
                  key={index}
                  icon={step.icon}
                  title={step.title}
                  className="relative overflow-hidden"
                  badge={
                    <div className="absolute top-4 right-4 text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                      {step.number}
                    </div>
                  }
                >
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </IconCard>
              ))}
            </div>

            <BlockQuote className="mt-12 text-center max-w-2xl mx-auto">
              Exécuter intelligemment, c'est se demander à chaque étape : est-ce vraiment nécessaire ?
            </BlockQuote>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl font-bold">
                  Notre{" "}
                  <GradientText>
                    histoire
                  </GradientText>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Une jeune agence, une exigence ancienne
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  L'idée d'Automatik by Zenith est née d'une volonté simple : appliquer la rigueur du développement logiciel à l'automatisation des processus métiers.
                </p>
              </div>

              <div className="space-y-6 max-w-4xl mx-auto">
                {timeline.map((item, index) => (
                  <IconCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    className="relative overflow-hidden"
                    horizontal
                    badge={
                      <div className="absolute top-4 right-4 text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                        {item.year}
                      </div>
                    }
                  >
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </IconCard>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">
                  Notre{" "}
                  <GradientText>
                    équipe
                  </GradientText>
                </h2>
                <p className="text-xl text-muted-foreground">
                  Une structure à taille humaine, à impact réel
                </p>
              </div>
              
              <Card variant="glass">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-center">
                    Automatik by Zenith repose sur la complémentarité de ses deux cofondateurs — un expert technique et un responsable commercial — entourés d'un réseau d'experts en développement, automatisation et formation. Nous travaillons en full remote, convaincus qu'un meilleur cadre de vie à un grand impact sur la qualité du travail accomplis.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold">
                  Notre{" "}
                  <GradientText>
                    vision
                  </GradientText>
                </h2>
                <p className="text-xl text-muted-foreground">
                  L'automatisation, aujourd'hui là où le web était hier
                </p>
              </div>
              
              <Card variant="glass">
                <CardContent className="p-8 space-y-6">
                  <p className="text-lg leading-relaxed">
                    L'automatisation en est à ses débuts. Comme le web dans les années 2000, elle n'est pas encore généralisée. Nous aidons les entreprises à être pionnières et à prendre une longueur d'avance. Notre ambition : permettre à nos clients de faire plus avec autant — gagner du temps sans perdre de sens.
                  </p>
                  <BlockQuote>
                    L'automatisation n'a de valeur que si elle rend les humains plus libres.
                  </BlockQuote>
                  <div className="flex flex-col items-center gap-4 pt-4">
                    <Button asChild size="lg" className="group bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                      <Link href="/contact">
                        Réserver un RDV visio de 30 min
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Session gratuite • Google Meet • Sans engagement
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
