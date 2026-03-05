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
          {/* Top row: Logo + company info */}
          <div className="flex flex-col items-center gap-5">
            <Link href="/">
              <img
                src="/images/logos/brand-agent-black.png"
                alt="Brand Agent"
                className="h-5 w-auto"
              />
            </Link>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-gray-400" strokeWidth={1.5} />
                <span className="text-xs text-gray-400">
                  Hammerstrasse 5, 6312 Steinhausen
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-gray-400" strokeWidth={1.5} />
                <a
                  href="mailto:info@brandagent.ch"
                  className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
                >
                  info@brandagent.ch
                </a>
              </div>
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
