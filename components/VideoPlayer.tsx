"use client";
import { useState } from "react";

interface Props {
  videoId: string;
  isShort: boolean;
  productName: string;
}

export default function VideoPlayer({ videoId, isShort, productName }: Props) {
  const [playing, setPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    isShort
      ? `https://i.ytimg.com/vi/${videoId}/oardefault.jpg`
      : `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`
  );

  const wrapperClass = isShort
    ? "relative block aspect-[9/16] w-full max-w-[240px] mx-auto"
    : "relative block aspect-video w-full";

  if (playing) {
    return (
      <div className={wrapperClass}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={`${productName} video`}
          className="absolute inset-0 w-full h-full rounded-xl"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      className={`${wrapperClass} cursor-pointer rounded-xl overflow-hidden group`}
      aria-label={`Play ${productName} video`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imgSrc}
        alt={`${productName} video preview`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        onError={() => {
          if (!isShort && imgSrc.includes("maxresdefault")) {
            setImgSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
          }
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/40 transition-colors">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: "#eab308" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-1" style={{ color: "#0f0f0f" }}>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </button>
  );
}
