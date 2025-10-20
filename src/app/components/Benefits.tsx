import { ScrollToLeadMagnetButton } from "@/components/ui/ScrollToLeadMagnetButton";
import { ArrowRight } from "lucide-react";
import { IconCard } from "@/components/ui/icon-card";
import { BENEFITS } from "@/data/benefits";
import { GradientText } from "@/components/ui/GradientText";

export const Benefits = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Vos bénéfices{" "}
            <GradientText>
              immédiats
            </GradientText>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {BENEFITS.map((benefit, index) => (
            <IconCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              iconSize="sm"
            />
          ))}
        </div>

        {/* CTA en dehors */}
        <div className="flex justify-center">
          <ScrollToLeadMagnetButton
            size="lg"
            className="group bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            Réserver un RDV visio de 30 min
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </ScrollToLeadMagnetButton>
        </div>
      </div>
    </section>
  );
};
