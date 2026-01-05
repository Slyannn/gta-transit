import HeroSection from "./components/home/HeroSection";
import CommissionnaireSection from "./components/home/CommissionnaireSection";
import ServicesSection from "./components/home/ServicesSection";
import PartnersSection from "./components/home/PartnersSection";
import WorldMapSection from "./components/home/WorldMapSection";
import TestimonialsSection from "./components/home/TestimonialsSection";
import StatsSection from "./components/home/StatsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CommissionnaireSection />
      <StatsSection />
      <ServicesSection />
      <PartnersSection />
      <TestimonialsSection />
      <WorldMapSection />
    </main>
  );
}