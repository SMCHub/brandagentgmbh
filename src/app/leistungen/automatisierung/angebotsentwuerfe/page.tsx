import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { AngebotsentwuerfeContent } from "./content";

export const metadata: Metadata = {
  title: "KI-gestützte Angebotsentwürfe",
  description:
    "Angebote automatisch erstellen mit KI – auf Basis Ihrer Vorlagen, Preislisten und Kundendaten. Brand Agent GmbH, Steinhausen. Jetzt testen!",
  alternates: { canonical: "/leistungen/automatisierung/angebotsentwuerfe" },
  openGraph: {
    title: "KI-gestützte Angebotsentwürfe – Brand Agent GmbH",
    description:
      "KI-gestützte Angebotserstellung auf Basis Ihrer Vorlagen, Preislisten und Kundendaten – professionell und in Minuten fertig.",
    url: "https://brandagent.ch/leistungen/automatisierung/angebotsentwuerfe",
  },
};

export default function AngebotsentwuerfePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://brandagent.ch" },
                { "@type": "ListItem", position: 2, name: "Automatisierung", item: "https://brandagent.ch/leistungen/automatisierung" },
                { "@type": "ListItem", position: 3, name: "Angebotsentwürfe", item: "https://brandagent.ch/leistungen/automatisierung/angebotsentwuerfe" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Automatisierte Angebotserstellung",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "KI-gestützte Angebotserstellung auf Basis Ihrer Vorlagen, Preislisten und Kundendaten.",
            },
          ]),
        }}
      />
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
    </>
  );
}
