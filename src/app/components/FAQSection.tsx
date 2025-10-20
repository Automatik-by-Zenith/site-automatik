import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { allFAQs } from "@/data/faqs";
import { GradientText } from "@/components/ui/GradientText";

export const FAQSection = () => {
  // Filter only questions that should show on homepage
  const homeFAQs = allFAQs.filter(faq => faq.showOnHome);

  return (
    <section className="py-24 relative w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start w-full">
            {/* Left Column - Title */}
            <div className="lg:sticky lg:top-24 space-y-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Vos questions <GradientText>fréquentes</GradientText>
              </h2>
            </div>

            {/* Right Column - Questions */}
            <div>
              <Accordion type="single" collapsible className="w-full space-y-3">
                {homeFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-card rounded-lg border border-border/50 px-4 py-1 hover:border-primary/30 transition-colors w-full"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-3 group overflow-hidden">
                      <span className="flex items-start gap-4 text-base font-medium w-full min-w-0">
                        <span className="text-foreground/60 shrink-0">{index + 1}.</span>
                        <span className="group-hover:text-primary transition-colors break-words">{faq.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pl-8 pb-3">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 text-lg font-medium group mt-4"
              >
                Voir toutes les questions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
        </div>
      </div>
    </section>
  );
};
