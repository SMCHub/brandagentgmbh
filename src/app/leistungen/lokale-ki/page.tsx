import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { LokaleKIContent } from "./content";

export const metadata: Metadata = {
  title: "Lokale KI-Infrastruktur – Datensouveränität & Open-Weight Modelle",
  description:
    "Lokale KI-Lösungen mit voller Datensouveränität. Wir installieren Hardware und Open-Weight Modelle direkt bei Ihnen vor Ort – keine Cloud, keine Abhängigkeit, volle Kontrolle. Brand Agent GmbH, Steinhausen.",
  alternates: { canonical: "/leistungen/lokale-ki" },
  openGraph: {
    title: "Lokale KI-Infrastruktur – Brand Agent GmbH",
    description:
      "KI-Modelle direkt auf Ihrer eigenen Hardware. Volle Datensouveränität, keine Cloud-Abhängigkeit – massgeschneidert für Schweizer Unternehmen.",
    url: "https://brandagent.ch/leistungen/lokale-ki",
  },
};

export default function LokaleKIPage() {
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
                { "@type": "ListItem", position: 2, name: "Leistungen", item: "https://brandagent.ch/leistungen" },
                { "@type": "ListItem", position: 3, name: "Lokale KI-Infrastruktur", item: "https://brandagent.ch/leistungen/lokale-ki" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Lokale KI-Infrastruktur",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "Installation und Betrieb von lokalen KI-Modellen auf dedizierter Hardware – volle Datensouveränität ohne Cloud-Abhängigkeit.",
            },
          ]),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="Datensouveränität"
          title="Lokale KI-Infrastruktur"
          description="Wir liefern KI-Hardware, installieren Open-Weight Modelle und richten Ihr eigenes Chat-Interface ein – alles vor Ort, alles lokal, alles unter Ihrer Kontrolle."
        />
        <LokaleKIContent />
        <Footer />
      </main>
    </>
  );
}
