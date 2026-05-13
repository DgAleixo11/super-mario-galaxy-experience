import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { CharactersSection } from "@/components/sections/CharactersSection";
import { GalaxySection } from "@/components/sections/GalaxySection";
import { TrailerSection } from "@/components/sections/TrailerSection";
import { CountdownSection } from "@/components/sections/CountdownSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030712] text-white">
      <Header />
      <HeroSection />
      <CharactersSection />
      <GalaxySection />
      <TrailerSection />
      <CountdownSection />
      <CTASection />
      <Footer />
    </main>
  );
}