import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { WebshopsContent } from "./content";

export const metadata: Metadata = {
  title: "Webshop Entwicklung",
  description:
    "E-Commerce-Lösungen die verkaufen – Shopify, Custom Shops, Schweizer Zahlungsintegration mit Twint und PostFinance. Brand Agent GmbH, Steinhausen.",
  alternates: { canonical: "/leistungen/digitale-praesenz/webshops" },
};

export default function WebshopsPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="E-Commerce"
        title="Webshop Entwicklung"
        description="E-Commerce-Lösungen, die verkaufen – von der Konzeption bis zum Go-Live, inklusive Schweizer Zahlungsintegration und Versandanbindung."
      />
      <WebshopsContent />
      <Footer />
    </main>
  );
}
