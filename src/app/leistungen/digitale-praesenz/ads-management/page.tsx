import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { PageHeader } from "@/components/page-header";
import { Footer } from "@/components/footer";
import { AdsManagementContent } from "./content";

export const metadata: Metadata = {
  title: "Ads Management – Google, Meta & LinkedIn",
  description:
    "Werbekampagnen mit messbarem ROI auf Google, Meta, LinkedIn und TikTok. Professionelles Ads Management von Brand Agent GmbH. Jetzt anfragen!",
  alternates: { canonical: "/leistungen/digitale-praesenz/ads-management" },
  openGraph: {
    title: "Ads Management – Google, Meta & LinkedIn | Brand Agent GmbH",
    description:
      "Professionelle Verwaltung von Werbekampagnen auf Google, Meta, LinkedIn und TikTok – mit messbarem ROI.",
    url: "https://brandagent.ch/leistungen/digitale-praesenz/ads-management",
  },
};

export default function AdsManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://brandagent.ch" },
                { "@type": "ListItem", position: 2, name: "Digitale Präsenz", item: "https://brandagent.ch/leistungen/digitale-praesenz" },
                { "@type": "ListItem", position: 3, name: "Ads Management", item: "https://brandagent.ch/leistungen/digitale-praesenz/ads-management" },
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Ads Management",
              provider: { "@type": "Organization", name: "Brand Agent GmbH" },
              areaServed: { "@type": "Country", name: "Switzerland" },
              description: "Professionelle Verwaltung von Werbekampagnen auf Google, Meta, LinkedIn und TikTok mit messbarem ROI.",
            },
          ]),
        }}
      />
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
    </>
  );
}
