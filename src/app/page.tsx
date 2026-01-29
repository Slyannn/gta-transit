import HeroSection from "./components/home/HeroSection";
import CommissionnaireSection from "./components/home/CommissionnaireSection";
import ServicesSection from "./components/home/ServicesSection";
import StatsSection from "./components/home/StatsSection";
import dynamic from "next/dynamic";

// Lazy load components for better performance
const PartnersSection = dynamic(() => import("./components/home/PartnersSection"), {
  loading: () => <div className="py-16 bg-gradient-to-b from-gray-50 to-white" />
});

const TestimonialsSection = dynamic(() => import("./components/home/TestimonialsSection"), {
  loading: () => <div className="py-20 bg-white" />
});

const PartnershipSection = dynamic(() => import("./components/home/PartnershipSection"), {
  loading: () => <div className="py-20 bg-gradient-to-br from-primary to-secondary" />
});

const WorldMapSection = dynamic(() => import("./components/home/WorldMapSection"), {
  loading: () => <div className="py-20 bg-white" />
});

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CommissionnaireSection />
      <StatsSection />
      <ServicesSection />
      <PartnersSection />
      <TestimonialsSection />
      <PartnershipSection />
      <WorldMapSection />
    </main>
  );
}