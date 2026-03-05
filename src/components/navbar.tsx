"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { SidebarMenu } from "@/components/sidebar-menu";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <SidebarMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-2xl border-b border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
      >
        <div className="mx-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Menu öffnen"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-gray-700"
              >
                <path d="M4 6h16" />
                <path d="M4 12h16" />
                <path d="M4 18h16" />
              </svg>
            </button>

            {/* Brand Agent Logo (centered) */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <img
                src="/images/logos/brand-agent-black.png"
                alt="Brand Agent"
                className="h-5 sm:h-6 w-auto"
              />
            </Link>

            {/* Glass CTA Button */}
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900/90 backdrop-blur-md ring-1 ring-gray-900/20 px-5 py-2 text-sm font-medium text-white hover:bg-gray-900 transition-colors"
            >
              Projekt starten
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
