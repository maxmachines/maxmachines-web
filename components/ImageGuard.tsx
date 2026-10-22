"use client";

import { useEffect } from "react";

// Blocks right-click and dragging on product pictures (a deterrent only; the watermark is the real protection).
export default function ImageGuard() {
  useEffect(() => {
    // The Studio (/studio) is for editing, so no watermark or right-click block there.
    if (window.location.pathname.startsWith("/studio")) {
      document.documentElement.setAttribute("data-studio", "1");
      return;
    }

    const isPicture = (t: EventTarget | null) =>
      t instanceof Element &&
      (t.closest('img[src*="cdn.sanity.io"]') !== null ||
        t.querySelector(':scope > img[src*="cdn.sanity.io"]') !== null);

    const block = (e: Event) => {
      if (isPicture(e.target)) e.preventDefault();
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);
    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);

  return null;
}
