import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import Contact from "../../lib/models/Contact";
import { contactSchema } from "../../lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    await connectDB();
    const doc = await Contact.create(parsed.data);

    return NextResponse.json(
      { message: "Message received", id: doc._id },
      { status: 201 }
    );
  } catch (err) {
    console.error("[/api/contact]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
