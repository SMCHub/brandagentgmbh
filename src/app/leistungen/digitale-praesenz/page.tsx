import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { DigiltalePraesenzContent } from "./content";

export const metadata: Metadata = {
  title: "Digitale Präsenz",
  description:
    "LLM-optimierte Texte, Leadgenerierung, Ads Management und professionelle Webseiten- & Webshop-Entwicklung. Brand Agent GmbH aus Steinhausen, Schweiz.",
  alternates: { canonical: "/leistungen/digitale-praesenz" },
};

export default function DigitalePraesenzPage() {
  return (
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
  );
}
