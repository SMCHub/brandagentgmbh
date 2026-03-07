"use client";

import { motion } from "framer-motion";
import {
  FileText,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Search,
  BookOpen,
  Languages,
  Target,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Search,
    title: "SEO & LLM-Optimierung",
    description:
      "Ihre Inhalte werden nicht nur für Google optimiert, sondern auch für KI-Sprachmodelle wie ChatGPT und Claude. Wir sorgen dafür, dass Ihre Marke in beiden Welten sichtbar ist – klassische Suchergebnisse und KI-generierte Antworten.",
    features: ["Strukturierte Daten", "Entity-Optimierung", "Semantische Relevanz", "Featured Snippets"],
    benefits: "3x höhere Sichtbarkeit in KI-gestützten Suchergebnissen",
  },
  {
    icon: Target,
    title: "Content-Strategie",
    description:
      "Wir entwickeln eine datenbasierte Content-Strategie, die Ihre Zielgruppe erreicht. Von der Keyword-Recherche über die Themenplanung bis zum redaktionellen Kalender – alles aus einer Hand.",
    features: ["Keyword-Recherche", "Themencluster", "Content-Kalender", "Wettbewerbsanalyse"],
    benefits: "Systematischer Aufbau von thematischer Autorität",
  },
  {
    icon: BookOpen,
    title: "Blog & Landingpages",
    description:
      "Professionelle Blogartikel und konversionsoptimierte Landingpages, die Besucher in Kunden verwandeln. Jeder Text wird individuell recherchiert und auf Ihre Markenstimme abgestimmt.",
    features: ["Blogartikel", "Landingpages", "Produkttexte", "Case Studies"],
    benefits: "Bis zu 40% höhere Conversion-Rate durch optimierte Texte",
  },
  {
    icon: Languages,
    title: "Mehrsprachige Inhalte",
    description:
      "Erreichen Sie internationale Märkte mit professionell lokalisierten Inhalten in Deutsch und Englisch. Keine maschinelle Übersetzung – sondern kulturell angepasste Texte, die in jeder Sprache überzeugen.",
    features: ["Deutsch & Englisch", "Kulturelle Anpassung", "Lokale SEO", "Hreflang-Tags"],
    benefits: "Internationale Reichweite ohne Qualitätsverlust",
  },
  {
    icon: FileText,
    title: "Keyword-Recherche",
    description:
      "Tiefgehende Keyword-Analyse mit modernsten Tools. Wir identifizieren die Suchbegriffe mit dem höchsten Potenzial – sowohl für klassische Suchmaschinen als auch für KI-Anfragen.",
    features: ["Suchvolumen-Analyse", "Wettbewerber-Keywords", "Long-Tail-Keywords", "Suchintention"],
    benefits: "Gezielter Traffic durch die richtigen Keywords",
  },
  {
    icon: MessageSquare,
    title: "Tone of Voice",
    description:
      "Wir entwickeln einen konsistenten Tone of Voice für Ihre Marke. Ob professionell, nahbar oder innovativ – Ihre Texte klingen immer authentisch und wiedererkennbar.",
    features: ["Markenidentität", "Stilrichtlinien", "Konsistenz", "Brand Voice Guide"],
    benefits: "Einheitliche Markenkommunikation über alle Kanäle",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analyse",
    description: "Wir analysieren Ihre aktuelle Content-Landschaft, Zielgruppe, Wettbewerber und identifizieren Chancen für SEO- und LLM-Optimierung.",
  },
  {
    step: "02",
    title: "Strategie",
    description: "Basierend auf der Analyse entwickeln wir eine massgeschneiderte Content-Strategie mit Themenplan, Keywords und Redaktionskalender.",
  },
  {
    step: "03",
    title: "Erstellung",
    description: "Unsere Texter erstellen hochwertige, SEO- und LLM-optimierte Inhalte – individuell recherchiert und auf Ihre Markenstimme abgestimmt.",
  },
  {
    step: "04",
    title: "Optimierung",
    description: "Kontinuierliches Monitoring der Performance. Wir optimieren bestehende Inhalte und passen die Strategie an aktuelle Entwicklungen an.",
  },
];

const tools = [
  { name: "Claude", description: "KI-gestützte Textoptimierung" },
  { name: "ChatGPT", description: "Content-Generierung & Analyse" },
  { name: "Surfer SEO", description: "On-Page-Optimierung" },
  { name: "Ahrefs", description: "Keyword-Recherche & Backlinks" },
  { name: "Google Search Console", description: "Performance-Monitoring" },
  { name: "Semrush", description: "Wettbewerbsanalyse" },
];

export function LlmTexteContent() {
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
              Content für die neue Ära der Suche
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              KI-Sprachmodelle verändern, wie Menschen Informationen finden. Wir sorgen dafür, dass Ihre Inhalte sowohl in klassischen Suchergebnissen als auch in KI-Antworten sichtbar sind.
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

      {/* Process */}
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Prozess</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Von der Analyse zum Top-Ranking
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {processSteps.map((item, index) => (
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Tools & Technologien</span>
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
              Bereit für LLM-optimierten Content?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Lassen Sie uns Ihre Inhalte für die Zukunft der Suche optimieren. Kostenlose Erstanalyse Ihrer aktuellen Content-Strategie – unverbindlich und persönlich.
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
