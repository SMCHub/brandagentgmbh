import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { LeadgenerierungContent } from "./content";

export const metadata: Metadata = {
  title: "Leadgenerierung & Conversion-Optimierung",
  description:
    "Qualifizierte Leads gewinnen mit Marketing-Funnels, A/B Testing und Conversion-Optimierung. Brand Agent GmbH, Steinhausen. Jetzt Strategie anfragen!",
  alternates: { canonical: "/leistungen/digitale-praesenz/leadgenerierung" },
  openGraph: {
    title: "Leadgenerierung & Conversion-Optimierung – Brand Agent GmbH",
    description:
      "Datengetriebene Strategien zur Gewinnung qualifizierter Leads – Funnels, A/B Testing und Conversion-Optimierung.",
    url: "https://brandagent.ch/leistungen/digitale-praesenz/leadgenerierung",
  },
};

export default function LeadgenerierungPage() {
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
                { "@type": "ListItem", position: 3, name: "Leadgenerierung", item: "https://brandagent.ch/leistungen/digitale-praesenz/leadgenerierung" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Leadgenerierung",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "Datengetriebene Strategien zur Gewinnung qualifizierter Leads – Marketing-Funnels, A/B Testing und Conversion-Optimierung.",
            },
          ]),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="Marketing"
          title="Leadgenerierung"
          description="Datengetriebene Strategien zur Gewinnung qualifizierter Leads – von Marketing-Funnels über A/B Testing bis zur vollautomatisierten Conversion-Optimierung."
        />
        <LeadgenerierungContent />
        <Footer />
      </main>
    </>
  );
}
