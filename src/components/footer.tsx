"use client";

import {
  FileText,
  Cog,
  Users,
  Mail,
  Globe,
  ShoppingCart,
  Megaphone,
  Video,
  MapPin,
} from "lucide-react";
import { Footer as FooterBlock } from "@/components/blocks/footer";

export function Footer() {
  return (
    <FooterBlock
      className="bg-[#fafafa]"
      brand={{
        name: "Brand Agent",
        logo: "/images/logos/brand-agent-black.png",
        description: "Vorsprung durch Intelligenz. Digitale Prozessautomatisierung und Präsenz aus der Schweiz.",
      }}
      socialLinks={[
        {
          name: "LinkedIn",
          href: "https://linkedin.com",
        },
        {
          name: "E-Mail",
          href: "mailto:info@brandagent.ch",
        },
      ]}
      columns={[
        {
          title: "Digitale Präsenz",
          links: [
            { name: "LLM Texte", Icon: FileText, href: "/leistungen/digitale-praesenz" },
            { name: "Leadgenerierung", Icon: Megaphone, href: "/leistungen/digitale-praesenz" },
            { name: "Webseiten", Icon: Globe, href: "/leistungen/digitale-praesenz" },
            { name: "Webshops", Icon: ShoppingCart, href: "/leistungen/digitale-praesenz" },
          ],
        },
        {
          title: "Automatisierung",
          links: [
            { name: "Prozessautomatisierung", Icon: Cog, href: "/leistungen/automatisierung" },
            { name: "Vergleichsofferten", Icon: FileText, href: "/leistungen/automatisierung" },
            { name: "Videoerstellung", Icon: Video, href: "/leistungen/automatisierung" },
          ],
        },
        {
          title: "Unternehmen",
          links: [
            { name: "Über uns", Icon: Users, href: "/ueber-uns" },
            { name: "Kontakt", Icon: Mail, href: "/kontakt" },
            { name: "Standort", Icon: MapPin, href: "/ueber-uns" },
          ],
        },
      ]}
      copyright={`Brand Agent GmbH © ${new Date().getFullYear()} · Hammerstrasse 5, 6312 Steinhausen · CHE-204.407.181`}
    />
  );
}
