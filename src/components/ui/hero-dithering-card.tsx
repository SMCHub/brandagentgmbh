"use client";

import { ArrowRight } from "lucide-react";
import { useState, Suspense, lazy } from "react";
import Link from "next/link";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.Dithering,
  }))
);

export function DitheringCTA() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-8 sm:py-12 w-full flex justify-center items-center px-4 md:px-6">
      <div
        className="w-full max-w-5xl relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[48px] border border-blue-200/60 bg-blue-50 shadow-sm min-h-[380px] sm:min-h-[450px] md:min-h-[550px] flex flex-col items-center justify-center duration-500">
          <Suspense
            fallback={<div className="absolute inset-0 bg-blue-50" />}
          >
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-multiply">
              <Dithering
                colorBack="#00000000"
                colorFront="#3b82f6"
                shape="warp"
                type="4x4"
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="mb-4 sm:mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-blue-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              Bereit für den nächsten Schritt?
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-8 leading-[1.1]">
              Projekt starten,{" "}
              <br />
Erfolg ernten.
            </h2>

            <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-12 leading-relaxed">
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und
              erfahren Sie, wie wir gemeinsam Ihre Geschäftsidee in die Realität
              umsetzen.
            </p>

            <Link
              href="/kontakt"
              className="group relative inline-flex h-12 sm:h-14 items-center justify-center gap-2 sm:gap-3 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 px-8 sm:px-12 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:from-blue-600 hover:to-indigo-600 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-blue-500/25 hover:ring-4 hover:ring-blue-500/20 cursor-pointer"
            >
              <span className="relative z-10">Jetzt Termin vereinbaren</span>
              <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
