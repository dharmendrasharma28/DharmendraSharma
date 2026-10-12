"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Splash({ onDone }: { onDone: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [skip] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem("ds-splash-seen") === "1";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (skip) {
      onDone();
      return;
    }
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    try {
      sessionStorage.setItem("ds-splash-seen", "1");
    } catch {}

    if (reduceMotion) {
      onDone();
      return;
    }

    const counter = { val: 0 };
    const path = pathRef.current;
    const len = path ? path.getTotalLength() : 0;
    if (path) {
      path.style.strokeDasharray = `${len}`;
      path.style.strokeDashoffset = `${len}`;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => onDone(),
    });

    tl.to(path, { strokeDashoffset: 0, duration: 1.0, ease: "power3.inOut" }, 0)
      .to(
        counter,
        {
          val: 100,
          duration: 1.3,
          ease: "power1.inOut",
          onUpdate: () => {
            if (countRef.current) countRef.current.textContent = String(Math.floor(counter.val));
            if (barRef.current) barRef.current.style.width = `${counter.val}%`;
          },
        },
        0.1
      )
      .to(rootRef.current, { autoAlpha: 0, duration: 0.5, ease: "power2.inOut" }, "+=0.15")
      .set(rootRef.current, { display: "none" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (skip) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-bg"
    >
      <svg viewBox="0 0 160 160" className="h-24 w-24 text-accent" aria-hidden="true">
        <path
          ref={pathRef}
          d="M30 120 V40 h28 a28 28 0 0 1 0 56 H40 M96 40 v80 M96 40 h22 a18 18 0 0 1 0 36 h-22 m0 4 h24 a18 18 0 0 1 0 36 h-24"
          fill="none"
          stroke="currentColor"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex items-baseline gap-1 font-display text-4xl font-bold text-ink">
        <span ref={countRef}>0</span>
        <span className="text-lg text-muted">%</span>
      </div>
      <div className="h-[2px] w-48 overflow-hidden rounded-full bg-line">
        <div ref={barRef} className="h-full w-0 bg-accent" />
      </div>
      <p className="mono text-[11px] text-muted">Loading the portfolio</p>
    </div>
  );
}
