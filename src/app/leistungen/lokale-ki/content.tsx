"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  ShieldCheck,
  Server,
  Lock,
  Eye,
  EyeOff,
  Cpu,
  Network,
  Globe,
  FileText,
  Code2,
  Image,
  Search,
  Gauge,
  Fingerprint,
  Building2,
  Scale,
  CircuitBoard,
  Container,
  Database,
  MessagesSquare,
  Sparkles,
  Check,
  X,
  AlertTriangle,
  Camera,
  Gavel,
} from "lucide-react";
import Link from "next/link";

const sovereigntyPillars = [
  {
    icon: EyeOff,
    title: "Keine Daten verlassen Ihr Gebäude",
    description:
      "Sämtliche Anfragen, Antworten und Trainingsdaten bleiben physisch in Ihren Räumlichkeiten. Kein Byte wird jemals an externe Server übertragen.",
  },
  {
    icon: Lock,
    title: "Zero Cloud-Abhängigkeit",
    description:
      "Kein OpenAI, kein Google, kein AWS. Die gesamte KI-Infrastruktur läuft autark auf der Hardware, die wir bei Ihnen installieren – auch offline.",
  },
  {
    icon: Scale,
    title: "DSG & DSGVO konform ab Tag 1",
    description:
      "Lokale Datenverarbeitung bedeutet automatische Compliance mit den strengsten Datenschutzanforderungen – ohne zusätzliche Massnahmen.",
  },
  {
    icon: Fingerprint,
    title: "Volle Zugriffskontrolle",
    description:
      "Sie bestimmen, wer Zugang zur KI hat. Integration in Active Directory, LDAP oder SSO – granular bis auf Benutzerebene.",
  },
];

const deliverables = [
  {
    icon: Server,
    title: "Hardware-Lieferung & Installation",
    description:
      "Wir liefern und installieren dedizierte KI-Hardware direkt bei Ihnen vor Ort – in Ihrem Serverraum, Ihrem Rechenzentrum oder Ihrem Büro. Schlüsselfertig konfiguriert.",
  },
  {
    icon: CircuitBoard,
    title: "Optimierte Konfiguration",
    description:
      "Leistungsstarke KI-Systeme – von uns exakt dimensioniert und konfiguriert für Ihre Anforderungen an Modellgrösse und Antwortgeschwindigkeit.",
  },
  {
    icon: Container,
    title: "Containerisiertes Deployment",
    description:
      "Wir deployen alles Docker-basiert für einfache Wartung und Updates. Modelle, APIs und Interfaces lassen sich unabhängig voneinander aktualisieren.",
  },
  {
    icon: Network,
    title: "Netzwerk-Integration",
    description:
      "Nahtlose Einbindung in Ihre bestehende IT-Landschaft – REST-API-Endpoints, interne DNS-Auflösung und Firewall-konforme Konfiguration durch unser Team.",
  },
  {
    icon: Gauge,
    title: "Monitoring & Wartung",
    description:
      "Echtzeit-Dashboard für Systemauslastung, Antwortzeiten und Modell-Performance. Wir übernehmen Updates, Patches und proaktives Monitoring.",
  },
  {
    icon: ShieldCheck,
    title: "Sicherheits-Härtung",
    description:
      "Verschlüsselte Kommunikation, Zugriffslogs, automatische Backups und regelmässige Sicherheitsupdates – enterprise-ready, von uns betreut.",
  },
];


const chatInterfaceFeatures = [
  {
    title: "Eigene Chat-Oberfläche",
    description: "Ein privates ChatGPT – nur für Ihr Unternehmen. Intuitives Interface, das Ihre Mitarbeitenden sofort nutzen können.",
  },
  {
    title: "Rollenbasierter Zugang",
    description: "Verschiedene Berechtigungslevel und Abteilungs-Channels. Jedes Team sieht nur, was es sehen soll.",
  },
  {
    title: "Chat-Historie & Favoriten",
    description: "Vergangene Konversationen durchsuchen, wichtige Antworten speichern und Wissen im Team teilen.",
  },
  {
    title: "Multi-Modell-Auswahl",
    description: "Wechseln Sie zwischen installierten Modellen je nach Aufgabe – Llama für Allgemeines, DeepSeek für Analyse, Code-Modelle für Entwicklung.",
  },
  {
    title: "Datei-Upload & Analyse",
    description: "Dokumente direkt im Chat hochladen und analysieren lassen – Verträge zusammenfassen, Tabellen auswerten, Berichte extrahieren.",
  },
  {
    title: "Ihre CI & Ihr Branding",
    description: "Das Interface wird an Ihr Corporate Design angepasst – Ihr Logo, Ihre Farben, Ihr Unternehmen.",
  },
];

