import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { LeadgenerierungContent } from "./content";

export const metadata: Metadata = {
  title: "Leadgenerierung",
  description:
    "Datengetriebene Strategien zur Gewinnung qualifizierter Leads – Marketing-Funnels, A/B Testing und Conversion-Optimierung. Brand Agent GmbH, Steinhausen.",
  alternates: { canonical: "/leistungen/digitale-praesenz/leadgenerierung" },
};

export default function LeadgenerierungPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Marketing"
        title="Leadgenerierung"
        description="Datengetriebene Strategien zur Gewinnung qualifizierter Leads – von Marketing-Funnels über A/B Testing bis zur vollautomatisierten Conversion-Optimierung."
      />
      <LeadgenerierungContent />
      <Footer />
    </main>
  );
}
