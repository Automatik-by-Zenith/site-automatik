import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FloatingLogos } from "@/components/animations/FloatingLogos";
import { GradientText } from "@/components/ui/GradientText";

export const Hero = () => {
  return (
    <section className="relative w-full h-full flex items-center justify-center">
      <FloatingLogos />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-h-full py-8 pt-20 md:pt-0">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            L'IA et l'automatisation{" "}
            <GradientText>
              sur-mesure, façonnées avec exigence.
            </GradientText>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Chez <span className="font-bold text-foreground">Automatik</span>{" "}
            <span className="text-base font-light text-muted-foreground">by Zenith</span>, chaque système est conçu, testé et ajusté jusqu'à atteindre un niveau de fiabilité
            exemplaire. Nous articulons conseil, ingénierie et accompagnement pour bâtir des solutions robustes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="group bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
              asChild
            >
              <a href="/reservation">
                Réserver un RDV visio de 30 min
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};