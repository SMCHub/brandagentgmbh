"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaSection({
  title = "Bereit für den nächsten Schritt?",
  description = "Kontaktieren Sie uns noch heute für ein unverbindliches Beratungsgespräch und erfahren Sie, wie wir gemeinsam Ihre Geschäftsidee in die Realität umsetzen können.",
  buttonText = "Jetzt Projekt starten",
  href = "/kontakt",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
}) {
  return (
    <section className="relative py-24 md:py-32 bg-[#fafafa] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-indigo-500/[0.03] to-[#fafafa]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
              {title}
            </span>
          </h2>
          <p className="text-base text-gray-400 leading-relaxed mb-10">
            {description}
          </p>
          <Link
            href={href}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors group"
          >
            {buttonText}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
