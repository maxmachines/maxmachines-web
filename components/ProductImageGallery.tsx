"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt?: string;
}

const GearIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="32" cy="32" r="26" stroke="#eab308" strokeWidth="1.5" opacity="0.4" />
    <circle cx="32" cy="32" r="18" stroke="#eab308" strokeWidth="1.5" opacity="0.4" />
    <circle cx="32" cy="32" r="7" stroke="#eab308" strokeWidth="2" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
      <rect key={i} x="29" y="4" width="6" height="9" rx="1" fill="#eab308" opacity="0.45" transform={`rotate(${a} 32 32)`} />
    ))}
  </svg>
);

export default function ProductImageGallery({
  images,
  productName,
}: {
  images: GalleryImage[];
  productName: string;
}) {
  const [activeImage, setActiveImage] = useState(0);
  const hasImages = images.length > 0;

  return (
    <div>
      <div
        className="relative w-full aspect-square rounded-2xl overflow-hidden mb-3 border"
        style={{ background: "#f5f5f0", borderColor: "rgba(234,179,8,0.14)" }}
      >
        {hasImages ? (
          <Image
            src={images[activeImage].url}
            alt={images[activeImage].alt ?? productName}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
          />
        ) : (
          <div className="flex items-center justify-center h-full"><GearIcon /></div>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 flex-wrap">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className="relative rounded-xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0"
              style={{ width: "72px", height: "72px", borderColor: i === activeImage ? "var(--gold)" : "rgba(234,179,8,0.15)", background: "#f5f5f0" }}
            >
              <Image src={img.url} alt={img.alt ?? `Image ${i + 1}`} fill className="object-contain" sizes="72px" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
