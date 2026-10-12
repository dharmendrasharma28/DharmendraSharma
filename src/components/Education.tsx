"use client";

import { useRef } from "react";
import { education, certifications } from "@/data/resume";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";

export default function Education() {
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
    <section id="education" ref={scope} className="section section-alt">
      <div className="wrap grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <div className="reveal mb-6">
            <span className="mono text-accent">06 · Customs &amp; clearance</span>
            <h2 className="mt-2 font-display text-[clamp(1.6rem,3.5vw,2.2rem)] font-extrabold tracking-tight">
              Education
            </h2>
          </div>
          <ul className="reveal flex flex-col border-t border-line">
            {education.map((e) => (
              <li key={e.degree} className="grid grid-cols-[110px_1fr] gap-4 border-b border-dashed border-line py-4">
                <span className="mono pt-0.5 text-xs text-muted">{e.period}</span>
                <div>
                  <b className="font-display block font-bold">{e.degree}</b>
                  <span className="text-sm text-ink-2">
                    {e.school}
                    {e.note ? ` · ${e.note}` : ""}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mono reveal mt-4 text-xs text-muted">Languages · Hindi · English</p>
        </div>

        <div>
          <div className="reveal mb-6">
            <span className="mono text-accent">&nbsp;</span>
            <h2 className="mt-2 font-display text-[clamp(1.6rem,3.5vw,2.2rem)] font-extrabold tracking-tight">
              Certifications
            </h2>
          </div>
          <ul className="reveal flex flex-col gap-4">
            {certifications.map((c) => (
              <li key={c.code} className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 -rotate-6 place-items-center rounded-full border-[3px] border-double border-line bg-card text-center shadow-[2px_2px_0_var(--accent)]">
                  <span className="flex flex-col leading-none">
                    <b className="font-display text-sm font-extrabold">{c.code}</b>
                    <span className="mono mt-[2px] text-[7px] text-accent">cleared</span>
                  </span>
                </span>
                <span className="font-semibold">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
