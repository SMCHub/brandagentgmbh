"use client";

import { motion } from "framer-motion";
import {
  Megaphone,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Users,
  RefreshCw,
  Wallet,
  LineChart,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Target,
    title: "Google Ads",
    description:
      "Suchanzeigen, Display-Kampagnen und Shopping Ads – wir holen das Maximum aus Ihrem Google Ads Budget. Von der Keyword-Strategie über die Anzeigenerstellung bis zur Gebotsoptimierung.",
    features: ["Search Ads", "Display Ads", "Shopping Ads", "Performance Max"],
    benefits: "Gezielter Traffic von Nutzern mit konkreter Kaufabsicht",
  },
  {
    icon: Megaphone,
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "Visuell ansprechende Kampagnen auf Facebook und Instagram. Präzises Targeting nach Interessen, Verhalten und Lookalike Audiences für maximale Reichweite bei minimalen Kosten.",
    features: ["Feed & Story Ads", "Reels Ads", "Lookalike Audiences", "Dynamic Creative"],
    benefits: "Höchste Reichweite durch präzises Social Targeting",
  },
  {
    icon: Users,
    title: "LinkedIn Ads",
    description:
      "B2B-Werbung dort, wo Entscheidungsträger aktiv sind. LinkedIn Ads mit professionellem Targeting nach Branche, Position, Unternehmensgrösse und mehr.",
    features: ["Sponsored Content", "InMail-Kampagnen", "Lead Gen Forms", "Account-Based Marketing"],
    benefits: "Direkte Ansprache von B2B-Entscheidungsträgern",
  },
  {
    icon: LineChart,
    title: "Performance-Reports",
    description:
      "Transparente Reporting-Dashboards mit allen relevanten KPIs. Sie sehen jederzeit, wie Ihre Kampagnen performen und welchen ROI Sie erzielen.",
    features: ["Echtzeit-Dashboards", "Monatliche Reports", "KPI-Tracking", "Handlungsempfehlungen"],
    benefits: "Volle Transparenz über jeden investierten Werbefranken",
  },
  {
    icon: RefreshCw,
    title: "Retargeting",
    description:
      "Erreichen Sie Besucher erneut, die Ihre Webseite bereits kennen. Intelligentes Retargeting über alle Plattformen hinweg steigert die Conversion-Rate signifikant.",
    features: ["Website Retargeting", "Dynamic Retargeting", "Cross-Platform", "Frequency Capping"],
    benefits: "Bis zu 70% höhere Conversion durch gezielte Wiederansprache",
  },
  {
    icon: Wallet,
    title: "Budget-Optimierung",
    description:
      "Maximaler Output aus Ihrem Werbebudget. Wir verteilen Ihr Budget dynamisch auf die performantesten Kanäle, Zielgruppen und Anzeigen.",
    features: ["Dynamische Budgetverteilung", "Gebotsstrategien", "Cost-per-Lead Optimierung", "Skalierung"],
    benefits: "Höchster ROAS durch intelligente Budgetallokation",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Audit",
    description: "Umfassende Analyse Ihrer bestehenden Kampagnen, Wettbewerber und Marktchancen. Wir identifizieren Optimierungspotenzial und Quick Wins.",
  },
  {
    step: "02",
    title: "Setup",
    description: "Strategische Kampagnenplanung, Kontostruktur, Tracking-Setup und Erstellung der Anzeigen. Alles wird für maximale Performance konfiguriert.",
  },
  {
    step: "03",
    title: "Launch",
    description: "Kontrollierter Kampagnenstart mit engmaschigem Monitoring. Tägliche Optimierung von Geboten, Zielgruppen und Anzeigentexten.",
  },
  {
    step: "04",
    title: "Reporting",
    description: "Regelmässige Performance-Reports mit klaren KPIs, Insights und konkreten Handlungsempfehlungen für weiteres Wachstum.",
  },
];

const platforms = [
  { name: "Google Ads", description: "Search, Display & Shopping" },
  { name: "Meta Ads", description: "Facebook & Instagram" },
  { name: "LinkedIn Ads", description: "B2B Marketing" },
  { name: "TikTok Ads", description: "Gen-Z & Millennial Targeting" },
  { name: "Google Analytics", description: "Tracking & Attribution" },
  { name: "Google Tag Manager", description: "Conversion-Tracking" },
];

export function AdsManagementContent() {
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
              Werbung, die performt
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Wir verwalten Ihre Werbekampagnen professionell auf allen relevanten Plattformen. Datengetrieben, täglich optimiert und mit messbarem Return on Investment.
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
              Vom Audit zum messbaren Erfolg
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

      {/* Platforms */}
      <section className="relative py-12 sm:py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Plattformen & Tools</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Unsere Werbeplattformen
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-xl p-4 bg-white border border-gray-200 shadow-sm text-center"
              >
                <p className="text-sm font-semibold text-gray-900">{platform.name}</p>
                <p className="text-xs text-gray-400 mt-1">{platform.description}</p>
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
              Mehr Wachstum durch gezielte Werbung?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Lassen Sie uns Ihre Werbekampagnen analysieren und optimieren. Kostenloses Ads-Audit – wir zeigen Ihnen, wo ungenutztes Potenzial steckt.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-8 transition-colors cursor-pointer"
            >
              Kostenloses Ads-Audit anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
