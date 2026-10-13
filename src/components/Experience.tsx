"use client";

import { experience, education, certifications } from "@/data/resume";
import { useReveal } from "@/lib/useReveal";

export default function Experience() {
  const scope = useReveal<HTMLElement>();

  return (
    <section id="experience" ref={scope} className="relative z-10 py-20 lg:py-28">
      <div className="absolute top-1/3 -left-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4">Career Log</h2>
          <p className="text-slate-400 text-sm tracking-[0.2em] uppercase opacity-80">13 years · 7 companies · 3 cities</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* timeline */}
          <div className="lg:col-span-7 relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-white/10 to-transparent" />
            <div className="space-y-6">
              {experience.map((e, i) => (
                <div key={e.id} className="reveal relative pl-10" data-delay={i * 0.06}>
                  <span className={`absolute left-0 top-5 w-6 h-6 rounded-full border flex items-center justify-center ${
                    e.status === "current" ? "border-primary bg-primary/20 shadow-[0_0_15px_rgba(var(--primary-rgb),0.6)]" : "border-white/15 bg-background-dark"
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${e.status === "current" ? "bg-primary animate-pulse" : "bg-white/30"}`} />
                  </span>
                  <div className="glass-panel glass-card-hover rounded-2xl p-6 border border-white/5">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-lg font-display font-bold text-white">{e.role}</h3>
                        <p className="text-sm text-primary">{e.org} <span className="text-slate-500">· {e.place}</span></p>
                      </div>
                      <span className="text-[10px] font-mono tracking-wider text-slate-400 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">{e.period}</span>
                    </div>
                    {e.tag && <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-secondary mb-3">{e.tag}</span>}
                    <ul className="space-y-1.5 text-sm text-slate-400">
                      {e.bullets.slice(0, 3).map((b) => (
                        <li key={b} className="flex gap-2"><span className="mt-2 w-1 h-1 rounded-full bg-primary shrink-0" />{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* education + certifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="reveal-right glass-panel rounded-2xl p-6 md:p-8 border border-white/5">
              <p className="text-xs font-mono tracking-widest text-primary mb-4">EDUCATION</p>
              <div className="space-y-5">
                {education.map((ed) => (
                  <div key={ed.degree} className="border-l-2 border-white/10 pl-4 hover:border-primary transition-colors">
                    <h4 className="text-white font-semibold leading-snug">{ed.degree}</h4>
                    <p className="text-sm text-slate-400">{ed.school}</p>
                    <p className="text-xs font-mono text-slate-500 mt-1">{ed.period}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right glass-panel rounded-2xl p-6 md:p-8 border border-white/5" data-delay="0.15">
              <p className="text-xs font-mono tracking-widest text-secondary mb-4">CERTIFICATIONS</p>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="flex items-center gap-3">
                    <span className="w-9 h-9 shrink-0 rounded-lg bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold flex items-center justify-center">{c.code}</span>
                    <span className="text-sm text-slate-300">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
