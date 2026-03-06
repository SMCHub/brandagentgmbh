import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { ReferenzenContent } from "./content";

export const metadata: Metadata = {
  title: "Referenzen",
  description:
    "Unsere Projekte und Referenzen – von Hosting-Plattformen über Podcast-Marktplätze bis hin zu KI-Tools. Entdecken Sie, was Brand Agent GmbH realisiert hat.",
  alternates: { canonical: "/referenzen" },
};

export default function ReferenzenPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Portfolio"
        title="Unsere Referenzen"
        description="Projekte, die wir konzipiert, entwickelt und betreiben – von der Idee bis zum laufenden Produkt."
      />
      <ReferenzenContent />
      <Footer />
    </main>
  );
}
