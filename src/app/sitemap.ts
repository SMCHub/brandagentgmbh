import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brandagent.ch";
  const lastModified = new Date("2026-03-06");

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    // Digitale Praesenz
    {
      url: `${baseUrl}/leistungen/digitale-praesenz`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/leistungen/digitale-praesenz/llm-texte`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leistungen/digitale-praesenz/leadgenerierung`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leistungen/digitale-praesenz/ads-management`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leistungen/digitale-praesenz/webseiten`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leistungen/digitale-praesenz/webshops`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Automatisierung
    {
      url: `${baseUrl}/leistungen/automatisierung`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/leistungen/automatisierung/prozessautomatisierung`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leistungen/automatisierung/vergleichsofferten`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leistungen/automatisierung/angebotsentwuerfe`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/leistungen/automatisierung/videoerstellung`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Referenzen
    {
      url: `${baseUrl}/referenzen`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/referenzen/hostagent`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/referenzen/cohost`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/referenzen/nutshellai`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Unternehmen
    {
      url: `${baseUrl}/ueber-uns`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakt`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
