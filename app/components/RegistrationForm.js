"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { registrationSchema } from "@/app/lib/validation";
import { COURSES } from "@/app/lib/courses";
import Button from "./Button";
import Input from "./Input";

export default function RegistrationForm() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: { gender: "" },
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    setServerError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setServerError(json.error || "Registration failed");
        toast.error(json.error || "Registration failed");
        return;
      }
      toast.success("Registration successful! Welcome aboard.");
      reset();
    } catch (err) {
      setServerError("Network error. Please try again.");
      toast.error("Network error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid gap-5 md:grid-cols-2"
      noValidate
    >
      <Input
        label="Full Name *"
        placeholder="Jane Doe"
        {...register("fullName")}
        error={errors.fullName?.message}
      />
      <Input
        label="Email *"
        type="email"
        placeholder="you@example.com"
        {...register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Phone Number *"
        placeholder="+1 555 123 4567"
        {...register("phone")}
        error={errors.phone?.message}
      />
      <Input
        label="Date of Birth"
        type="date"
        {...register("dob")}
        error={errors.dob?.message}
      />
      <Input
        as="select"
        label="Course *"
        {...register("course")}
        error={errors.course?.message}
      >
        <option value="">Select a program</option>
        {COURSES.map((c) => (
          <option key={c.slug} value={c.name}>
            {c.name}
          </option>
        ))}
      </Input>
      <Input
        as="select"
        label="Gender *"
        {...register("gender")}
        error={errors.gender?.message}
      >
        <option value="">Select gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Input>
      <div className="md:col-span-2">
        <Input
          as="textarea"
          label="Address"
          placeholder="Street, City, State"
          {...register("address")}
          error={errors.address?.message}
        />
      </div>
      <Input
        label="Password *"
        type="password"
        placeholder="Minimum 8 characters"
        {...register("password")}
        error={errors.password?.message}
      />
      <Input
        label="Confirm Password *"
        type="password"
        placeholder="Re-enter password"
        {...register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />

      {serverError && (
        <div className="md:col-span-2 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {serverError}
        </div>
      )}

      <div className="md:col-span-2 flex justify-end">
        <Button type="submit" variant="primary" disabled={submitting}>
          {submitting ? "Submitting…" : "Create Account →"}
        </Button>
      </div>
    </form>
  );
}
