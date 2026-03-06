import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { HostagentContent } from "./content";

export const metadata: Metadata = {
  title: "hostagent.ch – Schweizer Hosting",
  description:
    "Schweizer Hosting-Plattform mit persönlichem Support und 100 % Datenschutz in der Schweiz. Ein Projekt der Brand Agent GmbH. Jetzt entdecken!",
  alternates: { canonical: "/referenzen/hostagent" },
  openGraph: {
    title: "hostagent.ch – Schweizer Hosting | Brand Agent GmbH",
    description:
      "Schweizer Hosting-Plattform mit persönlichem Support und 100 % Schweizer Datenschutz. Entwickelt von Brand Agent GmbH.",
    url: "https://brandagent.ch/referenzen/hostagent",
  },
};

export default function HostagentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://brandagent.ch" },
              { "@type": "ListItem", position: 2, name: "Referenzen", item: "https://brandagent.ch/referenzen" },
              { "@type": "ListItem", position: 3, name: "hostagent.ch", item: "https://brandagent.ch/referenzen/hostagent" },
            ],
          }),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="Hosting"
          title="hostagent.ch"
          description="Schweizer Hosting-Plattform mit persönlichem Support und 100% Schweizer Datenschutz."
        />
        <HostagentContent />
        <Footer />
      </main>
    </>
  );
}
