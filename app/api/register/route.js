import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "../../lib/db";
import Student from "../../lib/models/Student";
import { registrationSchema } from "../../lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();

    const parsed = registrationSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Validation failed",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { confirmPassword, password, email, ...rest } = parsed.data;

    await connectDB();

    const existing = await Student.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    const student = await Student.create({
      ...rest,
      email: email.toLowerCase(),
      password: hashed,
      dob: rest.dob ? new Date(rest.dob) : undefined,
    });

    return NextResponse.json(
      {
        message: "Registration successful",
        student: {
          id: student._id,
          fullName: student.fullName,
          email: student.email,
          course: student.course,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[/api/register]", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
