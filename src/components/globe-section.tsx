"use client";

import { motion } from "framer-motion";
import { LocationMap } from "@/components/ui/expand-map";
import { Building2 } from "lucide-react";

export function GlobeSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-blue-500/[0.02] to-[#fafafa]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto rounded-2xl border border-blue-200/60 bg-blue-50/50 backdrop-blur-2xl shadow-[0_8px_48px_rgba(0,0,0,0.06)] overflow-hidden relative">
          <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row min-h-0 md:min-h-[500px]">
            <div className="flex-1 flex flex-col justify-center p-5 sm:p-10 md:p-14 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 backdrop-blur-sm px-3 py-1 text-xs text-gray-900 font-medium mb-6 w-fit shadow-sm">
                  <span className="size-1.5 rounded-full bg-gray-900 animate-pulse" />
                  Schweizweit vernetzt
                </div>

                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-3 sm:mb-4">
                  Schweizweit vernetzt.
                </h2>

                <p className="text-xs sm:text-sm md:text-base text-gray-500 max-w-md leading-relaxed mb-5 sm:mb-8">
                  Aus dem Kanton Zug betreuen wir Kunden in der ganzen Schweiz
                  und Europa. Unsere digitalen Lösungen kennen keine Grenzen.
                </p>

                {/* Company Label */}
                <div className="flex items-center gap-3 mb-5 sm:mb-6">
                  <div className="w-9 h-9 rounded-lg bg-white/80 backdrop-blur-sm border border-blue-200/60 shadow-sm flex items-center justify-center">
                    <Building2
                      className="h-4.5 w-4.5 text-blue-600"
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
                  <div className="w-px h-6 sm:h-8 bg-blue-200" />
                  <div>
                    <p className="text-lg sm:text-2xl font-bold text-gray-900">
                      3+
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400">
                      Standorte
                    </p>
                  </div>
                  <div className="w-px h-6 sm:h-8 bg-blue-200" />
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

            {/* Map */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8 min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <LocationMap
                  location="Steinhausen, Kanton Zug"
                  coordinates="47.1942° N, 8.4868° E"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
