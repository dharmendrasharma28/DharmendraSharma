"use client";

import { useRef } from "react";
import { skillGroups } from "@/data/resume";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";

export default function Skills() {
  const scope = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal", scope.current!).forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: (i % 6) * 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={scope} className="section">
      <div className="wrap">
        <div className="reveal mb-10 max-w-[62ch]">
          <span className="mono text-accent">05 · Packing manifest</span>
          <h2 className="mt-2 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight">
            Declared contents.
          </h2>
          <p className="mt-3 text-ink-2">Everything inspected, nothing undeclared.</p>
        </div>

        <div className="reveal grid grid-cols-1 overflow-hidden rounded-2xl border border-line bg-card shadow-[6px_6px_0_var(--line)] sm:grid-cols-3">
          {skillGroups.map((g, gi) => (
            <div
              key={g.title}
              className={`p-6 ${gi < skillGroups.length - 1 ? "border-b border-dashed border-line sm:border-b-0 sm:border-r" : ""}`}
            >
              <h3 className="mono mb-4 text-xs text-accent">{g.title}</h3>
              <ul className="flex flex-col gap-3">
                {g.items.map((it) => (
                  <li key={it.name} className="relative pl-7">
                    <span className="absolute left-0 top-[3px] h-[18px] w-[18px] rounded border border-line bg-bg" />
                    <svg viewBox="0 0 24 24" className="absolute left-[3px] top-[6px] h-[12px] w-[12px] text-accent">
                      <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <b className="font-display block font-bold leading-tight">{it.name}</b>
                    <span className="text-sm text-ink-2">{it.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
