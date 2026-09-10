"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Academics" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100/70 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Logo — bold, easy to read */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient font-extrabold text-white text-lg shadow-soft transition-transform group-hover:scale-105">
            B
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-brand-900">
              Bright <span className="text-brand-500">School</span>
            </span>
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.18em] text-brand-500/80">
              Nursery to Grade 12 · CBSE
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(l.href)
                    ? "text-brand-500"
                    : "text-brand-900 hover:text-brand-500"
                }`}
              >
                {l.label}
                {isActive(l.href) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />
                )}
              </Link>
            </li>
          ))}
          <li className="ml-3">
            <Link
              href="/register"
              className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-600"
            >
              Admissions
            </Link>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          className="rounded-md p-2 text-brand-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-brand-100 bg-white md:hidden">
          <ul className="flex flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 text-sm font-medium ${
                    isActive(l.href)
                      ? "bg-brand-50 text-brand-500"
                      : "text-brand-900 hover:bg-brand-50"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-lg bg-brand-500 px-3 py-2.5 text-center font-semibold text-white shadow-soft"
              >
                Admissions
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
