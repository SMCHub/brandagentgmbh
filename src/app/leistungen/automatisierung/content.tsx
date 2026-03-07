"use client";

import { motion } from "framer-motion";
import {
  Cog,
  FileCheck,
  FileText,
  Video,
  ArrowRight,
  CheckCircle2,
  Zap,
  Clock,
  TrendingUp,
  Bot,
  Workflow,
  Database,
  Shield,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Cog,
    title: "Individuelle Prozessautomatisierung",
    description:
      "Massgeschneiderte Automatisierungen für Ihre spezifischen Geschäftsprozesse. Wir analysieren Ihre Workflows, identifizieren Engpässe und implementieren intelligente Automatisierungen mit n8n, Zapier und KI-Tools.",
    features: ["n8n Workflows", "Zapier Integrationen", "KI-gestützt", "API-Anbindungen"],
    benefits: "Bis zu 80% Zeitersparnis bei repetitiven Aufgaben",
  },
  {
    icon: FileCheck,
    title: "Vergleichsofferten Automatisierung",
    description:
      "Automatisierte Erstellung, Versand und Auswertung von Vergleichsofferten. Das System sammelt Angebote, vergleicht Konditionen und erstellt übersichtliche Entscheidungsgrundlagen – alles ohne manuellen Aufwand.",
    features: ["Auto-Versand", "Angebotsvergleich", "Entscheidungsmatrix", "Lieferantenverwaltung"],
    benefits: "Beschaffungsprozesse 5x schneller abwickeln",
  },
  {
    icon: FileText,
    title: "Angebotsentwurfs Automatisierung",
    description:
      "KI-gestützte Angebotserstellung auf Basis Ihrer Vorlagen, Preislisten und Kundendaten. Professionelle Angebote in Minuten statt Stunden – konsistent, fehlerfrei und im Corporate Design.",
    features: ["Vorlagen-System", "Preiskalkulation", "CRM-Anbindung", "PDF-Export"],
    benefits: "Angebotszeit von Stunden auf Minuten reduziert",
  },
  {
    icon: Video,
    title: "Videoerstellung Automatisierung",
    description:
      "Automatisierte Videoproduktion für Marketing, Social Media und interne Kommunikation. Von Produktvideos über Tutorials bis zu personalisierten Kundenvideos – skalierbar und kosteneffizient.",
    features: ["KI-Videogenerierung", "Social Media Formate", "Batch-Produktion", "Brand Templates"],
    benefits: "100+ Videos pro Monat ohne zusätzliches Personal",
  },
];

const tools = [
  { name: "n8n", description: "Open-Source Workflow-Automatisierung" },
  { name: "Zapier", description: "5'000+ App-Integrationen" },
  { name: "Claude AI", description: "Intelligente Textverarbeitung" },
  { name: "ChatGPT", description: "KI-gestützte Analyse" },
  { name: "Vercel", description: "Edge-Computing & Hosting" },
  { name: "REST APIs", description: "Individuelle Schnittstellen" },
];

const useCases = [
  {
    title: "E-Mail-Verarbeitung",
    description: "Eingehende E-Mails automatisch kategorisieren, priorisieren und an die richtigen Teams weiterleiten.",
  },
  {
    title: "Rechnungsstellung",
    description: "Automatische Rechnungserstellung aus Aufträgen, Versand und Mahnwesen – alles ohne manuellen Eingriff.",
  },
  {
    title: "Datenabgleich",
    description: "Systeme synchronisieren, Daten abgleichen und Inkonsistenzen automatisch erkennen und beheben.",
  },
  {
    title: "Reporting",
    description: "Automatisierte Reports aus verschiedenen Datenquellen – täglich, wöchentlich oder in Echtzeit.",
  },
  {
    title: "Kundenonboarding",
    description: "Neue Kunden automatisch in allen Systemen anlegen, Willkommens-E-Mails senden und Aufgaben erstellen.",
  },
  {
    title: "Social Media",
    description: "Content-Planung, automatisches Posten und Performance-Tracking über alle Kanäle hinweg.",
  },
];

export function AutomatisierungContent() {
  return (
    <>
      {/* Services */}
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
              Automatisierung, die arbeitet
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Wir automatisieren Ihre Geschäftsprozesse Ende-zu-Ende – von der Datenerfassung bis zur Ergebnisausgabe. Intelligent, zuverlässig und skalierbar.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <service.icon className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1"
                        >
                          <CheckCircle2 className="h-3 w-3 text-blue-500" />
                          {feature}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs font-medium text-blue-600 flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {service.benefits}
                    </p>
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
              Was wir automatisieren
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mt-4">
              Einige Beispiele aus der Praxis – die Möglichkeiten sind nahezu unbegrenzt.
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
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{uc.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{uc.description}</p>
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
              Erzählen Sie uns von Ihren Prozessen – wir zeigen Ihnen, was sich automatisieren lässt und wie viel Zeit und Geld Sie sparen können.
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
