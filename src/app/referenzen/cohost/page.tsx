import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { CohostContent } from "./content";

export const metadata: Metadata = {
  title: "co-host.ch – Podcast-Plattform",
  description:
    "Die Schweizer Plattform, die Podcast-Hosts mit Gästen und Speakern verbindet. Ein Projekt der Brand Agent GmbH.",
  alternates: { canonical: "/referenzen/cohost" },
};

export default function CohostPage() {
  return (
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
  );
}
