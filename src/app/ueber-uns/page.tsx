import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { UeberUnsContent } from "./content";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Brand Agent GmbH – Ihr Partner für KI-Automatisierung und digitale Präsenz aus Steinhausen, Kanton Zug. Lernen Sie unser Team kennen.",
  alternates: { canonical: "/ueber-uns" },
};

export default function UeberUnsPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Unternehmen"
        title="Über uns"
        description="Wir sind ein Schweizer Unternehmen aus dem Kanton Zug, das Strategie mit modernster KI-Technologie verbindet."
      />
      <UeberUnsContent />
      <Footer />
    </main>
  );
}
