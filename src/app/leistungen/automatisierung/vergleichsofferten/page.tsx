import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { VergleichsoffertenContent } from "./content";

export const metadata: Metadata = {
  title: "Vergleichsofferten",
  description:
    "Automatisierte Erstellung, Versand und Auswertung von Vergleichsofferten für effizientere Beschaffungsprozesse. Brand Agent GmbH, Steinhausen.",
  alternates: { canonical: "/leistungen/automatisierung/vergleichsofferten" },
};

export default function VergleichsoffertenPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Beschaffung"
        title="Vergleichsofferten"
        description="Automatisierte Erstellung, Versand und Auswertung von Vergleichsofferten – für fundierte Entscheidungen ohne manuellen Aufwand."
      />
      <VergleichsoffertenContent />
      <Footer />
    </main>
  );
}
