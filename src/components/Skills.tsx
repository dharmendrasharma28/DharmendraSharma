"use client";

import { skillClusters } from "@/data/resume";
import { useReveal } from "@/lib/useReveal";

export default function Skills() {
  const scope = useReveal<HTMLElement>();

  return (
    <section id="skills" ref={scope} className="relative z-10 py-10 pb-24 md:pb-32 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* experience database — floating clusters around a core */}
        <div className="hidden md:block relative min-h-[600px] mt-4">
          <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
            <defs>
              <linearGradient id="skill-line" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <line x1="50%" y1="50%" x2="22%" y2="18%" stroke="url(#skill-line)" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="50%" y1="50%" x2="78%" y2="20%" stroke="url(#skill-line)" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="url(#skill-line)" strokeWidth="1" strokeDasharray="4 6" />
            <line x1="50%" y1="50%" x2="80%" y2="78%" stroke="url(#skill-line)" strokeWidth="1" strokeDasharray="4 6" />
          </svg>

          <div className="reveal-scale absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group">
            <div className="absolute inset-0 -m-4 rounded-full bg-primary/20 blur-xl animate-pulse-slow" />
            <div className="absolute inset-0 -m-2 rounded-full bg-secondary/10 blur-lg animate-pulse-slow" style={{ animationDelay: "1s" }} />
            <div className="relative w-56 h-56 rounded-full glass-panel flex flex-col items-center justify-center shadow-[0_0_50px_rgba(var(--primary-rgb),0.4),0_0_100px_rgba(var(--primary-rgb),0.2)] transition-all duration-500 group-hover:shadow-[0_0_80px_rgba(var(--primary-rgb),0.6),0_0_120px_rgba(var(--secondary-rgb),0.2)]">
              <svg width="36" height="36" viewBox="0 0 256 256" fill="currentColor" className="text-primary mb-2"><path d="M128,24C74.17,24,32,48.6,32,80v96c0,31.4,42.17,56,96,56s96-24.6,96-56V80C224,48.6,181.83,24,128,24Zm80,104c0,9.62-7.88,19.43-21.61,26.92C170.93,163.35,150.19,168,128,168s-42.93-4.65-58.39-13.08C55.88,147.43,48,137.62,48,128V111.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64Zm-21.61,74.92C170.93,211.35,150.19,216,128,216s-42.93-4.65-58.39-13.08C55.88,195.43,48,185.62,48,176V159.36c17.06,15,46.23,24.64,80,24.64s62.94-9.68,80-24.64V176C208,185.62,200.12,195.43,186.39,202.92Z" /></svg>
              <h3 className="font-display font-bold text-2xl text-white tracking-wide text-center">EXPERIENCE</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Database</p>
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)]" />
              </div>
            </div>
          </div>

          {skillClusters.map((c, i) => {
            const pos = [
              "top-[6%] left-[4%] lg:left-[12%] animate-float",
              "top-[8%] right-[4%] lg:right-[12%] animate-float-delayed",
              "bottom-[8%] left-[4%] lg:left-[12%] animate-float-fast",
              "bottom-[6%] right-[4%] lg:right-[12%] animate-float",
            ][i];
            const hover = c.tone === "primary" ? "hover:bg-primary/20" : "hover:bg-secondary/20";
            const border = c.tone === "primary" ? "border-l-primary" : "border-l-secondary";
            return (
              <div key={c.label} className={`reveal absolute w-64 z-10 ${pos}`} data-delay={0.15 + i * 0.1}>
                <div className="flex flex-wrap gap-3 justify-center">
                  {c.items.map((item, j) => (
                    <div
                      key={item}
                      className={`group relative px-4 py-2 rounded-full glass-panel ${hover} transition-all cursor-default ${j === 0 ? `border-l-4 ${border}` : ""}`}
                    >
                      <span className={`text-sm ${j === 0 ? "font-semibold text-slate-200" : "text-slate-300"}`}>{item}</span>
                      {j === 0 && <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping" />}
                    </div>
                  ))}
                </div>
                <p className="text-center text-[0.65rem] tracking-[0.3em] uppercase text-slate-500 mt-3">{c.label}</p>
              </div>
            );
          })}
        </div>

        {/* mobile fallback for clusters */}
        <div className="md:hidden mt-12 space-y-6">
          {skillClusters.map((c) => (
            <div key={c.label} className="reveal">
              <p className="text-[0.65rem] tracking-[0.3em] uppercase text-slate-500 mb-2">{c.label}</p>
              <div className="flex flex-wrap gap-2">
                {c.items.map((item) => (
                  <span key={item} className="px-3 py-1.5 rounded-full glass-panel text-xs text-slate-300">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
