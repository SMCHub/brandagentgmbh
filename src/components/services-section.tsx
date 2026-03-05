"use client";

import { motion } from "framer-motion";
import { Cog, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/glowing-background-stars-card";

const services = [
  {
    icon: Cog,
    title: "Digitale Prozessautomatisierung",
    description:
      "Individuelle Automatisierungslösungen für Ihre Geschäftsprozesse – von Vergleichsofferten über Angebotsentwürfe bis hin zur Videoerstellung.",
    href: "#",
  },
  {
    icon: Palette,
    title: "Digitale Präsenz",
    description:
      "LLM-optimierte Texte, Leadgenerierung, Ads Management sowie professionelle Webseiten- und Webshop-Entwicklung für Ihre Marke.",
    href: "#",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 md:py-32 bg-[#fafafa] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-indigo-500/[0.03] to-[#fafafa]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">
            Was wir tun
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
              Unsere Lösungen für Sie
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Link href={service.href} className="block group">
                <GlowingStarsBackgroundCard>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-lg bg-gray-100 border border-gray-200/80 flex items-center justify-center shrink-0">
                      <service.icon
                        className="h-4.5 w-4.5 text-gray-900"
                        strokeWidth={1.5}
                      />
                    </div>
                    <GlowingStarsTitle>{service.title}</GlowingStarsTitle>
                  </div>
                  <GlowingStarsDescription>
                    {service.description}
                  </GlowingStarsDescription>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-900 font-medium group-hover:underline">
                      Mehr erfahren
                    </span>
                    <div className="h-7 w-7 rounded-full bg-gray-100 border border-gray-200/80 flex items-center justify-center group-hover:bg-gray-900 group-hover:border-gray-900 transition-colors duration-300">
                      <ArrowRight className="h-3.5 w-3.5 text-gray-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </GlowingStarsBackgroundCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
