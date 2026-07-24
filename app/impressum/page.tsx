import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false, follow: true }
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliche Informationen"
        title="Impressum"
        intro="Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)."
        cta={false}
      />
      <section className="bg-ivory py-16 sm:py-20">
        <div className="container-max">
          <div className="prose-legal max-w-3xl rounded-[2rem] border border-ink/10 bg-white/65 p-7 sm:p-10">
            <h2>Anbieterin</h2>
            <p>
              Stephanie Meisner<br />
              Volljuristin &amp; Mediatorin<br />
              Loßbergstraße 12<br />
              96106 Ebern
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a href="mailto:Meisner.bamberg@freenet.de">Meisner.bamberg@freenet.de</a>
            </p>

            <h2>Verantwortlich für Inhalte</h2>
            <p>
              Stephanie Meisner<br />
              Anschrift wie oben
            </p>

            <h2>Verbraucherstreitbeilegung</h2>
            <p>
              Es besteht keine Bereitschaft und keine Verpflichtung zur Teilnahme an einem
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle.
            </p>

            <h2>Haftung für Inhalte und Links</h2>
            <p>
              Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Eine Gewähr für
              Richtigkeit, Vollständigkeit und Aktualität kann dennoch nicht übernommen werden.
              Verlinkte externe Inhalte liegen in der Verantwortung der jeweiligen Anbieter.
            </p>

            <h2>Urheberrecht</h2>
            <p>
              Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen
              Urheberrecht. Jede darüber hinausgehende Verwertung bedarf der vorherigen
              Zustimmung der jeweiligen Rechteinhaberin.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
