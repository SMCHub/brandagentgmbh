"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Languages,
  ShieldCheck,
  Coins,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Forward,
  Brain,
  CheckCheck,
  ExternalLink,
  Lock,
  Server,
  Trash2,
  KeyRound,
  AlertTriangle,
  Clock,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "43.8 Mrd.", label: "Sprachnachrichten/Tag" },
  { value: "5", label: "Sprachen" },
  { value: "< 10s", label: "Antwortzeit" },
  { value: "DSG", label: "Konform" },
];

const features = [
  {
    icon: Zap,
    title: "Blitzschnell",
    description:
      "Sprachnachrichten werden in Sekunden transkribiert und zusammengefasst. Kein Warten, kein Abspielen – einfach weiterlesen.",
    features: ["Sekunden-schnell", "Automatisch", "Zusammenfassung", "Transkription"],
    benefits: "Sprachnachrichten in Sekunden statt Minuten erfassen",
  },
  {
    icon: Languages,
    title: "Mehrsprachig",
    description:
      "Versteht Deutsch, Schweizerdeutsch, Französisch, Italienisch und Englisch. Perfekt für die mehrsprachige Schweiz.",
    features: ["Deutsch", "Schweizerdeutsch", "Französisch", "Italienisch"],
    benefits: "5 Sprachen inklusive Schweizerdeutsch",
  },
  {
    icon: ShieldCheck,
    title: "Sicher & Privat",
    description:
      "DSG-konform, Daten werden auf EU-Servern verarbeitet und sofort nach der Transkription gelöscht. Keine Speicherung, keine Weitergabe.",
    features: ["DSG-konform", "EU-Server", "Sofort gelöscht", "Verschlüsselt"],
    benefits: "Maximaler Datenschutz nach Schweizer Standard",
  },
  {
    icon: Coins,
    title: "Günstig",
    description:
      "Starten Sie kostenlos mit 5 Nachrichten pro Monat. Für Power-User gibt es unlimitierte Pläne ab CHF 3.90 pro Monat.",
    features: ["Free-Tier", "Ab CHF 0", "Keine Kreditkarte", "Jederzeit kündbar"],
    benefits: "Kostenlos starten, bei Bedarf upgraden",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Weiterleiten",
    description: "Leiten Sie eine Sprachnachricht an den nutshellai Bot auf WhatsApp weiter.",
    icon: Forward,
  },
  {
    step: "02",
    title: "KI analysiert",
    description: "Die KI transkribiert und fasst die Nachricht in Sekunden zusammen.",
    icon: Brain,
  },
  {
    step: "03",
    title: "Fertig",
    description: "Sie erhalten eine präzise Textzusammenfassung direkt in WhatsApp.",
    icon: CheckCheck,
  },
];

const pricing = [
  {
    name: "Free",
    price: "CHF 0",
    period: "/Monat",
    description: "Zum Ausprobieren",
    features: ["5 Nachrichten/Monat", "Alle Sprachen", "DSG-konform"],
    highlighted: false,
  },
  {
    name: "Plus",
    price: "CHF 3.90",
    period: "/Monat",
    description: "Für den Alltag",
    features: ["Unlimited Nachrichten", "Alle Sprachen", "DSG-konform", "Priorität"],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "CHF 7.90",
    period: "/Monat",
    description: "Für Power-User",
    features: ["Unlimited Nachrichten", "Auto-Summary", "Alle Sprachen", "DSG-konform", "Priorität"],
    highlighted: false,
  },
];

const problemStats = [
  {
    value: "58%",
    label: "sagen Sprachnachrichten dauern zu lang",
    icon: Clock,
  },
  {
    value: "70%",
    label: "beklagen fehlenden Fokus bei Sprachnachrichten",
    icon: AlertTriangle,
  },
];

