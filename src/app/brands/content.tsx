"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Package,
  Palette,
  TrendingUp,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

const advantages = [
  {
    icon: ShoppingCart,
    title: "Minimaler Starteinsatz",
    description: "Flexible Modelle, die zu Ihrem Budget passen – wir finden die passende Lösung.",
    color: "text-gray-900",
  },
  {
    icon: Palette,
    title: "Professioneller Shop",
    description: "Ein vollständiger Onlineshop ohne eigenen Ressourcenaufwand – wir kümmern uns um alles.",
    color: "text-gray-900",
  },
  {
    icon: TrendingUp,
    title: "Attraktive Lizenzstruktur",
    description: "Profitieren Sie von unserem Geschäftsmodell mit attraktiven Lizenzkonditionen.",
    color: "text-gray-900",
  },
  {
    icon: Package,
    title: "Komplettes Fulfillment",
    description: "Lagerung, Versand, Retouren und Kundensupport – alles aus einer Hand.",
    color: "text-gray-900",
  },
];

const faqs = [
  {
    question: "Wie hoch ist die Anfangsinvestition?",
    answer:
      "Wir bieten flexible Modelle an. In einem persönlichen Beratungsgespräch ermitteln wir ein individuelles Angebot, das zu Ihrer finanziellen Situation passt.",
  },
  {
    question: "Wie lange dauert es bis zum Launch?",
    answer:
      "Die Entwicklungszeit für einen Onlineshop beträgt in der Regel 2–3 Monate. Hinzu kommen 2–4 Monate für markenspezifische Produktentwicklung.",
  },
  {
    question: "Wie funktioniert die Logistik?",
    answer:
      "Wir bieten ein Full-Service-Modell: Lagerung, Versand, Retouren und Kundensupport werden komplett von uns abgewickelt.",
  },
];

export function BrandsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* E-Commerce Strategy */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[#fafafa] overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
                Onlineshop mit Lizenzvertrag
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-400 leading-relaxed"
            >
              Wir übernehmen Entwicklung, Betrieb und Marketing – Sie profitieren
              von attraktiven Lizenzkonditionen und einem starken Partner an Ihrer Seite.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advantages.map((item, index) => (
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

      {/* FAQ */}
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
              Häufige Fragen
            </span>
          </motion.h2>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-sm font-medium text-gray-800">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-gray-400 shrink-0 transition-transform duration-300",
                      openFaq === index && "rotate-180"
                    )}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
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
              Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und
              erfahren Sie, wie wir gemeinsam Ihre Geschäftsidee umsetzen.
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
