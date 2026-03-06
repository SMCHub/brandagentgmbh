import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { KontaktContent } from "./content";
import { Footer } from "@/components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt & Beratung",
  description:
    "Jetzt unverbindlich beraten lassen. Brand Agent GmbH in Steinhausen, Zug – Ihr Partner für KI-Automatisierung und digitale Präsenz. Kontaktieren Sie uns!",
  alternates: {
    canonical: "/kontakt",
  },
  openGraph: {
    title: "Kontakt & Beratung – Brand Agent GmbH",
    description:
      "Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch zu KI-Automatisierung und digitaler Präsenz in der Schweiz.",
    url: "https://brandagent.ch/kontakt",
  },
};

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://brandagent.ch" },
              { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://brandagent.ch/kontakt" },
            ],
          }),
        }}
      />
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
    </>
  );
}
