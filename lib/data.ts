import type { BlogPost, FAQ } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "erstberatung-familienrecht",
    title: "Die Erstberatung im Familienrecht: Ablauf und Nutzen",
    excerpt:
      "Was Sie bei der ersten Beratung erwartet und wie Sie sich vorbereiten können.",
    date: "2024-07-01",
    tags: ["Familienrecht", "Erstberatung"]
  },
  {
    slug: "pflichtteil-verstehen",
    title: "Pflichtteil im Erbrecht: Rechte und Fristen",
    excerpt: "Wer hat Anspruch und wie wird der Pflichtteil berechnet?",
    date: "2024-08-15",
    tags: ["Erbrecht", "Pflichtteil"]
  },
  {
    slug: "sorgerecht-und-umgang",
    title: "Sorgerecht und Umgangsrecht: Das Kindeswohl im Blick",
    excerpt: "Wichtige Grundsätze und praktische Hinweise für Eltern.",
    date: "2024-09-10",
    tags: ["Familienrecht", "Kinder"]
  }
];

export const faqs: FAQ[] = [
  {
    q: "Was kostet eine Erstberatung?",
    a: "Die Kosten richten sich nach dem Rechtsanwaltsvergütungsgesetz (RVG) und dem Gegenstandswert. Sie erhalten vorab eine transparente Einschätzung."
  },
  {
    q: "Welche Unterlagen sollte ich mitbringen?",
    a: "Relevante Verträge, Korrespondenz, Bescheide sowie – bei Familienrecht – Heiratsurkunde, Geburtsurkunden der Kinder, Einkommensnachweise."
  },
  {
    q: "Wann brauche ich im Erbrecht anwaltliche Unterstützung?",
    a: "Bei Unklarheiten zur Erbfolge, Pflichtteilsansprüchen, in Erbengemeinschaften oder bei der Gestaltung eines Testaments."
  }
];
