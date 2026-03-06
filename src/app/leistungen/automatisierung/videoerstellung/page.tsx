import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { VideoerstellungContent } from "./content";

export const metadata: Metadata = {
  title: "Videoerstellung",
  description:
    "Automatisierte Videoproduktion für Marketing, Social Media und interne Kommunikation – skalierbar und kosteneffizient. Brand Agent GmbH, Steinhausen.",
  alternates: { canonical: "/leistungen/automatisierung/videoerstellung" },
};

export default function VideoerstellungPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Media"
        title="Videoerstellung"
        description="Automatisierte Videoproduktion für Marketing, Social Media und interne Kommunikation – skalierbar, schnell und kosteneffizient."
      />
      <VideoerstellungContent />
      <Footer />
    </main>
  );
}
