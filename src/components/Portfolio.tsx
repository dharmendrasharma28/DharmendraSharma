"use client";

import { useState } from "react";
import { projects, projectCategories } from "@/data/resume";
import { useReveal } from "@/lib/useReveal";

const SPANS = [
  "md:col-span-4 md:row-span-2",
  "md:col-span-2 md:row-span-2",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-2 md:row-span-2",
  "md:col-span-3 md:row-span-1",
  "md:col-span-3 md:row-span-1",
];
const TINTS = [
  "from-primary/30 to-background-dark",
  "from-secondary/30 to-background-dark",
  "from-purple-500/25 to-background-dark",
  "from-emerald-500/20 to-background-dark",
  "from-sky-500/25 to-background-dark",
  "from-amber-500/20 to-background-dark",
  "from-rose-500/20 to-background-dark",
];

export default function Portfolio() {
  const scope = useReveal<HTMLElement>();
  const [filter, setFilter] = useState("All");
  const visible = projects.filter((p) => filter === "All" || p.categories.includes(filter));

  return (
    <section id="portfolio" ref={scope} className="relative z-10 py-20 lg:py-32 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">Portfolio</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Complete Project Gallery</p>
        </div>

        <div className="reveal flex flex-wrap justify-center gap-3 mb-12" data-delay="0.1">
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                filter === c
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)]"
                  : "glass-panel text-slate-300 hover:bg-white/10 border border-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[200px] grid-flow-dense">
          {visible.map((p, i) => {
            const idx = projects.indexOf(p);
            const big = SPANS[i % SPANS.length].includes("row-span-2");
            return (
              <div key={p.id} className={`reveal group cursor-pointer ${SPANS[i % SPANS.length]}`} data-delay={(i % 4) * 0.08}>
                <div className="relative h-full w-full rounded-2xl glass-panel overflow-hidden border border-white/5 group-hover:border-primary/40 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.2)]">
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                    <div className={`w-full h-full bg-gradient-to-br ${TINTS[idx % TINTS.length]}`}>
                      <span className="absolute bottom-2 right-3 font-mono text-[5rem] md:text-[7rem] leading-none font-bold text-white/[0.04] select-none">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/90 to-background-dark/50" />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end p-5 z-10">
                    <span className="absolute top-3 right-3 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/10 text-slate-300 backdrop-blur-sm border border-white/20">
                      {p.categories[0]}
                    </span>
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono text-white bg-black/70 backdrop-blur-sm border border-white/20">
                      {p.period}
                    </span>
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-[10px] font-mono tracking-widest text-primary/80 mb-1">{p.org}</p>
                      <h3 className={`font-display font-bold text-white mb-1.5 ${big ? "text-xl md:text-2xl" : "text-lg md:text-xl"}`}>{p.name}</h3>
                      <p className="text-xs md:text-sm text-slate-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        {p.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                        {p.tags.map((t) => (
                          <span key={t} className="px-1.5 py-0.5 rounded text-[9px] font-mono text-slate-300 bg-white/10 border border-white/20">{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                      <div className="w-12 h-12 rounded-full bg-primary/30 backdrop-blur-md flex items-center justify-center border border-primary/50">
                        <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="text-white"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" /></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">And a decade of apps, SDKs and releases before these.</p>
          <a href="https://www.linkedin.com/in/dharmendra-sharma-462a7b79" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-panel border border-white/10 hover:border-primary/50 text-sm font-bold tracking-wider text-slate-300 hover:text-primary transition-all">
            See More on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
