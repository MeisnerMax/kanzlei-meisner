import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Platzhalter: In Produktion hier E-Mail/CRM-Integration vorsehen.
  try {
    await request.text();
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}

