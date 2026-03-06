import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { NutshellaiContent } from "./content";

export const metadata: Metadata = {
  title: "nutshellai.ch – KI Sprachnachrichten",
  description:
    "WhatsApp-Bot der Sprachnachrichten automatisch transkribiert und zusammenfasst – made in Switzerland. Ein Projekt der Brand Agent GmbH.",
  alternates: { canonical: "/referenzen/nutshellai" },
};

export default function NutshellaiPage() {
  return (
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
  );
}
