"use client";

import type { CSSProperties } from "react";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

export default function EnquireButton({
  productName,
  message,
  includePageUrl,
  label,
  className,
  style,
}: {
  productName?: string;
  message?: string;
  includePageUrl?: boolean;
  label: string;
  className?: string;
  style?: CSSProperties;
}) {
  const { openEnquiryModal } = useEnquiryModal();

  function handleClick() {
    let finalMessage = message;
    if (includePageUrl && typeof window !== "undefined") {
      const url = window.location.href;
      finalMessage = finalMessage ? `${finalMessage} Page: ${url}` : `Page: ${url}`;
    }
    openEnquiryModal(productName, finalMessage);
  }

  return (
    <button onClick={handleClick} className={className} style={style}>
      {label}
    </button>
  );
}
