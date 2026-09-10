"use client";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
  const variants = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-600 focus:ring-brand-500 shadow-soft hover:-translate-y-0.5",
    accent:
      "bg-accent-400 text-brand-900 hover:bg-accent-500 focus:ring-accent-500 shadow-soft hover:-translate-y-0.5",
    outline:
      "border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white focus:ring-brand-500",
    ghost: "text-brand-500 hover:bg-brand-50 focus:ring-brand-500",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
