import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { DigiltalePraesenzContent } from "./content";

export const metadata: Metadata = {
  title: "Digitale Präsenz stärken",
  description:
    "LLM-optimierte Texte, Leadgenerierung, Ads und Webentwicklung aus einer Hand. Stärken Sie Ihre digitale Präsenz mit Brand Agent GmbH. Jetzt anfragen!",
  alternates: { canonical: "/leistungen/digitale-praesenz" },
  openGraph: {
    title: "Digitale Präsenz stärken – Brand Agent GmbH",
    description:
      "Webseiten, Webshops, Ads Management und LLM-optimierte Texte – digitale Präsenz aus einer Hand. Brand Agent GmbH, Steinhausen.",
    url: "https://brandagent.ch/leistungen/digitale-praesenz",
  },
};

export default function DigitalePraesenzPage() {
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
                { "@type": "ListItem", position: 2, name: "Digitale Präsenz", item: "https://brandagent.ch/leistungen/digitale-praesenz" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Digitale Präsenz",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "LLM-optimierte Texte, Leadgenerierung, Ads Management und professionelle Webseiten- & Webshop-Entwicklung.",
            },
          ]),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="Branding"
          title="Digitale Präsenz"
          description="LLM-optimierte Texte, Leadgenerierung, Ads Management sowie professionelle Webseiten- und Webshop-Entwicklung für Ihre Marke."
        />
        <DigiltalePraesenzContent />
        <Footer />
      </main>
    </>
  );
}
