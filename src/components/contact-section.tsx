"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Building2 } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="kontakt"
      className="relative py-12 sm:py-16 md:py-20 bg-[#fafafa] overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafafa] via-indigo-500/[0.02] to-[#fafafa]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-sm text-gray-400 tracking-widest uppercase mb-4 block">
              Kontakt
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-gray-900 to-gray-600">
                Bereit für den nächsten Schritt?
              </span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto leading-relaxed">
              Kontaktieren Sie uns noch heute für ein unverbindliches
              Beratungsgespräch und erfahren Sie, wie wir gemeinsam Ihre
              Geschäftsidee in die Realität umsetzen können.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm border border-white shadow-sm flex items-center justify-center shrink-0">
                    <Building2 className="h-5 w-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Unternehmen</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Brand Agent GmbH
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm border border-white shadow-sm flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Adresse</p>
                    <p className="text-sm text-gray-400 mt-1">
                      Hammerstrasse 5
                      <br />
                      6312 Steinhausen, Schweiz
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-sm border border-white shadow-sm flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">E-Mail</p>
                    <a
                      href="mailto:info@brandagent.ch"
                      className="text-sm text-gray-400 hover:text-gray-600 transition-colors mt-1 block cursor-pointer"
                    >
                      info@brandagent.ch
                    </a>
                  </div>
                </div>

                <p className="text-xs text-gray-300 mt-4">
                  UID: CHE-204.407.181
                </p>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl p-6 sm:p-8 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="space-y-5">
                <div>
                  <label className="text-xs text-gray-400 tracking-wide uppercase block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/50 backdrop-blur-sm border border-white/80 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-gray-300 focus:bg-white/70 transition-all"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 tracking-wide uppercase block mb-2">
                    E-Mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/50 backdrop-blur-sm border border-white/80 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-gray-300 focus:bg-white/70 transition-all"
                    placeholder="ihre@email.ch"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-400 tracking-wide uppercase block mb-2">
                    Nachricht
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/50 backdrop-blur-sm border border-white/80 rounded-lg px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-gray-300 focus:bg-white/70 transition-all resize-none"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white font-medium text-sm hover:bg-gray-800 transition-colors group cursor-pointer"
                >
                  Nachricht senden
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
