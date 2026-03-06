"use client";

import { motion } from "framer-motion";
import {
  Users,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Mail,
  MousePointerClick,
  Layers,
  SlidersHorizontal,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "5x", label: "ROI im Durchschnitt" },
  { value: "200+", label: "Leads pro Monat" },
  { value: "40%", label: "Conversion-Rate" },
  { value: "A/B", label: "Getestet & optimiert" },
];

const services = [
  {
    icon: Layers,
    title: "Marketing-Funnels",
    description:
      "Wir bauen mehrstufige Marketing-Funnels, die Interessenten systematisch durch den Entscheidungsprozess führen. Von der ersten Berührung bis zum qualifizierten Lead – jeder Schritt ist durchdacht und messbar.",
    features: ["Top-of-Funnel", "Lead Magnets", "Nurturing-Sequenzen", "Qualifizierung"],
    benefits: "Systematische Leadgewinnung statt Zufallstreffer",
  },
  {
    icon: SlidersHorizontal,
    title: "A/B Testing",
    description:
      "Datengetriebene Optimierung durch kontinuierliches A/B Testing. Wir testen Headlines, CTAs, Formulare und ganze Seiten, um die bestmögliche Conversion-Rate zu erzielen.",
    features: ["Split-Tests", "Multivariate Tests", "Statistische Signifikanz", "Iterative Optimierung"],
    benefits: "Bis zu 300% höhere Conversion durch systematisches Testing",
  },
  {
    icon: Users,
    title: "CRM-Integration",
    description:
      "Nahtlose Anbindung an Ihr CRM-System. Leads werden automatisch erfasst, qualifiziert und dem Vertrieb übergeben. Keine manuellen Exporte, keine verlorenen Kontakte.",
    features: ["HubSpot", "Salesforce", "Pipedrive", "Automatischer Import"],
    benefits: "Lückenlose Übergabe vom Marketing an den Vertrieb",
  },
  {
    icon: BarChart3,
    title: "Conversion-Tracking",
    description:
      "Vollständiges Tracking aller Conversions über alle Kanäle hinweg. Wir wissen genau, welche Kampagnen und Touchpoints zu qualifizierten Leads führen.",
    features: ["Cross-Channel Tracking", "Attribution", "ROI-Berechnung", "Echtzeit-Dashboards"],
    benefits: "Volle Transparenz über jeden investierten Franken",
  },
  {
    icon: MousePointerClick,
    title: "Landing Pages",
    description:
      "Konversionsoptimierte Landing Pages, die überzeugen. Klares Design, starke Headlines und überzeugende CTAs – jede Seite wird auf maximale Conversion getrimmt.",
    features: ["Responsive Design", "Schnelle Ladezeiten", "Social Proof", "Trust-Elemente"],
    benefits: "Landing Pages mit bis zu 40% Conversion-Rate",
  },
  {
    icon: Mail,
    title: "E-Mail Automation",
    description:
      "Automatisierte E-Mail-Sequenzen, die Leads aufwärmen und qualifizieren. Personalisierte Inhalte zum richtigen Zeitpunkt – von der Willkommens-Mail bis zum Verkaufsabschluss.",
    features: ["Drip-Kampagnen", "Personalisierung", "Trigger-E-Mails", "Lead Scoring"],
    benefits: "Automatisiertes Nurturing rund um die Uhr",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Zielgruppe",
    description: "Wir definieren Ihre ideale Zielgruppe, erstellen Buyer Personas und identifizieren die effektivsten Kanäle zur Ansprache.",
  },
  {
    step: "02",
    title: "Funnel",
    description: "Aufbau eines massgeschneiderten Marketing-Funnels mit Lead Magnets, Landing Pages und Nurturing-Sequenzen.",
  },
  {
    step: "03",
    title: "Kampagne",
    description: "Launch der Kampagnen über alle relevanten Kanäle. Kontinuierliches A/B Testing und Optimierung der Conversion-Rate.",
  },
  {
    step: "04",
    title: "Optimierung",
    description: "Datenbasierte Optimierung aller Touchpoints. Wir analysieren, testen und verbessern kontinuierlich für maximalen ROI.",
  },
];

const tools = [
  { name: "HubSpot", description: "Marketing Automation & CRM" },
  { name: "Mailchimp", description: "E-Mail Marketing & Automation" },
  { name: "Google Analytics", description: "Tracking & Attribution" },
  { name: "Meta Pixel", description: "Conversion-Tracking" },
  { name: "Hotjar", description: "Heatmaps & User Insights" },
  { name: "Unbounce", description: "Landing Page Builder" },
];

export function LeadgenerierungContent() {
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
              Qualifizierte Leads, messbare Ergebnisse
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Wir generieren nicht einfach nur Kontakte – wir liefern qualifizierte Leads, die bereit sind zu kaufen. Datengetrieben, systematisch und skalierbar.
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
              Von der Zielgruppe zum qualifizierten Lead
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
              Bereit für mehr qualifizierte Leads?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam eine Leadgenerierungs-Strategie entwickeln, die messbar mehr Kunden bringt. Kostenlose Erstberatung – unverbindlich und persönlich.
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
