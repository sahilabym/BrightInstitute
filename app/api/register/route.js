import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import Student from "../../lib/models/Student";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    console.log("[/api/register] body:", body);

    await connectDB();

    const student = await Student.create({
      ...body,
      email: body.email?.toLowerCase(),
      dob: body.dob ? new Date(body.dob) : undefined,
    });

    return NextResponse.json(
      {
        message: "Registration successful",
        student: {
          id: student._id,
          fullName: student.fullName,
          email: student.email,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[/api/register] error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
