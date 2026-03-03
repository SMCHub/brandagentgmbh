# Brand Agent GmbH – Website

## Projekt

Website für die Brand Agent GmbH (Steinhausen, Schweiz). Next.js 16 App Router mit TypeScript, Tailwind CSS und shadcn/ui.

## Tech Stack

- **Framework:** Next.js 16 (App Router, `src/` Verzeichnis)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui (new-york style)
- **Animationen:** Framer Motion
- **Icons:** lucide-react
- **Paketmanager:** npm

## Verzeichnisstruktur

```
src/
├── app/
│   ├── layout.tsx          # Root Layout (Geist Font, Metadata)
│   ├── page.tsx            # Startseite
│   ├── brands/page.tsx     # E-Commerce & Brand Shops
│   ├── agents/page.tsx     # Automatisierungslösungen
│   ├── partnerprogramm/page.tsx  # bexio Partnerprogramm
│   └── kontakt/page.tsx    # Kontaktseite
├── components/
│   ├── ui/                 # shadcn/ui Komponenten
│   │   ├── shape-landing-hero.tsx
│   │   └── interactive-globe.tsx
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── *-section.tsx       # Sektionskomponenten
└── lib/
    └── utils.ts            # cn() Utility
```

## Konventionen

- **Sprache:** Deutsche Texte mit korrekten Umlauten (ä, ö, ü, ß)
- **HTML lang:** `de`
- **Design:** Helles Theme (bg-[#fafafa]), eleganter minimalistischer Stil
- **Farben:** Grautöne für Text, Indigo/Rose/Violet als Akzentfarben
- **Komponenten:** Client Components mit "use client" für Animationen
- **Dateibenennung:** kebab-case für Dateien, PascalCase für Komponenten

## Wichtige Befehle

```bash
npm run dev    # Entwicklungsserver starten
npm run build  # Produktions-Build
npm run lint   # ESLint
```

## Firmendaten

- **Name:** Brand Agent GmbH
- **Adresse:** Hammerstrasse 5, 6312 Steinhausen, Schweiz
- **E-Mail:** info@brandagent.ch
- **Telefon:** +41 76 417 36 02
- **UID:** CHE-204.407.181
- **Gründer:** Silvio Glarner (Dipl. Betriebswirtschafter), Salvatore Reccardo (Dipl. Unternehmensprozessetechniker)
- **LinkedIn:** vorhanden