const privacyFeatures = [
  { title: "DSG-konform", description: "Volle Konformität mit dem Schweizer Datenschutzgesetz", icon: ShieldCheck },
  { title: "EU-Server", description: "Verarbeitung ausschliesslich auf europäischen Servern", icon: Server },
  { title: "Sofort gelöscht", description: "Audio-Dateien werden nach der Verarbeitung sofort gelöscht", icon: Trash2 },
  { title: "Verschlüsselt", description: "Ende-zu-Ende-Verschlüsselung für maximale Sicherheit", icon: KeyRound },
];

const techStack = [
  { name: "OpenAI", description: "Sprachverarbeitung" },
  { name: "Anthropic", description: "KI-Zusammenfassung" },
  { name: "ElevenLabs", description: "Sprachtechnologie" },
  { name: "SoundHound", description: "Audio-Analyse" },
];

export function NutshellaiContent() {
  return (
    <>
      {/* Stats */}
      <section className="relative py-12 sm:py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative py-12 sm:py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Projekt</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Sprachnachrichten lesen statt hören
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              nutshellai.ch ist ein WhatsApp-Bot, der Sprachnachrichten in Sekunden transkribiert und zusammenfasst. Einfach die Sprachnachricht weiterleiten – die KI liefert eine präzise Zusammenfassung zurück. Made in Switzerland, DSG-konform und in 5 Sprachen verfügbar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Stats */}
      <section className="relative py-12 sm:py-16 bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-emerald-500/[0.02] to-[#fafafa]" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Das Problem</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Warum nutshellai?
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problemStats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl p-5 bg-white/60 border border-white/80 shadow-sm text-center"
              >
                <stat.icon className="h-5 w-5 text-emerald-500 mx-auto mb-3" strokeWidth={1.5} />
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Features</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Was nutshellai kann
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Ein einfaches Tool mit mächtiger KI – für alle, die Sprachnachrichten lieber lesen als hören.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{feature.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {feature.features.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1"
                        >
                          <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs font-medium text-emerald-600 flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {feature.benefits}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-emerald-500/[0.02] to-[#fafafa]" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">So funktioniert&apos;s</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              3 Schritte – fertig
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mt-4">
              So einfach war es noch nie, Sprachnachrichten zu verstehen.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-xl p-5 bg-white/60 border border-white/80 shadow-sm text-center"
              >
                <step.icon className="h-6 w-6 text-emerald-500 mx-auto mb-2" strokeWidth={1.5} />
                <span className="text-2xl font-bold text-emerald-500">{step.step}</span>
                <h3 className="text-sm font-semibold text-gray-900 mt-2 mb-1.5">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Preise</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Einfache Preise
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mt-4">
              Starten Sie kostenlos – upgraden Sie, wenn Sie mehr brauchen.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pricing.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-2xl p-6 border shadow-sm ${
                  plan.highlighted
                    ? "bg-emerald-50 border-emerald-200 shadow-emerald-100/50"
                    : "bg-white/60 border-white/80"
                }`}
              >
                <p className="text-sm font-semibold text-gray-900">{plan.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{plan.description}</p>
                <div className="mt-4 mb-4">
                  <span className="text-2xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-xs text-gray-400">{plan.period}</span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 className="h-3 w-3 text-emerald-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="relative py-12 sm:py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Datenschutz</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Ihre Daten, Ihr Schutz
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {privacyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-xl p-4 bg-white border border-gray-200 shadow-sm text-center"
              >
                <feature.icon className="h-5 w-5 text-emerald-500 mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-sm font-semibold text-gray-900">{feature.title}</p>
                <p className="text-xs text-gray-400 mt-1">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="relative py-12 sm:py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Technologie</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Powered by
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-xl p-4 bg-white border border-gray-200 shadow-sm text-center"
              >
                <p className="text-sm font-semibold text-gray-900">{tech.name}</p>
                <p className="text-xs text-gray-400 mt-1">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/60"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Jetzt testen
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Probieren Sie nutshellai kostenlos aus – 5 Sprachnachrichten pro Monat, keine Kreditkarte nötig. Einfach auf WhatsApp starten.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://nutshellai.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-8 transition-colors cursor-pointer"
              >
                Jetzt testen
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 rounded-full py-3 px-8 transition-colors cursor-pointer"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
