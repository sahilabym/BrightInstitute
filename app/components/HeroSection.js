import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-gradient text-white">
      <div className="absolute inset-0 bg-hero-radial" />
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-2 md:items-center lg:px-8 lg:py-32">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-400 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent-400 animate-pulse" />
            Admissions Open · Session 2026–27
          </span>
          <h1 className="mt-6 font-extrabold leading-[1.05] text-4xl sm:text-5xl lg:text-6xl">
            Where Young Minds
            <br />
            Grow <span className="text-accent-400">Brighter</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 leading-relaxed">
            Bright School blends the CBSE curriculum with holistic learning —
            from Nursery to Grade 12. Caring teachers, safe campus, and a strong
            focus on academics, sports, and values.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/register"
              className="rounded-lg bg-white px-7 py-3.5 font-semibold text-brand-600 shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-50"
            >
              Apply for Admission →
            </Link>
            <Link
              href="/courses"
              className="rounded-lg border-2 border-white/40 px-7 py-3.5 font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              View Academics
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/75">
            <div className="flex items-center gap-2">
              <span className="text-accent-400">★★★★★</span>
              <span>CBSE Affiliated · Grades Nursery–12</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              <span>25+ years of academic excellence</span>
            </div>
          </div>
        </div>

        {/* Illustration card */}
        <div className="relative hidden md:block">
          <div className="relative mx-auto max-w-md rotate-2 rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition hover:rotate-0">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-400 text-brand-900 font-bold">
                A+
              </div>
              <div>
                <div className="font-semibold">Admission Snapshot</div>
                <div className="text-xs text-white/70">Session 2026–27</div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { k: "Grades", v: "Nur–12" },
                { k: "Teachers", v: "120+" },
                { k: "Students", v: "2,400" },
                { k: "Board Result", v: "98%" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-xl bg-white/10 p-4 ring-1 ring-white/15"
                >
                  <div className="text-2xl font-extrabold">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-white/70">
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl bg-brand-500/40 p-4 text-sm">
              🎒 Apply by 31 March for the 2026–27 academic session.
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-accent-400/30 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
