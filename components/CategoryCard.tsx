"use client";

import Link from "next/link";
import Image from "next/image";

interface Category {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  imageUrl?: string;
}

const GearIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12" aria-hidden="true">
    <circle cx="32" cy="32" r="28" stroke="#eab308" strokeWidth="1.5" opacity="0.4" />
    <circle cx="32" cy="32" r="20" stroke="#eab308" strokeWidth="1.5" opacity="0.4" />
    <circle cx="32" cy="32" r="8" stroke="#eab308" strokeWidth="2" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
      <rect key={i} x="29" y="2" width="6" height="10" rx="1" fill="#eab308" opacity="0.5" transform={`rotate(${a} 32 32)`} />
    ))}
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M4 10h12M10 4l6 6-6 6" />
  </svg>
);

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/products/${category.slug.current}`}
      className="card-hover group relative rounded-2xl border overflow-hidden flex flex-col"
      style={{
        background: "var(--bg-secondary)",
        borderColor: "rgba(234,179,8,0.14)",
        transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.55)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(234,179,8,0.14)";
      }}
    >
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{
          height: "160px",
          background: "rgba(234,179,8,0.04)",
        }}
      >
        {category.imageUrl ? (
          <Image
            src={category.imageUrl}
            alt={category.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <GearIcon />
        )}
        {category.imageUrl && (
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(26,26,26,0.8) 0%, transparent 60%)" }}
          />
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-yellow-300 transition-colors duration-200">
          {category.name}
        </h3>
        {category.description && (
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#a3a3a3" }}>
            {category.description}
          </p>
        )}
        <div
          className="inline-flex items-center gap-2 text-sm font-bold mt-auto group-hover:gap-3 transition-all duration-200"
          style={{ color: "var(--gold)" }}
        >
          Explore
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  );
}
