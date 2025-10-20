import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { UseCasesList } from "@/components/UseCasesList";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Benefits } from "@/components/Benefits";
import { FeaturedCaseStudies } from "@/components/FeaturedCaseStudies";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SectionNavigation } from "@/components/SectionNavigation";

const Index = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-[100svh]">
        <main className="snap-y snap-mandatory">
        <section id="hero" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full overflow-hidden">
          <Hero />
        </section>
        <section id="why-us" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full">
          <WhyUs />
        </section>
        <section id="use-cases" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full">
          <UseCasesList />
        </section>
        <section id="benefits" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full">
          <Benefits />
        </section>
        <section id="process" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full">
          <ProcessSteps />
        </section>
        <section id="case-studies" className="relative snap-start snap-always min-h-[100svh] flex items-center justify-center w-full">
          <FeaturedCaseStudies />
        </section>
        <section id="faq" className="relative snap-start snap-always min-h-[100svh] flex flex-col justify-start w-full">
          <div className="flex-1 flex items-center justify-center">
            <FAQSection />
          </div>
          <Footer />
        </section>
        </main>
        <ScrollToTop />
        <SectionNavigation />
      </div>
    </>
  );
};

export default Index;
