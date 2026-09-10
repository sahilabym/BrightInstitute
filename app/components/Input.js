"use client";

import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, error, className = "", as = "input", children, ...props },
  ref
) {
  const baseFieldClass = `w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm font-medium shadow-sm outline-none transition
    placeholder:font-normal placeholder:text-brand-900/40
    focus:ring-4 focus:ring-brand-500/15 focus:border-brand-500
    ${error ? "border-red-400 focus:border-red-500 focus:ring-red-500/15" : "border-brand-100"} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label className="mb-1.5 block text-sm font-semibold text-brand-900">
          {label}
        </label>
      )}
      {as === "textarea" ? (
        <textarea ref={ref} className={baseFieldClass} rows={4} {...props} />
      ) : as === "select" ? (
        <select ref={ref} className={baseFieldClass} {...props}>
          {children}
        </select>
      ) : (
        <input ref={ref} className={baseFieldClass} {...props} />
      )}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
});

export default Input;
