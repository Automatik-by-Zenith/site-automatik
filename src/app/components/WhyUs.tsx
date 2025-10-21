import Image from 'next/image';
import { GradientText } from "@/components/ui/GradientText";

export const WhyUs = () => {
  return (
    <section className="relative w-full h-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col py-20 justify-between">
        <div className="flex-1 flex items-center justify-center w-full">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Pourquoi{" "}
              <GradientText>
                Automatik
              </GradientText>{" "}
              ?
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Parce qu'une bonne automatisation, ce n'est pas juste du temps gagné.
                C'est un système fiable, maîtrisé et compris par ceux qui l'utilisent.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous concevons, intégrons et formons pour que chaque automatisation soit solide, lisible et utile au quotidien.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto w-full pb-4">
          <Image
            src="/assets/team-collaboration.webp"
            alt="Équipe collaborant sur un processus d'automatisation"
            width={1200}
            height={800}
            loading="lazy"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};
