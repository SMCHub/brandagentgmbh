import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { CohostContent } from "./content";

export const metadata: Metadata = {
  title: "co-host.ch – Podcast-Plattform",
  description:
    "Die Schweizer Plattform, die Podcast-Hosts mit Gästen und Speakern verbindet. Entwickelt von Brand Agent GmbH. Jetzt entdecken!",
  alternates: { canonical: "/referenzen/cohost" },
  openGraph: {
    title: "co-host.ch – Podcast-Plattform | Brand Agent GmbH",
    description:
      "Schweizer Podcast-Marktplatz: Hosts finden Gäste, Gäste finden Podcasts. Ein Projekt der Brand Agent GmbH.",
    url: "https://brandagent.ch/referenzen/cohost",
  },
};

export default function CohostPage() {
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
              { "@type": "ListItem", position: 3, name: "co-host.ch", item: "https://brandagent.ch/referenzen/cohost" },
            ],
          }),
        }}
      />
      <main className="bg-[#fafafa]">
        <Navbar />
        <PageHeader
          badge="Plattform"
          title="co-host.ch"
          description="Die Schweizer Plattform, die Podcast-Hosts mit Gästen und Speakern verbindet."
        />
        <CohostContent />
        <Footer />
      </main>
    </>
  );
}
