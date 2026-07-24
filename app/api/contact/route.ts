import { NextResponse } from "next/server";

const recipient = process.env.CONTACT_TO_EMAIL || "Meisner.bamberg@freenet.de";

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    if (clean(body.website, 200)) {
      return NextResponse.json({ ok: true });
    }

    const name = clean(body.name, 120);
    const email = clean(body.email, 200);
    const phone = clean(body.phone, 80);
    const conflictType = clean(body.conflictType, 120);
    const contactPreference = clean(body.contactPreference, 80);
    const otherParty = clean(body.otherParty, 80);
    const message = clean(body.message);
    const privacy = body.privacy === true;

    if (
      !name ||
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      !conflictType ||
      !otherParty ||
      !privacy
    ) {
      return NextResponse.json(
        { ok: false, message: "Bitte prüfen Sie die Pflichtfelder." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.CONTACT_FROM_EMAIL;
    if (!apiKey || !from) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Der sichere Formularversand ist noch nicht aktiviert. Bitte senden Sie Ihre Anfrage direkt an Meisner.bamberg@freenet.de."
        },
        { status: 503 }
      );
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: email,
        subject: `Mediationsanfrage: ${conflictType}`,
        html: `
          <h1>Neue vertrauliche Mediationsanfrage</h1>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Telefon:</strong> ${escapeHtml(phone || "nicht angegeben")}</p>
          <p><strong>Bevorzugte Rückmeldung:</strong> ${escapeHtml(contactPreference)}</p>
          <p><strong>Themenbereich:</strong> ${escapeHtml(conflictType)}</p>
          <p><strong>Andere Seite informiert:</strong> ${escapeHtml(otherParty)}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${escapeHtml(message || "keine Nachricht").replaceAll("\n", "<br>")}</p>
        `
      })
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "Die Anfrage konnte gerade nicht versendet werden. Bitte nutzen Sie die direkte E-Mail."
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Die Anfrage konnte nicht verarbeitet werden." },
      { status: 400 }
    );
  }
}
