"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";

/**
 * Animates every .reveal / .reveal-left / .reveal-right / .reveal-scale
 * inside the returned ref into view when scrolled to (framer-motion
 * `whileInView` equivalent, implemented with GSAP ScrollTrigger).
 */
export function useReveal<T extends HTMLElement>() {
  const scope = useRef<T>(null);

  useIsomorphicLayoutEffect(() => {
    if (!scope.current) return;
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(
        ".reveal, .reveal-left, .reveal-right, .reveal-scale",
        scope.current!
      );
      els.forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.to(el, {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return scope;
}
