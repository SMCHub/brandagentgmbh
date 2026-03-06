"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Smartphone,
  Gauge,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "<1s", label: "Ladezeit" },
  { value: "100/100", label: "Lighthouse Score" },
  { value: "100%", label: "Responsive" },
  { value: "SEO", label: "Ready ab Tag 1" },
];

const services = [
  {
    icon: Globe,
    title: "Next.js & React",
    description:
      "Wir entwickeln Ihre Webseite mit Next.js und React – dem modernsten Tech Stack für performante Webanwendungen. Server-Side Rendering, statische Generierung und Edge-Computing für Ladezeiten unter einer Sekunde.",
    features: ["Server-Side Rendering", "Static Site Generation", "Edge Computing", "API Routes"],
    benefits: "Bis zu 10x schnellere Ladezeiten als herkömmliche Webseiten",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Ihre Webseite sieht auf jedem Gerät perfekt aus – vom Smartphone über das Tablet bis zum grossen Desktop-Monitor. Mobile-First-Entwicklung für optimale Nutzererfahrung.",
    features: ["Mobile-First", "Tablet-optimiert", "Desktop-Layout", "Touch-Gesten"],
    benefits: "Optimale Darstellung auf über 99% aller Endgeräte",
  },
  {
    icon: Gauge,
    title: "Core Web Vitals",
    description:
      "Perfekte Scores in allen Core Web Vitals – LCP, FID und CLS. Das sind die Metriken, die Google für Ihr Ranking bewertet. Wir optimieren jede Webseite für maximale Performance.",
    features: ["LCP < 2.5s", "FID < 100ms", "CLS < 0.1", "TTFB optimiert"],
    benefits: "100/100 Lighthouse Score als Standard",
  },
  {
    icon: Layers,
    title: "CMS-Integration",
    description:
      "Flexible Content-Management-Systeme, die Ihnen volle Kontrolle über Ihre Inhalte geben. Ob Headless CMS, Sanity, Strapi oder WordPress – wir integrieren das passende System.",
    features: ["Headless CMS", "Sanity", "Strapi", "WordPress"],
    benefits: "Einfache Inhaltspflege ohne Programmierkenntnisse",
  },
  {
    icon: Sparkles,
    title: "Animationen",
    description:
      "Subtile, performante Animationen mit Framer Motion, die Ihre Webseite lebendig machen. Scroll-Animationen, Hover-Effekte und Micro-Interactions für ein unvergessliches Nutzererlebnis.",
    features: ["Framer Motion", "Scroll-Animationen", "Micro-Interactions", "GPU-beschleunigt"],
    benefits: "Höhere Verweildauer durch ansprechende Animationen",
  },
  {
    icon: ShieldCheck,
    title: "SSL & Security",
    description:
      "Sicherheit als Standard. Jede Webseite wird mit SSL-Zertifikat, Content Security Policy und modernsten Sicherheitspraktiken ausgeliefert. DSGVO-konform und zukunftssicher.",
    features: ["SSL/TLS", "Content Security Policy", "DSGVO-konform", "Automatische Updates"],
    benefits: "Maximale Sicherheit für Ihre Besucher und Daten",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Konzept",
    description: "Gemeinsame Erarbeitung der Anforderungen, Sitemap, Wireframes und User Flows. Wir definieren die Struktur und Funktionalität Ihrer neuen Webseite.",
  },
  {
    step: "02",
    title: "Design",
    description: "Visuelles Design im Einklang mit Ihrer Markenidentität. Pixel-perfekte Mockups für alle Endgeräte – abgestimmt auf Ihre Zielgruppe.",
  },
  {
    step: "03",
    title: "Entwicklung",
    description: "Agile Entwicklung mit Next.js, React und Tailwind CSS. Regelmässige Zwischenstände, Testing und Qualitätssicherung.",
  },
  {
    step: "04",
    title: "Launch",
    description: "Finales Testing, Performance-Optimierung und Go-Live. Inklusive SEO-Setup, Analytics-Integration und Monitoring.",
  },
];

const techStack = [
  { name: "Next.js", description: "React Framework" },
  { name: "React", description: "UI-Bibliothek" },
  { name: "Tailwind CSS", description: "Utility-First CSS" },
  { name: "TypeScript", description: "Typsicheres JavaScript" },
  { name: "Vercel", description: "Hosting & Deployment" },
  { name: "Framer Motion", description: "Animationsbibliothek" },
];

export function WebseitenContent() {
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
              Webseiten, die begeistern
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Wir entwickeln moderne, blitzschnelle Webseiten mit dem neuesten Tech Stack. Performance, Design und SEO – alles aus einer Hand.
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
              Vom Konzept zum Launch
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

          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
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
            className="max-w-2xl mx-auto text-center rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/60"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Bereit für Ihre neue Webseite?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam eine Webseite entwickeln, die Ihre Marke perfekt repräsentiert. Kostenlose Erstberatung – unverbindlich und persönlich.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-8 transition-colors cursor-pointer"
            >
              Projekt besprechen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
