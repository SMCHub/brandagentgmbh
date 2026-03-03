"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/brands", label: "Brands" },
  { href: "/agents", label: "Agents" },
  { href: "/partnerprogramm", label: "Partnerprogramm" },
  { href: "/kontakt", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="text-black font-bold text-lg tracking-tight">
            Brand Agent<span className="text-gray-500 font-light"> GmbH</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors tracking-wide",
                  pathname === link.href
                    ? "text-black font-medium"
                    : "text-gray-600 hover:text-black"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="px-5 py-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Projekt starten
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-400 hover:text-gray-900 transition-colors p-2 -mr-2"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-black/[0.04]"
        >
          <div className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "text-sm transition-colors py-2.5 px-2 rounded-lg",
                  pathname === link.href
                    ? "text-black font-medium bg-gray-50"
                    : "text-gray-600 hover:text-black hover:bg-gray-50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="px-5 py-2.5 mt-2 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors text-center"
            >
              Projekt starten
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
