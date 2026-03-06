import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { LlmTexteContent } from "./content";

export const metadata: Metadata = {
  title: "LLM-optimierte Texte",
  description:
    "Texte, die für Suchmaschinen UND KI-Sprachmodelle optimiert sind – für maximale Sichtbarkeit in der neuen Ära der Suche. Brand Agent GmbH, Steinhausen.",
  alternates: { canonical: "/leistungen/digitale-praesenz/llm-texte" },
};

export default function LlmTextePage() {
  return (
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
  );
}
