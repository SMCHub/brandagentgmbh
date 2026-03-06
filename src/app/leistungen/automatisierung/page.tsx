import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { AutomatisierungContent } from "./content";

export const metadata: Metadata = {
  title: "Digitale Prozessautomatisierung",
  description:
    "Individuelle Automatisierungslösungen für Ihre Geschäftsprozesse – von Vergleichsofferten über Angebotsentwürfe bis hin zur Videoerstellung. Brand Agent GmbH.",
  alternates: { canonical: "/leistungen/automatisierung" },
};

export default function AutomatisierungPage() {
  return (
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
  );
}
