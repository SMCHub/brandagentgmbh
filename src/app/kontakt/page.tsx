import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { KontaktContent } from "./content";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Kontakt – Brand Agent GmbH",
  description: "Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch. Wir melden uns zeitnah zurück.",
};

export default function KontaktPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Kontakt"
        title="Kontakt aufnehmen"
        description="Wir beraten Sie gerne zu Automatisierungen, E-Commerce und individuellen Lösungen. Senden Sie uns Ihre Anfrage – wir melden uns zeitnah zurück."
      />
      <KontaktContent />
      <Footer />
    </main>
  );
}
