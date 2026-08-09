import { NextResponse } from "next/server";
import { parseEnquiryPayload } from "@/lib/email/enquiry";
import { sendEnquiryEmail } from "@/lib/email/send-enquiry";

const ROBOTS_HEADERS = { "X-Robots-Tag": "noindex, nofollow" } as const;

function jsonResponse(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: ROBOTS_HEADERS });
}

export function GET() {
  return jsonResponse({ error: "Method not allowed" }, 405);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = parseEnquiryPayload(body);

    if (!payload) {
      return jsonResponse(
        { error: "Please provide your name and a valid enquiry." },
        400
      );
    }

    if (!payload.service) {
      return jsonResponse(
        { error: "Please select an event type or service." },
        400
      );
    }

    await sendEnquiryEmail(payload);

    return jsonResponse({ ok: true }, 200);
  } catch (error) {
    console.error("[enquiry]", error);
    return jsonResponse(
      {
        error:
          "We could not send your enquiry right now. Please WhatsApp or call us directly.",
      },
      500
    );
  }
}
