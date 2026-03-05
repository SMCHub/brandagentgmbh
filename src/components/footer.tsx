"use client";

import Link from "next/link";
import { Building2, MapPin, Mail } from "lucide-react";

const footerLinks = [
  { href: "#", label: "Digitale Präsenz" },
  { href: "#", label: "Prozessautomatisierung" },
  { href: "#", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="relative py-12 bg-[#fafafa] border-t border-black/[0.04]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-8">
          {/* Top row: Company info with three icons */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <Building2 className="h-4 w-4 text-gray-600" strokeWidth={1.5} />
              </div>
              <img
                src="/images/logos/brand-agent-black.png"
                alt="Brand Agent"
                className="h-3.5 w-auto"
              />
              <span className="text-sm text-gray-400 font-light">GmbH</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-gray-600" strokeWidth={1.5} />
              </div>
              <span className="text-sm text-gray-500">
                Hammerstrasse 5, 6312 Steinhausen
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                <Mail className="h-4 w-4 text-gray-600" strokeWidth={1.5} />
              </div>
              <a
                href="mailto:info@brandagent.ch"
                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                info@brandagent.ch
              </a>
            </div>
          </div>

          {/* Bottom row: Nav links + copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-black/[0.04]">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="text-xs text-gray-300">
              &copy; {new Date().getFullYear()} Brand Agent GmbH. Alle Rechte
              vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
