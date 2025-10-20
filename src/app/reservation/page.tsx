import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { LeadMagnet } from "../components/LeadMagnet";
import { ScrollToTop } from "@/components/utilities/ScrollToTop";

const Reservation = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <LeadMagnet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Reservation;
