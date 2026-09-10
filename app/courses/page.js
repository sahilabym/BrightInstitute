import Link from "next/link";
import { COURSES } from "../lib/courses";

export const metadata = {
  title: "Academics",
  description:
    "Explore Bright School's academic offerings from Pre-Primary through Grade 12 (CBSE).",
};

export default function CoursesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-gradient py-24 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            CBSE Curriculum · Nur–12
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Our <span className="text-accent-400">Academics</span>
          </h1>
          <p className="mt-4 text-lg text-white/85">
            A structured learning journey from Pre-Primary through Grade 12 — Science, Commerce & Humanities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COURSES.map((c) => (
            <article
              key={c.slug}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-soft"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-brand-500/5 transition group-hover:bg-brand-500/10" />
              <div className="relative">
                <div className="mb-3 inline-block rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-500">
                  {c.duration}
                </div>
                <h2 className="text-xl font-bold text-brand-900 group-hover:text-brand-500">
                  {c.name}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-900/70">
                  {c.description}
                </p>
                <Link
                  href="/register"
                  className="mt-5 inline-flex items-center gap-1 rounded-lg bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:gap-2 hover:bg-brand-600"
                >
                  Enroll Now →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
