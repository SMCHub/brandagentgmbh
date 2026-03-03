"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "80%", label: "Weniger manuelle Arbeit" },
  { value: "100+", label: "Erfolgreiche Projekte" },
  { value: "24/7", label: "Automatisierte Prozesse" },
  { value: "6312", label: "Steinhausen, CH" },
];

export function StatsSection() {
  return (
    <section className="relative py-16 md:py-24 bg-[#fafafa] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/[0.03] via-transparent to-rose-500/[0.03]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-700 mb-2">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-gray-400 tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
