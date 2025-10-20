"use client";

import { ArrowRight } from "lucide-react";
import { ScrollToLeadMagnetButton } from "@/components/ui/ScrollToLeadMagnetButton";
import { IconCard } from "@/components/ui/icon-card";
import { USE_CASES } from "@/data/useCases";

export const UseCasesList = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold">
            À votre service{" "}
            <span className="text-primary">
              pour…
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {USE_CASES.map((useCase, index) => (
            <IconCard
              key={index}
              icon={useCase.icon}
              title={useCase.title}
              description={useCase.description}
            />
          ))}
        </div>

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
