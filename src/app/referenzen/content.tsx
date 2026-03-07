"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  Server,
  Mic,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "hostagent.ch",
    logo: "/images/logos/hostagent.png",
    url: "https://hostagent.ch",
    detailHref: "/referenzen/hostagent",
    tagline: "Dein Hosting. Persönlich. Swiss Made.",
    icon: Server,
    description:
      "Schweizer Hosting-Plattform mit Cloud-Infrastruktur, Webhosting, VPS, n8n-Hosting und Nextcloud. 100 % Schweizer Datenschutz, 99.9 % Uptime und persönlicher Support auf Deutsch und Albanisch.",
    features: [
      "Webhosting (WordPress, Next.js, React)",
      "VPS mit Root-Zugang",
      "n8n Managed Hosting",
      "Nextcloud Cloud-Speicher",
      "OpenClaw KI-Agent Software",
      "DDoS-Schutz & tägliche Backups",
    ],
    tags: ["Hosting", "Cloud", "Swiss Made", "KI"],
    color: "blue",
  },
  {
    name: "co-host.ch",
    logo: "/images/logos/cohost.png",
    url: "https://co-host.ch",
    detailHref: "/referenzen/cohost",
    tagline: "Die Plattform für starke Gespräche aus der Schweiz.",
    icon: Mic,
    description:
      "Schweizer Marktplatz-Plattform, die Podcast-Hosts mit Gästen und Speakern verbindet. Integrierte Interview-Technologie mit Video-Calls und automatischer Aufnahme – kein Zoom oder Google Meet nötig.",
    features: [
      "Interview-Matching Marktplatz",
      "Integrierte Videocalls & Aufnahme",
      "Kategorisierte Gastsuche",
      "Multi-Plattform Distribution",
      "Für Hosts, Speaker & Experten",
      "Kostenlose Registrierung",
    ],
    tags: ["Plattform", "Podcast", "SaaS", "Marktplatz"],
    color: "violet",
  },
  {
    name: "nutshellai.ch",
    logo: "/images/logos/nutshellai.png",
    url: "https://nutshellai.ch",
    detailHref: "/referenzen/nutshellai",
    tagline: "Sprachnachrichten in a Nutshell.",
    icon: MessageSquare,
    description:
      "WhatsApp-Bot, der Sprachnachrichten automatisch transkribiert und zusammenfasst. Unterstützt Deutsch, Schweizerdeutsch, Französisch, Italienisch und Englisch – konform mit dem Schweizer Datenschutzgesetz.",
    features: [
      "WhatsApp-Bot Integration",
      "KI-Transkription & Zusammenfassung",
      "5 Sprachen inkl. Schweizerdeutsch",
      "DSG-konform (Daten sofort gelöscht)",
      "Keine App-Installation nötig",
      "Ab CHF 3.90/Monat",
    ],
    tags: ["KI", "WhatsApp", "Automatisierung", "Mehrsprachig"],
    color: "emerald",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; iconBg: string; iconBorder: string; tagBg: string }> = {
  blue: {
    bg: "from-blue-50 to-blue-100/50",
    border: "border-blue-200/60",
    text: "text-blue-600",
    iconBg: "bg-blue-50",
    iconBorder: "border-blue-100",
    tagBg: "bg-blue-50 text-blue-700",
  },
  violet: {
    bg: "from-violet-50 to-violet-100/50",
    border: "border-violet-200/60",
    text: "text-violet-600",
    iconBg: "bg-violet-50",
    iconBorder: "border-violet-100",
    tagBg: "bg-violet-50 text-violet-700",
  },
  emerald: {
    bg: "from-emerald-50 to-emerald-100/50",
    border: "border-emerald-200/60",
    text: "text-emerald-600",
    iconBg: "bg-emerald-50",
    iconBorder: "border-emerald-100",
    tagBg: "bg-emerald-50 text-emerald-700",
  },
};

export function ReferenzenContent() {
  return (
    <>
      {/* Projects */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Projekte</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Was wir gebaut haben
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Jedes Projekt wird von uns vollständig konzipiert, entwickelt und betrieben – von der Idee bis zum laufenden Produkt.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            {projects.map((project, index) => {
              const colors = colorMap[project.color];
              return (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="rounded-2xl overflow-hidden bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                >
                  {/* Color accent bar */}
                  <div className={`h-1 bg-gradient-to-r ${colors.bg}`} />

                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Logo & Icon */}
                      <div className="flex items-center gap-4 md:flex-col md:items-center md:gap-3 shrink-0">
                        <div className={`w-14 h-14 rounded-xl ${colors.iconBg} border ${colors.iconBorder} flex items-center justify-center`}>
                          <img
                            src={project.logo}
                            alt={project.name}
                            className="h-8 w-8 object-contain"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 text-xs font-medium ${colors.text} hover:underline cursor-pointer`}
                          >
                            <ExternalLink className="h-3 w-3" />
                            Website besuchen
                          </a>
                        </div>

                        <p className={`text-sm font-medium ${colors.text} mb-3`}>
                          {project.tagline}
                        </p>

                        <p className="text-sm text-gray-500 leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                          {project.features.map((feature) => (
                            <div
                              key={feature}
                              className="flex items-center gap-2 text-xs text-gray-600"
                            >
                              <CheckCircle2 className={`h-3.5 w-3.5 ${colors.text} shrink-0`} />
                              {feature}
                            </div>
                          ))}
                        </div>

                        {/* Tags & Detail Link */}
                        <div className="flex flex-wrap items-center gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`inline-flex items-center text-xs font-medium rounded-full px-3 py-1 ${colors.tagBg}`}
                            >
                              {tag}
                            </span>
                          ))}
                          <Link
                            href={project.detailHref}
                            className={`inline-flex items-center gap-1 text-xs font-medium ${colors.text} hover:underline cursor-pointer ml-auto`}
                          >
                            Mehr erfahren
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
              Ihr Projekt ist das nächste?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Wir bringen Ihre Idee zum Leben – von der Konzeption über die Entwicklung bis zum Betrieb. Lassen Sie uns gemeinsam etwas Grossartiges bauen.
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
