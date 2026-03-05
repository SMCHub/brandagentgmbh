import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brand Agent GmbH – Vorsprung durch Intelligenz",
  description:
    "Wir verbinden Ihre Strategie mit modernster KI-Technologie, um digitale Prozesse effizient und skalierbar zu automatisieren. Digitale Präsenz und Prozessautomatisierung aus Steinhausen, Schweiz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafafa]`}
      >
        {children}
      </body>
    </html>
  );
}
