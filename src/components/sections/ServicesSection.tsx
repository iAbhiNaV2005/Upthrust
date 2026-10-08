"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { StrategyMockup } from "@/components/ui/mockups/StrategyMockup";
import { BrandIdentityMockup } from "@/components/ui/mockups/BrandIdentityMockup";
import { ProductExperienceMockup } from "@/components/ui/mockups/ProductExperienceMockup";
import { CreativeCampaignMockup } from "@/components/ui/mockups/CreativeCampaignMockup";

const DynamicCurveCanvas = dynamic(
  () => import("@/components/canvas/CurveScene").then((mod) => mod.CurveCanvas),
  {
    ssr: false,
    loading: () => null,
  }
);

interface ServiceData {
  id: string;
  category: string;
  title: string;
  tagline: string;
  bullets: string[];
  note?: string;
  mockup: React.ReactNode;
}

const services: ServiceData[] = [
  {
    id: "strategy-and-insight",
    category: "WHAT CAN WE DO FOR YOU",
    title: "Strategy and Insight",
    tagline: "We interrogate what others assume. Then we build the brief behind the brief.",
    bullets: [
      "Brand strategy & positioning",
      "Messaging & tone of voice",
      "Audience & competitor research",
      "Workshops & creative sprints",
    ],
    mockup: <StrategyMockup />,
  },
  {
    id: "brand-and-visual-identity",
    category: "WHAT CAN WE DO FOR YOU",
    title: "Brand & visual identity",
    tagline: "We build systems, not just logos. So you own the category, not just the conversation.",
    bullets: [
      "Brand identity & visual language",
      "Guidelines & naming",
      "Illustration & iconography",
      "Brand architecture & systems",
    ],
    mockup: <BrandIdentityMockup />,
  },
  {
    id: "product-and-digital-experience",
    category: "WHAT CAN WE DO FOR YOU",
    title: "Product & digital experience",
    tagline: "We design for humans and metrics. So users stay, engage, and come back.",
    bullets: [
      "UI/UX & website design",
      "Design systems & prototyping",
      "User research & testing",
      "Motion graphics & micro-interactions",
    ],
    mockup: <ProductExperienceMockup />,
  },
  {
    id: "creative-and-campaign-production",
    category: "WHAT CAN WE DO FOR YOU",
    title: "Creative & campaign production",
    tagline: "We turn attention into action. Then we prove it worked.",
    bullets: [
      "Campaign creative & social content",
      "Presentations & pitch decks",
      "Marketing collateral & ad creative",
    ],
    note: "psst.. Also, physical spaces. Because not everything happens on a screen experiential and spatial design for exhibitions, placemaking and branded environments, Just ask.",
    mockup: <CreativeCampaignMockup />,
  },
];

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetProgressRef = useRef(0);
  const [smoothProgress, setSmoothProgress] = useState(0);

  // Smooth 60fps damping interpolation loop
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScroll / totalScrollable));

      // Target progress from 0.0 to 3.0
      targetProgressRef.current = rawProgress * 3;
    };

    let current = 0;
    const tick = () => {
      const target = targetProgressRef.current;
      const diff = target - current;

      // Smooth damping lerp
      if (Math.abs(diff) > 0.0005) {
        current += diff * 0.12;
        setSmoothProgress(current);
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    animationFrameId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full h-[400vh] bg-black text-white"
    >
      {/* Sticky Fullscreen Viewport (100vh / Edge-to-Edge) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-8 md:py-12 lg:py-16 px-6 sm:px-10 md:px-16 lg:px-24 select-none">
        {/* Background 3D Glossy Orange Curve Canvas (Full-bleed Zoomed, moves left-to-right with scroll) */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-95">
          <DynamicCurveCanvas scrollProgress={smoothProgress} className="w-full h-full" />
        </div>

        {/* Main Content Area: Clean Cross-Fading Slides without ghosting */}
        <div className="relative z-20 w-full h-full flex items-center justify-center">
          {services.map((service, idx) => {
            const dist = smoothProgress - idx;
            const absDist = Math.abs(dist);

            // Clean cosine crossfade window eliminating any background ghost text
            let opacity = 0;
            if (absDist <= 0.35) {
              opacity = 1;
            } else if (absDist < 0.85) {
              const t = (absDist - 0.35) / 0.5;
              opacity = 0.5 * (1 + Math.cos(t * Math.PI));
            } else {
              opacity = 0;
            }

            // Smooth directional slide: content slides up when entering, down when leaving
            const translateY = dist * -40;
            const isInteractive = absDist < 0.45;
            // Child stagger: active slide children animate in, inactive ones reset
            const isActive = absDist <= 0.5;
            const childOpacity = isActive ? 1 : 0;
            const childSlide = isActive ? 0 : 18;

            return (
              <div
                key={service.id}
                style={{
                  opacity,
                  transform: `translateY(${translateY}px) scale(${1 - Math.min(0.04, absDist * 0.04)})`,
                  pointerEvents: isInteractive ? "auto" : "none",
                  visibility: opacity <= 0.001 ? "hidden" : "visible",
                  willChange: "opacity, transform",
                  transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                className="absolute inset-0 w-full h-full flex flex-col justify-between"
              >
                {/* Top Section Header — stagger delay 0ms */}
                <div
                  className="flex flex-col shrink-0"
                  style={{
                    opacity: childOpacity,
                    transform: `translateY(${childSlide}px)`,
                    transition: "opacity 0.55s ease-out 0s, transform 0.55s ease-out 0s",
                  }}
                >
                  <span className="text-xs md:text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-2">
                    {service.category}
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                    {service.title}
                  </h2>
                </div>

                {/* Content Grid: Left Mockup Card, Right Copy & Contact */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center flex-1 my-4 min-h-0">
                  {/* Left Visual Mockup — stagger delay 100ms */}
                  <div
                    className="lg:col-span-6 w-full relative z-20 drop-shadow-2xl"
                    style={{
                      opacity: childOpacity,
                      transform: `translateY(${childSlide}px)`,
                      transition: "opacity 0.55s ease-out 0.1s, transform 0.55s ease-out 0.1s",
                    }}
                  >
                    {service.mockup}
                  </div>

                  {/* Right Column: Copy, Bullets, and Contact CTA */}
                  <div className="lg:col-span-6 flex flex-col items-start gap-5 lg:gap-7 relative z-20">
                    {/* Tagline / Subtitle — stagger delay 120ms */}
                    <p
                      className="text-xl sm:text-2xl lg:text-3xl font-medium text-zinc-100 leading-snug"
                      style={{
                        opacity: childOpacity,
                        transform: `translateY(${childSlide}px)`,
                        transition: "opacity 0.55s ease-out 0.12s, transform 0.55s ease-out 0.12s",
                      }}
                    >
                      {service.tagline}
                    </p>

                    {/* Bullet points with 4-point star icons — stagger delay 200ms */}
                    <ul
                      className="flex flex-col gap-3 my-1"
                      style={{
                        opacity: childOpacity,
                        transform: `translateY(${childSlide}px)`,
                        transition: "opacity 0.55s ease-out 0.2s, transform 0.55s ease-out 0.2s",
                      }}
                    >
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-3 text-base sm:text-lg font-medium text-zinc-200">
                          {/* 4-point star icon */}
                          <svg
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-orange-400 fill-orange-400 shrink-0"
                          >
                            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
                          </svg>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Secondary Note if present — stagger delay 280ms */}
                    {service.note && (
                      <p
                        className="text-xs sm:text-sm text-zinc-400 italic max-w-lg leading-relaxed border-l-2 border-zinc-700 pl-3"
                        style={{
                          opacity: childOpacity,
                          transform: `translateY(${childSlide}px)`,
                          transition: "opacity 0.55s ease-out 0.28s, transform 0.55s ease-out 0.28s",
                        }}
                      >
                        {service.note}
                      </p>
                    )}

                    {/* Contact Button matching Figma — stagger delay 340ms */}
                    <div
                      className="pt-2"
                      style={{
                        opacity: childOpacity,
                        transform: `translateY(${childSlide}px)`,
                        transition: "opacity 0.55s ease-out 0.34s, transform 0.55s ease-out 0.34s",
                      }}
                    >
                      <a
                        href="#contact"
                        className="inline-flex items-center justify-center bg-white hover:bg-zinc-100 text-[#FF3700] px-8 py-3.5 text-base sm:text-lg font-extrabold tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10 cursor-pointer"
                      >
                        CONTACT
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bottom padding balance */}
                <div className="h-2 shrink-0" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
