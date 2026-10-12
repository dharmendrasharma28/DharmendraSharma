"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");
  useEffect(() => setYear(String(new Date().getFullYear())), []);
  return (
    <footer className="border-t border-line bg-ink text-bg">
      <div className="mono wrap flex flex-col items-center justify-between gap-2 py-5 text-[11px] sm:flex-row">
        <span>© {year} Dharmendra Sharma · Gurugram, Haryana</span>
        <span>Tracking № DS-2013-GGN · Status: Delivered</span>
        <a href="#top" className="text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
