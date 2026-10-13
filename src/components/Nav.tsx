"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import ThemeToggle from "./ThemeToggle";

const LINKS = [
  { href: "#about", label: "ABOUT ME" },
  { href: "#skills", label: "SKILLS" },
  { href: "#best-works", label: "BEST WORKS" },
  { href: "#contact", label: "CONTACTS" },
];

const TAGLINE = "Mobile•Platform•AI".split("");

export function Logo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div className="flex flex-col group cursor-pointer">
      <div className="font-display font-light tracking-widest text-white text-2xl md:text-3xl">
        <span className="text-primary font-normal">DHAR</span>MEN<span className="text-secondary font-bold">D</span>RA
      </div>
      <div
        className="text-white/80 mt-1 uppercase font-medium overflow-hidden w-full flex justify-between text-[0.55rem] md:text-[0.65rem] transition-all duration-500"
        style={{ opacity: collapsed ? 0 : 1, height: collapsed ? 0 : "auto" }}
      >
        {TAGLINE.map((ch, i) => (
          <span key={i} className={ch === "•" ? "opacity-50" : ""}>
            {ch}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter((el): el is Element => !!el);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActive("#" + en.target.id)),
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-logo",
        { opacity: 0, filter: "blur(8px)", y: -20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 0.8, delay: 3.4, ease: "power3.out" }
      );
      gsap.fromTo(
        ".nav-link",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, delay: 3.8, ease: "power2.out" }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      ref={root}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center gap-4">
        <a className="nav-logo group flex-shrink-0 min-w-0 opacity-0" href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <Logo collapsed={scrolled} />
        </a>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide relative">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className={`nav-link relative py-2 transition-colors duration-300 cursor-pointer group opacity-0 ${
                active === l.href ? "text-primary" : "text-slate-300 hover:text-secondary"
              }`}
            >
              <span className="relative">
                {l.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 origin-left transition-transform duration-300 ${
                    active === l.href ? "bg-primary scale-x-100" : "bg-secondary scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </span>
            </button>
          ))}
          <a
            href="/Dharmendra-Sharma-Resume.pdf"
            download
            className="nav-link relative flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer glass-panel border border-white/10 hover:border-primary/50 transition-colors duration-300 group opacity-0"
          >
            <span className="text-xs font-bold tracking-wider text-slate-300 group-hover:text-primary transition-colors">CV</span>
            <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" className="text-slate-400 group-hover:text-primary transition-colors">
              <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z" />
            </svg>
          </a>
          <ThemeToggle className="nav-link opacity-0" />
        </div>

        <div className="md:hidden flex items-center gap-2">
        <ThemeToggle />
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden relative p-3 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg cursor-pointer"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between">
            <span className={`block h-0.5 bg-current rounded-full origin-center transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full origin-center transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="glass-nav mt-3 px-6 py-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => go(l.href)}
              className="text-left py-3 text-sm font-medium tracking-wide text-slate-300 hover:text-primary border-b border-white/5 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a href="/Dharmendra-Sharma-Resume.pdf" download className="mt-3 text-center py-3 rounded-full glass-panel border border-white/10 text-xs font-bold tracking-wider text-slate-300">
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </nav>
  );
}
