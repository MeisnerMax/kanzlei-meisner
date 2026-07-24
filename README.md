# Stephanie Meisner – Mediation & Konfliktklärung

Premium-Website für Stephanie Meisner als Volljuristin und Mediatorin. Die
Positionierung konzentriert sich vollständig auf vertrauliche Mediation und
strukturierte Konfliktklärung.

## Inhalte

- Mediation und Verfahrensgrundsätze
- Konfliktfelder: Familie, Erbe, Gesundheit und private Konflikte
- Transparenter Ablauf und Kostenrahmen
- Interaktiver Konflikt-Navigator ohne Datenspeicherung
- Kontaktanfrage mit optionalem Resend-Versand
- SEO-Metadaten, Open-Graph-Bild, Sitemap und Weiterleitungen alter URLs

## Lokale Entwicklung

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Kontaktformular

Für den serverseitigen Formularversand werden in Vercel folgende
Umgebungsvariablen benötigt:

- `RESEND_API_KEY`
- `CONTACT_FROM_EMAIL` (verifizierte Absenderadresse)
- `CONTACT_TO_EMAIL` (optional; Standard: `Meisner.bamberg@freenet.de`)

Ohne konfigurierte Versanddaten zeigt das Formular eine verständliche
Fallback-Meldung mit direktem E-Mail-Link.