const models = [
  {
    name: "Llama 3.1",
    provider: "Meta",
    sizes: "8B / 70B / 405B",
    strength: "Allzweck-Modell mit herausragender mehrsprachiger Performance",
  },
  {
    name: "Mistral Large",
    provider: "Mistral AI",
    sizes: "bis 123B",
    strength: "Exzellent für europäische Sprachen und Unternehmensanwendungen",
  },
  {
    name: "Qwen 2.5",
    provider: "Alibaba",
    sizes: "7B / 32B / 72B",
    strength: "Stark in Coding, Mathematik und strukturierter Datenverarbeitung",
  },
  {
    name: "DeepSeek-R1",
    provider: "DeepSeek",
    sizes: "7B / 67B",
    strength: "Führend bei logischem Denken und komplexen Analysen",
  },
  {
    name: "Gemma 2",
    provider: "Google",
    sizes: "9B / 27B",
    strength: "Kompakt und effizient – ideal für ressourcenschonende Setups",
  },
  {
    name: "Ihr Finetuned-Modell",
    provider: "Custom",
    sizes: "nach Bedarf",
    strength: "Auf Ihre Branche und Daten trainiert – maximale Relevanz",
  },
];

const useCases = [
  {
    icon: FileText,
    title: "Dokumentenanalyse",
    description:
      "Verträge, Berichte und interne Dokumente analysieren, zusammenfassen und kategorisieren – ohne dass sensible Inhalte Ihr Gebäude verlassen.",
  },
  {
    icon: MessagesSquare,
    title: "Interner KI-Assistent",
    description:
      "Ihr eigener Firmen-Chatbot mit RAG – beantwortet Mitarbeiterfragen basierend auf Ihrem internen Wissen, Wikis und Dokumenten.",
  },
  {
    icon: Code2,
    title: "Code-Assistenz",
    description:
      "Lokaler Copilot für Ihre Entwickler – Code-Reviews, Generierung und Dokumentation, ohne proprietären Code an Dritte zu senden.",
  },
  {
    icon: Search,
    title: "Semantische Suche",
    description:
      "RAG-basierte Suche über Ihre gesamten Datenbestände mit Vektordatenbank. Natürliche Sprache statt exakter Stichwörter.",
  },
  {
    icon: Image,
    title: "Bild- & Dokumentenverarbeitung",
    description:
      "OCR, Bildklassifizierung und multimodale Analyse – lokal verarbeitet für sensible Daten wie Ausweise oder medizinische Bilder.",
  },
  {
    icon: Globe,
    title: "Mehrsprachige Kommunikation",
    description:
      "Übersetzungen und mehrsprachiger Support in Echtzeit – ideal für international tätige Schweizer Unternehmen.",
  },
];

const process = [
  {
    step: "01",
    title: "Bedarfsanalyse",
    description:
      "Wir evaluieren gemeinsam Ihre Use Cases, Datenmengen und Performance-Anforderungen. Daraus leiten wir die optimale Hardware- und Modellkonfiguration ab.",
  },
  {
    step: "02",
    title: "Hardware-Lieferung & Installation",
    description:
      "Wir beschaffen die KI-Hardware, liefern sie an Ihren Standort und installieren alles vor Ort – inkl. Betriebssystem, Software und allen Abhängigkeiten.",
  },
  {
    step: "03",
    title: "Modelle, RAG & Interface",
    description:
      "Wir deployen die gewählten Open-Weight Modelle, richten die Vektordatenbank ein, konfigurieren die RAG-Pipeline und installieren Ihr persönliches Chat-Interface.",
  },
  {
    step: "04",
    title: "Schulung & laufender Betrieb",
    description:
      "Wir schulen Ihr Team, integrieren die KI in Ihre Systeme und übernehmen auf Wunsch Monitoring, Updates und kontinuierliche Optimierung.",
  },
];

