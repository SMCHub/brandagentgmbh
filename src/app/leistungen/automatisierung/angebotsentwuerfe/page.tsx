import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { AngebotsentwuerfeContent } from "./content";

export const metadata: Metadata = {
  title: "Angebotsentwürfe",
  description:
    "KI-gestützte Angebotserstellung auf Basis Ihrer Vorlagen, Preislisten und Kundendaten. Brand Agent GmbH, Steinhausen.",
  alternates: { canonical: "/leistungen/automatisierung/angebotsentwuerfe" },
};

export default function AngebotsentwuerfePage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Sales"
        title="Angebotsentwürfe"
        description="KI-gestützte Angebotserstellung auf Basis Ihrer Vorlagen, Preislisten und Kundendaten – professionell, konsistent und in Minuten fertig."
      />
      <AngebotsentwuerfeContent />
      <Footer />
    </main>
  );
}
