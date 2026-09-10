import Link from "next/link";
import HeroSection from "./components/HeroSection";
import { COURSES } from "./lib/courses";

export const metadata = {
  title: "Home",
  description:
    "Bright Institute — where tradition meets innovation. Explore world-class academic programs.",
};

const stats = [
  { label: "Years of Excellence", value: "40+" },
  { label: "Enrolled Students", value: "12,000+" },
  { label: "Expert Faculty", value: "350+" },
  { label: "Global Partners", value: "80+" },
];

const features = [
  {
    icon: "🎓",
    title: "World-Class Faculty",
    text: "Learn from leading scholars, researchers, and industry veterans.",
  },
  {
    icon: "🌐",
    title: "Global Exposure",
    text: "Exchange programs across 20+ partner universities worldwide.",
  },
  {
    icon: "💼",
    title: "Career Ready",
    text: "96% placement rate with dedicated mentorship and internships.",
  },
  {
    icon: "🔬",
    title: "Modern Labs",
    text: "State-of-the-art research facilities and creative studios.",
  },
];

const testimonials = [
  {
    quote:
      "Bright shaped the way I think. The faculty push you to be curious, rigorous, and kind.",
    name: "Priya Sharma",
    role: "MBA, Class of 2023",
  },
  {
    quote:
      "The Computer Science program is world-class. I landed a role at a top firm right out of college.",
    name: "Daniel Okafor",
    role: "B.Sc. CS, Class of 2024",
  },
  {
    quote:
      "A campus that felt like family. I found mentors, friends, and my purpose here.",
    name: "Aiko Tanaka",
    role: "B.A. Literature, Class of 2022",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Stats */}
      <section className="relative -mt-10 z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-brand-100 bg-white p-6 shadow-soft md:grid-cols-4 md:p-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-brand-500 md:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-900/70 md:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500">
            Why Bright
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            An education built to <span className="brand-underline">last a lifetime</span>
          </h2>
          <p className="mt-3 text-brand-900/70">
            Every program is designed around rigor, mentorship, and real-world impact.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-soft"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-2xl group-hover:bg-brand-500/10">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-brand-900">
                {f.title}
              </h3>
              <p className="mt-1.5 text-sm text-brand-900/70">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Programs */}
      <section className="bg-brand-50/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-500">
                Programs
              </span>
              <h2 className="mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
                Featured Courses
              </h2>
            </div>
            <Link
              href="/courses"
              className="text-sm font-semibold text-brand-500 hover:text-brand-600"
            >
              View all programs →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.slice(0, 3).map((c) => (
              <article
                key={c.slug}
                className="group flex flex-col rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="mb-3 inline-block self-start rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-500">
                  {c.duration}
                </div>
                <h3 className="text-xl font-bold text-brand-900 group-hover:text-brand-500">
                  {c.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-brand-900/70">
                  {c.description}
                </p>
                <Link
                  href="/register"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-500 hover:gap-2 hover:text-brand-600 transition-all"
                >
                  Apply Now →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-brand-gradient py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-accent-400">
              Voices
            </span>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Stories from our students
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="relative rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-md"
              >
                <div className="absolute -top-4 left-6 text-5xl leading-none text-accent-400">
                  “
                </div>
                <p className="mt-2 text-white/90 leading-relaxed">{t.quote}</p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent-400 font-bold text-brand-900">
                    {t.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/70">{t.role}</div>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-brand-900 p-10 text-center text-white shadow-soft sm:p-16">
          <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand-500/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Ready to begin your journey?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">
              Admissions for the 2026 academic year are now open. Secure your seat today.
            </p>
            <Link
              href="/register"
              className="mt-8 inline-block rounded-lg bg-accent-400 px-8 py-3.5 font-semibold text-brand-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-accent-500"
            >
              Register Now →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
