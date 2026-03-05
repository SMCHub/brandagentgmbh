"use client";

import { motion } from "framer-motion";
import { Search, Map, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analyse",
    description:
      "Wir schauen uns Ihre aktuellen Prozesse an und identifizieren Optimierungspotenziale.",
    gradient: "from-indigo-500",
  },
  {
    number: "02",
    icon: Map,
    title: "Planung",
    description:
      "Wir entwickeln eine massgeschneiderte Lösung und einen detaillierten Umsetzungsplan.",
    gradient: "from-violet-500",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Umsetzung",
    description:
      "Wir implementieren Tools & Automatisierungen und begleiten Sie beim Go-Live.",
    gradient: "from-rose-500",
  },
];

export function ProcessSection() {
  return (
    <section
      id="prozess"
      className="relative py-16 sm:py-24 md:py-32 bg-[#fafafa] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-rose-500/[0.02] to-[#fafafa]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">
            So einfach funktioniert es
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
              Unser Prozess
            </span>
          </h2>
        </motion.div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* Orange dot animation traveling across the steps */}
          <motion.div
            className="hidden md:block absolute top-10 left-[15%] w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)] z-20"
            animate={{ x: [0, 800], opacity: [0, 1, 1, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2,
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative text-center"
            >
              <div className="relative inline-flex items-center justify-center mb-6 sm:mb-8">
                <div
                  className={cn(
                    "absolute inset-0 rounded-full bg-gradient-to-r to-transparent opacity-15 blur-xl",
                    step.gradient
                  )}
                  style={{ width: 64, height: 64 }}
                />
                <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center justify-center">
                  <step.icon className="h-6 w-6 sm:h-8 sm:w-8 text-gray-900" strokeWidth={1.5} />
                </div>
              </div>

              <span className="text-xs text-gray-300 tracking-widest uppercase mb-2 block font-mono">
                Schritt {step.number}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-black/[0.06] to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
