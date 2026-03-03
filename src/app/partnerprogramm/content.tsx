"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  Layers,
  Clock,
  Tag,
  MousePointer,
  UserPlus,
  Ticket,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

const benefits = [
  {
    icon: Calculator,
    title: "Einfache Buchhaltung",
    description: "Rechnungen & Offerten in Minuten erstellen.",
    color: "text-gray-900",
  },
  {
    icon: Layers,
    title: "Alles in einer Lösung",
    description: "Kontakte, Projekte, Banking & Buchhaltung.",
    color: "text-gray-900",
  },
  {
    icon: Clock,
    title: "Zeit sparen",
    description: "Mehr Fokus auf Ihr Business, weniger Administration.",
    color: "text-gray-900",
  },
  {
    icon: Tag,
    title: "40 % Rabatt exklusiv",
    description: "Melden Sie sich über unseren Partnerlink an und sichern Sie sich 40 % Preisnachlass auf Ihr bexio-Abo.",
    color: "text-gray-900",
  },
];

const steps = [
  {
    number: "01",
    icon: MousePointer,
    title: "Auf «Jetzt starten» klicken",
  },
  {
    number: "02",
    icon: UserPlus,
    title: "Bei bexio registrieren",
  },
  {
    number: "03",
    icon: Ticket,
    title: "Code partner40 eingeben & sparen",
  },
];

export function PartnerContent() {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText("partner40");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Partner Code */}
      <section className="relative py-12 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md mx-auto rounded-2xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] p-8 text-center"
          >
            <p className="text-sm text-gray-400 mb-4">Ihr exklusiver Partnercode:</p>
            <button
              onClick={copyCode}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-white/80 hover:border-gray-300 transition-colors"
            >
              <span className="text-2xl font-bold text-gray-900 font-mono tracking-wider">
                partner40
              </span>
              <span className="text-xs text-gray-400">
                {copied ? "Kopiert!" : "Kopieren"}
              </span>
            </button>
            <div className="mt-6">
              <a
                href="https://www.bexio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors group"
              >
                Jetzt 40 % Rabatt sichern
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Warum bexio */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[#fafafa] overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
              Warum bexio?
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl p-5 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-lg hover:shadow-black/[0.06] transition-all duration-500"
              >
                <item.icon className={cn("h-7 w-7 mb-4", item.color)} strokeWidth={1.5} />
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schritte */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[#fafafa] overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-16"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
              So einfach funktioniert es
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center"
              >
                <div className="relative w-16 h-16 rounded-full bg-white/70 backdrop-blur-xl border border-white/80 flex items-center justify-center mx-auto mb-4 shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
                  <step.icon className="h-6 w-6 text-gray-900" strokeWidth={1.5} />
                </div>
                <span className="text-xs text-gray-300 tracking-widest uppercase block mb-2 font-mono">
                  Schritt {step.number}
                </span>
                <h3 className="text-sm font-semibold text-gray-900">{step.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[#fafafa] overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
                Bereit für den nächsten Schritt?
              </span>
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-10">
              Kontaktieren Sie uns noch heute für ein unverbindliches
              Beratungsgespräch und erfahren Sie, wie wir gemeinsam Ihre
              Geschäftsidee in die Realität umsetzen können.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors group"
            >
              Jetzt Termin vereinbaren
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
