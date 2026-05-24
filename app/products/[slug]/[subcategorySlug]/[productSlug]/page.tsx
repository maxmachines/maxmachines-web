"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SchemaMarkup from "@/components/SchemaMarkup";
import { client } from "@/sanity/lib/client";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

/* ─── Types ──────────────────────────────────────────────────────── */
interface SpecRow { specName: string; specValue: string }
interface Variant { modelNumber: string; size?: string; price?: string; availability?: string; specs?: SpecRow[] }
interface FaqItem { question: string; answer: string }
interface AccessoryItem { name: string; description?: string; price?: string; link?: string }

interface ProductDetail {
  _id: string;
  name: string;
  slug: { current: string };
  brand?: string;
  country?: string;
  shortDescription?: string;
  featured?: boolean;
  active?: boolean;
  fullDescription?: unknown[];
  images?: { url: string; alt?: string }[];
  youtubeUrls?: string[];
  pdfLabels?: string[];
  pdfUrls?: string[];
  highlights?: string[];
  accessories?: AccessoryItem[];
  variants?: Variant[];
  faqs?: FaqItem[];
  seo?: { seoTitle?: string; metaDescription?: string };
  subcategory: {
    name: string;
    slug: { current: string };
    category: {
      name: string;
      slug: { current: string };
    };
  };
}

interface SiblingProduct {
  _id: string;
  name: string;
  slug: { current: string };
  brand?: string;
  featured?: boolean;
  imageUrl?: string;
  specs?: SpecRow[];
}

/* ─── Helpers ────────────────────────────────────────────────────── */
const countryFlags: Record<string, string> = {
  india: "🇮🇳", taiwan: "🇹🇼", japan: "🇯🇵", italy: "🇮🇹", usa: "🇺🇸",
};
const countryLabels: Record<string, string> = {
  india: "India", taiwan: "Taiwan", japan: "Japan", italy: "Italy", usa: "USA",
};
const availabilityLabel: Record<string, { label: string; color: string }> = {
  in_stock: { label: "In Stock", color: "#22c55e" },
  on_order: { label: "On Order", color: "#eab308" },
  discontinued: { label: "Discontinued", color: "#ef4444" },
};

function getYouTubeId(url: string): string | null {
  if (!url || typeof url !== "string") return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

/* ─── Icons ──────────────────────────────────────────────────────── */
const ChevronRight = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 flex-shrink-0">
    <path d="M7 4l6 6-6 6" />
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}
  >
    <path d="M4 7l6 6 6-6" />
  </svg>
);

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

/* ─── Section Heading ─────────────────────────────────────────────── */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl lg:text-2xl font-bold text-white flex items-center gap-3 mb-6">
      <span
        className="block rounded-full flex-shrink-0"
        style={{ width: "4px", height: "24px", background: "var(--gold)" }}
      />
      {children}
    </h2>
  );
}

/* ─── FAQ Accordion ──────────────────────────────────────────────── */
function FaqAccordion({ faq }: { faq: FaqItem }) {
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

/* ─── PortableText components ────────────────────────────────────── */
const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-base leading-relaxed mb-4" style={{ color: "#d4d4d4" }}>{children}</p>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-bold text-white mt-6 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg font-semibold mt-4 mb-2" style={{ color: "var(--gold)" }}>{children}</h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 pl-4 my-4 italic" style={{ borderColor: "var(--gold)", color: "#a3a3a3" }}>{children}</blockquote>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-4 space-y-1" style={{ color: "#d4d4d4" }}>{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-4 space-y-1" style={{ color: "#d4d4d4" }}>{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="px-1.5 py-0.5 rounded text-sm font-mono" style={{ background: "rgba(234,179,8,0.12)", color: "var(--gold)" }}>{children}</code>
    ),
  },
};

