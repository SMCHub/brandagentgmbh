import { Navbar } from "@/components/navbar";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { GlobeSection } from "@/components/globe-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import AnimatedShaderHero from "@/components/ui/animated-shader-hero";
import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";
import { DitheringCTA } from "@/components/ui/hero-dithering-card";

export default function Home() {
  return (
    <main className="bg-[#fafafa]">
      <ResponsiveHeroBanner
        navLinks={[
          { label: "Home", href: "/", isActive: true },
          { label: "Brands", href: "/brands" },
          { label: "Agents", href: "/agents" },
          { label: "Partner", href: "/partnerprogramm" },
          { label: "Kontakt", href: "/kontakt" },
        ]}
        ctaButtonText="Projekt starten"
        ctaButtonHref="/kontakt"
        badgeLabel="Neu"
        badgeText="KI-gestützte Automatisierung für Ihr Business"
        title="Ihr Business –"
        titleLine2="nur smarter."
        description="Wir verbinden Strategie, Technologie und Design, um Abläufe zu vereinfachen und Ihre Marke digital zu stärken."
        primaryButtonText="Projekt starten"
        primaryButtonHref="/kontakt"
        secondaryButtonText="Leistungen entdecken"
        secondaryButtonHref="#services"
        partnersTitle="Unsere Projekte"
        partners={[
          { logoUrl: "/images/logos/nutshellai.png", href: "#", className: "w-[100px] sm:w-[130px] h-8 object-contain brightness-0 invert" },
          { logoUrl: "/images/logos/cohost.png", href: "#", className: "w-[120px] sm:w-[160px] h-8 object-contain brightness-0 invert" },
          { logoUrl: "/images/logos/hostagent.png", href: "#", className: "w-[100px] sm:w-[130px] h-8 object-contain brightness-0 invert" },
        ]}
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
