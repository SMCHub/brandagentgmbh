"use client";

import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/brands", label: "Brands" },
  { href: "/agents", label: "Agents" },
  { href: "/partnerprogramm", label: "Partnerprogramm" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Footer() {
  return (
    <footer className="relative py-12 bg-[#fafafa] border-t border-black/[0.04]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          <div>
            <Link href="/" className="text-gray-900 font-bold text-lg tracking-tight">
              Brand Agent<span className="text-gray-400 font-light"> GmbH</span>
            </Link>
            <p className="text-xs text-gray-300 mt-2">
              Hammerstrasse 5, 6312 Steinhausen
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
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
    </footer>
  );
}
