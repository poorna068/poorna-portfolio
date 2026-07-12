"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#hero"
          className="font-[family-name:var(--font-display)] text-base font-semibold text-text"
        >
          Poorna Chandrika
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                active === s.id
                  ? "bg-surface text-text"
                  : "text-text-muted hover:text-text"
              }`}
            >
              {s.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-2 !px-4 !py-2 !text-sm">
            Let&apos;s talk
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-text md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="relative block h-3 w-4">
            <span
              className={`absolute left-0 h-[1.5px] w-4 bg-text transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 h-[1.5px] w-4 bg-text transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-4 bg-text transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-surface md:hidden" aria-label="Primary mobile">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="block px-5 py-3 text-sm text-text-muted last:border-b-0"
            >
              {s.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
