import { z } from "zod";

const todayStr = () => new Date().toISOString().split("T")[0];

export const registrationSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^[0-9+\-\s()]{7,20}$/, "Invalid phone number"),
  dob: z
    .string()
    .min(1, "Date of birth is required")
    .refine((v) => !Number.isNaN(new Date(v).getTime()), "Invalid date")
    .refine((v) => v <= todayStr(), "Date of birth cannot be in the future"),
  course: z.string().min(1, "Please select a course"),
  gender: z.enum(["male", "female", "other"], {
    errorMap: () => ({ message: "Please select a gender" }),
  }),
  address: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to the DPDP consent to continue",
    }),
  }),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message too short"),
});
