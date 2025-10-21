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
        <section id="hero" data-section-id="hero" className="relative snap-start snap-always min-h-[100svh] flex flex-col justify-center md:justify-center md:items-center w-full overflow-hidden pb-16 md:pb-0">
          <Hero />
        </section>
        <section id="why-us" data-section-id="why-us" className="relative snap-start snap-always min-h-[100svh] flex flex-col justify-start md:items-center md:justify-center w-full pb-16 md:pb-0">
          <WhyUs />
        </section>
        <section id="use-cases" data-section-id="use-cases" className="relative snap-start snap-always min-h-[100svh] flex flex-col justify-start md:items-center md:justify-center w-full pb-16 md:pb-0">
          <UseCasesList />
        </section>
        <section id="benefits" data-section-id="benefits" className="relative snap-start snap-always min-h-[100svh] flex flex-col justify-start md:items-center md:justify-center w-full pb-16 md:pb-0">
          <Benefits />
        </section>
        <section id="process" data-section-id="process" className="relative snap-start snap-always min-h-[100svh] flex flex-col justify-start md:items-center md:justify-center w-full pb-16 md:pb-0">
          <ProcessSteps />
        </section>
        <section id="case-studies" data-section-id="case-studies" className="relative snap-start snap-always min-h-[100svh] flex flex-col justify-start md:items-center md:justify-center w-full pb-16 md:pb-0">
          <FeaturedCaseStudies />
        </section>
        <section id="faq" data-section-id="faq" className="relative snap-start snap-always min-h-[100svh] flex flex-col justify-start w-full pb-16 md:pb-0">
          <div className="flex-1 flex items-center justify-center w-full">
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
