"use client";

import { useRef } from "react";
import { profile } from "@/data/resume";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { gsap } from "@/lib/gsap";

export default function Contact() {
  const scope = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".reveal", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: scope.current, start: "top 85%" },
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={scope} className="section">
      <div className="wrap">
        <div className="reveal relative overflow-hidden rounded-[28px] border border-line bg-card p-8 shadow-[8px_8px_0_var(--line)] sm:p-14">
          <span className="mono absolute right-6 top-6 rotate-6 rounded border border-accent px-3 py-1 text-[11px] font-bold text-accent">
            Dispatch
          </span>
          <span className="mono text-accent">07 · Say hello</span>
          <h2 className="mt-3 max-w-[18ch] font-display text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
            Let&apos;s build something useful together.
          </h2>
          <p className="mt-4 max-w-[58ch] text-ink-2">
            Open to good problems in mobile, platforms and logistics. I reply within one
            business day — faster than most couriers.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            <li>
              <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-3 font-semibold">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <path d="m3 7 9 6 9-6" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
                <span className="border-b-2 border-transparent group-hover:border-accent">{profile.email}</span>
              </a>
            </li>
            <li>
              <a href={`tel:${profile.phoneHref}`} className="group inline-flex items-center gap-3 font-semibold">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" aria-hidden="true">
                  <path
                    d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="border-b-2 border-transparent group-hover:border-accent">{profile.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-3 font-semibold"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-accent" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8 10v7M8 7v.5M12 17v-4a2 2 0 0 1 4 0v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
                <span className="border-b-2 border-transparent group-hover:border-accent">{profile.linkedinLabel}</span>
              </a>
            </li>
          </ul>

          <a
            href={`mailto:${profile.email}?subject=Hello%20Dharmendra`}
            className="mt-9 inline-block rounded-full bg-accent px-7 py-3 text-sm font-bold text-accent-ink shadow-[4px_4px_0_var(--line)] transition-transform hover:-translate-y-0.5"
          >
            Send a message
          </a>
        </div>
      </div>
    </section>
  );
}
