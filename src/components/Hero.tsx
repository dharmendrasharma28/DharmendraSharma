"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { profile } from "@/data/resume";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero({ ready }: { ready: boolean }) {
  const scope = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ready) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.to(".hero-hello", { opacity: 1, y: 0, duration: 0.6 })
        .to(".hero-title", { opacity: 1, y: 0, duration: 0.8, stagger: 0.08 }, "-=0.35")
        .to(".hero-role", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .to(".hero-blurb", { opacity: 1, y: 0, duration: 0.6 }, "-=0.35")
        .to(".hero-actions", { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
        .to(".hero-canvas", { opacity: 1, duration: 1.1 }, "-=0.9");
    }, scope);
    return () => ctx.revert();
  }, [ready]);

  return (
    <section id="top" ref={scope} className="relative overflow-hidden pt-10 pb-24 sm:pt-16">
      <div className="hero-canvas pointer-events-none absolute inset-0 opacity-0">
        <Scene3D />
      </div>

      <div className="relative mx-auto grid w-[min(1200px,100%-2.5rem)] grid-cols-1 items-center gap-10 sm:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="hero-hello mono mb-3 translate-y-4 text-xs text-accent opacity-0">
            Hello, I am
          </p>
          <h1 className="font-display text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[0.95] tracking-tight">
            <span className="hero-title block translate-y-6 opacity-0">{profile.first}</span>
            <span className="hero-title block translate-y-6 opacity-0">{profile.last}</span>
          </h1>
          <p className="hero-role mt-4 translate-y-4 text-lg font-semibold opacity-0">
            {profile.role}
            <br />
            <span className="font-normal text-muted">
              {profile.company}, {profile.location}
            </span>
          </p>
          <p className="hero-blurb mt-4 max-w-[52ch] translate-y-4 text-ink-2 opacity-0">
            {profile.tagline}. 13+ years from writing Android code to leading a team of
            5–10 — shipping mobile products that move people and warehouses.
          </p>
          <div className="hero-actions mt-7 flex flex-wrap items-center gap-4 translate-y-4 opacity-0">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-ink shadow-[4px_4px_0_var(--line)] transition-transform hover:-translate-y-0.5"
            >
              See my work
            </a>
            <a
              href={profile.resumeHref}
              download
              className="rounded-full border-2 border-line px-6 py-3 text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Download résumé
            </a>
          </div>
        </div>

        <div className="relative mx-auto hidden aspect-[5/6] w-full max-w-[280px] sm:block">
          <div className="absolute -inset-2 -z-10 rounded-[28px] border border-line/60" />
          <Image
            src="/dharmendra.jpg"
            alt={profile.name}
            fill
            sizes="280px"
            priority
            className="rounded-[24px] border border-line object-cover shadow-[8px_8px_0_var(--line)]"
          />
        </div>
      </div>
    </section>
  );
}
