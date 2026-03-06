"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  FileCheck,
  Send,
  BarChart3,
  ListChecks,
  Users,
  FileDown,
  Clock,
  Scale,
  Search,
  GitCompare,
  Shield,
  Zap,
  Target,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "5x", label: "Schneller" },
  { value: "100%", label: "Vergleichbar" },
  { value: "Auto", label: "Versand" },
  { value: "0", label: "Manuell" },
];

const features = [
  {
    icon: Send,
    title: "Automatischer Versand",
    description:
      "Offertanfragen werden automatisch an Ihre hinterlegten Lieferanten versendet – personalisiert, termingerecht und mit allen relevanten Spezifikationen.",
  },
  {
    icon: GitCompare,
    title: "Angebotsvergleich",
    description:
      "Eingehende Offerten werden automatisch erfasst, normalisiert und in einer übersichtlichen Vergleichsmatrix dargestellt – Preise, Konditionen und Lieferzeiten auf einen Blick.",
  },
  {
    icon: ListChecks,
    title: "Entscheidungsmatrix",
    description:
      "Gewichtete Bewertungskriterien für eine objektive Entscheidungsgrundlage – von Preis über Qualität bis zu Lieferkonditionen.",
  },
  {
    icon: Users,
    title: "Lieferantenverwaltung",
    description:
      "Zentrale Datenbank Ihrer Lieferanten mit Kontaktdaten, Bewertungshistorie und Kategorisierung – immer aktuell und sofort abrufbar.",
  },
  {
    icon: FileDown,
    title: "PDF-Export",
    description:
      "Professionelle Vergleichsberichte als PDF-Dokument – fertig formatiert für die Geschäftsleitung oder den Einkaufsausschuss.",
  },
  {
    icon: Clock,
    title: "Deadline-Tracking",
    description:
      "Automatische Erinnerungen bei ausstehenden Offerten und Ablauf von Angebotsfristen – keine Deadline wird mehr verpasst.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "5x schnellere Beschaffung",
    description:
      "Der gesamte Offertprozess – vom Versand bis zur Auswertung – ist in einem Bruchteil der bisherigen Zeit erledigt. Was früher Tage dauerte, ist jetzt in Stunden abgeschlossen.",
  },
  {
    icon: Shield,
    title: "Keine manuelle Dateneingabe",
    description:
      "Offerten werden automatisch erfasst und strukturiert. Kein mühsames Abtippen, keine Übertragungsfehler, keine verlorenen E-Mails.",
  },
  {
    icon: Target,
    title: "Bessere Entscheidungsgrundlagen",
    description:
      "Objektive, datenbasierte Vergleiche statt Bauchgefühl. Jede Entscheidung wird nachvollziehbar dokumentiert und ist jederzeit abrufbar.",
  },
];

const process = [
  {
    step: "01",
    title: "Anforderung",
    description:
      "Sie definieren die Beschaffungsanforderung – Produkt, Menge, Spezifikationen und gewünschte Lieferkonditionen.",
  },
  {
    step: "02",
    title: "Auto-Versand",
    description:
      "Das System versendet automatisch personalisierte Offertanfragen an die relevanten Lieferanten aus Ihrer Datenbank.",
  },
  {
    step: "03",
    title: "Sammlung",
    description:
      "Eingehende Offerten werden automatisch erfasst, geparst und in einer einheitlichen Struktur gespeichert.",
  },
  {
    step: "04",
    title: "Vergleich & Entscheid",
    description:
      "Die Vergleichsmatrix wird automatisch erstellt. Sie prüfen die Auswertung und treffen Ihre Entscheidung auf fundierter Basis.",
  },
];

const tools = [
  { name: "n8n", description: "Workflow-Orchestrierung" },
  { name: "Claude AI", description: "Intelligente Datenextraktion" },
  { name: "Google Sheets", description: "Datenstrukturierung" },
  { name: "E-Mail APIs", description: "Automatischer Versand" },
  { name: "PDF-Parser", description: "Dokumentenanalyse" },
  { name: "REST APIs", description: "Systemintegration" },
];

export function VergleichsoffertenContent() {
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

      {/* Description */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Überblick</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Beschaffung, die sich selbst organisiert
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-500 leading-relaxed">
              <p>
                Vergleichsofferten einholen ist aufwändig: Anfragen formulieren, an mehrere Lieferanten versenden, Angebote sammeln, manuell in Excel übertragen und vergleichbar machen. Das kostet Zeit, ist fehleranfällig und oft wenig systematisch.
              </p>
              <p>
                Unsere automatisierte Lösung übernimmt den gesamten Prozess – vom Versand der Offertanfragen über die Erfassung der eingehenden Angebote bis zur automatischen Erstellung einer gewichteten Vergleichsmatrix. Sie definieren nur noch die Anforderungen und treffen am Ende die Entscheidung. Alles dazwischen läuft automatisch.
              </p>
              <p>
                Das System erkennt eingehende Offerten per E-Mail, extrahiert die relevanten Daten mittels KI und stellt sie strukturiert gegenüber. Preise, Lieferzeiten, Konditionen und Zusatzleistungen werden normalisiert und vergleichbar gemacht – objektiv und nachvollziehbar.
              </p>
            </div>
          </motion.div>
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Funktionen</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Alles für den Offertvergleich
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Vom automatischen Versand bis zum fertigen Vergleichsbericht – jeder Schritt ist durchdacht und automatisiert.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-blue-500/[0.02] to-[#fafafa]" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Vorteile</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Warum automatisierte Vergleichsofferten?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-6 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <benefit.icon className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Prozess</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              So funktioniert es
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl p-6 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              >
                <span className="text-xs text-blue-500 font-mono font-bold tracking-widest">SCHRITT {item.step}</span>
                <h3 className="text-base font-semibold text-gray-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="relative py-12 sm:py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Tools & Integrationen</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Unsere Werkzeuge
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-xl p-4 bg-white border border-gray-200 shadow-sm text-center"
              >
                <p className="text-sm font-semibold text-gray-900">{tool.name}</p>
                <p className="text-xs text-gray-400 mt-1">{tool.description}</p>
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
            className="max-w-2xl mx-auto text-center rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/60"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Beschaffung automatisieren?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Zeigen Sie uns Ihren Offertprozess – wir zeigen Ihnen, wie Sie ihn 5x schneller und komplett fehlerfrei gestalten können.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-8 transition-colors cursor-pointer"
            >
              Kostenlose Beratung anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
