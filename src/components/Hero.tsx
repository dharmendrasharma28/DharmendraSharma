"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useTheme } from "@/lib/useTheme";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" className="group-hover:translate-x-1 transition-transform">
    <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
  </svg>
);

export default function Hero() {
  const scope = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      // Reference timing: orb alone on black for ~2s, then the headline blurs in,
      // then subtitle / buttons. The nav logo follows (see Nav.tsx).
      tl.fromTo(".hero-scene", { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 1.0, ease: "power2.out" }, 0)
        .fromTo(".hero-arrow", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.4)
        .to(".hero-word", { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.0, stagger: 0.2 }, 2.2)
        .to(".hero-sub", { opacity: 1, y: 0, duration: 0.8 }, 2.9)
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.8 }, 3.2);
    }, scope);
    return () => ctx.revert();
  }, []);

  const go = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="top" ref={scope} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20">
      {/* 3D orb */}
      <div className="hero-scene absolute inset-0 z-0 opacity-0">
        <Scene3D light={theme === "light"} />
      </div>

      {/* ambient blobs */}
      <div className="absolute inset-0 pointer-events-none z-[1] overflow-hidden">
        <div className="absolute top-[5%] left-[5%] md:left-[20%] w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-primary/5 md:bg-primary/10 rounded-full mix-blend-screen blur-[100px] md:blur-[120px] animate-blob" />
        <div className="absolute bottom-[5%] right-[5%] md:right-[20%] w-[20rem] md:w-[30rem] h-[20rem] md:h-[30rem] bg-secondary/5 rounded-full mix-blend-screen blur-[100px] md:blur-[120px] animate-blob-delayed" />
        <div className="absolute top-[35%] left-[45%] md:left-[60%] w-[18rem] md:w-[20rem] h-[18rem] md:h-[20rem] bg-purple-500/5 rounded-full mix-blend-screen blur-[80px] md:blur-[100px] animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <div className="mb-8 md:mb-10">
          <h1 className="neon-text text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight">
            <span className="hero-word block md:inline text-transparent bg-clip-text bg-gradient-to-b from-primary via-primary to-primary/50 drop-shadow-glow drop-shadow-[0_0_40px_rgba(var(--primary-rgb),0.6)] opacity-0 blur-[10px] translate-y-[30px]">
              Build.
            </span>{" "}
            <span className="hero-word block md:inline text-transparent bg-clip-text bg-gradient-to-b from-secondary via-secondary to-secondary/50 drop-shadow-glow drop-shadow-[0_0_40px_rgba(var(--secondary-rgb),0.6)] opacity-0 blur-[10px] translate-y-[30px]">
              Lead.
            </span>{" "}
            <span className="hero-word block md:inline text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 drop-shadow-glow drop-shadow-[0_0_30px_rgba(var(--accent-rgb),0.45)] opacity-0 blur-[10px] translate-y-[30px]">
              Ship.
            </span>
          </h1>
          <p className="hero-sub mt-4 md:mt-6 text-lg md:text-xl font-light max-w-2xl mx-auto px-4 opacity-0 translate-y-5">
            <span className="text-primary/70">Android &amp; iOS</span>
            <span className="text-slate-500"> • </span>
            <span className="text-secondary/70">Platform Engineering</span>
            <span className="text-slate-500"> • </span>
            <span className="text-white/70">Team Leadership</span>
          </p>
        </div>

        <div className="hero-cta flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0 opacity-0 translate-y-5">
          <button
            onClick={() => go("#about")}
            className="group inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-all duration-300 cursor-pointer bg-white text-slate-900 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] relative overflow-hidden after:absolute after:inset-0 after:bg-gradient-to-r after:from-primary after:via-purple-500 after:to-secondary after:opacity-0 hover:after:opacity-20 after:transition-opacity after:duration-300 px-8 py-4 text-base"
          >
            <span className="relative z-10 flex items-center gap-2">
              INITIATE SYSTEM
              <ArrowRight />
            </span>
          </button>
          <button
            onClick={() => go("#best-works")}
            className="inline-flex items-center justify-center gap-2 rounded-full font-bold tracking-wide transition-all duration-300 cursor-pointer glass-panel border border-white/10 text-white hover:bg-white/10 px-8 py-4 text-base"
          >
            VIEW PORTFOLIO
          </button>
        </div>
      </div>

      <button
        onClick={() => go("#about")}
        aria-label="Scroll down"
        className="hero-arrow absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 cursor-pointer hover:scale-110 transition-transform opacity-0"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="text-slate-400/50 hover:text-primary transition-colors">
          <path d="M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z" />
        </svg>
      </button>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg-2 via-bg-2/60 to-transparent z-[5] pointer-events-none" />
    </section>
  );
}
