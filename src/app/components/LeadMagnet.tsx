"use client";

import { Card } from "@/components/ui/card";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { GradientText } from "@/components/ui/GradientText";

export const LeadMagnet = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#EFB50A" },
          dark: { "cal-brand": "#EFB50A" }
        },
        hideEventTypeDetails: true,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <section id="lead-magnet" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card variant="glass" className="max-w-5xl mx-auto p-8 md:p-12 pb-8">
          <div className="text-center space-y-6 mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Discutons de votre{" "}
              <GradientText>
                prochain défi IA
              </GradientText>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Réservez un créneau de 30 minutes en visio. Nous analyserons vos objectifs et vous 
              donnerons des pistes concrètes pour passer à l'action.
            </p>
            <p className="text-sm text-muted-foreground">
              Session gratuite • Google Meet • Sans engagement
            </p>
          </div>
          <div className="w-full">
            <Cal
              namespace="30min"
              calLink="thibault-roussel-fdxucl/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", theme: "light" }}
            />
          </div>
        </Card>
      </div>
    </section>
  );
};
