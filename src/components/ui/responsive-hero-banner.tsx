"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { SidebarMenu } from "@/components/sidebar-menu";
import { AuroraBackground } from "@/components/ui/aurora-background";

const technologies = ["n8n", "Zapier", "Claude", "ChatGPT", "Vercel"];

const ResponsiveHeroBanner: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SidebarMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <AuroraBackground className="relative isolate overflow-hidden">
        {/* Bottom blur transition */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-[#fafafa]/60 to-[#fafafa] z-30" />
        <div className="pointer-events-none absolute -bottom-2 left-0 right-0 h-16 bg-[#fafafa] blur-xl z-30" />

        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-50">
          <div className="mx-6">
            <div className="flex items-center justify-between pt-5">
              {/* Hamburger Menu */}
              <button
                onClick={() => setMenuOpen(true)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10 backdrop-blur-md hover:bg-black/10 transition-colors cursor-pointer"
                aria-label="Menu öffnen"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gray-800"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              </button>

              {/* Brand Agent Logo (centered) */}
              <a href="/" className="absolute left-1/2 -translate-x-1/2">
                <img
                  src="/images/logos/brand-agent-black.png"
                  alt="Brand Agent"
                  className="h-5 sm:h-7 w-auto"
                />
              </a>

              {/* Glass CTA Button */}
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-black/5 backdrop-blur-md ring-1 ring-black/10 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-black/10 transition-colors cursor-pointer"
              >
                Projekt starten
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </a>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="relative z-40 px-6 w-full pt-32"
        >
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-black/5 px-2.5 py-2 ring-1 ring-black/10 backdrop-blur">
              <span className="inline-flex items-center text-xs font-medium text-white bg-gray-900 rounded-full py-0.5 px-2 font-sans">
                Neu
              </span>
              <span className="text-sm font-medium text-gray-700 font-sans">
                KI-gestützte Automatisierung für Ihr Business
              </span>
            </div>

            {/* Headline: VORSPRUNG DURCH INTELLIGENZ */}
            <h1 className="leading-none tracking-tight font-bold text-gray-900">
              <span className="block text-[2.7rem] sm:text-[3.375rem] md:text-[4.05rem] lg:text-[5.4rem]">
                VORSPRUNG
              </span>
              <span className="block text-[1.35rem] sm:text-[1.7rem] md:text-[2rem] lg:text-[2.7rem] font-light tracking-[0.3em] my-2 sm:my-3 text-gray-400">
                DURCH
              </span>
              <span className="block text-[2.7rem] sm:text-[3.375rem] md:text-[4.05rem] lg:text-[5.4rem]">
                INTELLIGENZ
              </span>
            </h1>

            {/* Subtitle */}
            <p className="sm:text-lg text-base text-gray-500 max-w-2xl mt-8 mx-auto leading-relaxed">
              Wir verbinden Ihre Strategie mit modernster KI-Technologie, um
              digitale Prozesse effizient und skalierbar zu automatisieren.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row sm:gap-4 mt-10 gap-3 items-center justify-center">
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-6 font-sans transition-colors cursor-pointer"
              >
                Projekt starten
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-transparent px-6 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 font-sans transition-colors cursor-pointer"
              >
                Leistungen entdecken
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Logo Marquee */}
          <div className="mt-20 w-full relative z-40">
            <p className="text-xs text-gray-400 text-center tracking-[0.25em] uppercase mb-8">
              Integrationen & Technologien
            </p>
            <div className="relative overflow-hidden">
              {/* Fade edges */}
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10" />
              {/* Scrolling track */}
              <div className="flex w-max animate-marquee">
                {[...technologies, ...technologies, ...technologies, ...technologies].map((name, i) => (
                  <div
                    key={`${name}-${i}`}
                    className="flex items-center px-6 sm:px-10"
                  >
                    <span className="text-sm sm:text-base font-semibold text-gray-800 tracking-wide whitespace-nowrap">
                      {name}
                    </span>
                    <span className="ml-6 sm:ml-10 text-gray-300">·</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </>
  );
};

export default ResponsiveHeroBanner;
