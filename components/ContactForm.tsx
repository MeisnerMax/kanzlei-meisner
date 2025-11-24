"use client";
import { useState } from "react";
import Button from "@/components/Button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
};

const initial: FormState = { name: "", email: "", phone: "", subject: "", message: "", privacy: false };

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  function validate(v: FormState) {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!v.name.trim()) e.name = "Bitte geben Sie Ihren Namen an.";
    if (!v.email.trim()) e.email = "Bitte geben Sie Ihre E-Mail-Adresse an.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Bitte prüfen Sie die E-Mail-Adresse.";
    if (!v.subject.trim()) e.subject = "Bitte geben Sie einen Betreff an.";
    if (!v.message.trim()) e.message = "Bitte beschreiben Sie Ihr Anliegen.";
    if (!v.privacy) e.privacy = "Bitte stimmen Sie der Datenschutzerklärung zu.";
    return e;
  }

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((s) => ({ ...s, [key]: value }));
    setErrors((s) => ({ ...s, [key]: undefined }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    const eMap = validate(values);
    setErrors(eMap);
    if (Object.keys(eMap).length > 0) return;
    setSending(true);
    // Demo: Hier würde die Anfrage an ein Backend gesendet werden.
    // Wir simulieren den Versand nur im Frontend.
    setTimeout(() => {
      console.log("Kontaktformular (Demo)", values);
      setSending(false);
      setStatus("Versand-Demo: Ihre Anfrage würde jetzt übermittelt werden.");
      setValues(initial);
    }, 700);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-labelledby="contact-form-title">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Ihr Name</label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={(e) => onChange("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "error-name" : undefined}
            placeholder="Max Mustermann"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
          />
          {errors.name && <p id="error-name" className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
          <input
            id="email"
            type="email"
            name="email"
            value={values.email}
            onChange={(e) => onChange("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "error-email" : undefined}
            placeholder="beispiel@mail.de"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
          />
          {errors.email && <p id="error-email" className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Telefon</label>
          <input
            id="phone"
            name="phone"
            value={values.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="z. B. 0951 2000000"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Betreff</label>
          <input
            id="subject"
            name="subject"
            value={values.subject}
            onChange={(e) => onChange("subject", e.target.value)}
            aria-invalid={!!errors.subject}
            aria-describedby={errors.subject ? "error-subject" : undefined}
            placeholder="Kurzthema Ihres Anliegens"
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
          />
          {errors.subject && <p id="error-subject" className="mt-1 text-sm text-red-600">{errors.subject}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(e) => onChange("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "error-message" : undefined}
          placeholder="Beschreiben Sie Ihr Anliegen in wenigen Sätzen."
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 focus:border-primary-600 focus:ring-1 focus:ring-primary-600"
        />
        {errors.message && <p id="error-message" className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>
      <div className="flex items-start gap-3">
        <input
          id="privacy"
          name="privacy"
          type="checkbox"
          checked={values.privacy}
          onChange={(e) => onChange("privacy", e.target.checked)}
          aria-invalid={!!errors.privacy}
          aria-describedby={errors.privacy ? "error-privacy" : undefined}
          className="mt-1 h-4 w-4 rounded border-gray-300"
        />
        <label htmlFor="privacy" className="text-sm text-gray-700">
          Ich habe die <a className="underline" href="/datenschutz" target="_blank" rel="noreferrer">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung zu.
        </label>
      </div>
      {errors.privacy && <p id="error-privacy" className="text-sm text-red-600">{errors.privacy}</p>}
      <div className="flex items-center gap-3">
        <Button type="submit" disabled={sending}>{sending ? "Senden…" : "Jetzt Nachricht senden"}</Button>
        <a href="mailto:kanzlei@example.com?subject=Anfrage%20über%20Website" className="text-sm text-gray-700">oder per E-Mail</a>
      </div>
      {status && <p className="text-sm text-gray-700">{status}</p>}
      <div className="rounded-xl border border-white/40 bg-white/80 backdrop-blur-md p-4 text-sm text-gray-700">
        <p className="font-medium text-gray-900">Hinweis zum Datenschutz</p>
        <p>
          Ihre Angaben werden vertraulich behandelt. Wir verwenden Ihre Daten ausschließlich zur
          Bearbeitung Ihrer Anfrage. Es gelten die Hinweise unter <a className="underline" href="/datenschutz">Datenschutz</a>.
        </p>
      </div>
    </form>
  );
}
