"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Users,
  Megaphone,
  Globe,
  ShoppingCart,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Search,
  Palette,
  BarChart3,
  Smartphone,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: FileText,
    title: "LLM-optimierte Texte",
    description:
      "Inhalte, die sowohl für Suchmaschinen als auch für KI-Sprachmodelle wie ChatGPT und Claude optimiert sind – für maximale Sichtbarkeit und Relevanz in der neuen Ära der Suche.",
    features: ["SEO & LLM-optimiert", "Content-Strategie", "Blog & Landingpages", "Mehrsprachig DE/EN"],
  },
  {
    icon: Users,
    title: "Leadgenerierung",
    description:
      "Gezielte Strategien zur Gewinnung qualifizierter Leads. Datengetriebene Kampagnen, Conversion-Optimierung und Marketing-Funnels, die Interessenten in Kunden verwandeln.",
    features: ["Marketing-Funnels", "A/B Testing", "CRM-Integration", "Conversion-Tracking"],
  },
  {
    icon: Megaphone,
    title: "Ads Management",
    description:
      "Professionelle Verwaltung Ihrer Werbekampagnen auf Google Ads, Meta (Facebook & Instagram), LinkedIn und weiteren Plattformen – mit messbarem ROI und transparentem Reporting.",
    features: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Performance-Reports"],
  },
  {
    icon: Globe,
    title: "Webseiten Entwicklung",
    description:
      "Moderne, blitzschnelle Webseiten mit Next.js, React und Tailwind CSS. Responsive Design, perfekte Core Web Vitals und SEO-Optimierung für Top-Rankings.",
    features: ["Next.js & React", "Responsive Design", "Core Web Vitals", "CMS-Integration"],
  },
  {
    icon: ShoppingCart,
    title: "Webshop Entwicklung",
    description:
      "Professionelle E-Commerce-Lösungen, die verkaufen. Von der Konzeption bis zum Go-Live – inklusive Zahlungsintegration, Produktmanagement und Versandanbindung.",
    features: ["Shopify / Custom", "Zahlungsintegration", "Produktmanagement", "Versandanbindung"],
  },
];

const process = [
  {
    step: "01",
    title: "Analyse & Strategie",
    description: "Wir analysieren Ihre aktuelle Präsenz, Zielgruppe und Wettbewerb. Daraus entwickeln wir eine massgeschneiderte Digitalstrategie.",
  },
  {
    step: "02",
    title: "Design & Konzept",
    description: "Wireframes, Mockups und visuelles Design – alles abgestimmt auf Ihre Marke und die Erwartungen Ihrer Zielgruppe.",
  },
  {
    step: "03",
    title: "Entwicklung & Launch",
    description: "Agile Entwicklung mit regelmässigen Updates. Testing, Optimierung und ein reibungsloser Go-Live.",
  },
  {
    step: "04",
    title: "Optimierung & Wachstum",
    description: "Kontinuierliche Analyse, A/B-Tests und Optimierung für nachhaltiges Wachstum Ihrer digitalen Präsenz.",
  },
];

const techStack = [
  "Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel", "Shopify", "WordPress", "Framer Motion",
];

export function DigiltalePraesenzContent() {
  return (
    <>
      {/* Services Grid */}
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
              Alles für Ihre digitale Präsenz
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Von der ersten Textzeile bis zum fertigen Webshop – wir bieten Ihnen das komplette Paket für eine starke Online-Präsenz.
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
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
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
              Von der Idee zur Umsetzung
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Technologien</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Unser Tech Stack
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm"
              >
                {tech}
              </motion.span>
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
              Bereit für Ihre neue digitale Präsenz?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam Ihre Marke digital zum Strahlen bringen. Kostenlose Erstberatung – unverbindlich und persönlich.
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
