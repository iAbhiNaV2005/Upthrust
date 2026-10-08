"use client";

import React, { useState } from "react";
import Image from "next/image";

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-white overflow-hidden flex flex-col justify-between select-none"
    >
      {/* Top Section: "UPTHRUST [FLOWER] DESIGN" */}
      <div className="relative w-full pt-20 sm:pt-28 md:pt-36 lg:pt-44 px-4 sm:px-6 md:px-8 flex items-end justify-center overflow-visible">
        <div className="inline-flex items-end justify-center font-[family-name:var(--font-condensed)] text-white uppercase tracking-tight text-[12vw] sm:text-[12.2vw] md:text-[12.5vw] lg:text-[12.8vw] xl:text-[180px] leading-[0.88] select-none">
          {/* UPTHRUST */}
          <span className="shrink-0">UPTHRUST</span>

          {/* Exact Brand Flower / Trefoil tightly fitted between UPTHRUST and DESIGN */}
          <span className="relative shrink-0 flex items-end justify-center mx-1.5 sm:mx-2 md:mx-2.5 -mb-[0.25vw] pb-0">
            <span className="relative inline-block w-[4.4vw] h-[3.8vw] min-w-[32px] min-h-[28px] max-w-[62px] max-h-[54px]">
              <Image
                src="/footer-flower.png"
                alt="Upthrust Brand Emblem"
                width={332}
                height={289}
                className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(255,55,0,0.4)]"
                priority
              />
            </span>
          </span>

          {/* DESIGN */}
          <span className="shrink-0">DESIGN</span>
        </div>
      </div>

      {/* Horizontal Divider Line touching the flower bottom petal */}
      <div className="w-full border-t border-white/20 relative z-10" />

      {/* Lower Section: Exactly aligned columns (Left ~61.5%, Right ~38.5%) */}
      <div className="w-full flex flex-col lg:flex-row min-h-[340px] sm:min-h-[380px]">
        {/* Left Section (61.5% on desktop) */}
        <div className="w-full lg:w-[61.5%] px-6 sm:px-10 lg:px-14 py-8 sm:py-10 flex flex-col justify-between lg:border-r border-white/20">
          {/* Two Sub-columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-14">
            {/* Sub-column 1: upthrust.agency */}
            <div className="flex flex-col gap-3">
              <a
                href="https://upthrust.agency"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white underline underline-offset-4 decoration-white/70 hover:text-[#FF3700] hover:decoration-[#FF3700] transition-colors w-fit"
              >
                <span>upthrust.agency</span>
                <span className="text-[10px]">↗</span>
              </a>

              <div className="flex flex-col gap-0.5 text-xs text-zinc-400">
                <p>add description here</p>
                <a
                  href="mailto:hello@upthrust.agency"
                  className="hover:text-white transition-colors"
                >
                  hello@upthrust.agency
                </a>
              </div>
            </div>

            {/* Sub-column 2: upthrust.io */}
            <div className="flex flex-col gap-3">
              <a
                href="https://upthrust.io"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-white underline underline-offset-4 decoration-white/70 hover:text-[#FF3700] hover:decoration-[#FF3700] transition-colors w-fit"
              >
                <span>upthrust.io</span>
                <span className="text-[10px]">↗</span>
              </a>

              <div className="flex flex-col gap-0.5 text-xs text-zinc-400">
                <p>add description here</p>
                <a
                  href="mailto:hello@upthrust.io"
                  className="hover:text-white transition-colors"
                >
                  hello@upthrust.io
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Left Note */}
          <div className="pt-20 sm:pt-28 lg:pt-36">
            <p className="text-xs text-zinc-500 font-normal">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>

        {/* Right Section (38.5% on desktop) */}
        <div className="w-full lg:w-[38.5%] px-6 sm:px-10 lg:px-12 py-8 sm:py-10 flex flex-col justify-between border-t lg:border-t-0 border-white/20">
          {/* Top: Newsletter Form */}
          <div className="flex flex-col gap-3.5">
            <h4 className="text-xs sm:text-sm font-semibold text-white">
              Sign up for our emails
            </h4>

            {/* Checkbox & Consent Disclaimer */}
            <label className="flex items-start gap-2.5 cursor-pointer text-[11px] text-zinc-400 leading-snug max-w-sm">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-3.5 h-3.5 rounded-none border border-zinc-600 bg-transparent text-white accent-[#FF3700] cursor-pointer shrink-0"
              />
              <span>
                By checking this box sign up for our newsletter and receive marketing
                emails and updates on our services. You can unsubscribe at any time.
              </span>
            </label>

            {/* Email Input & Submit CTA */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-2 max-w-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="typehere@youremail.com"
                required
                className="w-full bg-transparent border-b border-zinc-700 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="text-xs font-semibold text-white hover:text-[#FF3700] transition-colors text-left w-fit cursor-pointer mt-1"
              >
                {submitted ? "Subscribed!" : "Submit"}
              </button>
            </form>
          </div>

          {/* Middle: Agency Quick Links Row */}
          <div className="flex items-center gap-6 my-10 sm:my-14">
            <a
              href="https://upthrust.agency"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-white underline underline-offset-4 decoration-white/70 hover:text-[#FF3700] hover:decoration-[#FF3700] transition-colors"
            >
              <span>upthrust.agency</span>
              <span className="text-[10px]">↗</span>
            </a>
            <a
              href="https://upthrust.io"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-white underline underline-offset-4 decoration-white/70 hover:text-[#FF3700] hover:decoration-[#FF3700] transition-colors"
            >
              <span>upthrust.io</span>
              <span className="text-[10px]">↗</span>
            </a>
          </div>

          {/* Bottom: Socials, Privacy, Copyright */}
          <div className="flex flex-col gap-1 text-xs text-zinc-400">
            <p className="text-white font-medium">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FF3700] transition-colors"
              >
                Instagram
              </a>
              {" , "}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FF3700] transition-colors"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </p>
            <p className="text-zinc-500">© Upthrust Design</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
