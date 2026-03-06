import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { ProzessautomatisierungContent } from "./content";

export const metadata: Metadata = {
  title: "Prozessautomatisierung mit KI & n8n",
  description:
    "Geschäftsprozesse automatisieren mit n8n, Zapier und KI – massgeschneidert für Ihr Unternehmen. Brand Agent GmbH, Steinhausen. Jetzt beraten lassen!",
  alternates: { canonical: "/leistungen/automatisierung/prozessautomatisierung" },
  openGraph: {
    title: "Prozessautomatisierung mit KI & n8n – Brand Agent GmbH",
    description:
      "Massgeschneiderte Automatisierungen für Ihre Geschäftsprozesse – intelligent, zuverlässig und skalierbar.",
    url: "https://brandagent.ch/leistungen/automatisierung/prozessautomatisierung",
  },
};

export default function ProzessautomatisierungPage() {
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
                { "@type": "ListItem", position: 3, name: "Prozessautomatisierung", item: "https://brandagent.ch/leistungen/automatisierung/prozessautomatisierung" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Prozessautomatisierung",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "Massgeschneiderte Automatisierungen für Ihre spezifischen Geschäftsprozesse – mit n8n, Zapier und KI-Tools.",
            },
          ]),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="Workflows"
          title="Prozessautomatisierung"
          description="Massgeschneiderte Automatisierungen für Ihre spezifischen Geschäftsprozesse – intelligent, zuverlässig und skalierbar."
        />
        <ProzessautomatisierungContent />
        <Footer />
      </main>
    </>
  );
}
