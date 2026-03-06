import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { HostagentContent } from "./content";

export const metadata: Metadata = {
  title: "hostagent.ch – Schweizer Hosting",
  description:
    "Schweizer Hosting-Plattform mit persönlichem Support und 100% Schweizer Datenschutz. Ein Projekt der Brand Agent GmbH.",
  alternates: { canonical: "/referenzen/hostagent" },
};

export default function HostagentPage() {
  return (
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
  );
}
