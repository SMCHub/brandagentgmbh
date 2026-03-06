"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    quote:
      "Mit Brand Agent konnten wir unsere Buchhaltung komplett automatisieren. Das spart uns jede Woche mehrere Stunden.",
    name: "Sarah K.",
    role: "CFO",
    gradient: "from-indigo-500/10",
  },
  {
    quote:
      "Unser Onlineshop läuft seit dem Relaunch nicht nur stabiler, sondern auch deutlich effizienter. Das Team von Brand Agent versteht, was Marken brauchen.",
    name: "Lukas S.",
    role: "E-Commerce Manager",
    gradient: "from-rose-500/10",
  },
  {
    quote:
      "Von der ersten Analyse bis zur Umsetzung – alles lief reibungslos. Besonders beeindruckt hat uns die persönliche Betreuung.",
    name: "Mara V.",
    role: "Geschäftsführerin",
    gradient: "from-violet-500/10",
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-violet-500/[0.02] to-[#fafafa]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">
            Kundenstimmen
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
              Was unsere Kunden sagen
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={cn(
                "relative rounded-2xl p-6 sm:p-8 md:p-10",
                "bg-white/60 backdrop-blur-xl border border-white/80",
                "shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              )}
            >
              <div
                className={cn(
                  "absolute inset-0 rounded-2xl bg-gradient-to-b to-transparent opacity-50",
                  testimonial.gradient
                )}
              />
              <div className="relative z-10">
                <Quote className="h-6 w-6 text-gray-200 mb-6" />
                <p className="text-sm text-gray-500 leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