/* ─── Page ───────────────────────────────────────────────────────── */
export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const subcategorySlug = params.subcategorySlug as string;
  const productSlug = params.productSlug as string;

  const { openEnquiryModal } = useEnquiryModal();

  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [siblings, setSiblings] = useState<SiblingProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);

  useEffect(() => {
    if (!productSlug) return;

    async function fetchData() {
      const prod = await client.fetch<ProductDetail | null>(
        `*[_type == "product" && slug.current == $productSlug][0] {
          _id, name, slug, shortDescription, brand, country, featured, active,
          fullDescription,
          "images": images[] { "url": asset->url, alt },
          youtubeUrls,
          pdfLabels,
          pdfUrls,
          highlights,
          "accessories": accessories[] { name, description, price, link },
          "variants": variants[] { modelNumber, size, price, availability, "specs": specs[] { specName, specValue } },
          "faqs": faqs[] { question, answer },
          "seo": seo { seoTitle, metaDescription },
          "subcategory": subcategory-> { name, slug, "category": parentCategory-> { name, slug } }
        }`,
        { productSlug }
      );

      if (!prod) {
        setMissing(true);
        setLoading(false);
        return;
      }

      const sibs = await client.fetch<SiblingProduct[]>(
        `*[_type == "product" && subcategory->slug.current == $subcategorySlug && active == true] | order(featured desc, name asc) {
          _id, name, slug, brand, featured,
          "imageUrl": images[0].asset->url,
          "specs": variants[0].specs[] { specName, specValue }
        }`,
        { subcategorySlug }
      );

      setProduct(prod);
      setSiblings(sibs);
      setLoading(false);
    }

    fetchData().catch(() => setLoading(false));
  }, [productSlug, subcategorySlug]);

  if (missing) notFound();

  /* ── Derived values ── */
  const images = product?.images ?? [];
  const hasImages = images.length > 0;
  const categorySlug = product?.subcategory?.category?.slug?.current ?? slug;
  const categoryName = product?.subcategory?.category?.name;
  const subName = product?.subcategory?.name;
  const subSlug = product?.subcategory?.slug?.current ?? subcategorySlug;
  const countryKey = product?.country?.toLowerCase() ?? "";
  const flag = countryFlags[countryKey] ?? null;
  const country = countryLabels[countryKey] ?? (product?.country ?? null);

  const hasHighlights = (product?.highlights?.length ?? 0) > 0;
  const hasFullDesc = (product?.fullDescription?.length ?? 0) > 0;
  const hasVariants = (product?.variants?.length ?? 0) > 0;
  const hasYouTube = (product?.youtubeUrls?.filter(getYouTubeId).length ?? 0) > 0;
  const hasPdfs = (product?.pdfUrls?.length ?? 0) > 0;
  const hasAccessories = (product?.accessories?.length ?? 0) > 0;
  const hasFaqs = (product?.faqs?.length ?? 0) > 0;

  const variants = product?.variants ?? [];
  const selectedVariant = variants[selectedVariantIdx] ?? null;
  const selectedSpecs = selectedVariant?.specs ?? [];
  const hasSpecs = variants.some((v) => (v.specs?.length ?? 0) > 0);

  /* Siblings excluding current product */
  const moreProducts = siblings.filter((s) => s.slug.current !== productSlug);

  /* Comparison table: all unique spec names across all siblings */
  const allSpecNames = Array.from(
    new Set(siblings.flatMap((s) => (s.specs ?? []).map((r) => r.specName)))
  );

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 lg:pt-28 pb-16 lg:pb-24">

        {/* ── 1. Breadcrumb ───────────────────────────────────────────── */}
        <nav className="flex items-center flex-wrap gap-1.5 text-xs mb-7" aria-label="Breadcrumb">
          <Link href="/products" className="transition-colors hover:text-yellow-300" style={{ color: "#737373" }}>
            Catalog
          </Link>
          <ChevronRight />
          {loading ? <span style={{ color: "#737373" }}>…</span> : (
            <Link href={`/products/${categorySlug}`} className="transition-colors hover:text-yellow-300" style={{ color: "#737373" }}>
              {categoryName}
            </Link>
          )}
          <ChevronRight />
          {loading ? <span style={{ color: "#737373" }}>…</span> : (
            <Link href={`/products/${categorySlug}/${subSlug}`} className="transition-colors hover:text-yellow-300" style={{ color: "#737373" }}>
              {subName}
            </Link>
          )}
          <ChevronRight />
          <span style={{ color: "var(--gold)" }}>
            {loading ? "Loading…" : product?.name}
          </span>
        </nav>

        {/* ── 2. Product name + badges ────────────────────────────────── */}
        {loading ? (
          <div className="space-y-3 mb-6">
            <div className="rounded-lg animate-pulse h-10 w-80" style={{ background: "rgba(234,179,8,0.1)" }} />
            <div className="rounded-lg animate-pulse h-5 w-48" style={{ background: "rgba(255,255,255,0.05)" }} />
          </div>
        ) : (
          <div className="mb-3">
            <h1 className="text-3xl lg:text-5xl font-black text-white leading-tight mb-4">
              {product?.name}
            </h1>
            <div className="flex flex-wrap gap-2 items-center">
              {product?.featured && (
                <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ background: "var(--gold)", color: "#0f0f0f" }}>
                  ★ Featured
                </span>
              )}
              {product?.brand && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full border" style={{ color: "var(--gold)", borderColor: "rgba(234,179,8,0.35)", background: "rgba(234,179,8,0.07)" }}>
                  {product.brand}
                </span>
              )}
              {flag && country && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full border" style={{ color: "#a3a3a3", borderColor: "rgba(163,163,163,0.2)", background: "rgba(163,163,163,0.05)" }}>
                  {flag} Made in {country}
                </span>
              )}
            </div>
          </div>
        )}

        {/* ── 3. Short description ────────────────────────────────────── */}
        {loading ? (
          <div className="rounded-lg animate-pulse h-5 w-full max-w-2xl mb-10" style={{ background: "rgba(255,255,255,0.05)" }} />
        ) : product?.shortDescription ? (
          <p className="text-base max-w-3xl leading-relaxed mb-10" style={{ color: "#a3a3a3" }}>
            {product.shortDescription}
          </p>
        ) : (
          <div className="mb-10" />
        )}

        {/* ── 4. 60/40: Image gallery | Highlights + CTA ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-12 mb-16">

          {/* LEFT — Image gallery */}
          <div>
            <div
              className="relative w-full rounded-2xl overflow-hidden mb-3 border"
              style={{ height: "420px", background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.14)" }}
            >
              {loading ? (
                <div className="w-full h-full animate-pulse" style={{ background: "rgba(234,179,8,0.06)" }} />
              ) : hasImages ? (
                <Image
                  src={images[activeImage].url}
                  alt={images[activeImage].alt ?? product?.name ?? ""}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full"><GearIcon /></div>
              )}
            </div>

            {!loading && images.length > 1 && (
              <div className="flex gap-2 flex-wrap">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className="relative rounded-xl overflow-hidden border-2 transition-all duration-200 flex-shrink-0"
                    style={{ width: "72px", height: "72px", borderColor: i === activeImage ? "var(--gold)" : "rgba(234,179,8,0.15)" }}
                  >
                    <Image src={img.url} alt={img.alt ?? `Image ${i + 1}`} fill className="object-cover" sizes="72px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT — Highlights + CTA */}
          <div className="flex flex-col gap-5 lg:overflow-y-auto lg:max-h-screen">

            {/* Special Highlights */}
            {!loading && hasHighlights && (
              <div
                className="rounded-2xl border p-5"
                style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.22)" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
                  Special Highlights
                </p>
                <ul className="flex flex-col gap-3">
                  {product!.highlights!.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: "#d4d4d4" }}>
                      <span className="text-base leading-none mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }}>★</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA: Enquire | Call | WhatsApp */}
            {loading ? (
              <div className="h-14 rounded-xl animate-pulse" style={{ background: "rgba(234,179,8,0.1)" }} />
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => openEnquiryModal(
                    product?.name,
                    `I am interested in: ${product?.name}. Page: ${typeof window !== "undefined" ? window.location.href : ""}`
                  )}
                  className="flex-[2] py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:brightness-110 text-center leading-tight"
                  style={{ background: "var(--gold)", color: "#0f0f0f" }}
                >
                  📋 Enquire About This Machine
                </button>
                <a
                  href="tel:+919962061514"
                  className="flex-1 flex items-center justify-center py-3.5 rounded-xl text-sm font-bold border transition-all duration-200 hover:bg-white/5"
                  style={{ color: "white", borderColor: "rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.04)" }}
                >
                  📞 Call
                </a>
                <a
                  href="https://wa.me/919382861514"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center py-3.5 rounded-xl text-sm font-bold transition-all duration-200 hover:opacity-90"
                  style={{ background: "#22c55e", color: "white" }}
                >
                  💬 WA
                </a>
              </div>
            )}
          </div>
        </div>

        {/* ── 5. Specifications ───────────────────────────────────────── */}
        {!loading && hasSpecs && (
          <section className="mb-14">
            <SectionHeading>Specifications</SectionHeading>

            {/* Variant selector — tabs if ≤ 6, dropdown if more */}
            {variants.length > 1 && (
              <div className="mb-5">
                {variants.length <= 6 ? (
                  <div className="flex flex-wrap gap-2">
                    {variants.map((v, i) => (
                      <button
                        key={i}
                        onClick={() => setSelectedVariantIdx(i)}
                        className="px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-200"
                        style={{
                          background: i === selectedVariantIdx ? "var(--gold)" : "var(--bg-secondary)",
                          color: i === selectedVariantIdx ? "#0f0f0f" : "#a3a3a3",
                          borderColor: i === selectedVariantIdx ? "var(--gold)" : "rgba(234,179,8,0.2)",
                        }}
                      >
                        {v.modelNumber}{v.size ? ` — ${v.size}` : ""}
                      </button>
                    ))}
                  </div>
                ) : (
                  <select
                    value={selectedVariantIdx}
                    onChange={(e) => setSelectedVariantIdx(Number(e.target.value))}
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold border outline-none"
                    style={{
                      background: "var(--bg-secondary)",
                      color: "white",
                      borderColor: "rgba(234,179,8,0.3)",
                    }}
                  >
                    {variants.map((v, i) => (
                      <option key={i} value={i}>
                        {v.modelNumber}{v.size ? ` — ${v.size}` : ""}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            )}

            {/* 2-column spec table for selected variant */}
            {selectedSpecs.length > 0 ? (
              <div
                className="rounded-xl border overflow-hidden"
                style={{ borderColor: "rgba(234,179,8,0.14)" }}
              >
                <table className="w-full text-sm">
                  <thead>
                    <tr style={{ background: "rgba(234,179,8,0.08)" }}>
                      <th className="text-left px-5 py-3 font-semibold w-1/2" style={{ color: "var(--gold)" }}>
                        Specification
                      </th>
                      <th className="text-left px-5 py-3 font-semibold w-1/2" style={{ color: "var(--gold)" }}>
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedSpecs.map((spec, i) => (
                      <tr
                        key={i}
                        style={{
                          background: i % 2 === 0 ? "#1a1a1a" : "#0f0f0f",
                          borderTop: "1px solid rgba(234,179,8,0.07)",
                        }}
                      >
                        <td className="px-5 py-3 font-medium" style={{ color: "#a3a3a3" }}>
                          {spec.specName}
                        </td>
                        <td className="px-5 py-3 font-semibold text-white">
                          {spec.specValue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div
                className="rounded-xl border px-6 py-6 text-center"
                style={{ borderColor: "rgba(234,179,8,0.14)", background: "var(--bg-secondary)" }}
              >
                <p className="text-sm" style={{ color: "#a3a3a3" }}>
                  No specs listed for this model.{" "}
                  <button
                    onClick={() => openEnquiryModal(product?.name, `Please send me full specifications for: ${product?.name}`)}
                    className="underline transition-colors hover:text-yellow-300"
                    style={{ color: "var(--gold)" }}
                  >
                    Contact us for full specs.
                  </button>
                </p>
              </div>
            )}
          </section>
        )}

        {/* No specs at all */}
        {!loading && !hasSpecs && (
          <section className="mb-14">
            <SectionHeading>Specifications</SectionHeading>
            <div
              className="rounded-xl border px-6 py-8 text-center"
              style={{ borderColor: "rgba(234,179,8,0.14)", background: "var(--bg-secondary)" }}
            >
              <p className="text-sm" style={{ color: "#a3a3a3" }}>
                Detailed specifications coming soon.{" "}
                <button
                  onClick={() => openEnquiryModal(product?.name, `Please send me full specifications for: ${product?.name}`)}
                  className="underline transition-colors hover:text-yellow-300"
                  style={{ color: "var(--gold)" }}
                >
                  Contact us for full specs.
                </button>
              </p>
            </div>
          </section>
        )}

        {/* ── 6. Overview ─────────────────────────────────────────────── */}
        {!loading && hasFullDesc && (
          <section className="mb-14">
            <SectionHeading>Overview</SectionHeading>
            <PortableText
              value={product!.fullDescription as Parameters<typeof PortableText>[0]["value"]}
              components={ptComponents}
            />
          </section>
        )}

        {/* ── 7. YouTube Videos ───────────────────────────────────────── */}
        {!loading && hasYouTube && (
          <section className="mb-14">
            <SectionHeading>Videos</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product!.youtubeUrls!.filter(getYouTubeId).map((url, i) => (
                <iframe
                  key={i}
                  width="100%"
                  height="220"
                  src={`https://www.youtube.com/embed/${getYouTubeId(url)}`}
                  frameBorder={0}
                  allowFullScreen
                  style={{ borderRadius: "12px", display: "block" }}
                />
              ))}
            </div>
          </section>
        )}

        {/* ── 8. Variants & Pricing ───────────────────────────────────── */}
        {!loading && hasVariants && (
          <section className="mb-14">
            <SectionHeading>Variants &amp; Pricing</SectionHeading>
            <div
              className="overflow-x-auto rounded-xl border"
              style={{ borderColor: "rgba(234,179,8,0.14)", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
            >
              <table className="w-full text-sm" style={{ minWidth: "460px" }}>
                <thead>
                  <tr style={{ background: "rgba(234,179,8,0.08)" }}>
                    <th className="text-left px-5 py-3.5 font-semibold" style={{ color: "var(--gold)" }}>Model</th>
                    <th className="text-left px-5 py-3.5 font-semibold" style={{ color: "var(--gold)" }}>Size</th>
                    <th className="text-left px-5 py-3.5 font-semibold" style={{ color: "var(--gold)" }}>Availability</th>
                    <th className="text-left px-5 py-3.5 font-semibold" style={{ color: "var(--gold)" }}>Price</th>
                    <th className="px-5 py-3.5" />
                  </tr>
                </thead>
                <tbody>
                  {variants.map((v, i) => {
                    const avail = v.availability ? availabilityLabel[v.availability] : null;
                    return (
                      <tr
                        key={i}
                        style={{
                          background: i % 2 === 0 ? "var(--bg-secondary)" : "rgba(234,179,8,0.02)",
                          borderTop: "1px solid rgba(234,179,8,0.07)",
                        }}
                      >
                        <td className="px-5 py-3.5 font-semibold text-white">{v.modelNumber}</td>
                        <td className="px-5 py-3.5" style={{ color: "#a3a3a3" }}>
                          {v.size ?? <span style={{ color: "#525252" }}>—</span>}
                        </td>
                        <td className="px-5 py-3.5">
                          {avail
                            ? <span className="text-xs font-semibold" style={{ color: avail.color }}>{avail.label}</span>
                            : <span style={{ color: "#525252" }}>—</span>
                          }
                        </td>
                        <td className="px-5 py-3.5">
                          {v.price
                            ? <span className="font-bold" style={{ color: "var(--gold)" }}>{v.price}</span>
                            : <span style={{ color: "#737373" }}>Request Quote</span>
                          }
                        </td>
                        <td className="px-5 py-3.5">
                          <button
                            onClick={() => openEnquiryModal(
                              `${product?.name} — ${v.modelNumber}${v.size ? ` (${v.size})` : ""}`,
                              `I am interested in: ${product?.name} — ${v.modelNumber}${v.size ? ` (${v.size})` : ""}. Page: ${typeof window !== "undefined" ? window.location.href : ""}`
                            )}
                            className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200 hover:brightness-110 whitespace-nowrap"
                            style={{ background: "var(--gold)", color: "#0f0f0f" }}
                          >
                            Enquire
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {/* ── 9. PDF Downloads ────────────────────────────────────────── */}
        {!loading && hasPdfs && (
          <section className="mb-14">
            <SectionHeading>PDF Downloads</SectionHeading>
            <div className="flex flex-col gap-3">
              {product!.pdfUrls!.map((url, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 rounded-xl border transition-all duration-200 hover:bg-white/5"
                  style={{ borderColor: "rgba(234,179,8,0.2)", color: "var(--gold)", background: "var(--bg-secondary)" }}
                >
                  <span className="text-base">📄</span>
                  <span className="text-sm font-semibold flex-1">
                    {product!.pdfLabels?.[i] ?? `Download PDF ${i + 1}`}
                  </span>
                  <span className="text-xs font-normal" style={{ color: "#737373" }}>↓ Download</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* ── 10. Accessories ─────────────────────────────────────────── */}
        {!loading && hasAccessories && (
          <section className="mb-14">
            <SectionHeading>Accessories &amp; Add-ons</SectionHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product!.accessories!.map((acc, i) => (
                <div
                  key={i}
                  className="rounded-xl border p-5 flex flex-col gap-3"
                  style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.14)" }}
                >
                  <p className="font-bold text-white text-sm leading-snug">{acc.name}</p>
                  {acc.description && (
                    <p className="text-xs leading-relaxed flex-1" style={{ color: "#a3a3a3" }}>{acc.description}</p>
                  )}
                  <div className="flex items-center justify-between gap-2 pt-1">
                    {acc.price
                      ? <span className="text-sm font-bold" style={{ color: "var(--gold)" }}>{acc.price}</span>
                      : <span className="text-xs" style={{ color: "#525252" }}>Price on request</span>
                    }
                    {acc.link && (
                      <a
                        href={acc.link}
                        className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200 hover:brightness-110 flex-shrink-0"
                        style={{ background: "var(--gold)", color: "#0f0f0f" }}
                      >
                        View →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── 11. FAQs ────────────────────────────────────────────────── */}
        {!loading && hasFaqs && (
          <section className="mb-14">
            <SectionHeading>FAQs</SectionHeading>
            <div className="flex flex-col gap-3">
              {product!.faqs!.map((faq, i) => (
                <FaqAccordion key={i} faq={faq} />
              ))}
            </div>
          </section>
        )}

        {/* ── 12. More in [subcategory] ────────────────────────────────── */}
        {!loading && moreProducts.length > 0 && (
          <section className="mb-14">
            <SectionHeading>More in {subName}</SectionHeading>
            <div
              className="flex gap-4 overflow-x-auto pb-3"
              style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none" } as React.CSSProperties}
            >
              {moreProducts.map((s) => (
                <Link
                  key={s._id}
                  href={`/products/${categorySlug}/${subSlug}/${s.slug.current}`}
                  className="flex-shrink-0 rounded-2xl border overflow-hidden transition-all duration-200 hover:border-yellow-400/40 hover:bg-white/5 group"
                  style={{ width: "200px", background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.14)" }}
                >
                  <div className="relative w-full" style={{ height: "130px", background: "rgba(234,179,8,0.04)" }}>
                    {s.imageUrl ? (
                      <Image src={s.imageUrl} alt={s.name} fill className="object-cover" sizes="200px" />
                    ) : (
                      <div className="flex items-center justify-center h-full opacity-40"><GearIcon /></div>
                    )}
                  </div>
                  <div className="p-3 flex flex-col gap-1">
                    <p className="text-xs font-bold text-white leading-snug line-clamp-2 group-hover:text-yellow-300 transition-colors">
                      {s.name}
                    </p>
                    {s.brand && <p className="text-xs" style={{ color: "#737373" }}>{s.brand}</p>}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── 13. Compare all models in subcategory ───────────────────── */}
        {!loading && siblings.length > 1 && allSpecNames.length > 0 && (
          <section className="mb-4">
            <SectionHeading>Compare All {subName} Models</SectionHeading>
            <div
              className="overflow-x-auto rounded-xl border"
              style={{ borderColor: "rgba(234,179,8,0.14)", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
            >
              <table className="text-sm" style={{ minWidth: `${Math.max(600, siblings.length * 180 + 200)}px` }}>
                <thead>
                  <tr style={{ background: "rgba(234,179,8,0.08)" }}>
                    <th
                      className="text-left px-5 py-4 font-semibold sticky left-0"
                      style={{ color: "var(--gold)", background: "rgba(30,24,8,0.98)", minWidth: "180px", zIndex: 10 }}
                    >
                      Specification
                    </th>
                    {siblings.map((s) => {
                      const isCurrent = s.slug.current === productSlug;
                      return (
                        <th
                          key={s._id}
                          className="text-left px-4 py-4 font-semibold"
                          style={{
                            color: isCurrent ? "#0f0f0f" : "#d4d4d4",
                            background: isCurrent ? "var(--gold)" : "rgba(234,179,8,0.08)",
                            minWidth: "160px",
                          }}
                        >
                          <Link href={`/products/${categorySlug}/${subSlug}/${s.slug.current}`} className="hover:underline block leading-snug">
                            {s.name}
                          </Link>
                          {s.featured && <span className="block text-xs font-normal mt-0.5 opacity-70">★ Featured</span>}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {allSpecNames.map((specName, rowIdx) => (
                    <tr
                      key={specName}
                      style={{
                        background: rowIdx % 2 === 0 ? "rgba(234,179,8,0.02)" : "var(--bg-secondary)",
                        borderTop: "1px solid rgba(234,179,8,0.07)",
                      }}
                    >
                      <td
                        className="px-5 py-3 font-medium sticky left-0"
                        style={{ color: "#a3a3a3", background: rowIdx % 2 === 0 ? "rgba(15,15,15,0.98)" : "#1a1a1a", minWidth: "180px" }}
                      >
                        {specName}
                      </td>
                      {siblings.map((s, colIdx) => {
                        const spec = (s.specs ?? []).find((r) => r.specName === specName);
                        const isCurrent = s.slug.current === productSlug;
                        return (
                          <td
                            key={s._id}
                            className="px-4 py-3"
                            style={{
                              color: isCurrent ? "var(--gold)" : "white",
                              fontWeight: isCurrent ? 600 : 400,
                              background: colIdx % 2 === 0 ? "rgba(234,179,8,0.02)" : "var(--bg-secondary)",
                            }}
                          >
                            {spec?.specValue ?? <span style={{ color: "#525252" }}>—</span>}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr style={{ borderTop: "1px solid rgba(234,179,8,0.14)", background: "rgba(234,179,8,0.03)" }}>
                    <td className="px-5 py-4 sticky left-0" style={{ background: "rgba(15,15,15,0.98)", minWidth: "180px" }} />
                    {siblings.map((s) => (
                      <td key={s._id} className="px-4 py-4">
                        {s.slug.current === productSlug ? (
                          <span className="text-xs font-bold" style={{ color: "var(--gold)" }}>← Current</span>
                        ) : (
                          <Link
                            href={`/products/${categorySlug}/${subSlug}/${s.slug.current}`}
                            className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200 hover:brightness-110 inline-block whitespace-nowrap"
                            style={{ background: "var(--gold)", color: "#0f0f0f" }}
                          >
                            View →
                          </Link>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>

      <Footer />
      <WhatsAppButton />
      {product && (
        <SchemaMarkup data={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          ...(product.images?.[0]?.url ? { "image": product.images[0].url } : {}),
          ...(product.shortDescription ? { "description": product.shortDescription } : {}),
          ...(product.brand ? { "brand": { "@type": "Brand", "name": product.brand } } : {}),
          "offers": {
            "@type": "Offer",
            "url": typeof window !== "undefined" ? window.location.href : `https://www.maxmachines.in/products/${categorySlug}/${subSlug}/${productSlug}`,
            "priceCurrency": "INR",
            "price": product.variants?.[0]?.price ?? "Contact for price",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "Max Machine Tools"
            }
          }
        }} />
      )}
    </main>
  );
}
