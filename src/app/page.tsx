import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* 1. Hero Section (Image 1: White background, 3D iridescent statue bust, giant BOLD DESIGN THAT PERFORMS, logos) */}
      <HeroSection />

      {/* 2. Services Section (Images 2, 3, 4, 5: Black background, 3D glossy orange curve, 4 disciplines with mockups and bullet lists) */}
      <ServicesSection />

      {/* Provisional Contact Anchor & Interim Footer (Waiting for final footer prompt) */}
      <footer id="contact" className="w-full bg-[#09090b] text-zinc-400 py-12 px-6 lg:px-12 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {/* Rocket Icon */}
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#FF3700]">
              <path d="M12.5 2C10.5 4 8.5 7 8 9.5L6.5 8 5 9.5l3.5 3.5c-.5 1.5-.5 3.5-.5 3.5s2 0 3.5-.5L15 19.5 16.5 18l-1.5-1.5c2.5-.5 5.5-2.5 7.5-4.5-1-6.5-6-9-10-10zm1.5 5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
            <span className="text-xl font-extrabold text-white">Upthrust</span>
            <span className="text-xs font-mono text-zinc-500 ml-2">© 2026 Upthrust Studio</span>
          </div>

          <div className="text-xs text-zinc-400 text-center md:text-right">
            <span>Identity • Experience • Motion</span>
            <p className="text-zinc-500 mt-1">Ready for footer and additional detail additions in next prompt</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
