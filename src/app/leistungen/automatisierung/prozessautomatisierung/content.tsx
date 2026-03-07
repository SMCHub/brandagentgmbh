"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Zap,
  Clock,
  Cog,
  Workflow,
  Database,
  Bot,
  Webhook,
  Layers,
  RefreshCw,
  Mail,
  BarChart3,
  Bell,
  Users,
  ShoppingCart,
  GitMerge,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Workflow,
    title: "n8n Workflows",
    description:
      "Komplexe Automatisierungsworkflows mit der Open-Source-Plattform n8n – visuell erstellt, voll kontrollierbar und auf Ihrer eigenen Infrastruktur betrieben.",
  },
  {
    icon: Zap,
    title: "Zapier Integrationen",
    description:
      "Über 7'000+ App-Integrationen für schnelle Verbindungen zwischen Ihren bestehenden Tools – ohne eine einzige Zeile Code.",
  },
  {
    icon: Bot,
    title: "KI-gestützte Analyse",
    description:
      "Intelligente Datenverarbeitung mit Claude AI und ChatGPT – von der automatischen Kategorisierung bis zur Entscheidungsunterstützung.",
  },
  {
    icon: Database,
    title: "API-Anbindungen",
    description:
      "Individuelle REST-API-Integrationen für Systeme, die keine Standard-Konnektoren bieten – massgeschneidert für Ihre Infrastruktur.",
  },
  {
    icon: Webhook,
    title: "Webhook-Trigger",
    description:
      "Echtzeit-Auslöser für Ihre Workflows – sobald ein Ereignis eintritt, startet die Automatisierung sofort und ohne Verzögerung.",
  },
  {
    icon: Layers,
    title: "Multi-Step Workflows",
    description:
      "Mehrstufige Prozesse mit Verzweigungen, Bedingungen und Fehlerbehandlung – so komplex wie Ihre Geschäftslogik es erfordert.",
  },
];

const useCases = [
  {
    icon: Mail,
    title: "E-Mail-Verarbeitung",
    description:
      "Eingehende E-Mails automatisch klassifizieren, relevante Daten extrahieren und an die richtigen Teams oder Systeme weiterleiten.",
  },
  {
    icon: RefreshCw,
    title: "Datenabgleich",
    description:
      "Verschiedene Systeme synchron halten, Duplikate erkennen und Inkonsistenzen automatisch bereinigen – in Echtzeit.",
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description:
      "Automatisierte Berichte aus verschiedenen Datenquellen zusammenstellen und per E-Mail oder Dashboard bereitstellen.",
  },
  {
    icon: Users,
    title: "CRM-Synchronisation",
    description:
      "Kundendaten zwischen CRM, Buchhaltung und Marketing-Tools synchronisieren – immer aktuell, ohne manuellen Aufwand.",
  },
  {
    icon: ShoppingCart,
    title: "Bestellverarbeitung",
    description:
      "Bestellungen automatisch erfassen, Lagerbestand prüfen, Lieferscheine erstellen und Kunden benachrichtigen.",
  },
  {
    icon: Bell,
    title: "Benachrichtigungen",
    description:
      "Intelligente Alerts bei kritischen Ereignissen – per E-Mail, Slack, SMS oder Push-Notification an die richtigen Personen.",
  },
];

const tools = [
  { name: "n8n", description: "Open-Source Workflow-Automatisierung" },
  { name: "Zapier", description: "7'000+ App-Integrationen" },
  { name: "Make", description: "Visuelle Automatisierungsplattform" },
  { name: "Claude AI", description: "Intelligente Textverarbeitung" },
  { name: "REST APIs", description: "Individuelle Schnittstellen" },
];

const process = [
  {
    step: "01",
    title: "Analyse",
    description:
      "Wir analysieren Ihre bestehenden Prozesse, identifizieren Engpässe und bewerten das Automatisierungspotenzial – detailliert und praxisnah.",
  },
  {
    step: "02",
    title: "Konzept",
    description:
      "Basierend auf der Analyse erstellen wir ein Konzept mit Workflow-Design, Integrationsplan und erwartetem ROI – bevor eine einzige Zeile Code geschrieben wird.",
  },
  {
    step: "03",
    title: "Implementierung",
    description:
      "Agile Umsetzung mit regelmässigen Demos und Feedback-Schleifen. Jeder Workflow wird gründlich getestet, bevor er live geht.",
  },
  {
    step: "04",
    title: "Monitoring",
    description:
      "Laufende Überwachung, Fehlerbehandlung und kontinuierliche Optimierung – damit Ihre Automatisierungen zuverlässig laufen, 24/7.",
  },
];

export function ProzessautomatisierungContent() {
  return (
    <>
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
              Repetitive Aufgaben gehören der Vergangenheit an
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-500 leading-relaxed">
              <p>
                Jedes Unternehmen hat Prozesse, die täglich Zeit und Ressourcen kosten – manuelle Dateneingabe, E-Mail-Weiterleitungen, Systemabgleiche oder wiederkehrende Reports. Diese Aufgaben sind notwendig, aber sie binden wertvolle Arbeitskraft, die an anderer Stelle dringend gebraucht wird.
              </p>
              <p>
                Unsere Prozessautomatisierungen setzen genau hier an: Wir analysieren Ihre bestehenden Workflows, identifizieren die grössten Zeitfresser und implementieren intelligente Automatisierungen, die rund um die Uhr zuverlässig arbeiten. Das Ergebnis? Bis zu 80% weniger manuelle Arbeit, null Fehler durch menschliche Unachtsamkeit und Mitarbeitende, die sich auf das konzentrieren können, was wirklich zählt.
              </p>
              <p>
                Dabei setzen wir auf bewährte Plattformen wie n8n, Zapier und Make – ergänzt durch KI-Komponenten von Claude AI für intelligente Entscheidungen innerhalb Ihrer Workflows. Jede Automatisierung wird individuell auf Ihre Bedürfnisse zugeschnitten und nahtlos in Ihre bestehende Systemlandschaft integriert.
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Leistungen</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Was wir bieten
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Von einfachen Integrationen bis zu komplexen Multi-Step-Workflows – wir automatisieren, was sich automatisieren lässt.
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

      {/* Use Cases */}
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Anwendungsfälle</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Praxisbeispiele
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mt-4">
              So setzen unsere Kunden Prozessautomatisierung erfolgreich ein.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, index) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-xl p-5 bg-white/60 border border-white/80 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
                  <uc.icon className="h-4 w-4 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{uc.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{uc.description}</p>
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
              Von der Analyse zum laufenden System
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
              Prozesse automatisieren?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Erzählen Sie uns von Ihren repetitiven Aufgaben – wir zeigen Ihnen, wie viel Zeit und Geld Sie mit Automatisierung sparen können.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-8 transition-colors cursor-pointer"
            >
              Kostenlose Analyse anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
