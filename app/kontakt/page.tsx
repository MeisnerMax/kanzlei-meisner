import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Vertrauliche Anfrage für ein erstes Orientierungsgespräch mit Mediatorin Stephanie Meisner.",
  alternates: { canonical: "/kontakt" }
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Ein erster Kontakt darf kurz sein."
        intro="Sie müssen Ihren Konflikt nicht vollständig erklären. Wenige Angaben genügen, damit Stephanie Meisner sich persönlich bei Ihnen melden kann."
        cta={false}
      />

      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-max grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <aside>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay">Direkter Kontakt</p>
            <h2 className="mt-5 font-serif text-3xl font-medium leading-tight">Vertraulich. Persönlich. Ohne Vorfestlegung.</h2>
            <a
              className="mt-7 block break-all font-semibold underline decoration-clay underline-offset-4"
              href="mailto:Meisner.bamberg@freenet.de"
            >
              Meisner.bamberg@freenet.de
            </a>
            <address className="mt-6 not-italic leading-7 text-ink/62">
              Stephanie Meisner<br />
              Loßbergstraße 12<br />
              96106 Ebern
            </address>
            <div className="mt-8 rounded-[1.5rem] bg-sage-wash p-6">
              <p className="font-semibold">Bitte beachten</p>
              <p className="mt-2 text-sm leading-6 text-ink/62">
                Senden Sie über das Formular noch keine sensiblen Gesundheitsdaten,
                umfangreichen Unterlagen oder vertraulichen Details über Dritte.
              </p>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-ink/10 bg-white/70 p-6 shadow-soft sm:p-9">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
