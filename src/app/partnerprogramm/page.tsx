import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { PartnerContent } from "./content";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Partnerprogramm – Brand Agent GmbH",
  description: "Sparen Sie 40 % auf bexio – exklusiv für unsere Partner!",
};

export default function PartnerprogrammPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Partnerprogramm"
        title="Sparen Sie 40 % auf bexio"
        description="Starten Sie jetzt mit der Business-Software bexio und profitieren Sie von einer einfachen Lösung für Ihre Buchhaltung, Offerten, Rechnungen und vieles mehr."
      />
      <PartnerContent />
      <Footer />
    </main>
  );
}
