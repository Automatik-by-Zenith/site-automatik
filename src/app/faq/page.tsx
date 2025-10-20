"use client";

import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { allFAQs, categories } from "@/data/faqs";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const FAQContent = () => {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get("category") || "services";

  // Filter FAQs based on selected category
  const filteredFAQs = allFAQs.filter(faq => faq.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Questions{" "}
                <span className="text-primary">
                  Fréquentes
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Trouvez rapidement les réponses à vos questions sur nos solutions IA
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section with Filters */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Category Filters */}
              <div className="flex flex-wrap justify-center gap-3 mb-16">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className="transition-all duration-300"
                    asChild
                  >
                    <Link href={`?category=${category.id}`} scroll={false}>
                      {category.label}
                    </Link>
                  </Button>
                ))}
              </div>

              {/* FAQ Grid */}
              <div className="grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">
                {/* Left Column - Title */}
                <div className="lg:sticky lg:top-24 space-y-4">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    {categories.find(c => c.id === selectedCategory)?.label}
                  </h2>
                  <p className="text-muted-foreground">
                    {filteredFAQs.length} question{filteredFAQs.length > 1 ? "s" : ""}
                  </p>
                </div>

                {/* Right Column - Questions */}
                <div className="space-y-3 overflow-hidden">
                  <FAQAccordion faqs={filteredFAQs} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card variant="glass" className="h-full">
                <CardContent className="p-12 text-center space-y-6">
                  <MessageCircle className="w-16 h-16 text-primary mx-auto" aria-hidden="true" />
                  <h3 className="text-3xl font-bold">Vous n'avez pas trouvé votre réponse ?</h3>
                  <p className="text-lg text-muted-foreground">
                    Notre équipe est là pour répondre à toutes vos questions
                  </p>
                  <Button
                    size="lg"
                    className="bg-primary hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
                    asChild
                  >
                    <Link href="/contact">Contactez-nous</Link>
                  </Button>
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

const FAQ = () => {
  return (
    <Suspense fallback={<div className="min-h-screen"><Navigation /><Footer /></div>}>
      <FAQContent />
    </Suspense>
  );
};

export default FAQ;
