"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/resume";
import { useReveal } from "@/lib/useReveal";

const FEATURED = ["alyte", "wms", "capstone", "sir"];
const GRADIENTS = [
  "from-primary/40 via-[#0a1a2e] to-secondary/30",
  "from-secondary/40 via-[#1a0a0e] to-primary/30",
  "from-purple-500/40 via-[#120a1e] to-primary/30",
  "from-primary/30 via-[#0a1420] to-emerald-500/20",
];

export default function BestWorks() {
  const scope = useReveal<HTMLElement>();
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const items = FEATURED.map((id) => projects.find((p) => p.id === id)!).filter(Boolean);

  const scrollTo = useCallback((i: number) => {
    const el = track.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(items.length - 1, i));
    const child = el.children[clamped] as HTMLElement | undefined;
    if (child) el.scrollTo({ left: child.offsetLeft - 16, behavior: "smooth" });
    setIndex(clamped);
  }, [items.length]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => {
      const children = Array.from(el.children) as HTMLElement[];
      const left = el.scrollLeft + 16;
      let best = 0;
      let bestDist = Infinity;
      children.forEach((c, i) => {
        const d = Math.abs(c.offsetLeft - left);
        if (d < bestDist) { bestDist = d; best = i; }
      });
      setIndex(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="best-works" ref={scope} className="relative z-10 py-12 md:py-16 pb-20 md:pb-24 w-full overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] md:w-[800px] h-[300px] md:h-[600px] bg-secondary/5 rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1920px] mx-auto w-full px-4 md:px-8 mb-12 flex justify-between items-end">
        <div className="reveal">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight">Best Works</h2>
          <p className="text-slate-400 mt-2 text-sm tracking-[0.2em] uppercase opacity-80">Curated Portfolio Selection</p>
        </div>
        <div className="hidden sm:flex space-x-3 md:space-x-4">
          <button
            onClick={() => scrollTo(index - 1)}
            aria-label="Previous"
            className="w-10 h-10 md:w-14 md:h-14 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-all group border border-white/10 hover:border-primary/50 cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-slate-300 group-hover:text-primary transition-colors"><path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" /></svg>
          </button>
          <button
            onClick={() => scrollTo(index + 1)}
            aria-label="Next"
            className="w-10 h-10 md:w-14 md:h-14 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-all group border border-white/10 hover:border-secondary/50 cursor-pointer"
          >
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-slate-300 group-hover:text-secondary transition-colors"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" /></svg>
          </button>
        </div>
      </div>

      <div
        ref={track}
        className="flex py-4 px-4 md:px-8 gap-4 md:gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar"
      >
        {items.map((p, i) => (
          <div key={p.id} className="flex-[0_0_85%] md:flex-[0_0_60%] min-w-0 snap-start">
            <div className="reveal relative h-[50vh] md:h-[60vh] group cursor-pointer" data-delay={i * 0.1}>
              <div className="absolute -inset-1 bg-gradient-to-br from-secondary/30 via-transparent to-blue-500/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative h-full w-full rounded-[2rem] glass-panel overflow-hidden border border-white/5 group-hover:border-white/20 transition-all duration-500 shadow-2xl shadow-black/60">
                <div className={`absolute inset-0 bg-gradient-to-br ${GRADIENTS[i % GRADIENTS.length]} transition-all duration-700 ease-out group-hover:scale-105`}>
                  <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)] [background-size:48px_48px]" />
                  <span className="absolute -top-6 -right-4 font-display font-extrabold text-[9rem] md:text-[14rem] leading-none text-white/[0.04] select-none tracking-tighter">
                    {p.sku.split("-")[0]}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 via-40% to-transparent transition-all duration-500 group-hover:from-black group-hover:via-black/80 group-hover:to-black/50" />
                </div>

                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 pb-8 md:p-10 md:pb-12">
                  <div className="flex flex-wrap items-center gap-1.5 mb-3 md:mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-full text-[9px] md:text-[10px] font-semibold tracking-wider uppercase backdrop-blur-sm bg-white/10 text-slate-300 border border-white/15">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl md:text-5xl font-display font-bold text-white mb-2 md:mb-3 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                    {p.name} <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">{p.org}</span>
                  </h3>
                  <p className="text-sm md:text-base text-slate-200 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">{p.period}</p>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-32 transition-all duration-500 delay-100">
                    <p className="text-sm md:text-lg text-slate-300 max-w-2xl mt-3 leading-relaxed font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      {p.description}
                    </p>
                  </div>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 delay-150">
                    <div className="mt-4 md:mt-6 flex items-center gap-3 md:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <a href="#portfolio" className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider text-white border-b border-primary pb-0.5 hover:text-primary transition-colors">
                        VIEW IN GALLERY
                        <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" /></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, i) => (
          <button key={i} onClick={() => scrollTo(i)} aria-label={`Go to slide ${i + 1}`} className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-primary" : "w-2 bg-white/20 hover:bg-white/40"}`} />
        ))}
      </div>
    </section>
  );
}
