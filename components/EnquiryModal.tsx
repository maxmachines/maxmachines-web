"use client";

import { useEffect, useRef } from "react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";
import EnquiryForm from "./EnquiryForm";

export default function EnquiryModal() {
  const { isOpen, machineName, defaultMessage, closeEnquiryModal } = useEnquiryModal();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeEnquiryModal();
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeEnquiryModal]);

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
      onClick={(e) => {
        if (e.target === overlayRef.current) closeEnquiryModal();
      }}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border"
        style={{
          background: "#111",
          borderColor: "rgba(234,179,8,0.25)",
          boxShadow: "0 0 80px rgba(234,179,8,0.12)",
          animation: "modalSlideIn 0.22s ease-out",
        }}
      >
        {/* Header */}
        <div
          className="sticky top-0 z-10 flex items-start justify-between px-8 pt-8 pb-5"
          style={{ background: "#111", borderBottom: "1px solid rgba(234,179,8,0.1)" }}
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span
                className="w-1.5 h-6 rounded-full"
                style={{ background: "var(--gold)" }}
              />
              <h2 className="text-2xl font-black text-white">Request a Quote</h2>
            </div>
            <p className="text-sm pl-3.5" style={{ color: "#737373" }}>
              Fill the form below — get catalogue instantly on WhatsApp &amp; Email
            </p>
          </div>

          <button
            onClick={closeEnquiryModal}
            aria-label="Close modal"
            className="flex-shrink-0 ml-4 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(234,179,8,0.1)",
              border: "1px solid rgba(234,179,8,0.25)",
              color: "var(--gold)",
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-4 h-4">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <div className="px-8 pb-8 pt-6">
          <EnquiryForm initialMachine={machineName} initialMessage={defaultMessage} />
        </div>
      </div>

      <style>{`
        @keyframes modalSlideIn {
          from { opacity: 0; transform: translateY(-16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
}
