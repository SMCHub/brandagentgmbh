import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { NutshellaiContent } from "./content";

export const metadata: Metadata = {
  title: "nutshellai.ch – KI Sprachnachrichten",
  description:
    "WhatsApp-Bot, der Sprachnachrichten automatisch transkribiert und zusammenfasst – made in Switzerland. Jetzt entdecken!",
  alternates: { canonical: "/referenzen/nutshellai" },
  openGraph: {
    title: "nutshellai.ch – KI Sprachnachrichten | Brand Agent GmbH",
    description:
      "KI-WhatsApp-Bot für automatische Transkription und Zusammenfassung von Sprachnachrichten. Entwickelt von Brand Agent GmbH.",
    url: "https://brandagent.ch/referenzen/nutshellai",
  },
};

export default function NutshellaiPage() {
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
              { "@type": "ListItem", position: 3, name: "nutshellai.ch", item: "https://brandagent.ch/referenzen/nutshellai" },
            ],
          }),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="KI-Tool"
          title="nutshellai.ch"
          description="WhatsApp-Bot der Sprachnachrichten automatisch transkribiert und zusammenfasst – made in Switzerland."
        />
        <NutshellaiContent />
        <Footer />
      </main>
    </>
  );
}
