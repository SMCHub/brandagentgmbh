import { ServicesSection } from "@/components/services-section";
import { GlobeSection } from "@/components/globe-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import { DitheringCTA } from "@/components/ui/hero-dithering-card";

export default function Home() {
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
            ],
          }),
        }}
      />
    <main className="bg-[#fafafa]">
      <ResponsiveHeroBanner />
      <ServicesSection />
      <GlobeSection />
      <ProcessSection />
      <DitheringCTA />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
    </>
  );
}
