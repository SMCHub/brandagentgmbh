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
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-6">
          <div className="flex items-center justify-between pt-5">
            {/* Hamburger Menu */}
            <button
              onClick={() => setMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/5 ring-1 ring-black/10 backdrop-blur-md hover:bg-black/10 transition-colors cursor-pointer"
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
                className="h-5 w-5 text-gray-800"
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
                className="h-5 sm:h-7 w-auto"
              />
            </Link>

            {/* Glass CTA Button */}
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-black/5 backdrop-blur-md ring-1 ring-black/10 px-5 py-2.5 text-sm font-medium text-gray-800 hover:bg-black/10 transition-colors cursor-pointer"
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
