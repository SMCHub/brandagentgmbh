import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { WebseitenContent } from "./content";

export const metadata: Metadata = {
  title: "Webseiten Entwicklung",
  description:
    "Moderne, blitzschnelle Webseiten mit Next.js und React – responsive, SEO-optimiert und mit perfekten Core Web Vitals. Brand Agent GmbH, Steinhausen.",
  alternates: { canonical: "/leistungen/digitale-praesenz/webseiten" },
};

export default function WebseitenPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Development"
        title="Webseiten Entwicklung"
        description="Moderne, blitzschnelle Webseiten mit Next.js und React – responsive Design, perfekte Core Web Vitals und SEO-Optimierung für Top-Rankings."
      />
      <WebseitenContent />
      <Footer />
    </main>
  );
}
