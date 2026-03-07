"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  FileText,
  Palette,
  Calculator,
  Users,
  FileDown,
  Languages,
  GitBranch,
  Zap,
  Clock,
  Shield,
  Bot,
  Database,
  Send,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: FileText,
    title: "Vorlagen-System",
    description:
      "Ihre bestehenden Angebotsvorlagen werden digitalisiert und als intelligente Templates hinterlegt – mit Platzhaltern, Textbausteinen und dynamischen Bereichen.",
  },
  {
    icon: Calculator,
    title: "Preiskalkulation",
    description:
      "Automatische Preisberechnung auf Basis Ihrer hinterlegten Preislisten, Rabattstaffeln und kundenspezifischen Konditionen – immer korrekt und aktuell.",
  },
  {
    icon: Users,
    title: "CRM-Anbindung",
    description:
      "Kundendaten werden direkt aus Ihrem CRM-System gezogen – Adresse, Ansprechpartner, Historie und individuelle Konditionen fliessen automatisch ins Angebot ein.",
  },
  {
    icon: FileDown,
    title: "PDF-Export",
    description:
      "Fertige Angebote werden als professionelle PDF-Dokumente im Corporate Design exportiert – druckfertig und versandbereit.",
  },
  {
    icon: Languages,
    title: "Mehrsprachig",
    description:
      "Angebote in Deutsch, Englisch, Französisch oder Italienisch – automatisch übersetzt und kulturell angepasst durch KI.",
  },
  {
    icon: GitBranch,
    title: "Versionierung",
    description:
      "Jede Angebotsversion wird gespeichert und ist nachvollziehbar. Änderungen werden dokumentiert und alte Versionen bleiben jederzeit abrufbar.",
  },
];

const advantages = [
  {
    icon: Clock,
    title: "Minuten statt Stunden",
    description:
      "Was früher einen halben Tag dauerte, ist jetzt in wenigen Minuten erledigt. Die KI erstellt den Entwurf, Sie prüfen und versenden – fertig.",
  },
  {
    icon: Palette,
    title: "Immer im Corporate Design",
    description:
      "Jedes Angebot sieht professionell aus und entspricht exakt Ihren Markenrichtlinien – Schriften, Farben, Logo und Layout sind konsistent.",
  },
  {
    icon: Shield,
    title: "Fehlerfrei und konsistent",
    description:
      "Keine Tippfehler, keine falschen Preise, keine veralteten Konditionen. Die Automatisierung eliminiert menschliche Fehlerquellen vollständig.",
  },
];

const process = [
  {
    step: "01",
    title: "Kundenanfrage",
    description:
      "Eine Anfrage geht ein – per E-Mail, Kontaktformular oder direkt im CRM. Das System erkennt den Bedarf und startet den Angebotsprozess.",
  },
  {
    step: "02",
    title: "Datenabgleich",
    description:
      "Kundendaten, Preislisten und relevante Konditionen werden automatisch aus CRM und Datenbank abgerufen und zusammengeführt.",
  },
  {
    step: "03",
    title: "KI-Entwurf",
    description:
      "Claude AI erstellt auf Basis der Vorlage, der Kundendaten und der Anforderungen einen massgeschneiderten Angebotsentwurf.",
  },
  {
    step: "04",
    title: "Review & Versand",
    description:
      "Sie prüfen den Entwurf, nehmen bei Bedarf Anpassungen vor und versenden das fertige Angebot als PDF – alles in einem Workflow.",
  },
];

const tools = [
  { name: "n8n", description: "Workflow-Orchestrierung" },
  { name: "Claude AI", description: "Intelligente Texterstellung" },
  { name: "Google Docs API", description: "Dokumentengenerierung" },
  { name: "CRM-APIs", description: "Kundendaten-Integration" },
  { name: "PDF-Generator", description: "Professioneller Export" },
  { name: "E-Mail APIs", description: "Automatischer Versand" },
];

export function AngebotsentwuerfeContent() {
  return (
    <>
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
              Professionelle Angebote in Minuten
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-500 leading-relaxed">
              <p>
                Die Erstellung von Angeboten ist in vielen Unternehmen ein zeitaufwändiger Prozess: Kundendaten zusammensuchen, Preise kalkulieren, Texte formulieren, Formatierung anpassen und das Ganze als PDF exportieren. Oft dauert ein einziges Angebot mehrere Stunden – und trotzdem schleichen sich Fehler ein.
              </p>
              <p>
                Unsere KI-gestützte Angebotserstellung ändert das grundlegend. Auf Basis Ihrer bestehenden Vorlagen, Preislisten und CRM-Daten erstellt das System in Minuten einen vollständigen Angebotsentwurf – im Corporate Design, mit korrekten Preisen und personalisierten Texten. Sie müssen nur noch prüfen und versenden.
              </p>
              <p>
                Die KI lernt dabei aus Ihren bisherigen Angeboten und wird mit der Zeit immer besser. Wiederkehrende Formulierungen, branchenspezifische Fachbegriffe und kundenindividuelle Besonderheiten werden automatisch berücksichtigt. Das Ergebnis: konsistente, professionelle Angebote, die Ihre Abschlussquote steigern.
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
              Intelligente Angebotserstellung
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Von der Vorlage bis zum versandfertigen PDF – jede Funktion ist darauf ausgelegt, Ihren Angebotsprozess zu beschleunigen.
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

      {/* Advantages */}
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
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Vorteile</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Warum KI-gestützte Angebote?
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((adv, index) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl p-6 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4">
                  <adv.icon className="h-5 w-5 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{adv.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{adv.description}</p>
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
              Von der Anfrage zum fertigen Angebot
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
              Angebotserstellung automatisieren?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Zeigen Sie uns Ihren aktuellen Angebotsprozess – wir zeigen Ihnen, wie Sie 90% der Zeit sparen und gleichzeitig die Qualität steigern.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-8 transition-colors cursor-pointer"
            >
              Kostenlose Demo anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
