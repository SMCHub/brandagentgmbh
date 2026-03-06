import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { AutomatisierungContent } from "./content";

export const metadata: Metadata = {
  title: "KI-Automatisierung für Unternehmen",
  description:
    "Automatisieren Sie Geschäftsprozesse mit KI: Offerten, Angebote und Videos auf Knopfdruck. Brand Agent GmbH, Steinhausen. Jetzt beraten lassen!",
  alternates: { canonical: "/leistungen/automatisierung" },
  openGraph: {
    title: "KI-Automatisierung für Unternehmen – Brand Agent GmbH",
    description:
      "Individuelle Automatisierungslösungen für Ihre Geschäftsprozesse – mit n8n, Zapier und KI-Tools. Brand Agent GmbH, Steinhausen.",
    url: "https://brandagent.ch/leistungen/automatisierung",
  },
};

export default function AutomatisierungPage() {
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
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Digitale Prozessautomatisierung",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "Individuelle Automatisierungslösungen für Ihre Geschäftsprozesse – von Vergleichsofferten über Angebotsentwürfe bis hin zur Videoerstellung.",
            },
          ]),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="Agents"
          title="Prozessautomatisierung"
          description="Individuelle Automatisierungslösungen für Ihre Geschäftsprozesse – von Vergleichsofferten über Angebotsentwürfe bis hin zur Videoerstellung."
        />
        <AutomatisierungContent />
        <Footer />
      </main>
    </>
  );
}
