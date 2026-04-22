"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
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

interface Subcategory {
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
    viewBox="0 0 1440 500"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    stroke="#eab308"
    strokeWidth="1.5"
    style={{ opacity: 0.08 }}
    aria-hidden="true"
  >
    <circle cx="1360" cy="520" r="190" />
    <circle cx="1360" cy="520" r="140" />
    <circle cx="1360" cy="520" r="34" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
      <line key={`lg-${i}`} x1="1360" y1="486" x2="1360" y2="380" transform={`rotate(${a} 1360 520)`} />
    ))}
    {Array.from({ length: 24 }).map((_, i) => (
      <rect key={`lt-${i}`} x="1354" y="320" width="12" height="24" rx="2" transform={`rotate(${i * 15} 1360 520)`} />
    ))}
    <circle cx="80" cy="60" r="100" />
    <circle cx="80" cy="60" r="72" />
    <circle cx="80" cy="60" r="18" />
    {[0, 60, 120, 180, 240, 300].map((a, i) => (
      <line key={`sg-${i}`} x1="80" y1="42" x2="80" y2="-12" transform={`rotate(${a} 80 60)`} />
    ))}
    {Array.from({ length: 16 }).map((_, i) => (
      <rect key={`st-${i}`} x="76" y="-28" width="8" height="18" rx="2" transform={`rotate(${i * 22.5} 80 60)`} />
    ))}
    <circle cx="600" cy="260" r="44" />
    <circle cx="600" cy="260" r="22" />
    <circle cx="600" cy="260" r="5" />
    <line x1="556" y1="260" x2="524" y2="260" />
    <line x1="644" y1="260" x2="676" y2="260" />
    <line x1="600" y1="216" x2="600" y2="184" />
    <line x1="600" y1="304" x2="600" y2="336" />
    <line x1="260" y1="36" x2="680" y2="36" strokeDasharray="6 5" />
    <line x1="260" y1="26" x2="260" y2="46" />
    <line x1="680" y1="26" x2="680" y2="46" />
    <polygon points="260,36 274,31 274,41" fill="#eab308" stroke="none" />
    <polygon points="680,36 666,31 666,41" fill="#eab308" stroke="none" />
    <circle cx="260" cy="36" r="3" fill="#eab308" stroke="none" />
    <circle cx="680" cy="36" r="3" fill="#eab308" stroke="none" />
  </svg>
);

/* ─── Gear placeholder icon ──────────────────────────────────── */
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

/* ─── Arrow icons ────────────────────────────────────────────── */
const ArrowRightIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M4 10h12M10 4l6 6-6 6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M7 4l6 6-6 6" />
  </svg>
);

/* ─── Subcategory Card ───────────────────────────────────────── */
function SubcategoryCard({
  subcategory,
  categorySlug,
}: {
  subcategory: Subcategory;
  categorySlug: string;
}) {
  return (
    <Link
      href={`/products/${categorySlug}/${subcategory.slug.current}`}
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
        {subcategory.imageUrl ? (
          <Image
            src={subcategory.imageUrl}
            alt={subcategory.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <GearIcon />
        )}
        {subcategory.imageUrl && (
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(26,26,26,0.85) 0%, transparent 55%)" }}
          />
        )}
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-yellow-300 transition-colors duration-200">
          {subcategory.name}
        </h3>
        {subcategory.description && (
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#a3a3a3" }}>
            {subcategory.description}
          </p>
        )}
        <div
          className="inline-flex items-center gap-2 text-sm font-bold mt-auto group-hover:gap-3 transition-all duration-200"
          style={{ color: "var(--gold)" }}
        >
          View Machines
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [category, setCategory] = useState<Category | null>(null);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    if (!slug) return;

    async function fetchData() {
      const cat = await client.fetch<Category | null>(
        `*[_type == "category" && slug.current == $slug][0] {
          _id, name, slug, description, "imageUrl": image.asset->url
        }`,
        { slug }
      );

      if (!cat) {
        setMissing(true);
        setLoading(false);
        return;
      }

      const subs = await client.fetch<Subcategory[]>(
        `*[_type == "subcategory" && parentCategory._ref == $categoryId] | order(displayOrder asc) {
          _id, name, slug, description, "imageUrl": image.asset->url
        }`,
        { categoryId: cat._id }
      );

      setCategory(cat);
      setSubcategories(subs);
      setLoading(false);
    }

    fetchData().catch(() => setLoading(false));
  }, [slug]);

  if (missing) notFound();

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
          {/* Breadcrumb */}
          <nav className="animate-fade-in-up flex items-center justify-center gap-2 text-xs mb-2" aria-label="Breadcrumb">
            <Link
              href="/products"
              className="transition-colors duration-200 hover:text-yellow-300"
              style={{ color: "#737373" }}
            >
              Catalog
            </Link>
            <ChevronRightIcon />
            <span style={{ color: "var(--gold)" }}>
              {loading ? "Loading…" : category?.name}
            </span>
          </nav>

          <h1 className="animate-fade-in-up font-black leading-tight tracking-tight mb-2 text-4xl lg:text-5xl">
            {loading ? (
              <span
                className="inline-block rounded-lg animate-pulse"
                style={{ width: "280px", height: "1em", background: "rgba(234,179,8,0.1)" }}
              />
            ) : (
              <span style={{ color: "var(--gold)" }}>{category?.name}</span>
            )}
          </h1>

          {!loading && category?.description && (
            <p
              className="animate-fade-in-up-delay-1 text-base leading-snug max-w-2xl mx-auto mt-2"
              style={{ color: "#a3a3a3" }}
            >
              {category.description}
            </p>
          )}

        </div>
      </section>

      {/* ── SUBCATEGORIES GRID ───────────────────────────────── */}
      <section className="pt-3 pb-10 lg:pb-16" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-3xl font-black text-white mb-1">
              {loading
                ? "Loading…"
                : subcategories.length > 0
                ? <><span style={{ color: "var(--gold)" }}>{subcategories.length} Type{subcategories.length !== 1 ? "s" : ""}</span>{" "}Available</>

                : "Coming Soon"}
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "#a3a3a3" }}>
              {!loading && subcategories.length === 0 && category
                ? `We're adding our full range of ${category.name.toLowerCase()} to the catalog. Contact us for the complete list.`
                : "Select a type to explore the machines we stock and supply."}
            </p>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-2xl border h-64 animate-pulse"
                  style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.08)" }}
                />
              ))}
            </div>
          ) : subcategories.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {subcategories.map((sub) => (
                <SubcategoryCard
                  key={sub._id}
                  subcategory={sub}
                  categorySlug={slug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="flex justify-center mb-6">
                <GearIcon />
              </div>
              <p style={{ color: "#525252" }}>
                No subcategories listed yet. Contact us for the full range.
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
