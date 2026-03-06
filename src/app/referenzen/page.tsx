import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { ReferenzenContent } from "./content";

export const metadata: Metadata = {
  title: "Referenzen & Projekte",
  description:
    "Entdecken Sie unsere Projekte: Hosting-Plattformen, Podcast-Marktplätze und KI-Tools. Sehen Sie, was Brand Agent GmbH für Kunden realisiert hat.",
  alternates: { canonical: "/referenzen" },
  openGraph: {
    title: "Referenzen & Projekte – Brand Agent GmbH",
    description:
      "Von der Idee bis zum laufenden Produkt – entdecken Sie die Projekte der Brand Agent GmbH aus Steinhausen, Schweiz.",
    url: "https://brandagent.ch/referenzen",
  },
};

export default function ReferenzenPage() {
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
              { "@type": "ListItem", position: 2, name: "Referenzen", item: "https://brandagent.ch/referenzen" },
            ],
          }),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="Portfolio"
          title="Unsere Referenzen"
          description="Projekte, die wir konzipiert, entwickelt und betreiben – von der Idee bis zum laufenden Produkt."
        />
        <ReferenzenContent />
        <Footer />
      </main>
    </>
  );
}
