import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { WebshopsContent } from "./content";

export const metadata: Metadata = {
  title: "Webshop Entwicklung – Shopify & Custom",
  description:
    "E-Commerce-Lösungen, die verkaufen: Shopify und Custom Shops mit Twint, PostFinance und Schweizer Versand. Brand Agent GmbH. Jetzt Shop starten!",
  alternates: { canonical: "/leistungen/digitale-praesenz/webshops" },
  openGraph: {
    title: "Webshop Entwicklung – Shopify & Custom | Brand Agent GmbH",
    description:
      "E-Commerce-Lösungen mit Schweizer Zahlungsintegration – Shopify, Custom Shops und mehr. Brand Agent GmbH, Steinhausen.",
    url: "https://brandagent.ch/leistungen/digitale-praesenz/webshops",
  },
};

export default function WebshopsPage() {
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
                { "@type": "ListItem", position: 3, name: "Webshop Entwicklung", item: "https://brandagent.ch/leistungen/digitale-praesenz/webshops" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Webshop Entwicklung",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "E-Commerce-Lösungen die verkaufen – Shopify, Custom Shops, Schweizer Zahlungsintegration mit Twint und PostFinance.",
            },
          ]),
        }}
      />
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
    </>
  );
}
