"use client";
import { useEffect, useRef, useState } from "react";

export default function OverviewToggle({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [clamped, setClamped] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const check = () => {
      // Measure against the CSS clamp heights: md breakpoint = 768px
      // max-h-28 = 112px (mobile), md:max-h-40 = 160px (desktop)
      const clampPx = window.innerWidth >= 768 ? 160 : 112;
      const savedOverflow = el.style.overflow;
      const savedMaxHeight = el.style.maxHeight;
      el.style.overflow = "hidden";
      el.style.maxHeight = `${clampPx}px`;
      const overflows = el.scrollHeight > el.clientHeight;
      el.style.overflow = savedOverflow;
      el.style.maxHeight = savedMaxHeight;
      setClamped(overflows);
      setShowButton(overflows);
    };

    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div>
      <div
        ref={wrapperRef}
        className={`relative ${clamped && !expanded ? "overflow-hidden max-h-28 md:max-h-40" : ""}`}
      >
        {children}
        {clamped && !expanded && (
          <div
            className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
            style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }}
          />
        )}
      </div>
      {showButton && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm font-bold"
          style={{ color: "#eab308" }}
        >
          {expanded ? "Show less ↑" : "Read more ↓"}
        </button>
      )}
    </div>
  );
}
