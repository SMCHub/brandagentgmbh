"use client";

import { motion } from "framer-motion";
import { Cog, ShoppingCart, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
  {
    icon: Cog,
    title: "Prozessautomatisierung",
    description:
      "Digitale Workflows statt Papierkram – wir gestalten Ihre Abläufe effizienter. Bis zu 80 % weniger manuelle Arbeit.",
    gradient: "from-indigo-500/20 to-indigo-500/0",
    iconColor: "text-gray-900",
    href: "/agents",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce & Markenportale",
    description:
      "Onlineshops, die funktionieren: von der technischen Basis bis zum individuellen Branding. Alles aus einer Hand.",
    gradient: "from-rose-500/20 to-rose-500/0",
    iconColor: "text-gray-900",
    href: "/brands",
  },
  {
    icon: Palette,
    title: "Branding & Design",
    description:
      "Starke Marken brauchen eine klare Identität – wir entwickeln Design & Markenstrategie für Ihren Erfolg.",
    gradient: "from-violet-500/20 to-violet-500/0",
    iconColor: "text-gray-900",
    href: "/kontakt",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <Link
                href={service.href}
                className={cn(
                  "group relative rounded-2xl p-6 sm:p-8 md:p-10 block",
                  "bg-white/60 backdrop-blur-xl border border-white/80",
                  "shadow-[0_8px_32px_rgba(0,0,0,0.04)]",
                  "hover:bg-white/80 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-white transition-all duration-500"
                )}
              >
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    service.gradient
                  )}
                />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm border border-white shadow-sm flex items-center justify-center mb-6">
                    <service.icon
                      className={cn("h-6 w-6", service.iconColor)}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="text-sm text-gray-900 font-medium group-hover:underline">
                    Mehr erfahren &rarr;
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
