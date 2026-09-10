import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: { type: String, required: true, trim: true },
    dob: { type: Date },
    course: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "other"] },
    address: { type: String, trim: true },
    consent: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
