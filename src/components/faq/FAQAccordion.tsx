"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRouter, useSearchParams } from "next/navigation";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  category: string;
}

export function FAQAccordion({ faqs, category }: FAQAccordionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const expandedFaq = searchParams.get("faqId");

  const handleValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("faqId", value);
    } else {
      params.delete("faqId");
    }

    // Keep the category param
    if (category) {
      params.set("category", category);
    }

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full space-y-3"
      value={expandedFaq || undefined}
      onValueChange={handleValueChange}
    >
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`faq-${index}`}
          className="bg-card rounded-lg border border-border/50 px-4 py-1 hover:border-primary/30 transition-colors"
        >
          <AccordionTrigger className="text-left hover:no-underline py-3 group">
            <span className="flex items-start gap-4 text-base font-medium">
              <span className="text-foreground/60 shrink-0">{index + 1}.</span>
              <span className="group-hover:text-primary transition-colors">{faq.question}</span>
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
