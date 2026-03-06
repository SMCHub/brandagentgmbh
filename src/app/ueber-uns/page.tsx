import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { UeberUnsContent } from "./content";

export const metadata: Metadata = {
  title: "Über uns – Team & Vision",
  description:
    "Lernen Sie das Team hinter Brand Agent GmbH kennen. KI-Experten aus Steinhausen, Zug – wir verbinden Strategie mit modernster Technologie. Mehr erfahren!",
  alternates: { canonical: "/ueber-uns" },
  openGraph: {
    title: "Über uns – Team & Vision | Brand Agent GmbH",
    description:
      "Lernen Sie das Team hinter Brand Agent GmbH kennen. KI-Experten aus Steinhausen, Zug – Strategie trifft modernste Technologie.",
    url: "https://brandagent.ch/ueber-uns",
  },
};

export default function UeberUnsPage() {
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
              { "@type": "ListItem", position: 2, name: "Über uns", item: "https://brandagent.ch/ueber-uns" },
            ],
          }),
        }}
      />
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
    </>
  );
}
