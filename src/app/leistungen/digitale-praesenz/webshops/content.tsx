"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  CreditCard,
  Package,
  Truck,
  BarChart3,
  Boxes,
  Store,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "30%", label: "Mehr Umsatz" },
  { value: "99.9%", label: "Uptime" },
  { value: "50+", label: "Produkte integriert" },
  { value: "CH", label: "Zahlungen integriert" },
];

const services = [
  {
    icon: Store,
    title: "Shopify / Custom",
    description:
      "Ob Shopify für den schnellen Start oder eine massgeschneiderte E-Commerce-Lösung – wir entwickeln den Shop, der zu Ihrem Business passt. Skalierbar, performant und mit allen Funktionen, die Sie brauchen.",
    features: ["Shopify Plus", "Custom Development", "Headless Commerce", "Theme-Anpassung"],
    benefits: "Die richtige Plattform für Ihr Geschäftsmodell",
  },
  {
    icon: CreditCard,
    title: "Zahlungsintegration",
    description:
      "Alle gängigen Schweizer und internationalen Zahlungsmethoden. Twint, Kreditkarte, PostFinance, PayPal und mehr – nahtlos integriert für maximale Conversion an der Kasse.",
    features: ["Twint", "Kreditkarte (Visa/Mastercard)", "PostFinance", "PayPal & Klarna"],
    benefits: "Höhere Conversion durch bevorzugte Zahlungsmethoden",
  },
  {
    icon: Package,
    title: "Produktmanagement",
    description:
      "Effizientes Produktmanagement mit Varianten, Kategorien, Filtern und Suchfunktion. Bulk-Import, automatische Preisanpassungen und SEO-optimierte Produktseiten.",
    features: ["Produktvarianten", "Kategorien & Filter", "Bulk-Import/Export", "SEO-Produktseiten"],
    benefits: "Einfache Verwaltung auch bei grossem Sortiment",
  },
  {
    icon: Truck,
    title: "Versandanbindung",
    description:
      "Integration aller relevanten Versanddienstleister. Automatische Versandetiketten, Tracking-Nummern und Benachrichtigungen – für ein nahtloses Einkaufserlebnis.",
    features: ["Post CH", "DHL & DPD", "Automatische Labels", "Sendungsverfolgung"],
    benefits: "Automatisierter Versandprozess spart Zeit und Geld",
  },
  {
    icon: Boxes,
    title: "Bestandsverwaltung",
    description:
      "Echtzeit-Bestandsverwaltung mit automatischen Benachrichtigungen bei niedrigem Lagerbestand. Synchronisation zwischen Shop, Lager und eventuell weiteren Verkaufskanälen.",
    features: ["Echtzeit-Bestand", "Low-Stock Alerts", "Multi-Channel Sync", "Lager-Management"],
    benefits: "Nie wieder Überverkäufe oder Engpässe",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Umfassende E-Commerce-Analytics mit Umsatz-Dashboards, Conversion-Funnels und Produktperformance. Datenbasierte Entscheidungen für nachhaltiges Wachstum Ihres Online-Shops.",
    features: ["Umsatz-Dashboard", "Conversion-Funnels", "Produktanalyse", "Kundenverhalten"],
    benefits: "Datenbasierte Entscheidungen für mehr Umsatz",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Analyse",
    description: "Wir analysieren Ihr Geschäftsmodell, Zielgruppe, Wettbewerber und definieren die Anforderungen an Ihren Online-Shop.",
  },
  {
    step: "02",
    title: "Shop-Design",
    description: "UX/UI-Design optimiert auf Conversion. Produktseiten, Warenkorb und Checkout werden für maximale Benutzerfreundlichkeit gestaltet.",
  },
  {
    step: "03",
    title: "Integration",
    description: "Anbindung von Zahlungssystemen, Versanddienstleistern, ERP und weiteren Drittsystemen. Alles wird nahtlos integriert.",
  },
  {
    step: "04",
    title: "Go-Live",
    description: "Umfassendes Testing, Datenmigration und kontrollierter Launch. Inklusive Schulung und Support für Ihr Team.",
  },
];

const platforms = [
  { name: "Shopify", description: "E-Commerce Plattform" },
  { name: "WooCommerce", description: "WordPress E-Commerce" },
  { name: "Stripe", description: "Zahlungsabwicklung" },
  { name: "Twint", description: "Schweizer Bezahllösung" },
  { name: "PostFinance", description: "Schweizer Zahlungsanbieter" },
  { name: "Post CH", description: "Versandlogistik Schweiz" },
];

export function WebshopsContent() {
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
              Online-Shops, die verkaufen
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Wir entwickeln E-Commerce-Lösungen, die nicht nur gut aussehen, sondern auch konvertieren. Mit Schweizer Zahlungsintegration, schnellen Ladezeiten und einem Checkout, der keine Kunden verliert.
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
              Von der Analyse zum Go-Live
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Plattformen & Integrationen</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Unsere E-Commerce-Partner
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
              Bereit für Ihren Online-Shop?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam einen Webshop entwickeln, der verkauft. Kostenlose Erstberatung – wir analysieren Ihre Anforderungen und zeigen Ihnen den optimalen Weg.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-8 transition-colors cursor-pointer"
            >
              Shop-Projekt besprechen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
