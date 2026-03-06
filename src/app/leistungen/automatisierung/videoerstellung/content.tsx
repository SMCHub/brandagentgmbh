"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Video,
  Smartphone,
  Layers,
  Palette,
  Subtitles,
  Music,
  Clapperboard,
  Instagram,
  Play,
  Wand2,
  Clock,
  Users,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { value: "100+", label: "Videos/Monat" },
  { value: "10+", label: "Formate" },
  { value: "0", label: "Personal nötig" },
  { value: "24h", label: "Lieferung" },
];

const features = [
  {
    icon: Wand2,
    title: "KI-Videogenerierung",
    description:
      "Modernste KI-Tools erstellen professionelle Videos aus Text, Bildern oder kurzen Briefings – von Produktvideos über Erklärvideos bis zu animierten Social Media Clips.",
  },
  {
    icon: Smartphone,
    title: "Social Media Formate",
    description:
      "Automatische Anpassung an alle gängigen Formate: 9:16 für Reels und TikTok, 1:1 für Feed-Posts, 16:9 für YouTube – ein Briefing, alle Formate.",
  },
  {
    icon: Layers,
    title: "Batch-Produktion",
    description:
      "Hunderte Videos in einem Durchlauf erstellen – ideal für Produktkataloge, Varianten-Content oder personalisierte Kundenvideos.",
  },
  {
    icon: Palette,
    title: "Brand Templates",
    description:
      "Ihre Markenrichtlinien als wiederverwendbare Templates: Logo-Platzierung, Farbschema, Schriftarten und Intro/Outro – immer konsistent.",
  },
  {
    icon: Subtitles,
    title: "Untertitel",
    description:
      "Automatische Untertitelgenerierung in mehreren Sprachen – für barrierefreien Content und höheres Engagement auf Social Media.",
  },
  {
    icon: Music,
    title: "Musikunterlegung",
    description:
      "Lizenzfreie Musik, die zum Inhalt passt – automatisch ausgewählt und perfekt synchronisiert mit den visuellen Elementen.",
  },
];

const platforms = [
  {
    icon: Instagram,
    title: "Instagram Reels",
    description:
      "Vertikale Kurzvideos im 9:16-Format, optimiert für den Instagram-Algorithmus mit Hook, Content und Call-to-Action.",
  },
  {
    icon: Clapperboard,
    title: "TikTok",
    description:
      "Trendgerechte Videos mit schnellen Schnitten, Textoverlays und Musik – angepasst an die TikTok-Ästhetik und Best Practices.",
  },
  {
    icon: Play,
    title: "YouTube Shorts",
    description:
      "Kurze, packende Videos für YouTube Shorts – mit Thumbnail-Optimierung und SEO-optimierten Beschreibungen.",
  },
  {
    icon: Users,
    title: "LinkedIn Video",
    description:
      "Professionelle Business-Videos für LinkedIn – von Thought Leadership über Case Studies bis zu Recruiting-Content.",
  },
];

const process = [
  {
    step: "01",
    title: "Briefing",
    description:
      "Sie definieren Ziel, Zielgruppe und Kernbotschaft. Ein kurzes Formular reicht – den Rest übernimmt die KI.",
  },
  {
    step: "02",
    title: "KI-Generierung",
    description:
      "Auf Basis des Briefings erstellen KI-Tools den Videocontent – Visuals, Voiceover, Textoverlays und Animationen.",
  },
  {
    step: "03",
    title: "Branding",
    description:
      "Ihr Corporate Design wird automatisch angewendet: Logo, Farben, Schriften, Intro und Outro – alles aus Ihren hinterlegten Templates.",
  },
  {
    step: "04",
    title: "Export",
    description:
      "Das fertige Video wird in allen gewünschten Formaten und Auflösungen exportiert – bereit für die Veröffentlichung auf allen Kanälen.",
  },
];

const tools = [
  { name: "Runway", description: "KI-Videogenerierung" },
  { name: "ElevenLabs", description: "KI-Voiceover & Stimmen" },
  { name: "D-ID", description: "KI-Avatar-Videos" },
  { name: "Canva", description: "Design & Templates" },
  { name: "FFmpeg", description: "Video-Verarbeitung" },
  { name: "n8n", description: "Workflow-Orchestrierung" },
];

export function VideoerstellungContent() {
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
              Videoproduktion ohne Produktionsteam
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-500 leading-relaxed">
              <p>
                Video ist das dominierende Format auf Social Media – aber professionelle Videoproduktion ist teuer, zeitaufwändig und schwer skalierbar. Ein einzelnes Produktvideo kann schnell Tausende kosten und Wochen dauern. Für regelmässigen Content auf mehreren Plattformen ist das für die meisten Unternehmen nicht tragbar.
              </p>
              <p>
                Unsere automatisierte Videoproduktion löst dieses Problem: Mit modernsten KI-Tools erstellen wir professionelle Videos in grosser Stückzahl – von Instagram Reels über TikTok-Clips bis zu LinkedIn-Videos. Sie liefern das Briefing, wir liefern die fertigen Videos in allen benötigten Formaten.
              </p>
              <p>
                Die Kombination aus KI-Videogenerierung, automatischem Branding und Batch-Produktion macht es möglich, über 100 Videos pro Monat zu erstellen – ohne zusätzliches Personal und zu einem Bruchteil der Kosten einer traditionellen Videoproduktion. Jedes Video entspricht Ihren Markenrichtlinien und ist sofort einsatzbereit.
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Funktionen</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Alles für Ihre Videoproduktion
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Von der KI-Generierung bis zur fertigen Datei – jeder Schritt ist automatisiert und auf Qualität optimiert.
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

      {/* Platforms */}
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Plattformen</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Optimiert für jede Plattform
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mt-4">
              Ein Briefing – Videos für alle Kanäle. Automatisch im richtigen Format und Stil.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-xl p-5 bg-white/60 border border-white/80 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
                  <platform.icon className="h-4 w-4 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{platform.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{platform.description}</p>
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
              Vom Briefing zum fertigen Video
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
              Videoproduktion automatisieren?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Erzählen Sie uns von Ihren Video-Anforderungen – wir zeigen Ihnen, wie Sie regelmässig hochwertigen Video-Content produzieren, ohne ein Produktionsteam zu brauchen.
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
