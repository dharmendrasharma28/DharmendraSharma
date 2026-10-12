import { keywords } from "@/data/resume";

export default function Marquee() {
  const items = [...keywords, ...keywords];
  return (
    <div className="overflow-hidden border-y border-line bg-ink text-bg">
      <div className="animate-marquee flex w-max gap-0 py-3">
        {items.map((k, i) => (
          <span key={i} className="mono relative px-6 text-xs after:absolute after:right-0 after:text-accent after:content-['✦']">
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}
