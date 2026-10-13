"use client";

import { useTheme } from "@/lib/useTheme";

/**
 * Sun / moon toggle. `floating` renders the fixed bottom-right pill;
 * otherwise it's the compact nav button.
 */
export default function ThemeToggle({ floating = false, className = "" }: { floating?: boolean; className?: string }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  const base =
    "group flex items-center justify-center rounded-full glass-panel border border-white/10 cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.35)]";
  const size = floating ? "w-12 h-12 md:w-14 md:h-14" : "w-10 h-10";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`${base} ${size} ${floating ? "fixed bottom-6 right-6 z-50 backdrop-blur-xl shadow-lg" : "relative"} ${className}`}
    >
      {/* sun */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute h-5 w-5 text-amber-400 transition-all duration-500 ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
      {/* moon */}
      <svg
        viewBox="0 0 24 24"
        className={`absolute h-5 w-5 text-primary-light transition-all duration-500 ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      >
        <path d="M20 15.5A8.5 8.5 0 0 1 8.5 4a8.5 8.5 0 1 0 11.5 11.5Z" />
      </svg>
      <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500" />
    </button>
  );
}
