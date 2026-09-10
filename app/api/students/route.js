import { NextResponse } from "next/server";
import { connectDB } from "../../lib/db";
import Student from "../../lib/models/Student";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  try {
    await connectDB();
    const students = await Student.find({}, { password: 0 })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json(
      { count: students.length, students },
      { status: 200 }
    );
  } catch (err) {
    console.error("[/api/students]", err);
    return NextResponse.json(
      { error: "Failed to fetch students" },
      { status: 500 }
    );
  }
}
