import { NextResponse } from "next/server";
import { parseEnquiryPayload } from "@/lib/email/enquiry";
import { sendEnquiryEmail } from "@/lib/email/send-enquiry";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseEnquiryPayload(body);

    if (!payload) {
      return NextResponse.json(
        { error: "Please provide your name and a valid enquiry." },
        { status: 400 }
      );
    }

    if (!payload.service) {
      return NextResponse.json(
        { error: "Please select an event type or service." },
        { status: 400 }
      );
    }

    await sendEnquiryEmail(payload);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[enquiry]", error);
    return NextResponse.json(
      {
        error:
          "We could not send your enquiry right now. Please WhatsApp or call us directly.",
      },
      { status: 500 }
    );
  }
}
