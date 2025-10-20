import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "./components/Hero";
import { WhyUs } from "./components/WhyUs";
import { UseCasesList } from "./components/UseCasesList";
import { ProcessSteps } from "./components/ProcessSteps";
import { Benefits } from "./components/Benefits";
import { FeaturedCaseStudies } from "./components/FeaturedCaseStudies";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/utilities/ScrollToTop";

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-[100svh]">
        <main className="snap-y snap-mandatory">
        <section id="hero" data-section-id="hero" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full overflow-hidden">
          <Hero />
        </section>
        <section id="why-us" data-section-id="why-us" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full">
          <WhyUs />
        </section>
        <section id="use-cases" data-section-id="use-cases" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full">
          <UseCasesList />
        </section>
        <section id="benefits" data-section-id="benefits" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full">
          <Benefits />
        </section>
        <section id="process" data-section-id="process" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full">
          <ProcessSteps />
        </section>
        <section id="case-studies" data-section-id="case-studies" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full">
          <FeaturedCaseStudies />
        </section>
        <section id="faq" data-section-id="faq" className="relative snap-start snap-always min-h-[100svh] flex flex-col justify-start w-full">
          <div className="flex-1 flex items-center justify-center">
            <FAQSection />
          </div>
          <Footer />
        </section>
        </main>
        <ScrollToTop />
      </div>
    </>
  );
};

export default Index;
