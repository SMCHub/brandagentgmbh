import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { LlmTexteContent } from "./content";

export const metadata: Metadata = {
  title: "LLM-optimierte Texte & SEO-Content",
  description:
    "Texte für Suchmaschinen und KI-Sprachmodelle – maximale Sichtbarkeit in der neuen Ära der Suche. Brand Agent GmbH. Jetzt Content-Strategie starten!",
  alternates: { canonical: "/leistungen/digitale-praesenz/llm-texte" },
  openGraph: {
    title: "LLM-optimierte Texte & SEO-Content – Brand Agent GmbH",
    description:
      "Texte, die für Suchmaschinen und KI-Sprachmodelle optimiert sind – für maximale Sichtbarkeit. Brand Agent GmbH, Steinhausen.",
    url: "https://brandagent.ch/leistungen/digitale-praesenz/llm-texte",
  },
};

export default function LlmTextePage() {
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
                { "@type": "ListItem", position: 3, name: "LLM-optimierte Texte", item: "https://brandagent.ch/leistungen/digitale-praesenz/llm-texte" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "LLM-optimierte Texte",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "Texte, die für Suchmaschinen und KI-Sprachmodelle optimiert sind – für maximale Sichtbarkeit in der neuen Ära der Suche.",
            },
          ]),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="Content"
          title="LLM-optimierte Texte"
          description="Texte, die für Suchmaschinen UND KI-Sprachmodelle optimiert sind – für maximale Sichtbarkeit und Relevanz in der neuen Ära der Suche."
        />
        <LlmTexteContent />
        <Footer />
      </main>
    </>
  );
}
