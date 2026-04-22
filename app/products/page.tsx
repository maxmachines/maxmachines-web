"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import SocialStrip from "@/components/SocialStrip";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { client } from "@/sanity/lib/client";

/* ─── Types ──────────────────────────────────────────────────── */
interface Category {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  imageUrl?: string;
}

/* ─── SVG Background ─────────────────────────────────────────── */
const GearBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 1440 600"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    stroke="#eab308"
    strokeWidth="1.5"
    style={{ opacity: 0.08 }}
    aria-hidden="true"
  >
    <circle cx="1340" cy="620" r="200" />
    <circle cx="1340" cy="620" r="150" />
    <circle cx="1340" cy="620" r="36" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
      <line key={`lg-${i}`} x1="1340" y1="584" x2="1340" y2="470" transform={`rotate(${a} 1340 620)`} />
    ))}
    {Array.from({ length: 24 }).map((_, i) => (
      <rect key={`lt-${i}`} x="1334" y="408" width="12" height="26" rx="2" transform={`rotate(${i * 15} 1340 620)`} />
    ))}
    <circle cx="100" cy="80" r="120" />
    <circle cx="100" cy="80" r="88" />
    <circle cx="100" cy="80" r="22" />
    {[0, 60, 120, 180, 240, 300].map((a, i) => (
      <line key={`mg-${i}`} x1="100" y1="58" x2="100" y2="-4" transform={`rotate(${a} 100 80)`} />
    ))}
    {Array.from({ length: 18 }).map((_, i) => (
      <rect key={`mt-${i}`} x="95" y="-24" width="10" height="20" rx="2" transform={`rotate(${i * 20} 100 80)`} />
    ))}
    <circle cx="1100" cy="300" r="70" />
    <circle cx="1100" cy="300" r="50" />
    <circle cx="1100" cy="300" r="14" />
    {[0, 72, 144, 216, 288].map((a, i) => (
      <line key={`sg-${i}`} x1="1100" y1="286" x2="1100" y2="234" transform={`rotate(${a} 1100 300)`} />
    ))}
    {Array.from({ length: 14 }).map((_, i) => (
      <rect key={`st-${i}`} x="1096" y="222" width="8" height="16" rx="2" transform={`rotate(${i * 25.7} 1100 300)`} />
    ))}
    <circle cx="580" cy="300" r="48" />
    <circle cx="580" cy="300" r="24" />
    <circle cx="580" cy="300" r="5" />
    <line x1="532" y1="300" x2="500" y2="300" />
    <line x1="628" y1="300" x2="660" y2="300" />
    <line x1="580" y1="252" x2="580" y2="220" />
    <line x1="580" y1="348" x2="580" y2="380" />
    <line x1="280" y1="40" x2="700" y2="40" strokeDasharray="6 5" />
    <line x1="280" y1="30" x2="280" y2="50" />
    <line x1="700" y1="30" x2="700" y2="50" />
    <polygon points="280,40 294,35 294,45" fill="#eab308" stroke="none" />
    <polygon points="700,40 686,35 686,45" fill="#eab308" stroke="none" />
    <circle cx="280" cy="40" r="3" fill="#eab308" stroke="none" />
    <circle cx="700" cy="40" r="3" fill="#eab308" stroke="none" />
    <circle cx="920" cy="160" r="32" />
    <circle cx="920" cy="160" r="14" />
    <line x1="888" y1="160" x2="866" y2="160" />
    <line x1="952" y1="160" x2="974" y2="160" />
    <line x1="920" y1="128" x2="920" y2="106" />
    <line x1="920" y1="192" x2="920" y2="214" />
  </svg>
);

/* ─── Gear placeholder icon ──────────────────────────────────── */
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

/* ─── Arrow icon ─────────────────────────────────────────────── */
const ArrowRightIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M4 10h12M10 4l6 6-6 6" />
  </svg>
);

/* ─── Category Card ──────────────────────────────────────────── */
function CategoryCard({ category }: { category: Category }) {
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

/* ─── Page ───────────────────────────────────────────────────── */
export default function ProductsPage() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch<Category[]>(
        `*[_type == "category"] | order(displayOrder asc) {
          _id, name, slug, description, "imageUrl": image.asset->url
        }`
      )
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 55% 40%, #181408 0%, #0f0e08 40%, #0f0f0f 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(234,179,8,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(234,179,8,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.1) 1px, transparent 1px)",
            backgroundSize: "200px 200px",
          }}
        />
        <GearBackground />
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 20%, rgba(234,179,8,0.08) 0%, transparent 60%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 20% 80%, rgba(234,179,8,0.05) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-4 pb-2 text-center">
          <h1 className="animate-fade-in-up font-black leading-tight tracking-tight mb-2 text-4xl lg:text-5xl text-white">
            Our Machine <span style={{ color: "var(--gold)" }}>Catalog</span>
          </h1>
          <p
            className="animate-fade-in-up-delay-1 text-base leading-snug max-w-2xl mx-auto mt-2"
            style={{ color: "#a3a3a3" }}
          >
            Explore our comprehensive range of industrial machinery — manufactured in India and sourced from the world&apos;s best.
          </p>
        </div>
      </section>

      <SocialStrip />

      {/* ── CATEGORIES GRID ──────────────────────────────────── */}
      <section className="pt-3 pb-10 lg:pb-16" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-black text-white mb-1">
              Browse by <span style={{ color: "var(--gold)" }}>Category</span>
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "#a3a3a3" }}>
              Select a category to explore the full range of machines we stock and supply.
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border h-72 animate-pulse"
                  style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.08)" }}
                />
              ))}
            </div>
          ) : categories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <CategoryCard key={category._id} category={category} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="flex justify-center mb-6">
                <GearIcon />
              </div>
              <p className="mt-2 text-lg" style={{ color: "#525252" }}>
                Catalog coming soon — contact us for the full range.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="py-16 lg:py-20" style={{ background: "var(--bg-secondary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className="rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-8 border"
            style={{
              background: "linear-gradient(135deg, rgba(234,179,8,0.07) 0%, var(--bg-secondary) 100%)",
              borderColor: "rgba(234,179,8,0.2)",
            }}
          >
            <div>
              <h3 className="text-white font-bold text-2xl lg:text-3xl mb-2">
                Ready to Source Your Next Machine?
              </h3>
              <p style={{ color: "#737373" }}>
                Call us or drop a WhatsApp message — we respond within the hour.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="tel:+919962061514"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-center transition-all duration-200 hover:scale-105 hover:brightness-110"
                style={{ background: "var(--gold)", color: "#0f0f0f" }}
              >
                📞 Call Chennai
              </a>
              <a
                href="https://wa.me/919382861514"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm border text-center transition-all duration-200 hover:bg-white/5"
                style={{ color: "#22c55e", borderColor: "#22c55e" }}
              >
                💬 WhatsApp Us
              </a>
              <a
                href="https://forms.gle/TXjAGS67M1Nnb2Ye9"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm border text-white text-center transition-all duration-200 hover:bg-white/5"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                📋 Fill Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
