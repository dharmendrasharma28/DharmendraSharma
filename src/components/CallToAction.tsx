"use client";

import { profile } from "@/data/resume";
import { useReveal } from "@/lib/useReveal";

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300">
    <span className="text-primary">
      <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" /></svg>
    </span>
    {children}
  </span>
);

export default function CallToAction() {
  const scope = useReveal<HTMLElement>();

  return (
    <section id="schedule" ref={scope} className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-primary/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDuration: "4s" }} />
        <div className="absolute bottom-0 right-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-secondary/10 rounded-full blur-[70px] md:blur-[110px] animate-pulse" style={{ animationDelay: "1s", animationDuration: "5s" }} />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="reveal relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 via-secondary/40 to-primary/50 rounded-[1.75rem] md:rounded-[2.25rem] blur-xl opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-500" />
          <div className="relative rounded-[1.5rem] md:rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 p-8 sm:p-12 md:p-16 overflow-hidden text-center shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-bl-[120px] -mr-16 -mt-16 blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-tr-[120px] -ml-16 -mb-16 blur-2xl pointer-events-none" />

            <div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 mb-6 backdrop-blur-md" data-delay="0.1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-xs font-mono text-primary tracking-widest uppercase">Calendar Open</span>
            </div>

            <div className="reveal-scale mx-auto mb-6 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(var(--primary-rgb),0.25)]" data-delay="0.2">
              <svg width="36" height="36" viewBox="0 0 256 256" fill="currentColor" className="text-primary"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" /></svg>
            </div>

            <h2 className="reveal text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight text-white mb-5 leading-[1.05]" data-delay="0.3">
              Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary">Discovery Call</span>
            </h2>
            <p className="reveal text-base md:text-lg text-slate-400 leading-relaxed font-light max-w-2xl mx-auto mb-8" data-delay="0.4">
              Prefer a real conversation over a form? Drop me a line and we&apos;ll find a time — a relaxed 30-minute call about
              mobile, platforms, or the team you&apos;re building. Zero pressure.
            </p>

            <div className="reveal flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mb-10" data-delay="0.5">
              <Pill>30-Min Session</Pill>
              <Pill>Video Call</Pill>
              <Pill>No Strings Attached</Pill>
            </div>

            <div className="reveal" data-delay="0.6">
              <a
                href={`mailto:${profile.email}?subject=Discovery%20call`}
                className="relative inline-flex items-center justify-center gap-3 h-16 px-10 rounded-full overflow-hidden shadow-lg shadow-blue-900/30 cursor-pointer group/btn"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary-light opacity-95" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:animate-shine" />
                <span className="relative z-10 text-white font-bold tracking-wider text-sm md:text-base">SCHEDULE A MEETING</span>
                <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" className="relative z-10 text-white group-hover/btn:translate-x-1 transition-transform"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" /></svg>
              </a>
              <p className="mt-6 text-xs text-slate-500 tracking-wide">Reply within a day · {profile.phone} · {profile.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
