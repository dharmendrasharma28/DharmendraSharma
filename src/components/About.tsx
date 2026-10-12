"use client";

import { useRef } from "react";
import { profile, passions } from "@/data/resume";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";

export default function About() {
  const scope = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal", scope.current!).forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: (i % 6) * 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={scope} className="section section-alt">
      <div className="wrap grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div className="reveal">
          <span className="mono text-accent">02 · About</span>
          <p className="mt-3 max-w-[58ch] text-xl font-semibold leading-snug text-ink">
            I build mobile products end to end — from the first Android screen
            to the platform behind it — and I lead the people who build them with me.
          </p>
          <p className="mt-4 max-w-[60ch] text-ink-2">{profile.summary}</p>
        </div>
        <div className="reveal">
          <h3 className="mono mb-3 text-xs text-muted">Off the clock</h3>
          <ul className="flex flex-wrap gap-2">
            {passions.map((p, i) => (
              <li
                key={p}
                className="rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold shadow-[2px_2px_0_var(--line)]"
                style={{ transform: i % 2 ? "rotate(2deg)" : "rotate(-2deg)" }}
              >
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
