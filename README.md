# Stephanie Meisner – Juristin Website

Moderne, seriöse Website für Stephanie Meisner als Juristin mit Schwerpunkt Familien- und Erbrecht in Haßfurt.

## Ziel
- Klare Darstellung von Leistungen (Familienrecht & Erbrecht)
- Vertrauensaufbau durch seriöse Gestaltung und strukturierte Inhalte
- Mehr Mandantenanfragen per Telefon, E-Mail oder Kontaktformular

## Tech-Stack
- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS für Styles
- ESLint (Next core web vitals) und Prettier

## Struktur
- `app/` – Seiten und Routen (App Router)
- `components/` – wiederverwendbare UI-Komponenten
- `lib/` – Hilfsfunktionen und Dummy-Daten
- `styles/` – globale Styles (Tailwind)

## Lokale Entwicklung
1. Abhängigkeiten installieren: `npm install`
2. Entwicklung starten: `npm run dev` (http://localhost:3000)
3. Linting: `npm run lint`
4. Formatieren: `npm run format`
5. Typprüfung: `npm run typecheck`

## Inhalte anpassen
- Kontaktdaten in `components/Footer.tsx`, `app/kontakt/page.tsx`, `components/ContactForm.tsx`
- SEO-Basis in `app/layout.tsx` und pro Seite via `export const metadata`
- Logo/Bilder im Ordner `public/`

## Hinweise
- Kontaktformular ist aktuell eine Versand-Demo (Frontend-Only).
- Für Produktion empfiehlt sich ein E-Mail/CRM-Backend und Anti-Spam (z. B. hCaptcha/Cloudflare Turnstile).
