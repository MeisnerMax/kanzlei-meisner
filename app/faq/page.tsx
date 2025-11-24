import Section from "@/components/Section";
import FAQAccordion from "@/components/FAQAccordion";
import { faqs } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Häufige Fragen zu Familien- und Erbrecht: Kosten der Erstberatung, benötigte Unterlagen, wann anwaltliche Unterstützung sinnvoll ist."
};

export default function Page() {
  return (
    <Section variant="muted" as="h1" title="Häufige Fragen" intro="Kurze Antworten auf häufig gestellte Fragen.">
      <FAQAccordion items={faqs} />
    </Section>
  );
}

