"use client";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { COURSES } from "../lib/courses";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  course: "",
  gender: "",
  address: "",
  consent: false,
};

export default function RegistrationForm() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const now = new Date();
  const maxDate = new Date(now.getFullYear() - 3, now.getMonth(), now.getDate())
    .toISOString()
    .split("T")[0];
  const minDate = new Date(now.getFullYear() - 19, 0, 1)
    .toISOString()
    .split("T")[0];

  const referenceId = useMemo(() => {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  }, []);

  // const referenceId = "sahil@gmail.com";

  useEffect(() => {
    console.log("[ReferenceId]", referenceId);
    window.Anumati?.identify?.({ referenceId });
  }, [referenceId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => {
      const fieldValue = type === "checkbox" ? checked : value;
      const next = { ...f, [name]: fieldValue };

      // Push whatever we have so far into the widget. Merge semantic —
      // name updates without wiping DOB and vice versa.
      if (name === "dob") {
        console.log("[DOB]", value);
        window.Anumati?.identify?.({
          dateOfBirth: value,
          // name: next.fullName, // ← pass current name too
        });
      }

      if (name === "fullName") {
        console.log("[Name]", value);
        window.Anumati?.identify?.({ name: value }); // ← new
      }

      return next;
    });
  };

  const handleSubmit = async (e) => {
    if (e?.preventDefault) e.preventDefault();
    console.log("[form] click → hitting API with:", form);
    setServerError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, referenceId }),
      });
      console.log("[form] status:", res.status);
      const json = await res.json().catch(() => ({}));
      console.log("[form] body:", json);

      if (!res.ok) {
        setServerError(json.error || `Failed (${res.status})`);
        toast.error(json.error || "Registration failed");
        return;
      }
      toast.success("Registration successful!");
      setForm(initialForm);
    } catch (err) {
      console.error("[form] fetch error:", err);
      setServerError("Network error. Please try again.");
      toast.error("Network error");
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    "w-full rounded-lg border border-brand-100 bg-white px-3.5 py-2.5 text-sm font-medium shadow-sm outline-none transition placeholder:font-normal placeholder:text-brand-900/40 focus:ring-4 focus:ring-brand-500/15 focus:border-brand-500";
  const label = "mb-1.5 block text-sm font-semibold text-brand-900";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      <div>
        <label className={label}>
          Student's Full Name <span className="text-red-500">*</span>
        </label>
        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="e.g. Aarav Sharma"
          required
          className={field}
        />
      </div>
      <div>
        <label className={label}>
          Date of Birth <span className="text-red-500">*</span>
        </label>
        <input
          id="da-minor-consent"
          type="date"
          name="dob"
          value={form.dob}
          min={minDate}
          max={maxDate}
          onChange={handleChange}
          required
          className={field}
        />
      </div>

      {/* <div>
        <label className={label}>Parent's Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="parent@example.com"
          className={field}
        />
      </div>

      <div>
        <label className={label}>Parent's Phone Number</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          className={field}
        />
      </div> */}

      <div>
        <label className={label}>
          Grade / Class <span className="text-red-500">*</span>
        </label>
        <select
          name="course"
          value={form.course}
          onChange={handleChange}
          required
          className={field}
        >
          <option value="">Select a grade</option>
          {COURSES.map((c) => (
            <option key={c.slug} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={label}>
          Gender <span className="text-red-500">*</span>
        </label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          required
          className={field}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="md:col-span-2">
        <label className={label}>
          Address <span className="text-red-500">*</span>
        </label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Street, City, State"
          rows={4}
          required
          className={field}
        />
      </div>

      {serverError && (
        <div className="md:col-span-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </div>
      )}

      <div className="md:col-span-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            da-trigger="student_registration_for_bright_institute"
            checked={form.consent}
            onChange={handleChange}
            className="h-4 w-4 rounded border-brand-300 text-brand-500 focus:ring-2 focus:ring-brand-500/30 cursor-pointer"
          />
          <span className="text-sm text-brand-900/85">
            I agree to the processing of my personal data under the{" "}
            <span className="font-semibold text-brand-500">DPDP Act, 2023</span>
            .
          </span>
        </label>
      </div>

      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          // onClick={handleSubmit}
          disabled={submitting || !form.consent}
          className="inline-flex items-center justify-center rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-600 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Submitting…" : "Submit Enquiry →"}
        </button>
      </div>
    </form>
  );
}
