"use client";

import Image from "next/image";
import { profile } from "@/data/resume";
import { useReveal } from "@/lib/useReveal";

const STATS = [
  { value: "5M+", label: "Users" },
  { value: "10M+", label: "Downloads" },
  { value: "4.8★", label: "Store Rating" },
  { value: "40+", label: "Apps Published" },
  { value: "40", label: "Sites on LogiPick WMS" },
  { value: "99.9%", label: "Crash-Free Rate" },
  { value: "90%", label: "Faster Releases" },
  { value: "13+", label: "Years in Mobile" },
];

export default function About() {
  const scope = useReveal<HTMLElement>();

  return (
    <section id="about" ref={scope} className="relative z-10 py-16 lg:py-32 bg-bg-2 overflow-x-clip">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg-2 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-16">
          <div className="inline-block relative group cursor-default">
            <h2 className="text-5xl md:text-7xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-white pb-2">
              About Me
            </h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent group-hover:w-48 transition-all duration-700" />
          </div>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto font-light">
            {profile.tagline}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* portrait card */}
          <div className="reveal lg:col-span-5 relative group mt-8 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full blur-3xl -z-10 animate-pulse-slow" />
            <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden glass-panel border border-white/10 shadow-[0_0_50px_rgba(var(--primary-rgb),0.15)] transition-all duration-700 hover:shadow-[0_0_80px_rgba(var(--secondary-rgb),0.2)]">
              <Image src="/dharmendra.jpg" alt={profile.name} fill sizes="(max-width: 768px) 100vw, 40vw" priority className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent z-10 opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 z-10 mix-blend-overlay" />
              {/* HUD overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
                <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_20px_rgba(var(--primary-rgb),0.8),0_0_40px_rgba(var(--primary-rgb),0.4)] animate-scanline" />
                <div className="absolute top-6 left-6 w-8 h-8 border-l-2 border-t-2 border-primary/60" />
                <div className="absolute top-6 right-6 w-8 h-8 border-r-2 border-t-2 border-primary/60" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border-l-2 border-b-2 border-primary/60" />
                <div className="absolute bottom-6 right-6 w-8 h-8 border-r-2 border-b-2 border-primary/60" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                <div className="glass-panel inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 border border-green-500/30 bg-green-500/10">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[0.65rem] font-bold text-green-400 tracking-widest uppercase">Open to good problems</span>
                </div>
                <h3 className="text-3xl font-display font-bold text-white mb-1">{profile.name}</h3>
                <p className="text-sm text-slate-300 font-light flex items-center gap-1">
                  <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Z" /></svg>
                  {profile.location}
                </p>
              </div>
            </div>
            {/* floating badges */}
            <div className="absolute -right-2 md:-right-6 top-4 md:top-12 bg-slate-900/40 backdrop-blur-xl p-1.5 md:p-2.5 rounded-lg md:rounded-xl shadow-lg border border-white/10 z-30 animate-float">
              <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor" className="text-primary"><path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8ZM140,60a12,12,0,1,1-12-12A12,12,0,0,1,140,60Z" /></svg>
            </div>
            <div className="absolute -left-1 md:-left-4 top-1/4 md:top-1/3 bg-slate-900/40 backdrop-blur-xl p-1.5 md:p-2.5 rounded-lg md:rounded-xl shadow-lg border border-white/10 z-30 flex items-center gap-1 md:gap-2 animate-float-delayed">
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <div className="text-[0.6rem] md:text-xs font-mono pr-1 md:pr-2">
                <div className="text-emerald-500">Systems</div>
                <div className="text-emerald-500 font-semibold">Online</div>
              </div>
            </div>
          </div>

          {/* bio */}
          <div className="lg:col-span-7 lg:pt-2">
            <h2 className="reveal font-display text-[clamp(1.75rem,3.6vw,3rem)] font-extrabold leading-[1.08] tracking-tight text-white" data-delay="0.1">
              <span className="block whitespace-nowrap text-primary">Senior Manager</span>
              <span className="block whitespace-nowrap">Mobile Applications</span>
            </h2>

            <p className="reveal mt-5 md:mt-6 text-base md:text-[1.05rem] leading-relaxed text-slate-400 font-light max-w-[62ch]" data-delay="0.2">
              I lead mobile architecture, platform engineering, and delivery. Over 13+ years I&apos;ve published 40+ apps to
              the Play Store and App Store with 10M+ downloads and a 4.8★ rating, and today I lead the mobility and
              warehouse products at {profile.company} — including LogiPick, the WMS running across 40 sites.
            </p>

            <div className="reveal mt-8 md:mt-10" data-delay="0.3">
              <p className="flex items-center gap-3 text-[11px] font-mono font-semibold tracking-[0.35em] uppercase text-slate-400">
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]" />
                Track Record
              </p>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-5 md:gap-x-6">
                {STATS.map((st) => (
                  <div key={st.label} className="border-l border-white/15 pl-3 md:pl-4 py-0.5">
                    <span className="block text-2xl md:text-[1.75rem] font-semibold tracking-tight text-white whitespace-nowrap">{st.value}</span>
                    <span className="mt-1 block text-xs md:text-sm text-slate-400">{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
