import HeroSection from "./components/home/HeroSection";
import CommissionnaireSection from "./components/home/CommissionnaireSection";
import ServicesSection from "./components/home/ServicesSection";
import WorldMapSection from "./components/home/WorldMapSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CommissionnaireSection />
      <ServicesSection />
      <WorldMapSection />
    </main>
  );
}
