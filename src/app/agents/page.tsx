import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { AgentsContent } from "./content";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Agents – Brand Agent GmbH",
  description: "Automatisieren Sie Ihre Geschäftsprozesse – gewinnen Sie Zeit für das Wesentliche.",
};

export default function AgentsPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Automatisierung"
        title="Unsere Agents"
        description="Automatisieren Sie Ihre Geschäftsprozesse – gewinnen Sie Zeit für das Wesentliche. Wir helfen Ihnen, Abläufe zu digitalisieren und effizienter zu gestalten."
      />
      <AgentsContent />
      <Footer />
    </main>
  );
}
