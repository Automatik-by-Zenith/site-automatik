import { IconCard } from "@/components/ui/icon-card";
import { PROCESS_STEPS } from "@/data/processSteps";
import { GradientText } from "@/components/ui/GradientText";

export const ProcessSteps = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Notre méthodologie{" "}
            <GradientText>
              d'intervention
            </GradientText>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PROCESS_STEPS.map((step, index) => (
            <IconCard
              key={index}
              icon={step.icon}
              title={step.title}
              className="relative overflow-hidden"
              badge={
                <div className="absolute top-4 right-4 text-7xl font-bold text-foreground/10 group-hover:text-foreground/15 transition-colors duration-500" aria-hidden="true">
                  {step.number}
                </div>
              }
            >
              <p className="text-base text-muted-foreground leading-relaxed mb-4">{step.description}</p>
              <p className="text-xs text-muted-foreground leading-relaxed italic">{step.highlight}</p>
            </IconCard>
          ))}
        </div>
      </div>
    </section>
  );
};
