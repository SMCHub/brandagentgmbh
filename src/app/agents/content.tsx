"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Users,
  Video,
  Zap,
  Globe,
  BarChart3,
  Mail,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const agents = [
  {
    icon: Bot,
    title: "Individuelle Automatisierungsagenten",
    description:
      "Wir entwickeln massgeschneiderte Automatisierungsagenten, die Ihre Geschäftsprozesse vereinfachen und beschleunigen – für Support, Routing und spezifische Workflows.",
    features: [
      "Automatisierung ohne manuelles Eingreifen",
      "Mehrsprachig und szenariobasiert",
      "Nahtlose Integration in bestehende Systeme",
      "Optimierung durch Nutzungsanalysen",
    ],
    gradient: "from-indigo-500/10",
    iconColor: "text-gray-900",
  },
  {
    icon: Users,
    title: "Neukundengewinnung bei Neugründungen",
    description:
      "Unser Service identifiziert und qualifiziert potenzielle Kunden unter neu gegründeten Unternehmen – mit automatisiertem Lead-Scoring und CRM-Integration.",
    features: [
      "Identifikation von Neugründungen",
      "Echtzeit Lead-Scoring und Qualifizierung",
      "Direkte CRM- und Mailing-Integration",
      "Personalisierte Kundenbindung",
    ],
    gradient: "from-rose-500/10",
    iconColor: "text-gray-900",
  },
  {
    icon: Video,
    title: "Smart Video Agent",
    description:
      "Erstellt automatisch Videos aus Online-Formularen und veröffentlicht sie direkt auf mehreren Plattformen – ohne technisches Know-how oder Mehraufwand.",
    features: [
      "Automatische Videoerstellung aus Formularen",
      "Direkter Upload auf alle Plattformen",
      "Keine Videobearbeitungskenntnisse nötig",
      "Mehr Sichtbarkeit durch strategisches Posting",
    ],
    gradient: "from-violet-500/10",
    iconColor: "text-gray-900",
  },
];

const benefits = [
  { icon: Zap, label: "Bis zu 80 % weniger manuelle Arbeit" },
  { icon: Globe, label: "Nahtlose Integration mit Ihren Tools" },
  { icon: BarChart3, label: "Messbare Ergebnisse und Analysen" },
  { icon: Mail, label: "Persönlicher Support durch Experten" },
];

export function AgentsContent() {
  return (
    <>
      {/* Benefits Bar */}
      <section className="relative py-12 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <benefit.icon className="h-5 w-5 text-gray-900 shrink-0" strokeWidth={1.5} />
                <span className="text-xs text-gray-500">{benefit.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Cards */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[#fafafa] overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="space-y-12 max-w-4xl mx-auto">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative rounded-2xl p-5 sm:p-8 md:p-12 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden"
              >
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br to-transparent opacity-30",
                    agent.gradient
                  )}
                />
                <div className="relative z-10">
                  <agent.icon
                    className={cn("h-10 w-10 mb-6", agent.iconColor)}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight">
                    {agent.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xl">
                    {agent.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {agent.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-1.5 shrink-0" />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:underline group"
                  >
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
                Bereit, Ihre Prozesse aufs nächste Level zu bringen?
              </span>
            </h2>
            <p className="text-base text-gray-400 leading-relaxed mb-10">
              Vereinbaren Sie ein kostenloses Erstgespräch und erfahren Sie, wie
              unsere Agents Ihren Alltag revolutionieren können.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors group"
            >
              Jetzt Projekt starten
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
