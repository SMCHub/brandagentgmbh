import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Brand Agent GmbH – Vorsprung durch Intelligenz",
    template: "%s | Brand Agent GmbH",
  },
  description:
    "Wir verbinden Ihre Strategie mit modernster KI-Technologie, um digitale Prozesse effizient und skalierbar zu automatisieren. Digitale Präsenz und Prozessautomatisierung aus Steinhausen, Schweiz.",
  keywords: [
    "KI-Automatisierung",
    "KI Agentur Schweiz",
    "Prozessautomatisierung",
    "Digitale Präsenz",
    "Digitalagentur Zug",
    "n8n Automatisierung",
    "Zapier Integration",
    "Webentwicklung Schweiz",
    "Webshop erstellen",
    "Schweiz",
    "Steinhausen",
    "Kanton Zug",
    "Brand Agent GmbH",
    "Leadgenerierung",
    "LLM-optimierte Texte",
    "ChatGPT Integration",
    "Claude AI",
    "Ads Management",
    "Geschäftsprozesse automatisieren",
    "Digitale Transformation",
  ],
  authors: [{ name: "Brand Agent GmbH" }],
  creator: "Brand Agent GmbH",
  metadataBase: new URL("https://brandagent.ch"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://brandagent.ch",
    siteName: "Brand Agent GmbH",
    title: "Brand Agent GmbH – Vorsprung durch Intelligenz",
    description:
      "Digitale Prozessautomatisierung und Präsenz aus der Schweiz. KI-gestützte Lösungen für Ihr Business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Agent GmbH – Vorsprung durch Intelligenz",
    description:
      "Digitale Prozessautomatisierung und Präsenz aus der Schweiz. KI-gestützte Lösungen für Ihr Business.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                name: "Brand Agent GmbH",
                url: "https://brandagent.ch",
                logo: "https://brandagent.ch/images/logos/brand-agent-black.png",
                description:
                  "Digitale Prozessautomatisierung und Präsenz aus der Schweiz. KI-gestützte Lösungen für Ihr Business.",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Hammerstrasse 5",
                  addressLocality: "Steinhausen",
                  addressRegion: "Zug",
                  postalCode: "6312",
                  addressCountry: "CH",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+41764173602",
                  email: "info@brandagent.ch",
                  contactType: "customer service",
                  availableLanguage: ["German", "English"],
                },
                founder: [
                  { "@type": "Person", name: "Silvio Glarner", jobTitle: "Dipl. Betriebswirtschafter" },
                  { "@type": "Person", name: "Salvatore Reccardo", jobTitle: "Dipl. Unternehmensprozessetechniker" },
                ],
                employee: [
                  { "@type": "Person", name: "Burak Bajrami", jobTitle: "(Angehender) Dipl. Wirtschaftsinformatiker" },
                ],
                sameAs: [],
                knowsAbout: [
                  "KI-Automatisierung",
                  "Prozessautomatisierung",
                  "Webentwicklung",
                  "E-Commerce",
                  "Leadgenerierung",
                  "n8n",
                  "Zapier",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Brand Agent GmbH",
                image: "https://brandagent.ch/images/logos/brand-agent-black.png",
                url: "https://brandagent.ch",
                telephone: "+41764173602",
                email: "info@brandagent.ch",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Hammerstrasse 5",
                  addressLocality: "Steinhausen",
                  addressRegion: "Zug",
                  postalCode: "6312",
                  addressCountry: "CH",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 47.1942,
                  longitude: 8.4868,
                },
                areaServed: [
                  { "@type": "Country", name: "Switzerland" },
                  { "@type": "AdministrativeArea", name: "Europa" },
                ],
                priceRange: "$$",
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Brand Agent GmbH",
                url: "https://brandagent.ch",
                inLanguage: "de-CH",
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fafafa]`}
      >
        {children}
      </body>
    </html>
  );
}
