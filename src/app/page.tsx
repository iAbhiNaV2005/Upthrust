import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 1. Hero Section (White background with architectural drafting grid, 3D iridescent bust, warped typography, logos) */}
      <HeroSection />

      {/* 2. Services Section (Black background, continuous 3D copper/orange curve, 4 disciplines with authentic mockups) */}
      <ServicesSection />

      {/* 3. Footer Page (Full-bleed black background, giant UPTHRUST.DESIGN brutalist typography, agency links & newsletter) */}
      <FooterSection />
    </main>
  );
}
