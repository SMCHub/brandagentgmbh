"use client";

import { motion } from "framer-motion";
import {
  Building2,
  MapPin,
  Target,
  Zap,
  Heart,
  Shield,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  Award,
  Users,
  Lightbulb,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const team: {
  name: string;
  role: string;
  title: string;
  image: string;
  description: string;
  scale?: number;
  translateY?: string;
  objectPosition?: string;
}[] = [
  {
    name: "Silvio Glarner",
    role: "Founder & Geschäftsführer",
    title: "Dipl. Betriebswirtschafter",
    image: "/images/foto1.png",
    scale: 1.15,
    translateY: "-8%",
    description: "Strategie, Business Development und Kundenbeziehungen. Silvio verbindet betriebswirtschaftliches Know-how mit digitalem Weitblick.",
  },
  {
    name: "Salvatore Reccardo",
    role: "Founder & COO",
    title: "Dipl. Techniker HF Unternehmensprozesse",
    image: "/images/foto2.png",
    description: "Prozessoptimierung und Automatisierung. Salvatore ist Experte für effiziente Geschäftsprozesse und digitale Transformation.",
  },
  {
    name: "Burak Bajrami",
    role: "Entwicklung & Technologie",
    title: "(Angehender) Dipl. Wirtschaftsinformatiker",
    image: "/images/foto3.png",
    description: "Webentwicklung, KI-Integration und technische Umsetzung. Burak bringt modernste Technologien in jedes Projekt ein.",
  },
];

const values = [
  {
    icon: Target,
    title: "Zielorientiert",
    description: "Jedes Projekt beginnt mit klaren, messbaren Zielen. Wir liefern Ergebnisse, keine leeren Versprechen.",
  },
  {
    icon: Zap,
    title: "Innovativ",
    description: "Wir setzen auf die neuesten KI-Technologien und Automatisierungstools – immer einen Schritt voraus.",
  },
  {
    icon: Shield,
    title: "Zuverlässig",
    description: "Schweizer Qualität in jedem Detail. Termingerecht, transparent und mit höchsten Sicherheitsstandards.",
  },
  {
    icon: Heart,
    title: "Persönlich",
    description: "Keine Ticketnummern, sondern echte Ansprechpartner. Wir sind Partner, nicht nur Dienstleister.",
  },
  {
    icon: Lightbulb,
    title: "Lösungsorientiert",
    description: "Wir denken in Lösungen, nicht in Problemen. Pragmatisch, kreativ und immer mit Blick auf den Mehrwert.",
  },
  {
    icon: Handshake,
    title: "Partnerschaftlich",
    description: "Langfristige Kundenbeziehungen sind unser Fundament. Ihr Erfolg ist unser Erfolg.",
  },
];

const milestones = [
  { year: "2025", title: "Gründung", description: "Brand Agent GmbH wird im Kanton Zug gegründet." },
  { year: "2025", title: "Erste Kunden", description: "Erfolgreiche Umsetzung erster Automatisierungsprojekte in der Schweiz." },
  { year: "2025", title: "Team-Erweiterung", description: "Burak Bajrami verstärkt das Team im Bereich Entwicklung & Technologie." },
  { year: "2025", title: "Wachstum", description: "Erweiterung des Leistungsportfolios um Webentwicklung und E-Commerce." },
];

const facts = [
  { icon: Building2, label: "Gegründet", value: "2025" },
  { icon: MapPin, label: "Standort", value: "Kanton Zug" },
  { icon: Users, label: "Teamgrösse", value: "3 Experten" },
  { icon: Award, label: "Rechtsform", value: "GmbH" },
];

export function UeberUnsContent() {
  return (
    <>
      {/* Facts */}
      <section className="relative py-12 sm:py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3">
                  <fact.icon className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
                </div>
                <p className="text-lg sm:text-xl font-bold text-gray-900">{fact.value}</p>
                <p className="text-xs text-gray-400 mt-0.5">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-8 sm:p-12 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
            >
              <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Unsere Mission</span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
                Vorsprung durch Intelligenz
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-500 leading-relaxed">
                <p>
                  Wir glauben, dass jedes Unternehmen – unabhängig von der Grösse – Zugang zu modernster KI-Technologie und digitalen Lösungen haben sollte. Unsere Mission ist es, diese Technologien zugänglich, verständlich und nutzbar zu machen.
                </p>
                <p>
                  Als Schweizer Unternehmen aus dem Kanton Zug verbinden wir Präzision und Zuverlässigkeit mit innovativer Technologie. Wir automatisieren Geschäftsprozesse, stärken die digitale Präsenz unserer Kunden und schaffen so messbaren Mehrwert.
                </p>
                <p>
                  Unser Ansatz: Keine One-Size-Fits-All-Lösungen, sondern massgeschneiderte Strategien, die auf Ihre spezifischen Bedürfnisse und Ziele zugeschnitten sind. Persönlich, transparent und ergebnisorientiert.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Werte</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Wofür wir stehen
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="rounded-2xl p-6 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <value.icon className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Team</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Die Menschen dahinter
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mt-4">
              Ein kleines, schlagkräftiges Team mit grosser Expertise – jeder bringt seine Stärken ein.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl overflow-hidden bg-white/60 border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              >
                <div className="relative w-full aspect-[3/4] bg-[#f5f5f5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{
                      objectPosition: member.objectPosition || "center top",
                      transform: [
                        member.scale ? `scale(${member.scale})` : "",
                        member.translateY ? `translateY(${member.translateY})` : "",
                      ].filter(Boolean).join(" ") || undefined,
                    }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-xs text-blue-600 font-medium mt-0.5">{member.role}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{member.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed mt-3">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Geschichte</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Unsere Meilensteine
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto space-y-0">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 pb-8 last:pb-0"
              >
                {/* Timeline line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-gray-200" />
                )}
                {/* Dot */}
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500" />
                  </div>
                </div>
                {/* Content */}
                <div className="pt-1">
                  <span className="text-xs font-mono text-blue-500 font-bold">{milestone.year}</span>
                  <h3 className="text-base font-semibold text-gray-900 mt-0.5">{milestone.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mt-1">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info Card */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-base font-semibold text-gray-900 mb-5">Firmendaten</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Building2 className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-gray-700">Brand Agent GmbH</p>
                    <p className="text-xs text-gray-400">UID: CHE-204.407.181</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-gray-500">Hammerstrasse 5, 6312 Steinhausen, Schweiz</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                  <a href="mailto:info@brandagent.ch" className="text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
                    info@brandagent.ch
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                  <a href="tel:+41764173602" className="text-sm text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
                    +41 76 417 36 02
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-2xl p-8 sm:p-10 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/60 flex flex-col justify-center text-center"
            >
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900 mb-3">
                Projekt besprechen?
              </h3>
              <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                Wir freuen uns, von Ihnen zu hören. Kostenlos und unverbindlich.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-8 transition-colors cursor-pointer mx-auto"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
