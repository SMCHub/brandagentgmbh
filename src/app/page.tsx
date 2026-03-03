import { Navbar } from "@/components/navbar";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { GlobeSection } from "@/components/globe-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import { DitheringCTA } from "@/components/ui/hero-dithering-card";

export default function Home() {
  return (
    <main className="bg-[#fafafa]">
      <Navbar />
      <AnimatedShaderHero
        trustBadge={{
          text: "Vertraut von führenden Schweizer Unternehmen",
        }}
        headline={{
          line1: "Ihr Business –",
          line2: "nur smarter.",
        }}
        subtitle="Wir verbinden Strategie, Technologie und Design, um Abläufe zu vereinfachen und Ihre Marke digital zu stärken."
        buttons={{
          primary: {
            text: "Projekt starten",
            href: "/kontakt",
          },
          secondary: {
            text: "Leistungen entdecken",
            href: "#services",
          },
        }}
      />
      <StatsSection />
      <ServicesSection />
      <GlobeSection />
      <ProcessSection />
      <DitheringCTA />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
