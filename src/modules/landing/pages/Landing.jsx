import Navbar from "../../../components/Navbar";
import Hero from "../../../components/Hero";
import ForexTicker from "../../../components/ForexTicker";
import PricingSection from "../../../components/pricing/PricingSection";
import FundingPaths from "../../../components/FundingPaths";
import CTASection from "../../../components/CTASection";
import CapitalAllocation from "../../../components/CapitalAllocation";
import PerformanceSteps from "../../../components/PerformanceSteps";
import SupportSection from "../../../components/SupportSection";
import ScaleCTA from "../../../components/ScaleCTA";
import ScrollingBanner from "../../../components/ScrollingBanner";
import FAQ from "../../../components/FAQ";
import Footer from "../../../components/Footer";
import OfferBar from "../../../components/OfferBar";

export default function Landing() {
  return (
    <div className="w-full overflow-x-hidden">
      <OfferBar />
      <Navbar />
      <Hero />
      <ForexTicker />
      <PricingSection />
      <FundingPaths />
      <CTASection />
      <CapitalAllocation />
      <PerformanceSteps />
      <SupportSection />
      <ScaleCTA />
      <ScrollingBanner />
      <FAQ />
      <Footer />
    </div>
  );
}
