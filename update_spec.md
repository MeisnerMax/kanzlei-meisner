Aktualisiere das bestehende Next.js / TypeScript / Tailwind Webprojekt gemäß folgenden strukturierten Änderungen.  
Alle Änderungen müssen konsistent im gesamten Projekt angewendet werden, ohne bestehende Logik zu zerstören.  
Mobile First gilt systemweit.

────────────────────────────────────────
1) ALLGEMEINE GLOBALÄNDERUNGEN
────────────────────────────────────────
• Überall im Projekt: „Anwältin“ → „Volljuristin“ ersetzen.  
• In der Navigation: „Anwältin“ → „Meisner“.  
• Kanzleiname überall:  
  - „Kanzlei Meisner“ entfernen  
  - stattdessen: **Volljuristin Meisner in der Kanzlei Haßfurt Fischer**  
• Standortbezeichnung überall vereinheitlichen: „Kanzlei Fischer in Haßfurt und Ebern“.  
• Header-Subline ändern in:  
  **Volljuristin, Mediatorin für Familien-, Erbrecht- und Zivilrecht**  
• Berufserfahrungstexte anpassen:  
  „10+ Jahre im Zivilrecht“ → **„30+ Jahre Erfahrung als Juristin“**  

────────────────────────────────────────
2) DESIGN / UI / UX – VISUELLE ANPASSUNGEN
────────────────────────────────────────
• Hauptfarbe: tieferes, seriöses Dunkelblau (#0A2240 oder ähnlich).  
• Akzentfarbe: Weiß / sehr helles Grau.  
• Weniger Fade-Effekte, stattdessen klare, ruhige Übergänge.  
• Schwerpunkt-Container (Cards) farblich vom Hintergrund abheben  
  – helles Off-White, soft shadow, abgerundete Ecken.  
• Fade-In / Slide-Up Animationen für jede Section beim Scrollen (Intersection Observer oder Framer Motion).  
• Mobile First auf allen Seiten sicherstellen (Layout, Grids, Bilder, Typo, Abstände).  
• Drawer (Mobile Menu) mit **festem Hintergrund**, kein halbtransparenter Layer.  
• In den Header-Bereichen statt SVG-Bild ein `.png` verwenden (besser für Fotos / realistische Visuals).  

────────────────────────────────────────
3) NAVIGATION & SEITENSTRUKTUR
────────────────────────────────────────
• Neue Seite hinzufügen: **/medizinrecht**  
  – eigener Textabschnitt, Leistungen, Komplexe aus der Berufserfahrung übernehmen.  
• Seite **/leistungen komplett entfernen**.  
• Mobile Drawer verbessern: fester Hintergrund, klares blau-weiß Schema, modernere Animation.

────────────────────────────────────────
4) TEXTE & INHALTE – PROFESSIONELLE ÜBERARBEITUNG
────────────────────────────────────────
Alle folgenden Inhalte strukturiert einbauen, über verschiedene Seiten verteilt:

──────────  
A) Profil / Berufserfahrung Meisner  
──────────  
**Berufserfahrung:**
- Kanzlei Tilman Fischer – 11/2025 – Heute  
- Vorsitzende Arbeitskreis Medizinrecht  
- Medizinrecht (Apr. 2009 – Heute · 16 Jahre 8 Monate)  
- Volljuristin, Mediatorin (Mai 2006 – Heute · 19 Jahre 7 Monate)  
- Inhaberin einer Rechtsanwaltskanzlei (Sept. 1994 – Apr. 2006 · 11 Jahre 8 Monate)  
- Rechtsamtsleiterin (1993–1994 · 1 Jahr 8 Monate)  
- Juristin am EIPA Maastricht, European Institute of Public Administration  
  (März 1989 – Aug. 1989 · 6 Monate)  

**Ausbildung:**  
Universitäten Bonn, Köln, Münster, Bayreuth  

**Fortbildungen:**  
Mediation, Medizinrecht

──────────  
B) Kanzlei-Informationen – auf Seite /kanzlei einbauen  
──────────  
**Kanzlei in Haßfurt / Kanzlei Fischer**  
Schlesingerstr. 26  
97437 Haßfurt  
09521 – 950 460  
09521 – 950 461  
anwaltskanzlei-fischer@t-online.de  

**Öffnungszeiten:**  
Mo – Fr: 08.00 – 12.00  
Mo – Do: 13.00 – 17.00  

**Sprechstunde:**  
Nach Vereinbarung  

──────────  
C) Medizinrecht-Seite (neu erstellen unter /medizinrecht)  
──────────  
Folgende Schwerpunkte integrieren:  
- Medizinrechtliche Beratung  
- Konfliktlösung im Gesundheitswesen  
- Rechtsvertretung in medizinrechtlichen Streitigkeiten  
- Verbindung zum Arbeitskreis Medizinrecht hervorheben  
- Berufserfahrung direkt sichtbar

────────────────────────────────────────
5) HEADER / HERO
────────────────────────────────────────
• Ersetze aktuelles SVG-Bild durch ein realistisches PNG-Bild (Platzhalter ok).  
• Hero-Text anpassen:  
  Headline: **Volljuristin Meisner in der Kanzlei Fischer (Haßfurt & Ebern)**  
  Subheadline: **Volljuristin & Mediatorin für Familien-, Erb- und Zivilrecht**  
• CTA bleibt: „Jetzt Beratung anfragen“


• Die Schwerpunkt-Kästchen farblich deutlich hervorheben:  
  – heller Hintergrund
  – feine Border 
  – tieferes Blau für Titel, dunkles Grau für Text  
• Animation: Soft Slide-Up beim Scrollen.   
• Drawer mit **fester blauer Hintergrundfarbe**  
• Animation: Slide-In von rechts, Fade-Out beim Schließen  
• Mobile-First Layout priorisieren  
• Stelle sicher, dass alle Komponenten und Seiten mobile-first gestaltet sind.  
• Jede Seite und jeder Container erhält einen Fade-In/Slide-Up beim Scrollen:  
  – IntersectionObserver oder Framer Motion (Lottie optional).  

Verbessere das design der Website grundlegend für einen modernen look. prüfe lesbarkeit von texten/containern. prüfe jede seite auf mobile first.