const comparisonData = [
  { aspect: "Datenstandort", local: "Ihr Gebäude", cloud: "Rechenzentrum des Anbieters" },
  { aspect: "Datenschutz", local: "100% unter Ihrer Kontrolle", cloud: "Abhängig von AGB des Anbieters" },
  { aspect: "Internet nötig?", local: "Funktioniert offline", cloud: "Dauerhaft erforderlich" },
  { aspect: "Kosten", local: "Einmalig + geringer Betrieb", cloud: "Laufende API-Kosten pro Token" },
  { aspect: "Anpassbarkeit", local: "Voll anpassbar, Fine-Tuning & RAG", cloud: "Begrenzt durch Anbieter" },
  { aspect: "Wer installiert?", local: "Wir – schlüsselfertig", cloud: "Self-Service" },
];

export function LokaleKIContent() {
  return (
    <>
      {/* Sovereignty Section */}
      <section className="relative py-10 sm:py-14 md:py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto mb-10 sm:mb-16"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Datensouveränität</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Ihre Daten bleiben bei Ihnen.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-500 leading-relaxed">
              <p>
                Jedes Mal, wenn Sie ChatGPT, Copilot oder Claude über die Cloud nutzen, verlassen Ihre Unternehmensdaten die Schweiz. Für viele Branchen – von der Finanzwirtschaft über das Gesundheitswesen bis zur öffentlichen Verwaltung – ist das keine Option.
              </p>
              <p>
                Wir liefern die Alternative: Wir kommen zu Ihnen, installieren leistungsfähige KI-Hardware direkt in Ihrem Serverraum und deployen Open-Weight Modelle wie Llama, Mistral oder DeepSeek – inklusive Wissensdatenbank, RAG-Pipeline und einem eigenen Chat-Interface für Ihr Team. Alles schlüsselfertig, alles lokal.
              </p>
              <p>
                Das Ergebnis: KI auf Enterprise-Niveau, die Ihr Gebäude nie verlässt. Keine Cloud-Abhängigkeit, keine Tokenkosten, keine bösen Überraschungen bei der nächsten Datenschutz-Audit.
              </p>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {sovereigntyPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-emerald-200/60 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/[0.03] via-transparent to-emerald-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-5 right-5 text-[64px] font-bold text-emerald-500/[0.04] leading-none select-none group-hover:text-emerald-500/[0.07] transition-colors duration-500">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="relative flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-100/80 group-hover:border-emerald-200 transition-colors duration-300">
                    <pillar.icon className="h-5 w-5 text-emerald-600" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 mb-2">{pillar.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Section – Druckpunkte */}
      <section className="relative py-10 sm:py-12 md:py-14 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-sm text-red-400/80 tracking-widest uppercase mb-4 block">Risiken der Cloud</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Was viele nicht wissen
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Cloud-KI birgt Risiken, über die kaum jemand spricht – aber die Ihr Unternehmen direkt betreffen.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* US CLOUD Act */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-red-100/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-red-200/80 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                    <Gavel className="h-5 w-5 text-red-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">US CLOUD Act</h3>
                    <span className="text-[10px] font-mono text-red-400 bg-red-50 rounded-full px-2 py-0.5">Seit 2018 in Kraft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Der US CLOUD Act (Clarifying Lawful Overseas Use of Data Act) erlaubt US-Behörden den Zugriff auf alle Daten, die bei amerikanischen Unternehmen gespeichert sind – <span className="text-gray-900 font-medium">unabhängig davon, wo der Server steht</span>.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Das betrifft direkt: OpenAI (ChatGPT), Microsoft (Copilot, Azure), Google (Gemini, Cloud) und Amazon (AWS). Selbst wenn der Server in Zürich steht – US-Behörden können Ihre Daten anfordern, ohne dass Sie davon erfahren.
                </p>
                <div className="rounded-xl bg-red-50/60 border border-red-100/80 p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-xs text-red-600/80 leading-relaxed">
                      <span className="font-semibold">Für Schweizer Unternehmen:</span> Jede Nutzung von ChatGPT, Copilot oder Google Gemini mit sensiblen Firmendaten unterliegt potenziell dem US CLOUD Act – auch bei EU/CH-Serverstandort.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Microsoft Recall / Copilot Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="group relative rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-red-100/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-red-200/80 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                    <Camera className="h-5 w-5 text-red-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">Microsoft Recall</h3>
                    <span className="text-[10px] font-mono text-red-400 bg-red-50 rounded-full px-2 py-0.5">Copilot+ PCs</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Microsofts «Recall»-Funktion macht auf Copilot+ PCs <span className="text-gray-900 font-medium">alle paar Sekunden einen Screenshot</span> von allem, was auf dem Bildschirm passiert – und macht diese per KI durchsuchbar.
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Passwörter, vertrauliche E-Mails, Kundendaten, Verträge, Bankdaten – alles wird erfasst und indexiert. Der integrierte Sensitivitätsfilter versagt laut Tests in vielen Fällen. Sicherheitsforscher haben wiederholt gezeigt, dass sich die erfassten Daten trotz Verschlüsselung extrahieren lassen.
                </p>
                <div className="rounded-xl bg-red-50/60 border border-red-100/80 p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" strokeWidth={2} />
                    <p className="text-xs text-red-600/80 leading-relaxed">
                      <span className="font-semibold">Das Risiko:</span> Jeder Bildschirminhalt wird protokolliert. Sicherheitsforscher konnten die Schutzmechanismen mehrfach umgehen – sensible Firmendaten sind bei Cyberangriffen oder Geräteverlust kompromittierbar.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto mt-6 sm:mt-10 text-center"
          >
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
              Die Lösung? <span className="text-gray-900 font-semibold">KI-Modelle, die komplett lokal laufen.</span> Keine US-Cloud, keine Screenshots, keine fremden Zugriffe. Ihre Daten bleiben dort, wo sie hingehören – bei Ihnen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="relative py-10 sm:py-12 md:py-14 bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-emerald-500/[0.015] to-[#fafafa]" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Vergleich</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Lokal vs. Cloud
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Warum lokale KI-Infrastruktur für datengetriebene Unternehmen die bessere Wahl ist.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl mx-auto rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_16px_64px_rgba(0,0,0,0.06)]"
          >
            <div className="grid grid-cols-3 gap-0">
              <div className="p-3 sm:p-5 bg-gray-50/80 border-b border-gray-100" />
              <div className="p-3 sm:p-5 bg-emerald-50/60 border-b border-emerald-100/50 text-center">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <Shield className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-emerald-600" strokeWidth={1.5} />
                  <span className="text-[11px] sm:text-sm font-semibold text-emerald-700 uppercase tracking-wider">Lokal</span>
                </div>
              </div>
              <div className="p-3 sm:p-5 bg-gray-50/50 border-b border-gray-100 text-center">
                <span className="text-[11px] sm:text-sm font-semibold text-gray-400 uppercase tracking-wider">Cloud</span>
              </div>
            </div>
            {comparisonData.map((row, index) => (
              <div key={row.aspect} className={`grid grid-cols-3 gap-0 ${index < comparisonData.length - 1 ? "border-b border-gray-100/80" : ""} hover:bg-gray-50/30 transition-colors duration-200`}>
                <div className="p-3 sm:p-5 flex items-center">
                  <span className="text-[11px] sm:text-sm font-medium text-gray-700">{row.aspect}</span>
                </div>
                <div className="p-3 sm:p-5 bg-emerald-50/30 flex items-center justify-center gap-1 sm:gap-2">
                  <Check className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-500 shrink-0 hidden sm:block" strokeWidth={2.5} />
                  <span className="text-[11px] sm:text-sm text-emerald-700 font-medium text-center">{row.local}</span>
                </div>
                <div className="p-3 sm:p-5 flex items-center justify-center gap-1 sm:gap-2">
                  <X className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-300 shrink-0 hidden sm:block" strokeWidth={2.5} />
                  <span className="text-[11px] sm:text-sm text-gray-400 text-center">{row.cloud}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="relative py-10 sm:py-12 md:py-14 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Full-Service</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Wir liefern. Wir installieren. Wir betreuen.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Sie müssen nichts selbst konfigurieren. Unser Team kommt zu Ihnen und richtet die gesamte KI-Infrastruktur ein – von der Hardware bis zum Chat-Interface.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {deliverables.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] hover:border-blue-200/60 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-100/80 group-hover:border-blue-200 transition-colors duration-300">
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

      {/* RAG Section */}
      <section className="relative py-10 sm:py-14 md:py-16 bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-blue-500/[0.02] to-[#fafafa]" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Firmenwissen nutzen</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Ihre KI kennt Ihr Unternehmen.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-gray-500 leading-relaxed">
              <p>
                Ein Sprachmodell allein ist mächtig – aber erst wenn es auf Ihre Unternehmensdaten zugreifen kann, wird es wirklich nützlich. Wir verbinden das Modell mit einer intelligenten Wissensdatenbank, in der Ihre internen Dokumente, Handbücher, Verträge und Richtlinien hinterlegt sind.
              </p>
              <p>
                Das Ergebnis: Ihre Mitarbeitenden stellen Fragen in natürlicher Sprache – und die KI antwortet basierend auf Ihrem spezifischen Firmenwissen. Mit Quellenangaben und Nachvollziehbarkeit. Neue Dokumente werden automatisch in die Wissensbasis aufgenommen, sodass die KI immer auf dem aktuellen Stand ist.
              </p>
              <p>
                Alles lokal. Kein Dokument verlässt Ihre Infrastruktur. Kein externer Dienst sieht Ihre Daten.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chat Interface Section */}
      <section className="relative py-10 sm:py-12 md:py-14 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Chat-Interface</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Ihr eigenes ChatGPT. Nur für Ihr Unternehmen.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Wir installieren ein professionelles Chat-Interface, über das Ihr Team direkt mit den lokalen Modellen interagieren kann – intuitiv, sicher und in Ihrem Branding.
            </p>
          </motion.div>

          {/* Chat Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl mx-auto mb-8 sm:mb-12"
          >
            <div className="rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_16px_64px_rgba(0,0,0,0.06)]">
              {/* Window Bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-gray-50/80 border-b border-gray-100">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-gray-400 font-medium">Kanzlei Muster & Partner – KI-Assistent</span>
                </div>
                <div className="w-12" />
              </div>
              {/* Chat Content */}
              <div className="p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
                <div className="flex gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <div className="rounded-2xl rounded-tl-md bg-gray-50 border border-gray-100 px-3 py-2.5 sm:px-4 sm:py-3 max-w-[85%] sm:max-w-md">
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Guten Tag! Ich bin Ihr interner KI-Assistent. Ich habe Zugriff auf alle Kanzlei-Dokumente, Verträge und Richtlinien. Wie kann ich helfen?</p>
                  </div>
                </div>
                <div className="flex gap-2 sm:gap-3 justify-end">
                  <div className="rounded-2xl rounded-tr-md bg-gray-900 px-3 py-2.5 sm:px-4 sm:py-3 max-w-[80%] sm:max-w-sm">
                    <p className="text-xs sm:text-sm text-white leading-relaxed">Welche Kündigungsfrist gilt im Mietvertrag Huber vs. Immobilien AG?</p>
                  </div>
                </div>
                <div className="flex gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-gray-400" strokeWidth={1.5} />
                  </div>
                  <div className="rounded-2xl rounded-tl-md bg-gray-50 border border-gray-100 px-3 py-2.5 sm:px-4 sm:py-3 max-w-[85%] sm:max-w-md">
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">Basierend auf <span className="text-blue-600 font-medium">Mietvertrag_Huber_ImmobilienAG.pdf</span>:</p>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-1.5 sm:mt-2">Gemäss Art. 266c OR gilt für Wohnräume eine Kündigungsfrist von 3 Monaten auf einen ortsüblichen Termin. Im vorliegenden Vertrag (Ziff. 4.1) wurde der 31. März und 30. September als Kündigungstermine vereinbart...</p>
                    <div className="flex items-center gap-1.5 mt-2 sm:mt-3 pt-2 border-t border-gray-100">
                      <Database className="h-3 w-3 text-gray-300" strokeWidth={1.5} />
                      <span className="text-[10px] text-gray-300">1 Quelle aus Ihrer Wissensbasis</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Input Bar */}
              <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6">
                <div className="flex items-center gap-2 sm:gap-3 rounded-xl bg-gray-50 border border-gray-200/60 px-3 py-2.5 sm:px-4 sm:py-3">
                  <span className="text-xs sm:text-sm text-gray-300 flex-1">Nachricht eingeben...</span>
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gray-900 flex items-center justify-center shrink-0">
                    <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" strokeWidth={2} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {chatInterfaceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-xl p-5 bg-white/60 border border-white/80 shadow-sm"
              >
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{feature.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="relative py-10 sm:py-12 md:py-14 bg-[#fafafa]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-violet-500/[0.015] to-[#fafafa]" />
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Open-Weight Modelle</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Weltweit führende Modelle. Von uns installiert.
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto mt-4 leading-relaxed">
              Wir bewerten alle verfügbaren Open-Weight Modelle mit unserem internen Evaluations-Tool auf Qualität, Geschwindigkeit und Eignung für Ihren Use Case – und installieren nur das, was nachweislich die besten Ergebnisse liefert.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {models.map((model, index) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group rounded-xl p-5 bg-white/60 border border-white/80 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-900">{model.name}</h3>
                  <span className="text-[10px] font-mono text-gray-300 bg-gray-50 rounded-full px-2 py-0.5">{model.provider}</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2">
                  <Cpu className="h-3 w-3 text-violet-400" strokeWidth={1.5} />
                  <span className="text-xs text-violet-500 font-medium">{model.sizes}</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">{model.strength}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-10 sm:py-12 md:py-14 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Anwendungsfälle</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Was Sie damit machen können
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mt-4">
              Lokale KI mit RAG eröffnet Möglichkeiten, die mit Cloud-APIs undenkbar wären.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, index) => (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="rounded-xl p-5 bg-white/60 border border-white/80 shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-3">
                  <uc.icon className="h-4 w-4 text-blue-600" strokeWidth={1.5} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{uc.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{uc.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative py-10 sm:py-12 md:py-14 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Prozess</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
              Von der Idee zur laufenden KI
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
                <span className="text-xs text-emerald-500 font-mono font-bold tracking-widest">SCHRITT {item.step}</span>
                <h3 className="text-base font-semibold text-gray-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="relative py-10 sm:py-12 md:py-14 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">Vertrauen</span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Warum Unternehmen uns vertrauen
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Building2,
                iconBg: "bg-red-50",
                iconBorder: "border-red-100",
                iconColor: "text-red-500",
                hoverBorder: "hover:border-red-200/60",
                gradientFrom: "from-red-500/[0.03]",
                title: "Swiss Made",
                description: "Installation & Support aus Steinhausen, Kanton Zug. Persönliche Betreuung, keine anonymen Tickets.",
              },
              {
                icon: Shield,
                iconBg: "bg-emerald-50",
                iconBorder: "border-emerald-100",
                iconColor: "text-emerald-500",
                hoverBorder: "hover:border-emerald-200/60",
                gradientFrom: "from-emerald-500/[0.03]",
                title: "DSG konform",
                description: "Volle Compliance mit dem Schweizer Datenschutzgesetz. Keine Datenübertragung ins Ausland.",
              },
              {
                icon: Eye,
                iconBg: "bg-blue-50",
                iconBorder: "border-blue-100",
                iconColor: "text-blue-500",
                hoverBorder: "hover:border-blue-200/60",
                gradientFrom: "from-blue-500/[0.03]",
                title: "Open Source",
                description: "Transparente Modelle, offene Gewichte. Kein Vendor Lock-in, volle Kontrolle über jeden Parameter.",
              },
            ].map((badge, index) => (
              <motion.div
                key={badge.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group relative rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] ${badge.hoverBorder} transition-all duration-300 text-center`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${badge.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl ${badge.iconBg} border ${badge.iconBorder} flex items-center justify-center mx-auto mb-4`}>
                    <badge.icon className={`h-6 w-6 ${badge.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <p className="text-base font-semibold text-gray-900 mb-2">{badge.title}</p>
                  <p className="text-sm text-gray-400 leading-relaxed">{badge.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-10 sm:py-12 md:py-14 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center rounded-2xl p-8 sm:p-12 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/60"
          >
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Bereit für souveräne KI?
            </h2>
            <p className="text-sm sm:text-base text-gray-500 mb-8 leading-relaxed">
              Lassen Sie uns gemeinsam evaluieren, welche lokale KI-Lösung zu Ihrem Unternehmen passt – wir kommen vorbei, unverbindlich und kostenlos.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full py-3 px-8 transition-colors cursor-pointer"
            >
              Kostenlose Erstberatung anfragen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
