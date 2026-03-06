"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const menuItems = [
  {
    title: "Digitale Präsenz",
    subtitle: "Branding",
    items: [
      { label: "LLM Texte", href: "/leistungen/digitale-praesenz" },
      { label: "Leadgenerierung", href: "/leistungen/digitale-praesenz" },
      { label: "Ads Management", href: "/leistungen/digitale-praesenz" },
      { label: "Webseiten Entwicklung", href: "/leistungen/digitale-praesenz" },
      { label: "Webshop Entwicklung", href: "/leistungen/digitale-praesenz" },
    ],
  },
  {
    title: "Digitale Prozessautomatisierung",
    subtitle: "Agents",
    items: [
      { label: "Individuelle Prozessautomatisierung", href: "/leistungen/automatisierung" },
      { label: "Vergleichsofferten Automatisierung", href: "/leistungen/automatisierung" },
      { label: "Angebotsentwurfs Automatisierung", href: "/leistungen/automatisierung" },
      { label: "Videoerstellung Automatisierung", href: "/leistungen/automatisierung" },
    ],
  },
  {
    title: "Über uns",
    items: [
      { label: "Unternehmen", href: "/ueber-uns" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
];

interface SidebarMenuProps {
  open: boolean;
  onClose: () => void;
}

export function SidebarMenu({ open, onClose }: SidebarMenuProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 left-0 bottom-0 w-[380px] max-w-[85vw] bg-white/95 backdrop-blur-2xl z-50 shadow-2xl border-r border-black/[0.06] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-black/[0.06]">
              <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">
                Menu
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <X className="h-4 w-4 text-gray-600" />
              </button>
            </div>

            <nav className="flex-1 p-6 space-y-1 overflow-y-auto">
              {menuItems.map((category, index) => (
                <div key={category.title}>
                  <button
                    onClick={() =>
                      setExpandedIndex(expandedIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between py-3.5 px-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="text-left">
                      <span className="text-[15px] font-semibold text-gray-900 block leading-tight">
                        {category.title}
                      </span>
                      {category.subtitle && (
                        <span className="text-xs text-gray-400 mt-0.5 block">
                          {category.subtitle}
                        </span>
                      )}
                    </div>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-400 transition-transform duration-200 shrink-0 ml-3 ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-3 pb-2 space-y-0.5">
                          {category.items.map((item) => (
                            <Link
                              key={item.label}
                              href={item.href}
                              onClick={onClose}
                              className="block py-2.5 px-3 text-sm text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            <div className="p-6 border-t border-black/[0.06]">
              <p className="text-xs text-gray-300">
                Brand Agent GmbH
                <br />
                Hammerstrasse 5, 6312 Steinhausen
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
