import RegistrationForm from "../components/RegistrationForm";

export const metadata = {
  title: "Student Registration",
  description:
    "Register as a student at Bright Institute. Create your account to apply for a program.",
};

export default function RegisterPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-gradient py-16 text-white">
        <div className="absolute inset-0 bg-hero-radial" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            Admissions 2026
          </span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">
            Student <span className="text-accent-400">Registration</span>
          </h1>
          <p className="mt-3 text-white/85">
            Create your account to apply for admission. Takes under 2 minutes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-soft sm:p-10">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-brand-900">
              Your Details
            </h2>
            <p className="mt-1 text-sm text-brand-900/70">
              Fields marked * are required.
            </p>
          </div>
          <RegistrationForm />
        </div>
      </section>
    </>
  );
}
