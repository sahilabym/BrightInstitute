export const metadata = {
  title: "About Us",
  description:
    "Learn about Bright Institute's history, mission, vision, and world-class faculty.",
};

const faculty = [
  {
    name: "Dr. Meera Krishnan",
    role: "Dean, School of Sciences",
    bio: "20+ years in computational biology. Fulbright Scholar with 60+ publications.",
  },
  {
    name: "Prof. Alexander Wright",
    role: "Chair, Business School",
    bio: "Former McKinsey partner. Author of 'Strategy in Motion' (Harvard Press).",
  },
  {
    name: "Dr. Yuki Nakamura",
    role: "Head, Department of Literature",
    bio: "Comparative literature scholar and award-winning translator.",
  },
];

const milestones = [
  { year: "1985", text: "Founded as a small liberal arts college." },
  { year: "1998", text: "Launched School of Sciences & Engineering." },
  { year: "2011", text: "Introduced Business School and MBA program." },
  { year: "2024", text: "Ranked #1 in region, 12,000+ students strong." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-gradient py-24 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            Since 1985
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            About <span className="text-accent-400">Bright Institute</span>
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Four decades of shaping thinkers, leaders, and change-makers.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-100 bg-white p-8 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-2xl">
              🎯
            </div>
            <h3 className="mt-4 text-2xl font-bold text-brand-900">Our Mission</h3>
            <p className="mt-3 text-brand-900/75 leading-relaxed">
              To cultivate curious, rigorous, and compassionate minds by providing
              transformative academic experiences rooted in inquiry, integrity,
              and inclusion.
            </p>
          </div>
          <div className="rounded-2xl border border-accent-400/40 bg-accent-400/10 p-8 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-400/30 text-2xl">
              🌟
            </div>
            <h3 className="mt-4 text-2xl font-bold text-brand-900">Our Vision</h3>
            <p className="mt-3 text-brand-900/75 leading-relaxed">
              A globally respected institute where scholarship, creativity, and
              civic responsibility converge to advance knowledge and human
              wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-brand-50/60 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-500">
              Journey
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
              Our History
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m) => (
              <div
                key={m.year}
                className="rounded-2xl border border-brand-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="text-3xl font-extrabold text-brand-500">
                  {m.year}
                </div>
                <p className="mt-2 text-sm text-brand-900/75">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500">
            People
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-brand-900 sm:text-4xl">
            Faculty Highlights
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {faculty.map((f) => (
            <article
              key={f.name}
              className="rounded-2xl border border-brand-100 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-gradient font-bold text-2xl text-white shadow-soft">
                {f.name
                  .split(" ")
                  .map((p) => p[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-900">{f.name}</h3>
              <p className="text-sm font-semibold text-brand-500">{f.role}</p>
              <p className="mt-2 text-sm text-brand-900/70">{f.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
