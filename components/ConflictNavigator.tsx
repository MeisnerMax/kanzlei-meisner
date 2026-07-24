"use client";

import { useState } from "react";
import { ButtonLink } from "@/components/Button";
import { cn } from "@/lib/utils";

type Step = 0 | 1 | 2 | 3;

const questions = [
  {
    key: "field",
    title: "Worum geht es hauptsächlich?",
    options: ["Familie & Trennung", "Erbe & Nachlass", "Gesundheit", "Privater Konflikt"]
  },
  {
    key: "state",
    title: "Wie erleben Sie die Situation gerade?",
    options: ["Ein Gespräch ist noch möglich", "Wir drehen uns im Kreis", "Der Konflikt ist eskaliert"]
  },
  {
    key: "readiness",
    title: "Ist die andere Seite grundsätzlich gesprächsbereit?",
    options: ["Ja", "Das ist noch unklar", "Derzeit eher nicht"]
  }
] as const;

type Answers = Partial<Record<(typeof questions)[number]["key"], string>>;

export function ConflictNavigator() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<Answers>({});

  const current = step === 3 ? undefined : questions[step];

  function choose(key: keyof Answers, value: string) {
    setAnswers((previous) => ({ ...previous, [key]: value }));
    setStep((previous) => Math.min(previous + 1, 3) as Step);
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-ink/10 bg-white shadow-[0_30px_80px_rgba(25,37,34,0.1)]">
      <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
        <div className="relative overflow-hidden bg-ink p-8 text-ivory sm:p-10">
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border border-ivory/10" />
          <div className="absolute -bottom-12 -left-8 h-44 w-44 rounded-full border border-ivory/10" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sage-light">
            Konflikt-Navigator
          </p>
          <h3 className="mt-5 font-serif text-3xl font-medium leading-tight sm:text-4xl">
            Eine erste Orientierung – ohne Falldetails.
          </h3>
          <p className="mt-5 leading-7 text-ivory/65">
            Drei kurze Fragen helfen dabei einzuschätzen, ob ein vertrauliches
            Orientierungsgespräch sinnvoll sein könnte.
          </p>
          <div className="mt-10 flex gap-2" aria-label={`Schritt ${Math.min(step + 1, 3)} von 3`}>
            {[0, 1, 2].map((index) => (
              <span
                key={index}
                className={cn(
                  "h-1.5 flex-1 rounded-full transition-colors",
                  index <= step ? "bg-clay" : "bg-ivory/15"
                )}
              />
            ))}
          </div>
          <p className="mt-4 text-xs text-ivory/40">
            Ihre Antworten bleiben ausschließlich in Ihrem Browser.
          </p>
        </div>

        <div className="flex min-h-[27rem] flex-col justify-center p-8 sm:p-12">
          {current ? (
            <>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay">
                Frage {step + 1} von 3
              </p>
              <h4 className="mt-4 max-w-xl font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
                {current.title}
              </h4>
              <div className="mt-8 grid gap-3">
                {current.options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => choose(current.key, option)}
                    className="group flex min-h-14 items-center justify-between rounded-2xl border border-ink/12 bg-ivory/60 px-5 py-4 text-left font-semibold text-ink transition hover:-translate-y-0.5 hover:border-sage-dark hover:bg-sage/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-clay"
                  >
                    {option}
                    <span
                      aria-hidden="true"
                      className="text-clay transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </button>
                ))}
              </div>
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((step - 1) as Step)}
                  className="mt-6 self-start text-sm font-semibold text-ink/50 underline underline-offset-4 hover:text-ink"
                >
                  Eine Frage zurück
                </button>
              ) : null}
            </>
          ) : (
            <div aria-live="polite">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-clay">
                Ihre Orientierung
              </p>
              <h4 className="mt-4 font-serif text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Ein Orientierungsgespräch kann für Ihre Situation sinnvoll sein.
              </h4>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/65">
                Mediation braucht keine fertige Lösung. Entscheidend ist, ob ein
                sicherer Rahmen geschaffen werden kann, in dem beide Seiten
                wieder zuhören, abwägen und entscheiden können.
              </p>
              {answers.readiness === "Derzeit eher nicht" ? (
                <p className="mt-4 rounded-2xl bg-sand/70 p-4 text-sm leading-6 text-ink/70">
                  Wenn die andere Seite derzeit nicht gesprächsbereit ist, kann
                  zunächst geklärt werden, wie sie respektvoll und ohne Druck
                  angesprochen werden kann.
                </p>
              ) : null}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/kontakt">Vertraulich anfragen</ButtonLink>
                <button
                  type="button"
                  onClick={reset}
                  className="min-h-12 rounded-full px-5 text-sm font-semibold text-ink/55 hover:bg-sage/10 hover:text-ink"
                >
                  Neu starten
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
