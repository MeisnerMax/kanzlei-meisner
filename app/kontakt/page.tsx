import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zu Stephanie Meisner: Termin vereinbaren oder Anliegen schildern – telefonisch, per E-Mail oder über das Kontaktformular."
};

export default function Page() {
  return (
    <Section variant="pattern" title="Kontakt" intro="Vereinbaren Sie einen Termin oder schildern Sie kurz Ihr Anliegen.">
      <div className="grid gap-10 sm:grid-cols-2">
        <div id="rueckruf">
          <ContactForm />
        </div>
        <div className="space-y-3 text-white/80">
          
          <p>
            E-Mail: <a className="no-underline" href="mailto:kontakt@stephanie-meisner.de">kontakt@stephanie-meisner.de</a>
          </p>
        
           
          <div className="rounded-lg border border-white/15 p-3 bg-white/5 text-sm text-white/80">
            <p className="font-medium text-white">Bürozeiten</p>
            <p className="text-white/80">Mo – Fr: 09:00 – 12:00 | Mo – Do: 13:00 – 17:00</p>
            <p className="text-white/80">Sprechstunde nach Vereinbarung.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
