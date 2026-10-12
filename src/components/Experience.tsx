"use client";

import { useRef, useState } from "react";
import { experience } from "@/data/resume";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";

export default function Experience() {
  const scope = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<string | null>(experience[0]?.id ?? null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal", scope.current!).forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: (i % 7) * 0.04,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      gsap.to(".tl-line-fill", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".tl-rail",
          start: "top 75%",
          end: "bottom 85%",
          scrub: 0.6,
        },
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={scope} className="section">
      <div className="wrap">
        <div className="reveal mb-10 max-w-[62ch]">
          <span className="mono text-accent">03 · Tracking history</span>
          <h2 className="mt-2 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight">
            Every scan along the way.
          </h2>
          <p className="mt-3 text-ink-2">Newest first. Open any stop to read what happened there.</p>
        </div>

        <div className="relative">
          <div className="tl-rail absolute left-[13px] top-2 bottom-2 w-[2px] bg-line sm:left-[19px]">
            <div className="tl-line-fill h-full w-full origin-top scale-y-0 bg-accent" />
          </div>

          <ol className="flex flex-col gap-4">
            {experience.map((e, i) => {
              const open = openId === e.id;
              return (
                <li key={e.id} className="reveal relative pl-9 sm:pl-12">
                  <span
                    className={`absolute left-0 top-5 z-10 h-[18px] w-[18px] rounded-full border-2 sm:left-[11px] ${
                      i === 0
                        ? "border-line bg-accent shadow-[0_0_0_6px_color-mix(in_srgb,var(--accent)_25%,transparent)]"
                        : i === experience.length - 1
                          ? "border-line bg-ink"
                          : "border-line bg-card"
                    }`}
                  />
                  <div
                    className={`rounded-xl border border-line bg-card transition-shadow ${
                      open ? "shadow-[5px_5px_0_var(--line)]" : ""
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(open ? null : e.id)}
                      className="flex w-full flex-col gap-1 px-5 py-4 text-left sm:flex-row sm:items-center sm:gap-4"
                    >
                      <span
                        className={`mono inline-block w-fit shrink-0 rounded px-2 py-1 text-[10px] font-bold ${
                          i === 0
                            ? "bg-accent text-accent-ink"
                            : i === experience.length - 1
                              ? "bg-ink text-bg"
                              : "border border-line text-ink-2"
                        }`}
                      >
                        {i === 0 ? "Delivered" : i === experience.length - 1 ? "Picked up" : "In transit"}
                      </span>
                      <span className="flex-1">
                        <span className="block font-display font-bold">
                          {e.role} · {e.org}
                        </span>
                        <span className="mono block text-[11px] text-muted">
                          {e.place} · {e.period}
                        </span>
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        className={`h-4 w-4 shrink-0 text-ink-2 transition-transform ${open ? "rotate-180" : ""}`}
                      >
                        <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {open && (
                      <div className="border-t border-dashed border-line px-5 pb-5 pt-3">
                        {e.tag && <p className="mono mb-2 text-xs font-bold text-accent">{e.tag}</p>}
                        <ul className="flex flex-col gap-2">
                          {e.bullets.map((b, bi) => (
                            <li key={bi} className="flex gap-2 text-sm text-ink-2">
                              <span className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-[1px] bg-accent" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
