"use client";

import { useState } from "react";

const btn =
  "inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-colors hover:brightness-125";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link:", url);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Share this guide">
      <span className="text-xs font-bold uppercase tracking-widest mr-1" style={{ color: "#737373" }}>
        Share
      </span>
      <a
        className={btn}
        style={{ background: "#128c7e", color: "white" }}
        href={`https://wa.me/?text=${t}%20${u}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      <a
        className={btn}
        style={{ background: "#0a66c2", color: "white" }}
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className={btn}
        style={{ background: "#1877f2", color: "white" }}
        href={`https://www.facebook.com/sharer/sharer.php?u=${u}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        className={btn}
        style={{ background: "#262626", color: "white", border: "1px solid #404040" }}
        href={`https://twitter.com/intent/tweet?url=${u}&text=${t}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        X
      </a>
      <button
        type="button"
        onClick={copy}
        className={btn}
        style={{ background: "transparent", color: "var(--gold)", border: "1px solid var(--gold)" }}
      >
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
