"use client";

import { useRef } from "react";
import { projects } from "@/data/resume";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";

export default function Projects() {
  const scope = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal", scope.current!).forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: (i % 7) * 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={scope} className="section section-alt">
      <div className="wrap">
        <div className="reveal mb-10 max-w-[62ch]">
          <span className="mono text-accent">04 · Cargo</span>
          <h2 className="mt-2 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight">
            What&apos;s in the boxes.
          </h2>
          <p className="mt-3 text-ink-2">
            Products I&apos;ve led or built — from the loading dock to a LangGraph pipeline.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li
              key={p.id}
              className={`reveal group relative flex flex-col gap-3 overflow-hidden rounded-2xl border bg-card p-5 shadow-[5px_5px_0_var(--line)] transition-transform hover:-translate-y-1 ${
                p.featured ? "border-accent sm:col-span-2" : "border-line"
              }`}
            >
              <div className="mono -mx-5 -mt-5 mb-1 flex items-center justify-between border-b border-line bg-bg-2 px-5 py-2 text-[10px] text-muted">
                <span>SKU {p.sku}</span>
                <span>{p.org}</span>
                <span>{p.period}</span>
              </div>
              {p.featured && (
                <span className="mono absolute right-4 top-14 rotate-6 rounded border border-line bg-accent px-2 py-1 text-[10px] font-bold text-accent-ink shadow-[2px_2px_0_var(--line)]">
                  Capstone
                </span>
              )}
              <h3 className="font-display text-xl font-extrabold">{p.name}</h3>
              <p className="flex-1 text-sm text-ink-2">{p.description}</p>
              <ul className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="mono rounded border border-line px-2 py-1 text-[10px]">
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
