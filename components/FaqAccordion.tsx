"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
  >
    <path d="M4 7l6 6 6-6" />
  </svg>
);

export default function FaqAccordion({ faq }: { faq: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border rounded-xl overflow-hidden"
      style={{ borderColor: open ? "rgba(234,179,8,0.4)" : "rgba(234,179,8,0.14)" }}
    >
      <button
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
        style={{ background: open ? "rgba(234,179,8,0.06)" : "var(--bg-secondary)" }}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="font-semibold text-white text-sm leading-snug">{faq.question}</span>
        <span style={{ color: "var(--gold)" }}><ChevronDown open={open} /></span>
      </button>
      <div
        style={{
          maxHeight: open ? "600px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <div className="px-5 pb-5 pt-3" style={{ background: "var(--bg-secondary)" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}
