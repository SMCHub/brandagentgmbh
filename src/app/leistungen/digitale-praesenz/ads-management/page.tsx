import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { AdsManagementContent } from "./content";

export const metadata: Metadata = {
  title: "Ads Management",
  description:
    "Professionelle Verwaltung von Werbekampagnen auf Google, Meta, LinkedIn und TikTok mit messbarem ROI. Brand Agent GmbH, Steinhausen.",
  alternates: { canonical: "/leistungen/digitale-praesenz/ads-management" },
};

export default function AdsManagementPage() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <PageHeader
        badge="Advertising"
        title="Ads Management"
        description="Professionelle Verwaltung von Werbekampagnen auf Google, Meta, LinkedIn und weiteren Plattformen – mit messbarem ROI und transparentem Reporting."
      />
      <AdsManagementContent />
      <Footer />
    </main>
  );
}
