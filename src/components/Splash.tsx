"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const R = 54;
const CIRC = 2 * Math.PI * R;

export default function Splash({ onDone }: { onDone: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const markRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let skip = false;
    try {
      skip = sessionStorage.getItem("ds-splash-seen") === "1";
    } catch {}

    const finish = () => {
      root.style.display = "none";
      onDone();
    };

    if (skip) {
      finish();
      return;
    }

    try {
      sessionStorage.setItem("ds-splash-seen", "1");
    } catch {}

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      finish();
      return;
    }

    if (ringRef.current) {
      ringRef.current.style.strokeDasharray = `${CIRC}`;
      ringRef.current.style.strokeDashoffset = `${CIRC}`;
    }

    const counter = { val: 0 };
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.fromTo(
      markRef.current,
      { opacity: 0, scale: 0.7 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(2)" },
      0
    )
      .to(
        counter,
        {
          val: 100,
          duration: 1.5,
          ease: "power1.inOut",
          onUpdate: () => {
            if (countRef.current) countRef.current.textContent = String(Math.floor(counter.val));
            if (ringRef.current) {
              ringRef.current.style.strokeDashoffset = `${CIRC * (1 - counter.val / 100)}`;
            }
          },
        },
        0.1
      )
      .to(root, { autoAlpha: 0, duration: 0.5, ease: "power2.inOut" }, "+=0.2")
      .call(finish);

    return () => {
      tl.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg"
    >
      <div className="relative grid h-32 w-32 place-items-center">
        <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90 text-accent">
          <circle cx="60" cy="60" r={R} fill="none" stroke="var(--line)" strokeWidth="3" />
          <circle
            ref={ringRef}
            cx="60"
            cy="60"
            r={R}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <span
          ref={markRef}
          className="grid h-16 w-16 -rotate-6 place-items-center rounded-xl border border-line bg-accent font-display text-xl font-extrabold text-accent-ink opacity-0 shadow-[3px_3px_0_var(--line)]"
        >
          DS
        </span>
      </div>
      <div className="flex items-baseline gap-1 font-display text-4xl font-bold text-ink">
        <span ref={countRef}>0</span>
        <span className="text-lg text-muted">%</span>
      </div>
      <p className="mono text-[11px] text-muted">Loading the portfolio</p>
    </div>
  );
}
