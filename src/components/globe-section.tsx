"use client";

import { motion } from "framer-motion";
import { SwissMap } from "@/components/swiss-map";
import { Building2 } from "lucide-react";

export function GlobeSection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-[#fafafa] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-orange-500/[0.02] to-[#fafafa]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto rounded-2xl border border-orange-200/60 bg-orange-50/50 backdrop-blur-2xl shadow-[0_8px_48px_rgba(0,0,0,0.06)] overflow-hidden relative">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row min-h-0 md:min-h-[500px]">
            <div className="flex-1 flex flex-col justify-center p-5 sm:p-10 md:p-14 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 backdrop-blur-sm px-3 py-1 text-xs text-orange-700 mb-6 w-fit shadow-sm">
                  <span className="size-1.5 rounded-full bg-orange-500 animate-pulse" />
                  Digital vernetzt
                </div>

                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-1 sm:mb-2">
                  Aus dem
                </h2>
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-3 sm:mb-4">
                  <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                    Kanton Zug..
                  </span>
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-md leading-relaxed mb-5 sm:mb-8">
                  Von Steinhausen aus betreuen wir Kunden in der ganzen Schweiz
                  und Europa. Unsere digitalen Lösungen kennen keine Grenzen.
                </p>

                {/* Company Label */}
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-9 h-9 rounded-lg bg-white/80 backdrop-blur-sm border border-orange-200/60 shadow-sm flex items-center justify-center">
                    <Building2
                      className="h-4.5 w-4.5 text-orange-600"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Brand Agent GmbH
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400">
                      Hammerstrasse 5, 6312 Steinhausen
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 sm:gap-6">
                  <div>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">
                      CH
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400">
                      Hauptsitz
                    </p>
                  </div>
                  <div className="w-px h-6 sm:h-8 bg-orange-200" />
                  <div>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">
                      3+
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400">
                      Standorte
                    </p>
                  </div>
                  <div className="w-px h-6 sm:h-8 bg-orange-200" />
                  <div>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">
                      24/7
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400">
                      Erreichbar
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Swiss Map */}
            <div className="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-0 min-h-[250px] sm:min-h-[300px] md:min-h-[400px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="w-full max-w-[460px] aspect-square"
              >
                <SwissMap />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
