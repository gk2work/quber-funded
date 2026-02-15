import Navbar from "../../../components/Navbar";
import Hero from "../../../components/Hero";
import ForexTicker from "../../../components/ForexTicker";
import PricingSection from "../../../components/pricing/PricingSection";
import OfferBar from "../../../components/OfferBar";

export default function Landing() {
    return (
        <div className="w-full overflow-x-hidden">
            <OfferBar />
            <Navbar />
            <Hero />
            <ForexTicker />
            <PricingSection />
        </div>
    )
}
