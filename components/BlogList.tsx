"use client";

import { useState } from "react";
import Link from "next/link";

export type CardPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  dateLabel: string;
  readTime: string;
  coverUrl?: string | null;
  coverAlt?: string | null;
};

export default function BlogList({ posts }: { posts: CardPost[] }) {
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const [active, setActive] = useState<string>("All");
  const shown = active === "All" ? posts : posts.filter((p) => p.category === active);

  const pill = (label: string) => {
    const on = active === label;
    return (
      <button
        key={label}
        type="button"
        onClick={() => setActive(label)}
        className="px-4 py-2 rounded-full text-sm font-semibold transition-colors"
        style={{
          background: on ? "var(--gold)" : "var(--bg-secondary)",
          color: on ? "#0f0f0f" : "#d4d4d4",
          border: "1px solid var(--gold-border)",
        }}
      >
        {label === "All" ? "All Posts" : label}
      </button>
    );
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {pill("All")}
        {categories.map((c) => pill(c))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {shown.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="group block rounded-xl overflow-hidden transition-transform hover:-translate-y-1"
            style={{ background: "var(--bg-secondary)", border: "1px solid var(--gold-border)" }}
          >
            <div className="relative aspect-[16/9] overflow-hidden" style={{ background: "#141414" }}>
              {p.coverUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`${p.coverUrl}?w=800&auto=format`}
                  alt={p.coverAlt || p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-center px-6"
                  style={{ background: "radial-gradient(ellipse at 50% 60%, #2a2000 0%, #141100 60%, #0f0f0f 100%)" }}
                >
                  <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "var(--gold)" }}>
                    Max Machine Tools
                  </span>
                </div>
              )}
              <span
                className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider px-2 py-1 rounded"
                style={{ background: "var(--gold)", color: "#0f0f0f" }}
              >
                {p.category}
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs mb-2" style={{ color: "#737373" }}>
                {p.dateLabel} &middot; {p.readTime}
              </p>
              <h2 className="text-lg font-semibold mb-2 leading-snug">{p.title}</h2>
              <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>{p.description}</p>
              <span className="text-sm font-semibold" style={{ color: "var(--gold)" }}>
                Read Article &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
