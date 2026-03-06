import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { ProzessautomatisierungContent } from "./content";

export const metadata: Metadata = {
  title: "Prozessautomatisierung",
  description:
    "Massgeschneiderte Automatisierungen für Ihre spezifischen Geschäftsprozesse – mit n8n, Zapier und KI-Tools. Brand Agent GmbH, Steinhausen.",
  alternates: { canonical: "/leistungen/automatisierung/prozessautomatisierung" },
};

export default function ProzessautomatisierungPage() {
  return (
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
  );
}
