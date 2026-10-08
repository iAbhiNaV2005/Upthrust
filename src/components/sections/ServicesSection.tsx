"use client";

import React, { useState, useRef } from "react";
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
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full bg-black text-white min-h-screen py-16 lg:py-24 overflow-hidden"
    >
      {/* 3D Glossy Orange Curve Canvas (Fixed / Absolute Background Layer) */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-95">
        <DynamicCurveCanvas activeIndex={activeTab} className="w-full h-full" />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Navigation Tabs for Easy Switching between the 4 Figma Slides */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-zinc-800/80">
          {services.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                activeTab === idx
                  ? "bg-[#FF3700] text-white shadow-lg shadow-orange-600/30 scale-105"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800"
              }`}
            >
              <span>0{idx + 1}.</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Showcase */}
        {services.map((service, idx) => {
          if (idx !== activeTab) return null;

          return (
            <div
              key={service.id}
              className="animate-in fade-in zoom-in-95 duration-500 transition-all flex flex-col justify-between"
            >
              {/* Top Category Label */}
              <div className="mb-2">
                <span className="text-xs md:text-sm font-semibold tracking-widest text-zinc-400 uppercase">
                  {service.category}
                </span>
              </div>

              {/* Big Section Title */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-10 lg:mb-14">
                {service.title}
              </h2>

              {/* Content Grid: Left Mockup Card, Right Copy & Contact */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Left Visual Mockup */}
                <div className="lg:col-span-6 w-full relative z-20 drop-shadow-2xl">
                  {service.mockup}
                </div>

                {/* Right Column: Copy, Bullets, and Contact CTA */}
                <div className="lg:col-span-6 flex flex-col items-start gap-6 lg:gap-8 relative z-20">
                  {/* Tagline / Subtitle */}
                  <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-zinc-100 leading-snug">
                    {service.tagline}
                  </p>

                  {/* Bullet points with star icons */}
                  <ul className="flex flex-col gap-3.5 my-2">
                    {service.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-3 text-base sm:text-lg font-medium text-zinc-200">
                        {/* 4-point star icon matching Figma */}
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

                  {/* Secondary Note if present (Slide 4) */}
                  {service.note && (
                    <p className="text-xs sm:text-sm text-zinc-400 italic max-w-lg leading-relaxed border-l-2 border-zinc-700 pl-3">
                      {service.note}
                    </p>
                  )}

                  {/* Contact Button matching Figma: White rectangle, bold orange text */}
                  <div className="pt-2">
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center bg-white hover:bg-zinc-100 text-[#FF3700] px-8 py-3.5 text-base sm:text-lg font-extrabold tracking-wider uppercase transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
                    >
                      CONTACT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Carousel / Navigation Indicators at Bottom */}
        <div className="mt-16 pt-8 border-t border-zinc-800/60 flex items-center justify-between text-xs font-mono text-zinc-500">
          <span>WHAT CAN WE DO FOR YOU // 0{activeTab + 1} OF 04</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab((prev) => (prev > 0 ? prev - 1 : services.length - 1))}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors"
              aria-label="Previous service"
            >
              ← PREV
            </button>
            <button
              onClick={() => setActiveTab((prev) => (prev < services.length - 1 ? prev + 1 : 0))}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 transition-colors"
              aria-label="Next service"
            >
              NEXT →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
