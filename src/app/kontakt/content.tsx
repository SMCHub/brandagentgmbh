"use client";

import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Clock,
  ArrowRight,
  Linkedin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const teamMembers = [
  {
    name: "Silvio Glarner",
    role: "Founder, Dipl. Betriebswirtschafter",
    message: "Ich freue mich auf Ihre Nachricht und stehe Ihnen gerne persönlich zur Verfügung!",
    image: "/images/foto1.jpeg",
  },
  {
    name: "Salvatore Reccardo",
    role: "Founder, Dipl. Unternehmensprozessetechniker",
    message: "Ich unterstütze Sie gerne bei allen Anliegen rund um unsere Leistungen!",
    image: "/images/foto2.jpeg",
  },
];

const contactFaqs = [
  {
    question: "Wie schnell erhalten wir eine Antwort?",
    answer: "Wir bemühen uns, alle Anfragen innerhalb von 24 Stunden (an Werktagen) zu beantworten.",
  },
  {
    question: "Kann ich einen Beratungstermin vereinbaren?",
    answer: "Ja, kostenlose Erstberatungen sind jederzeit möglich – einfach über das Kontaktformular oder per E-Mail anfragen.",
  },
  {
    question: "Arbeiten Sie auch international?",
    answer: "Ja, wir sind in der Schweiz und international tätig. Sprechen Sie uns gerne an.",
  },
];

const subjects = [
  "Beratung",
  "Automatisierung",
  "E-Commerce/Shop",
  "Partnerschaft",
  "bexio",
  "Allgemeine Anfrage",
];

export function KontaktContent() {

  return (
    <>
      {/* Team */}
      <section className="relative py-16 bg-[#fafafa]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl p-5 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)] text-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-white/80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-base font-semibold text-gray-900">{member.name}</h3>
                <p className="text-xs text-gray-400 mt-1 mb-4">{member.role}</p>
                <p className="text-sm text-gray-400 italic leading-relaxed">
                  &ldquo;{member.message}&rdquo;
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[#fafafa] overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl p-5 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">Nachricht senden</h3>
              <div className="space-y-5">
                <div>
                  <label className="text-xs text-gray-400 tracking-wide uppercase block mb-2">
                    Vor- und Nachname *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/50 backdrop-blur-sm border border-white/80 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-gray-300 focus:bg-white/70 transition-all"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 tracking-wide uppercase block mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/50 backdrop-blur-sm border border-white/80 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-gray-300 focus:bg-white/70 transition-all"
                    placeholder="ihre@email.ch"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-400 tracking-wide uppercase block mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      className="w-full bg-white/50 backdrop-blur-sm border border-white/80 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-gray-300 focus:bg-white/70 transition-all"
                      placeholder="+41 ..."
                    />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 tracking-wide uppercase block mb-2">
                      Unternehmen
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white/50 backdrop-blur-sm border border-white/80 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-gray-300 focus:bg-white/70 transition-all"
                      placeholder="Firma"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 tracking-wide uppercase block mb-2">
                    Betreff *
                  </label>
                  <select
                    required
                    className="w-full bg-white/50 backdrop-blur-sm border border-white/80 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-gray-300 focus:bg-white/70 transition-all"
                    defaultValue=""
                  >
                    <option value="" disabled>Bitte wählen...</option>
                    {subjects.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-400 tracking-wide uppercase block mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-white/50 backdrop-blur-sm border border-white/80 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-gray-300 focus:bg-white/70 transition-all resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors group"
                >
                  Nachricht senden
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="rounded-2xl p-5 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">So erreichen Sie uns</h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-gray-900 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">E-Mail</p>
                      <a
                        href="mailto:info@brandagent.ch"
                        className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        info@brandagent.ch
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-gray-900 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Telefon</p>
                      <a
                        href="tel:+41764173602"
                        className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        +41 76 417 36 02
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-gray-900 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Adresse</p>
                      <p className="text-sm text-gray-400">
                        Brand Agent GmbH<br />
                        Hammerstrasse 5<br />
                        6312 Steinhausen, Schweiz
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-gray-900 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Antwortzeit</p>
                      <p className="text-sm text-gray-400">In der Regel innerhalb von 24 Stunden</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Linkedin className="h-5 w-5 text-gray-900 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">LinkedIn</p>
                      <p className="text-sm text-gray-400">Brand Agent GmbH</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-300 mt-6">UID: CHE-204.407.181</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[#fafafa] overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex gap-6 flex-col"
            >
              <div className="flex gap-4 flex-col">
                <span className="text-sm text-gray-400 tracking-widest uppercase">
                  FAQ
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  Häufig gestellte Fragen
                </h2>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-lg">
                  Hier finden Sie Antworten auf die häufigsten Fragen. Falls Sie
                  weitere Informationen benötigen, stehen wir Ihnen gerne
                  persönlich zur Verfügung.
                </p>
              </div>
              <div>
                <a
                  href="mailto:info@brandagent.ch"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors"
                >
                  Fragen? Kontaktieren Sie uns
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {contactFaqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="border-gray-200/80"
                  >
                    <AccordionTrigger className="text-sm font-medium text-gray-800 hover:no-underline hover:text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-400 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
