"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Video,
  Users,
  Radio,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  UserCircle,
  Search,
  Play,
  ExternalLink,
  Headphones,
  Briefcase,
  Cpu,
  Megaphone,
  Heart,
  Wallet,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "Swiss", label: "Made in Switzerland" },
  { value: "6", label: "Kategorien" },
  { value: "1-Klick", label: "Interviews" },
  { value: "0 CHF", label: "Registrierung" },
];

const features = [
  {
    icon: Search,
    title: "Marktplatz",
    description:
      "Finden Sie den perfekten Podcast-Gast oder Host – gefiltert nach Kategorie, Expertise und Themen. Matching auf Basis Ihrer Interessen und Ihres Publikums.",
    features: ["Host/Guest Matching", "Kategorie-Filter", "Expertise-Suche", "Themen"],
    benefits: "Passende Interview-Partner gezielt finden",
  },
  {
    icon: Video,
    title: "Integrierte Videocalls",
    description:
      "Kein Zoom, kein Google Meet – alles direkt auf der Plattform. Starten Sie Interviews mit einem Klick, inklusive automatischer Aufnahme und Download.",
    features: ["Kein Zoom nötig", "1-Klick Start", "Automatische Aufnahme", "Download"],
    benefits: "Vom Matching zum Interview ohne Umwege",
  },
  {
    icon: Users,
    title: "Profil-System",
    description:
      "Erstellen Sie Ihr Profil als Host, Speaker, Experte, Coach, Autor oder Content Creator. Zeigen Sie Ihre Expertise, Themen und bisherigen Auftritte.",
    features: ["Hosts", "Speaker", "Experten", "Coaches"],
    benefits: "Ihre Expertise sichtbar für Podcast-Hosts in der Schweiz",
  },
  {
    icon: Radio,
    title: "Multi-Plattform",
    description:
      "Verknüpfen Sie Ihren Podcast auf allen grossen Plattformen – Spotify, Apple Podcasts, YouTube, Amazon Music, Overcast und Pocket Casts. Alles zentral verwaltet.",
    features: ["Spotify", "Apple Podcasts", "YouTube", "Overcast", "Pocket Casts", "Amazon Music"],
    benefits: "Alle Plattformen an einem Ort verwalten",
  },
];

const steps = [
  {
    step: "01",
    title: "Profil erstellen",
    description: "Registrieren Sie sich kostenlos und erstellen Sie Ihr Profil mit Ihren Themen und Ihrer Expertise.",
  },
  {
    step: "02",
    title: "Matches entdecken",
    description: "Durchsuchen Sie den Marktplatz und finden Sie passende Hosts oder Gäste für Ihren Podcast.",
  },
  {
    step: "03",
    title: "Interview starten",
    description: "Starten Sie direkt auf der Plattform ein Videointerview – ohne zusätzliche Tools oder Downloads.",
  },
];

const categories = [
  { name: "Business", icon: Briefcase },
  { name: "Technology", icon: Cpu },
  { name: "Marketing", icon: Megaphone },
  { name: "Health", icon: Heart },
  { name: "Finance", icon: Wallet },
  { name: "Lifestyle", icon: Sparkles },
];

const userTypes = [
  "Hosts",
  "Speaker",
  "Experten",
  "Coaches",
  "Autoren",
  "Unternehmer",
  "Content Creators",
  "Educators",
];

export function CohostContent() {
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
              Die Schweizer Podcast-Plattform
            </h2>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
              co-host.ch verbindet Podcast-Hosts mit spannenden Gästen, Speakern und Experten. Die Plattform macht es einfach, den perfekten Interview-Partner zu finden und direkt loszulegen – mit integrierten Videocalls, ohne zusätzliche Tools. Kostenlos registrieren, Profil erstellen, loslegen.
            </p>
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Features</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Alles auf einer Plattform
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Von der Suche bis zum fertigen Interview – co-host.ch vereint alles, was Podcaster brauchen.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
                    <feature.icon className="h-6 w-6 text-violet-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-3">{feature.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {feature.features.map((f) => (
                        <span
                          key={f}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-100 rounded-full px-3 py-1"
                        >
                          <CheckCircle2 className="h-3 w-3 text-violet-500" />
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs font-medium text-violet-600 flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {feature.benefits}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-violet-500/[0.02] to-[#fafafa]" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">So funktioniert&apos;s</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              In 3 Schritten zum Interview
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mt-4">
              Einfacher geht es nicht – vom Profil bis zum Live-Interview in wenigen Minuten.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-xl p-5 bg-white/60 border border-white/80 shadow-sm text-center"
              >
                <span className="text-2xl font-bold text-violet-500">{step.step}</span>
                <h3 className="text-sm font-semibold text-gray-900 mt-2 mb-1.5">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative py-12 sm:py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Kategorien</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Themenvielfalt
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-xl p-4 bg-white border border-gray-200 shadow-sm text-center"
              >
                <category.icon className="h-5 w-5 text-violet-500 mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-sm font-semibold text-gray-900">{category.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Types */}
      <section className="relative py-12 sm:py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Nutzer</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Wer nutzt co-host.ch?
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {userTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-xl p-4 bg-white border border-gray-200 shadow-sm text-center"
              >
                <UserCircle className="h-5 w-5 text-violet-500 mx-auto mb-2" strokeWidth={1.5} />
                <p className="text-sm font-semibold text-gray-900">{type}</p>
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
            className="max-w-2xl mx-auto text-center rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200/60"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Plattform entdecken
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Registrieren Sie sich kostenlos auf co-host.ch und finden Sie Ihren nächsten Podcast-Gast oder Ihre nächste Bühne als Speaker.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://co-host.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-8 transition-colors cursor-pointer"
              >
                Plattform entdecken
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 bg-white hover:bg-gray-50 border border-gray-200 rounded-full py-3 px-8 transition-colors cursor-pointer"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
