"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#route", label: "Route" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      (el): el is Element => !!el
    );
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive("#" + en.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-[min(1200px,100%-2.5rem)] items-center justify-between">
        <a href="#top" className="flex items-center gap-3 font-display font-bold">
          <span className="grid h-9 w-9 -rotate-6 place-items-center rounded-md border border-line bg-accent text-sm font-extrabold text-accent-ink shadow-[3px_3px_0_var(--line)]">
            DS
          </span>
          <span className="hidden sm:inline">
            Dharmendra <b>Sharma</b>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                active === l.href ? "text-accent" : "text-ink-2 hover:text-ink"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-line bg-card px-4 py-1.5 text-sm font-semibold text-ink shadow-[3px_3px_0_var(--accent)] transition-transform hover:-translate-y-0.5"
          >
            Say hello
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card md:hidden"
          >
            <div className="flex flex-col gap-[4px]">
              <span
                className={`h-[2px] w-[18px] bg-ink transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span className={`h-[2px] w-[18px] bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
              <span
                className={`h-[2px] w-[18px] bg-ink transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-bg px-5 pb-4 md:hidden">
          <nav className="flex flex-col">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-3 text-sm font-medium text-ink-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full border border-line bg-card px-4 py-2 text-center text-sm font-semibold text-ink"
            >
              Say hello
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
