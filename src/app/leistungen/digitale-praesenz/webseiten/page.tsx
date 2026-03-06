import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { WebseitenContent } from "./content";

export const metadata: Metadata = {
  title: "Webseiten Entwicklung mit Next.js",
  description:
    "Moderne, blitzschnelle Webseiten mit Next.js und React – SEO-optimiert, responsive und perfekte Core Web Vitals. Brand Agent GmbH. Jetzt Projekt starten!",
  alternates: { canonical: "/leistungen/digitale-praesenz/webseiten" },
  openGraph: {
    title: "Webseiten Entwicklung mit Next.js – Brand Agent GmbH",
    description:
      "Blitzschnelle, responsive Webseiten mit Next.js und React – SEO-optimiert und mit perfekten Core Web Vitals.",
    url: "https://brandagent.ch/leistungen/digitale-praesenz/webseiten",
  },
};

export default function WebseitenPage() {
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
                { "@type": "ListItem", position: 3, name: "Webseiten Entwicklung", item: "https://brandagent.ch/leistungen/digitale-praesenz/webseiten" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Webseiten Entwicklung",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "Moderne, blitzschnelle Webseiten mit Next.js und React – responsive, SEO-optimiert und mit perfekten Core Web Vitals.",
            },
          ]),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="Development"
          title="Webseiten Entwicklung"
          description="Moderne, blitzschnelle Webseiten mit Next.js und React – responsive Design, perfekte Core Web Vitals und SEO-Optimierung für Top-Rankings."
        />
        <WebseitenContent />
        <Footer />
      </main>
    </>
  );
}
