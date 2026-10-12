"use client";

import { useRef } from "react";
import { route, stats } from "@/data/resume";
import { useIsomorphicLayoutEffect } from "@/lib/useIsomorphicLayoutEffect";
import { gsap, ScrollTrigger } from "@/lib/gsap";

const PATH_D = "M 40 230 C 160 230, 200 70, 360 80 S 560 210, 680 160 S 800 50, 920 40";

export default function RouteMap() {
  const scope = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const parcelRef = useRef<SVGGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal", scope.current!).forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: (i % 6) * 0.05,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      const path = pathRef.current;
      const line = lineRef.current;
      const parcel = parcelRef.current;
      if (path && line && parcel) {
        const len = path.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        const proxy = { t: 0 };
        gsap.to(proxy, {
          t: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
          onUpdate: () => {
            gsap.set(line, { strokeDashoffset: len * (1 - proxy.t) });
            const pt = path.getPointAtLength(len * proxy.t);
            parcel.setAttribute("transform", `translate(${pt.x} ${pt.y})`);
          },
        });
      }

      gsap.utils.toArray<HTMLElement>(".stat-num", scope.current!).forEach((el) => {
        const target = Number(el.dataset.count);
        if (!target) return;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.2,
          ease: "power1.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => (el.textContent = Math.round(obj.v) + (el.dataset.suffix || "")),
        });
      });
    }, scope);
    return () => ctx.revert();
  }, []);

  return (
    <section id="route" ref={scope} className="section">
      <div className="wrap">
        <div className="reveal mb-10 max-w-[62ch]">
          <span className="mono text-accent">01 · Route</span>
          <h2 className="mt-2 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold tracking-tight">
            Thirteen years, three cities, one parcel.
          </h2>
          <p className="mt-3 text-ink-2">
            Picked up in Bangalore as an Android developer. Routed through Jaipur&apos;s
            startups. Delivered to Gurugram, where I now run mobile &amp; platform engineering.
          </p>
        </div>

        <div className="reveal overflow-hidden rounded-2xl border border-line bg-card p-4 shadow-[6px_6px_0_var(--line)]">
          <svg viewBox="0 0 960 280" className="h-auto w-full overflow-visible">
            <path d={PATH_D} fill="none" stroke="var(--line)" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
            <path ref={pathRef} d={PATH_D} fill="none" stroke="transparent" strokeWidth="1" />
            <path ref={lineRef} d={PATH_D} fill="none" stroke="var(--accent)" strokeWidth="4" strokeLinecap="round" />

            {route.map((r) => (
              <g key={r.city} transform={`translate(${(r.x / 100) * 920 + 20} ${(r.y / 100) * 240 + 20})`}>
                <circle r="20" fill="var(--card)" stroke="var(--line)" strokeWidth="2.5" />
                <circle r="8" fill={r.status === "Delivered" ? "var(--teal)" : "var(--accent)"} stroke="var(--line)" strokeWidth="2" />
                <text y={r.y > 50 ? 46 : -34} textAnchor={r.x > 70 ? "end" : "start"} className="font-display" fontSize="18" fontWeight="800" fill="var(--ink)">
                  {r.city}
                </text>
                <text y={r.y > 50 ? 64 : -16} textAnchor={r.x > 70 ? "end" : "start"} className="mono" fontSize="10" fill="var(--muted)">
                  {r.year} · {r.status}
                </text>
              </g>
            ))}

            <g ref={parcelRef} transform="translate(40 230)">
              <g transform="translate(-14 -14) scale(1.1)">
                <path d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z" fill="var(--accent)" stroke="var(--ink)" strokeWidth="1.3" strokeLinejoin="round" />
                <path d="M4 7.5 12 12l8-4.5M12 12v9" fill="none" stroke="var(--ink)" strokeWidth="1.3" strokeLinejoin="round" />
              </g>
            </g>
          </svg>
        </div>

        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <li
              key={s.label}
              className="reveal rounded-xl border border-line bg-card px-4 py-4 shadow-[3px_3px_0_var(--line)]"
            >
              <span
                className="stat-num mono block text-2xl font-bold text-accent"
                data-count={s.literal ? undefined : s.value}
                data-suffix={s.suffix}
              >
                {s.literal ?? "0" + s.suffix}
              </span>
              <span className="mt-1 block text-sm font-semibold text-ink-2">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
