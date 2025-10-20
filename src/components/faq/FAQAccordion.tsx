"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-3"
    >
      {faqs.map((faq, index) => (
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
  );
}
