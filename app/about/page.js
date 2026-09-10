export const metadata = {
  title: "About Us",
  description:
    "Learn about Bright School's history, mission, vision, and dedicated teaching faculty.",
};

const faculty = [
  {
    name: "Mrs. Anjali Verma",
    role: "Principal",
    bio: "M.A., B.Ed. with 25+ years in school leadership. CBSE Resource Person.",
  },
  {
    name: "Mr. Rajeev Kapoor",
    role: "Vice-Principal (Senior Wing)",
    bio: "Physics educator with 18 years experience mentoring board and JEE aspirants.",
  },
  {
    name: "Ms. Sunita Rao",
    role: "Headmistress (Primary Wing)",
    bio: "Early-childhood specialist focused on activity-based, joyful learning.",
  },
];

const milestones = [
  { year: "2000", text: "Founded as a small pre-primary school with 60 students." },
  { year: "2008", text: "Upgraded to Senior Secondary with CBSE affiliation." },
  { year: "2015", text: "New campus with smart classrooms, labs, and sports ground." },
  { year: "2024", text: "2,400+ students; 98% Class 12 board pass rate." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-gradient py-24 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            Since 2000
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            About <span className="text-accent-400">Bright School</span>
          </h1>
          <p className="mt-4 text-lg text-white/85">
            25 years of nurturing children into confident, curious, and caring young adults.
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
              To nurture curious, confident, and compassionate children through
              a balanced blend of strong academics, sports, arts, and moral values.
            </p>
          </div>
          <div className="rounded-2xl border border-accent-400/40 bg-accent-400/10 p-8 shadow-sm">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-400/30 text-2xl">
              🌟
            </div>
            <h3 className="mt-4 text-2xl font-bold text-brand-900">Our Vision</h3>
            <p className="mt-3 text-brand-900/75 leading-relaxed">
              To be a school where every child feels safe, valued, and inspired
              to become a lifelong learner and responsible citizen.
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
