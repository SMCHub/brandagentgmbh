import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { KontaktContent } from "./content";
import { Footer } from "@/components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie Brand Agent GmbH in Steinhausen, Kanton Zug. Unverbindliche Beratung zu KI-Automatisierung, Webentwicklung und digitaler Präsenz.",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt – Brand Agent GmbH",
    description:
      "Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch zu KI-Automatisierung und digitaler Präsenz.",
    url: "https://brandagent.ch/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Kontakt"
        title="Kontakt aufnehmen"
        description="Wir beraten Sie gerne zu Automatisierungen, E-Commerce und individuellen Lösungen. Senden Sie uns Ihre Anfrage – wir melden uns zeitnah zurück."
      />
      <KontaktContent />
      <Footer />
    </main>
  );
}
