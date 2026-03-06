import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { VideoerstellungContent } from "./content";

export const metadata: Metadata = {
  title: "Automatisierte Videoerstellung mit KI",
  description:
    "Videos automatisch produzieren für Marketing, Social Media und interne Kommunikation – skalierbar und kosteneffizient. Brand Agent GmbH. Jetzt anfragen!",
  alternates: { canonical: "/leistungen/automatisierung/videoerstellung" },
  openGraph: {
    title: "Automatisierte Videoerstellung mit KI – Brand Agent GmbH",
    description:
      "KI-gestützte Videoproduktion für Marketing, Social Media und interne Kommunikation – skalierbar, schnell und kosteneffizient.",
    url: "https://brandagent.ch/leistungen/automatisierung/videoerstellung",
  },
};

export default function VideoerstellungPage() {
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
                { "@type": "ListItem", position: 3, name: "Videoerstellung", item: "https://brandagent.ch/leistungen/automatisierung/videoerstellung" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Automatisierte Videoerstellung",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "Automatisierte Videoproduktion für Marketing, Social Media und interne Kommunikation – skalierbar und kosteneffizient.",
            },
          ]),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="Media"
          title="Videoerstellung"
          description="Automatisierte Videoproduktion für Marketing, Social Media und interne Kommunikation – skalierbar, schnell und kosteneffizient."
        />
        <VideoerstellungContent />
        <Footer />
      </main>
    </>
  );
}
