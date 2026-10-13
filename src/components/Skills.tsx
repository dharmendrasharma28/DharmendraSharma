"use client";

import { services, skillClusters, tools } from "@/data/resume";
import { useReveal } from "@/lib/useReveal";

const ICONS: Record<string, React.ReactNode> = {
  MOBILE: <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16Zm8,200a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" />,
  CORE: <path d="M232,104H208V88a16,16,0,0,0-16-16H176V48a16,16,0,0,0-16-16H96A16,16,0,0,0,80,48V72H64A16,16,0,0,0,48,88v16H24a8,8,0,0,0,0,16H48v16H24a8,8,0,0,0,0,16H48v16a16,16,0,0,0,16,16H80v24a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V184h16a16,16,0,0,0,16-16V152h24a8,8,0,0,0,0-16H208V120h24a8,8,0,0,0,0-16ZM96,48h64V72H96ZM160,208H96V184h64Zm32-40H64V88H192Z" />,
  AI: <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Zm16,144a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V80A16,16,0,0,1,56,64H200a16,16,0,0,1,16,16Zm-52-56H92a28,28,0,0,0,0,56h72a28,28,0,0,0,0-56Zm-28,16v24H120V152Zm-56,12a12,12,0,0,1,12-12h12v24H92A12,12,0,0,1,80,164Zm84,12H152V152h12a12,12,0,0,1,0,24ZM72,108a12,12,0,1,1,12,12A12,12,0,0,1,72,108Zm88,0a12,12,0,1,1,12,12A12,12,0,0,1,160,108Z" />,
  LEAD: <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />,
};

const TONE = {
  primary: {
    bar: "from-primary",
    iconHover: "group-hover:text-primary",
    badge: "text-primary/80 border-primary/30 bg-primary/10 shadow-[0_0_8px_rgba(var(--primary-rgb),0.3)]",
    dot: "bg-primary",
  },
  secondary: {
    bar: "from-secondary",
    iconHover: "group-hover:text-secondary",
    badge: "text-secondary/80 border-secondary/30 bg-secondary/10 shadow-[0_0_8px_rgba(var(--secondary-rgb),0.3)]",
    dot: "bg-secondary",
  },
} as const;

export default function Skills() {
  const scope = useReveal<HTMLElement>();

  return (
    <section id="skills" ref={scope} className="relative z-10 py-10 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((s, i) => {
            const t = TONE[s.tone];
            return (
              <div
                key={s.code}
                data-delay={i * 0.1}
                className={`reveal group relative p-8 rounded-2xl glass-panel overflow-hidden transition-all duration-300 hover:bg-white/5 ${
                  s.highlight ? "bg-gradient-to-b from-primary/5 to-transparent border-primary/20" : ""
                }`}
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${t.bar} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                {s.highlight && <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-all" />}
                <div className="flex items-start justify-between mb-4">
                  <span className={`${s.highlight ? "text-white" : "text-slate-400"} ${t.iconHover} transition-colors`}>
                    <svg width="32" height="32" viewBox="0 0 256 256" fill="currentColor">{ICONS[s.code]}</svg>
                  </span>
                  <span className={`text-xs font-mono border rounded px-2 py-1 ${t.badge}`}>{s.code}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{s.blurb}</p>
                <ul className="space-y-2 text-sm text-slate-400">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${t.dot}`} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* experience database — floating clusters around a core */}
        <div className="hidden md:block relative min-h-[600px] mt-20">
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

      {/* tools inventory marquee */}
      <div className="reveal mt-20 md:mt-24">
        <p className="text-center text-xs tracking-[0.3em] uppercase text-slate-500 mb-6">Tools Inventory</p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]">
          <div className="flex w-max animate-scroll-x gap-4 pr-4">
            {[...tools, ...tools].map((t, i) => (
              <span key={i} className="px-5 py-2 rounded-full glass-panel border border-white/5 text-xs font-mono tracking-widest text-slate-400 whitespace-nowrap hover:text-white hover:border-primary/40 transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
