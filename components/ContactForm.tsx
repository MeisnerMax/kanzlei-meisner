"use client";

import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import Button from "@/components/Button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  conflictType: string;
  contactPreference: string;
  otherParty: string;
  message: string;
  privacy: boolean;
  website: string;
};

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  conflictType: "",
  contactPreference: "E-Mail",
  otherParty: "",
  message: "",
  privacy: false,
  website: ""
};

type FieldError = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FieldError>({});
  const [status, setStatus] = useState<{ kind: "success" | "error"; text: string } | null>(null);
  const [sending, setSending] = useState(false);

  function validate(value: FormState) {
    const next: FieldError = {};
    if (!value.name.trim()) next.name = "Bitte geben Sie Ihren Namen an.";
    if (!value.email.trim()) next.email = "Bitte geben Sie Ihre E-Mail-Adresse an.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email)) {
      next.email = "Bitte prüfen Sie die E-Mail-Adresse.";
    }
    if (!value.conflictType) next.conflictType = "Bitte wählen Sie einen Themenbereich.";
    if (!value.otherParty) next.otherParty = "Bitte wählen Sie eine Antwort.";
    if (!value.privacy) next.privacy = "Bitte bestätigen Sie die Datenschutzhinweise.";
    return next;
  }

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const body = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !body.ok) {
        throw new Error(body.message || "Die Anfrage konnte nicht versendet werden.");
      }
      setStatus({
        kind: "success",
        text: "Vielen Dank. Ihre Anfrage wurde vertraulich übermittelt. Sie erhalten zeitnah eine persönliche Rückmeldung."
      });
      setValues(initial);
    } catch (error) {
      setStatus({
        kind: "error",
        text:
          error instanceof Error
            ? error.message
            : "Die Anfrage konnte nicht versendet werden. Bitte nutzen Sie die direkte E-Mail."
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6" aria-label="Kontaktanfrage">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Ihr Name" id="name" error={errors.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={(event) => onChange("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            className="field-control"
          />
        </Field>
        <Field label="E-Mail-Adresse" id="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => onChange("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            className="field-control"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Telefon (optional)" id="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => onChange("phone", event.target.value)}
            className="field-control"
          />
        </Field>
        <Field label="Bevorzugte Rückmeldung" id="contactPreference">
          <select
            id="contactPreference"
            name="contactPreference"
            value={values.contactPreference}
            onChange={(event) => onChange("contactPreference", event.target.value)}
            className="field-control"
          >
            <option>E-Mail</option>
            <option>Telefon</option>
          </select>
        </Field>
      </div>

      <Field label="Worum geht es im Kern?" id="conflictType" error={errors.conflictType}>
        <select
          id="conflictType"
          name="conflictType"
          value={values.conflictType}
          onChange={(event) => onChange("conflictType", event.target.value)}
          aria-invalid={Boolean(errors.conflictType)}
          className="field-control"
        >
          <option value="">Bitte auswählen</option>
          <option>Familie & Trennung</option>
          <option>Erbe & Nachlass</option>
          <option>Gesundheit & Behandlung</option>
          <option>Privater Konflikt</option>
          <option>Anderes Thema</option>
        </select>
      </Field>

      <Field
        label="Weiß die andere Seite bereits von Ihrem Wunsch nach Mediation?"
        id="otherParty"
        error={errors.otherParty}
      >
        <select
          id="otherParty"
          name="otherParty"
          value={values.otherParty}
          onChange={(event) => onChange("otherParty", event.target.value)}
          aria-invalid={Boolean(errors.otherParty)}
          className="field-control"
        >
          <option value="">Bitte auswählen</option>
          <option>Ja</option>
          <option>Nein</option>
          <option>Unsicher</option>
          <option>Nicht relevant</option>
        </select>
      </Field>

      <Field label="Kurze Nachricht (optional)" id="message">
        <textarea
          id="message"
          name="message"
          rows={5}
          maxLength={2000}
          value={values.message}
          onChange={(event) => onChange("message", event.target.value)}
          placeholder="Bitte noch keine sensiblen Gesundheitsdaten oder ausführlichen Falldetails senden."
          className="field-control resize-y"
        />
      </Field>

      <div className="absolute -left-[10000px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => onChange("website", event.target.value)}
        />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm leading-6 text-ink/70" htmlFor="privacy">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            checked={values.privacy}
            onChange={(event) => onChange("privacy", event.target.checked)}
            aria-invalid={Boolean(errors.privacy)}
            className="mt-1 h-4 w-4 rounded border-ink/25 text-clay focus:ring-clay"
          />
          <span>
            Ich habe die{" "}
            <Link href="/datenschutz" target="_blank" className="font-semibold underline decoration-clay underline-offset-4">
              Datenschutzhinweise
            </Link>{" "}
            gelesen und bin mit der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage
            einverstanden.
          </span>
        </label>
        {errors.privacy ? <p className="mt-2 text-sm font-semibold text-red-700">{errors.privacy}</p> : null}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? "Wird vertraulich gesendet …" : "Anfrage senden"}
        </Button>
        <a
          href="mailto:Meisner.bamberg@freenet.de?subject=Vertrauliche%20Anfrage%20zur%20Mediation"
          className="text-sm font-semibold underline decoration-clay underline-offset-4"
        >
          Direkt per E-Mail
        </a>
      </div>

      <p aria-live="polite" className={status?.kind === "error" ? "text-sm font-semibold text-red-700" : "text-sm font-semibold text-sage-dark"}>
        {status?.text}
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  children
}: {
  label: string;
  id: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="field-label">{label}</label>
      {children}
      {error ? <p className="mt-2 text-sm font-semibold text-red-700">{error}</p> : null}
    </div>
  );
}
