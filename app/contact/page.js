"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { contactSchema } from "../lib/validation";
import Input from "../components/Input";
import Button from "../components/Button";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        toast.error(json.error || "Failed to send message");
        return;
      }
      toast.success("Message sent! We'll be in touch.");
      reset();
    } catch {
      toast.error("Network error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative overflow-hidden bg-brand-gradient py-20 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Contact <span className="text-accent-400">Us</span>
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Have a question? Our admissions team responds within 24 hours.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-5 lg:px-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold text-brand-900">Reach Out</h2>
          <p className="mt-2 text-brand-900/70">
            Prefer email or phone? Here's where to find us.
          </p>

          <div className="mt-8 space-y-5">
            {[
              { icon: "📍", label: "Address", value: "123 School Road, Sector 21, New Delhi 110075" },
              { icon: "✉️", label: "Email", value: "admissions@brightschool.edu.in" },
              { icon: "📞", label: "Phone", value: "+91 98765 43210" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-xl border border-brand-100 bg-white p-4 shadow-sm">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500/10 text-lg">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-500">
                    {item.label}
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-brand-900">
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:col-span-3 grid gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-8"
          noValidate
        >
          <h3 className="text-lg font-bold text-brand-900">Send a Message</h3>
          <Input
            label="Name"
            placeholder="Your full name"
            {...register("name")}
            error={errors.name?.message}
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            as="textarea"
            label="Message"
            rows={5}
            placeholder="Tell us how we can help..."
            {...register("message")}
            error={errors.message?.message}
          />
          <div className="flex justify-end">
            <Button type="submit" variant="primary" disabled={submitting}>
              {submitting ? "Sending…" : "Send Message →"}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
