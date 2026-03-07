"use client";

import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Bot,
  HardDrive,
  Globe,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Quote,
  Star,
  ExternalLink,
  Shield,
} from "lucide-react";
import Link from "next/link";

const products = [
  {
    icon: Bot,
    title: "OpenClaw",
    description:
      "KI-Agent Software für intelligente Automatisierung. Leistungsstarke KI-Agenten, die Ihre Geschäftsprozesse verstehen und selbstständig ausführen.",
    features: ["KI-Agenten", "Prozessautomatisierung", "API-Integration", "Open-Source"],
    benefits: "Intelligente Automatisierung für Ihre Geschäftsprozesse",
  },
  {
    icon: Globe,
    title: "Webhosting",
    description:
      "Zuverlässiges Schweizer Webhosting für WordPress, Next.js, React und mehr. Schnelle Server, automatische Backups und persönlicher Support.",
    features: ["WordPress", "Next.js", "React", "Auto-Backups"],
    benefits: "Hosting mit Schweizer Datenschutz und Top-Performance",
  },
  {
    icon: Server,
    title: "VPS",
    description:
      "Virtuelle Private Server mit vollem Root-Zugang. Maximale Kontrolle über Ihre Server-Infrastruktur mit garantierten Ressourcen.",
    features: ["Root-Zugang", "Garantierte Ressourcen", "SSD-Storage", "Skalierbar"],
    benefits: "Volle Kontrolle bei maximaler Flexibilität",
  },
  {
    icon: HardDrive,
    title: "n8n Hosting",
    description:
      "Managed n8n Hosting – fertig konfiguriert und betriebsbereit. Konzentrieren Sie sich auf Ihre Workflows, wir kümmern uns um die Infrastruktur.",
    features: ["Managed", "Auto-Updates", "Monitoring", "Backup"],
    benefits: "Sofort einsatzbereit ohne Server-Wartung",
  },
  {
    icon: Cloud,
    title: "Nextcloud",
    description:
      "Schweizer Cloud-Speicher mit Nextcloud. Ihre Daten bleiben in der Schweiz – sicher, privat und jederzeit zugänglich.",
    features: ["Cloud-Speicher", "File-Sharing", "Kalender", "Kontakte"],
    benefits: "Ihre eigene Cloud – 100% in der Schweiz",
  },
];

const testimonials = [
  {
    name: "Marco W.",
    role: "Freelance Webentwickler",
    text: "Endlich ein Hoster der mich versteht. Support ist mega schnell und die Server laufen stabil.",
    rating: 5,
  },
  {
    name: "Sara M.",
    role: "Online-Shop Betreiberin",
    text: "Unser WooCommerce-Shop läuft seit dem Wechsel zu hostagent deutlich schneller. Und die Daten bleiben in der Schweiz – das ist für unsere Kunden wichtig.",
    rating: 5,
  },
  {
    name: "Luca B.",
    role: "Startup Gründer",
    text: "Das n8n Hosting ist genial. Wir haben unsere Automationen in Minuten aufgesetzt – keine Server-Wartung, einfach läuft.",
    rating: 5,
  },
];

const techPartners = [
  { name: "NVIDIA", description: "GPU-Technologie" },
  { name: "AMD", description: "Prozessoren" },
  { name: "Dell", description: "Server-Hardware" },
  { name: "Intel", description: "Compute Power" },
  { name: "HP Enterprise", description: "Enterprise-Lösungen" },
  { name: "Cloudflare", description: "CDN & Security" },
  { name: "Fortinet", description: "Netzwerksicherheit" },
];

export function HostagentContent() {
  return (
    <>
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
              Hosting aus der Schweiz, für die Schweiz
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              hostagent.ch ist eine Schweizer Hosting-Plattform, die auf persönlichen Support und 100% Schweizer Datenschutz setzt. Von Webhosting über VPS bis hin zu Managed n8n und Nextcloud – alles aus einer Hand, mit einem Team, das versteht, was Entwickler und Unternehmen brauchen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Produkte</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Das Angebot
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Schweizer Infrastruktur für moderne Projekte – zuverlässig, sicher und persönlich betreut.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <product.icon className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.features.map((feature) => (
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
                      {product.benefits}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Kundenstimmen</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Was unsere Kunden sagen
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-xl p-5 bg-white/60 border border-white/80 shadow-sm"
              >
                <Quote className="h-4 w-4 text-blue-400 mb-3" />
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{testimonial.text}</p>
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-blue-500 text-blue-500" />
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-xs text-gray-400">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Partners */}
      <section className="relative py-12 sm:py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Technologie-Partner</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Unsere Partner
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {techPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-xl p-4 bg-white border border-gray-200 shadow-sm text-center"
              >
                <p className="text-sm font-semibold text-gray-900">{partner.name}</p>
                <p className="text-xs text-gray-400 mt-1">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Link + CTA */}
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
              Hosting anfragen?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Entdecken Sie hostagent.ch oder kontaktieren Sie uns direkt – wir beraten Sie gerne zu der passenden Hosting-Lösung für Ihr Projekt.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://hostagent.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 rounded-full py-3 px-8 transition-colors cursor-pointer"
              >
                hostagent.ch besuchen
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-8 transition-colors cursor-pointer"
              >
                Hosting anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
