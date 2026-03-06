import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { VergleichsoffertenContent } from "./content";

export const metadata: Metadata = {
  title: "Vergleichsofferten automatisieren",
  description:
    "Vergleichsofferten automatisch erstellen, versenden und auswerten – für effizientere Beschaffung. Brand Agent GmbH, Steinhausen. Jetzt Demo anfragen!",
  alternates: { canonical: "/leistungen/automatisierung/vergleichsofferten" },
  openGraph: {
    title: "Vergleichsofferten automatisieren – Brand Agent GmbH",
    description:
      "Automatisierte Erstellung, Versand und Auswertung von Vergleichsofferten für effizientere Beschaffungsprozesse.",
    url: "https://brandagent.ch/leistungen/automatisierung/vergleichsofferten",
  },
};

export default function VergleichsoffertenPage() {
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
                { "@type": "ListItem", position: 3, name: "Vergleichsofferten", item: "https://brandagent.ch/leistungen/automatisierung/vergleichsofferten" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Vergleichsofferten Automatisierung",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "Automatisierte Erstellung, Versand und Auswertung von Vergleichsofferten für effizientere Beschaffungsprozesse.",
            },
          ]),
        }}
      />
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
    </>
  );
}
