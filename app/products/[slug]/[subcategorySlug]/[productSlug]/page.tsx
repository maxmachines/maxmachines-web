"use client";

import { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { client } from "@/sanity/lib/client";
import { useEnquiryModal } from "@/context/EnquiryModalContext";

/* ─── Types ──────────────────────────────────────────────────────── */
interface SpecRow { parameter: string; value: string }
interface Variant { name: string; price?: number; availability?: string }
interface FaqItem { question: string; answer: string }
interface Download { title: string; url: string }
interface VideoItem { title?: string; videoType?: string; youtubeUrl?: string; fileUrl?: string }

interface ProductDetail {
  _id: string;
  name: string;
  slug: { current: string };
  brand?: string;
  countryOfManufacture?: string;
  price?: number;
  shortDescription?: string;
  featured?: boolean;
  active?: boolean;
  fullDescription?: unknown[];
  images?: { url: string; alt?: string }[];
  specs?: SpecRow[];
  variants?: Variant[];
  faqs?: FaqItem[];
  downloads?: Download[];
  videos?: VideoItem[];
  seo?: { metaTitle?: string; metaDescription?: string };
  subcategory: {
    _id: string;
    name: string;
    slug: { current: string };
    parentCategory: {
      _id: string;
      name: string;
      slug: { current: string };
    };
  };
}

interface RelatedProduct {
  _id: string;
  name: string;
  slug: { current: string };
  brand?: string;
  price?: number;
  imageUrl?: string;
  variantCount?: number;
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

const TABS = ["Overview", "Specifications", "Variants & Pricing", "Videos", "FAQs"] as const;
type Tab = typeof TABS[number];

function getYouTubeId(url: string): string | null {
  if (!url || typeof url !== 'string') return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

/* ─── SVG Icons ──────────────────────────────────────────────────── */
const ChevronRight = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <path d="M7 4l6 6-6 6" />
  </svg>
);

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg
    viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 flex-shrink-0"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
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

/* ─── FAQ Accordion Item ─────────────────────────────────────────── */
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
        <ChevronDown open={open} />
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0" style={{ background: "var(--bg-secondary)" }}>
          <p className="text-sm leading-relaxed" style={{ color: "#a3a3a3" }}>{faq.answer}</p>
        </div>
      )}
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
    strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-bold text-white">{children}</strong>,
    em: ({ children }: { children?: React.ReactNode }) => <em className="italic">{children}</em>,
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="px-1.5 py-0.5 rounded text-sm font-mono" style={{ background: "rgba(234,179,8,0.12)", color: "var(--gold)" }}>{children}</code>
    ),
  },
};

/* ─── Page ───────────────────────────────────────────────────────── */
export default function ProductDetailPage() {
  const params = useParams();
  const pathname = usePathname();
  const slug = params.slug as string;
  const subcategorySlug = params.subcategorySlug as string;
  const productSlug = params.productSlug as string;

  const { openEnquiryModal } = useEnquiryModal();

  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [related, setRelated] = useState<RelatedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [missing, setMissing] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>("Overview");
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!productSlug) return;

    async function fetchData() {
      const prod = await client.fetch<ProductDetail | null>(
        `*[_type == "product" && slug.current == $productSlug][0] {
          _id, name, slug, brand, countryOfManufacture, price, shortDescription, featured, active,
          fullDescription,
          "images": images[]{
            "url": asset->url,
            alt
          },
          specs[]{parameter, value},
          variants[]{name, price, availability},
          faqs[]{question, answer},
          "downloads": downloads[]{title, "url": file.asset->url},
          "videos": videos[] {
            title,
            videoType,
            youtubeUrl,
            "fileUrl": videoFile.asset->url
          },
          seo{metaTitle, metaDescription},
          "subcategory": subcategory->{
            _id, name, slug,
            "parentCategory": parentCategory->{_id, name, slug}
          }
        }`,
        { productSlug }
      );

      if (!prod) {
        setMissing(true);
        setLoading(false);
        return;
      }

      const rel = await client.fetch<RelatedProduct[]>(
        `*[_type == "product" && subcategory->slug.current == $subcategorySlug && active == true && slug.current != $productSlug] | order(featured desc)[0...8] {
          _id, name, slug, brand, price,
          "imageUrl": images[0].asset->url,
          "variantCount": count(variants)
        }`,
        { subcategorySlug, productSlug }
      );

      setProduct(prod);
      setRelated(rel);
      setLoading(false);
    }

    fetchData().catch(() => setLoading(false));
  }, [productSlug, subcategorySlug]);

  if (missing) notFound();

  const images = product?.images ?? [];
  const hasImages = images.length > 0;
  const categorySlug = product?.subcategory?.parentCategory?.slug?.current ?? slug;
  const categoryName = product?.subcategory?.parentCategory?.name;
  const subName = product?.subcategory?.name;
  const subSlug = product?.subcategory?.slug?.current ?? subcategorySlug;
  const flag = product?.countryOfManufacture ? countryFlags[product.countryOfManufacture] : null;
  const country = product?.countryOfManufacture ? countryLabels[product.countryOfManufacture] : null;

  /* ── Tab visibility ── */
  const hasSpecs = (product?.specs?.length ?? 0) > 0;
  const hasVariants = (product?.variants?.length ?? 0) > 0;
  const hasFaqs = (product?.faqs?.length ?? 0) > 0;
  const hasVideos = (product?.videos?.length ?? 0) > 0;
  const visibleTabs = TABS.filter((t) => {
    if (t === "Specifications") return hasSpecs;
    if (t === "Variants & Pricing") return hasVariants;
    if (t === "Videos") return hasVideos;
    if (t === "FAQs") return hasFaqs;
    return true;
  });

  return (
    <>
      {/* ── SEO ─────────────────────────────────────────────────── */}
      {product?.seo?.metaTitle && (
        <title>{product.seo.metaTitle}</title>
      )}

      <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
        <Navbar />

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          className="relative pt-24 pb-8 lg:pt-28 lg:pb-10 overflow-hidden"
          style={{ background: "linear-gradient(180deg, #181408 0%, var(--bg-primary) 100%)" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: "linear-gradient(rgba(234,179,8,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.05) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center flex-wrap gap-1.5 text-xs mb-5" aria-label="Breadcrumb">
              <Link href="/products" className="transition-colors hover:text-yellow-300" style={{ color: "#737373" }}>
                Catalog
              </Link>
              <ChevronRight />
              {loading ? (
                <span style={{ color: "#737373" }}>…</span>
              ) : (
                <Link href={`/products/${categorySlug}`} className="transition-colors hover:text-yellow-300" style={{ color: "#737373" }}>
                  {categoryName}
                </Link>
              )}
              <ChevronRight />
              {loading ? (
                <span style={{ color: "#737373" }}>…</span>
              ) : (
                <Link href={`/products/${categorySlug}/${subSlug}`} className="transition-colors hover:text-yellow-300" style={{ color: "#737373" }}>
                  {subName}
                </Link>
              )}
              <ChevronRight />
              <span style={{ color: "var(--gold)" }}>
                {loading ? "Loading…" : product?.name}
              </span>
            </nav>

            {/* Title + badges */}
            {loading ? (
              <div className="space-y-3">
                <div className="rounded-lg animate-pulse h-10 w-80" style={{ background: "rgba(234,179,8,0.1)" }} />
                <div className="rounded-lg animate-pulse h-5 w-48" style={{ background: "rgba(255,255,255,0.05)" }} />
              </div>
            ) : (
              <>
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
                {product?.shortDescription && (
                  <p className="mt-4 text-base max-w-2xl leading-relaxed" style={{ color: "#a3a3a3" }}>
                    {product.shortDescription}
                  </p>
                )}
              </>
            )}
          </div>
        </section>

        {/* ── MAIN CONTENT ─────────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-16 lg:pb-24">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* ── LEFT COLUMN ────────────────────────────────────── */}
            <div className="flex-1 min-w-0">

              {/* Gallery */}
              <div className="mb-8">
                {/* Main image */}
                <div
                  className="relative w-full rounded-2xl overflow-hidden mb-3 border"
                  style={{
                    height: "380px",
                    background: "var(--bg-secondary)",
                    borderColor: "rgba(234,179,8,0.14)",
                  }}
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
                    <div className="flex items-center justify-center h-full">
                      <GearIcon />
                    </div>
                  )}
                </div>

                {/* Thumbnails */}
                {!loading && images.length > 1 && (
                  <div className="flex gap-2 flex-wrap">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className="relative rounded-xl overflow-hidden border-2 transition-all duration-200"
                        style={{
                          width: "72px",
                          height: "72px",
                          borderColor: i === activeImage ? "var(--gold)" : "rgba(234,179,8,0.15)",
                          flexShrink: 0,
                        }}
                      >
                        <Image
                          src={img.url}
                          alt={img.alt ?? `Image ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="72px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Tabs */}
              {!loading && (
                <>
                  <div
                    className="flex gap-1 mb-6 p-1 rounded-xl overflow-x-auto"
                    style={{ background: "var(--bg-secondary)", border: "1px solid rgba(234,179,8,0.1)" }}
                  >
                    {visibleTabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className="px-4 py-2.5 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 flex-shrink-0"
                        style={
                          activeTab === tab
                            ? { background: "var(--gold)", color: "#0f0f0f" }
                            : { color: "#737373" }
                        }
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* ── Overview ── */}
                  {activeTab === "Overview" && (
                    <div>
                      {product?.fullDescription && product.fullDescription.length > 0 ? (
                        <div className="prose-dark">
                          <PortableText
                            value={product.fullDescription as Parameters<typeof PortableText>[0]["value"]}
                            components={ptComponents}
                          />
                        </div>
                      ) : (
                        <div>
                          {product?.shortDescription && (
                            <p className="text-base leading-relaxed mb-4" style={{ color: "#d4d4d4" }}>
                              {product.shortDescription}
                            </p>
                          )}
                          <p className="text-sm" style={{ color: "#525252" }}>
                            Full product details coming soon. Contact us for specifications.
                          </p>
                        </div>
                      )}
                      {/* PDF Downloads */}
                      {(product?.downloads?.length ?? 0) > 0 && (
                        <div className="mt-8">
                          <h3 className="text-white font-bold text-lg mb-3">Downloads</h3>
                          <div className="flex flex-col gap-2">
                            {product!.downloads!.map((dl, i) => (
                              <a
                                key={i}
                                href={dl.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-200 hover:bg-white/5 text-sm font-medium"
                                style={{ borderColor: "rgba(234,179,8,0.2)", color: "var(--gold)" }}
                              >
                                📄 {dl.title}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* ── Specifications ── */}
                  {activeTab === "Specifications" && (
                    <div>
                      {hasSpecs ? (
                        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(234,179,8,0.14)" }}>
                          <table className="w-full text-sm">
                            <thead>
                              <tr style={{ background: "rgba(234,179,8,0.08)" }}>
                                <th className="text-left px-5 py-3 font-semibold" style={{ color: "var(--gold)", width: "45%" }}>
                                  Parameter
                                </th>
                                <th className="text-left px-5 py-3 font-semibold text-white">
                                  Value
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {product!.specs!.map((row, i) => (
                                <tr
                                  key={i}
                                  style={{
                                    background: i % 2 === 0 ? "var(--bg-secondary)" : "rgba(234,179,8,0.02)",
                                    borderTop: "1px solid rgba(234,179,8,0.07)",
                                  }}
                                >
                                  <td className="px-5 py-3 font-medium" style={{ color: "#a3a3a3" }}>
                                    {row.parameter}
                                  </td>
                                  <td className="px-5 py-3 text-white">
                                    {row.value}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-sm" style={{ color: "#525252" }}>No specifications listed.</p>
                      )}
                    </div>
                  )}

                  {/* ── Variants & Pricing ── */}
                  {activeTab === "Variants & Pricing" && (
                    <div>
                      {hasVariants ? (
                        <div className="rounded-xl overflow-hidden border" style={{ borderColor: "rgba(234,179,8,0.14)" }}>
                          <table className="w-full text-sm">
                            <thead>
                              <tr style={{ background: "rgba(234,179,8,0.08)" }}>
                                <th className="text-left px-5 py-3 font-semibold" style={{ color: "var(--gold)" }}>Size / Variant</th>
                                <th className="text-left px-5 py-3 font-semibold" style={{ color: "var(--gold)" }}>Availability</th>
                                <th className="text-left px-5 py-3 font-semibold" style={{ color: "var(--gold)" }}>Price</th>
                                <th className="px-5 py-3" />
                              </tr>
                            </thead>
                            <tbody>
                              {product!.variants!.map((v, i) => {
                                const avail = v.availability ? availabilityLabel[v.availability] : null;
                                return (
                                  <tr
                                    key={i}
                                    style={{
                                      background: i % 2 === 0 ? "var(--bg-secondary)" : "rgba(234,179,8,0.02)",
                                      borderTop: "1px solid rgba(234,179,8,0.07)",
                                    }}
                                  >
                                    <td className="px-5 py-3 font-semibold text-white">{v.name}</td>
                                    <td className="px-5 py-3">
                                      {avail ? (
                                        <span className="text-xs font-semibold" style={{ color: avail.color }}>
                                          {avail.label}
                                        </span>
                                      ) : "—"}
                                    </td>
                                    <td className="px-5 py-3">
                                      {v.price ? (
                                        <span className="font-bold" style={{ color: "var(--gold)" }}>
                                          ₹{v.price.toLocaleString("en-IN")}
                                        </span>
                                      ) : (
                                        <span style={{ color: "#737373" }}>On Request</span>
                                      )}
                                    </td>
                                    <td className="px-5 py-3">
                                      <button
                                        onClick={() => openEnquiryModal(`${product?.name} — ${v.name}`)}
                                        className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200 hover:brightness-110"
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
                      ) : (
                        <p className="text-sm" style={{ color: "#525252" }}>No variants listed.</p>
                      )}
                    </div>
                  )}

                  {/* ── Videos ── */}
                  {activeTab === "Videos" && (
                    <div className="flex flex-col gap-6">
{product!.videos!.map((item, i) => {
                        if (item.youtubeUrl) {
                          const videoId = getYouTubeId(item.youtubeUrl ?? "");
                          if (!videoId) return null;
                          return (
                            <iframe
                              key={i}
                              width="100%"
                              height="400"
                              src={`https://www.youtube.com/embed/${videoId}`}
                              frameBorder="0"
                              allowFullScreen
                              className="rounded-lg"
                            />
                          );
                        }
                        if (item.fileUrl) {
                          return (
                            <video
                              key={i}
                              src={item.fileUrl}
                              controls
                              className="w-full rounded-lg"
                              style={{ maxHeight: "400px" }}
                            />
                          );
                        }
                        return null;
                      })}
                    </div>
                  )}

                  {/* ── FAQs ── */}
                  {activeTab === "FAQs" && (
                    <div className="flex flex-col gap-3">
                      {hasFaqs ? (
                        product!.faqs!.map((faq, i) => (
                          <FaqAccordion key={i} faq={faq} />
                        ))
                      ) : (
                        <p className="text-sm" style={{ color: "#525252" }}>No FAQs listed.</p>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* ── RIGHT SIDEBAR ─────────────────────────────────── */}
            <div className="lg:w-80 xl:w-96 flex-shrink-0">
              <div className="lg:sticky lg:top-24 flex flex-col gap-4">

                {/* Enquiry Panel */}
                <div
                  className="rounded-2xl border p-6"
                  style={{
                    background: "var(--bg-secondary)",
                    borderColor: "rgba(234,179,8,0.2)",
                  }}
                >
                  <h3 className="text-white font-bold text-lg mb-1">Get a Quote</h3>
                  <p className="text-sm mb-4" style={{ color: "#737373" }}>
                    We respond within the hour on business days.
                  </p>

                  {loading ? (
                    <div className="h-12 rounded-xl animate-pulse" style={{ background: "rgba(234,179,8,0.1)" }} />
                  ) : (
                    <button
                      onClick={() => openEnquiryModal(
                        product?.name,
                        `I am interested in: ${product?.name}. Page: https://www.maxmachines.in${pathname}`
                      )}
                      className="w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-[1.02] hover:brightness-110 mb-3"
                      style={{ background: "var(--gold)", color: "#0f0f0f" }}
                    >
                      📋 Enquire About This Machine
                    </button>
                  )}

                  <div className="flex gap-2">
                    <a
                      href="tel:+919962061514"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 hover:bg-white/5"
                      style={{ color: "white", borderColor: "rgba(255,255,255,0.2)" }}
                    >
                      📞 Call
                    </a>
                    <a
                      href="https://wa.me/919382861514"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 hover:bg-white/5"
                      style={{ color: "#22c55e", borderColor: "#22c55e" }}
                    >
                      💬 WhatsApp
                    </a>
                  </div>
                </div>

                {/* Quick Info */}
                {!loading && product && (
                  <div
                    className="rounded-2xl border p-5"
                    style={{ background: "var(--bg-secondary)", borderColor: "rgba(234,179,8,0.12)" }}
                  >
                    <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider" style={{ fontSize: "11px", color: "#737373" }}>
                      Quick Info
                    </h4>
                    <div className="flex flex-col gap-2.5 text-sm">
                      {product.brand && (
                        <div className="flex justify-between">
                          <span style={{ color: "#737373" }}>Brand</span>
                          <span className="font-semibold text-white">{product.brand}</span>
                        </div>
                      )}
                      {flag && country && (
                        <div className="flex justify-between">
                          <span style={{ color: "#737373" }}>Origin</span>
                          <span className="font-semibold text-white">{flag} {country}</span>
                        </div>
                      )}
                      {product.subcategory?.name && (
                        <div className="flex justify-between">
                          <span style={{ color: "#737373" }}>Type</span>
                          <span className="font-semibold text-white">{product.subcategory.name}</span>
                        </div>
                      )}
                      {(product.variants?.length ?? 0) > 0 && (
                        <div className="flex justify-between">
                          <span style={{ color: "#737373" }}>Variants</span>
                          <span className="font-semibold text-white">{product.variants!.length} sizes</span>
                        </div>
                      )}
                      {product.price ? (
                        <div className="flex justify-between">
                          <span style={{ color: "#737373" }}>Base Price</span>
                          <span className="font-bold" style={{ color: "var(--gold)" }}>
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                        </div>
                      ) : (
                        <div className="flex justify-between">
                          <span style={{ color: "#737373" }}>Price</span>
                          <span className="font-semibold" style={{ color: "var(--gold)" }}>Request Quote</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATED PRODUCTS (COMPARISON TABLE) ──────────────── */}
        {!loading && related.length > 0 && (
          <section className="pb-20" style={{ background: "var(--bg-primary)" }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-white">
                  More in{" "}
                  <span style={{ color: "var(--gold)" }}>{product?.subcategory?.name}</span>
                </h2>
                <p className="text-sm mt-1" style={{ color: "#737373" }}>
                  Other machines in this range you might be interested in.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(234,179,8,0.14)" }}>
                {/* Desktop table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr style={{ background: "rgba(234,179,8,0.08)" }}>
                        <th className="text-left px-5 py-3.5 font-semibold" style={{ color: "var(--gold)" }}>Machine</th>
                        <th className="text-left px-5 py-3.5 font-semibold" style={{ color: "var(--gold)" }}>Brand</th>
                        <th className="text-left px-5 py-3.5 font-semibold" style={{ color: "var(--gold)" }}>Variants</th>
                        <th className="text-left px-5 py-3.5 font-semibold" style={{ color: "var(--gold)" }}>Price</th>
                        <th className="px-5 py-3.5" />
                      </tr>
                    </thead>
                    <tbody>
                      {related.map((rel, i) => (
                        <tr
                          key={rel._id}
                          style={{
                            background: i % 2 === 0 ? "var(--bg-secondary)" : "rgba(234,179,8,0.02)",
                            borderTop: "1px solid rgba(234,179,8,0.07)",
                          }}
                        >
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div
                                className="relative rounded-lg overflow-hidden flex-shrink-0"
                                style={{ width: "48px", height: "48px", background: "rgba(234,179,8,0.06)" }}
                              >
                                {rel.imageUrl ? (
                                  <Image src={rel.imageUrl} alt={rel.name} fill className="object-cover" sizes="48px" />
                                ) : (
                                  <div className="flex items-center justify-center h-full">
                                    <GearIcon />
                                  </div>
                                )}
                              </div>
                              <Link
                                href={`/products/${categorySlug}/${subSlug}/${rel.slug.current}`}
                                className="font-semibold text-white hover:text-yellow-300 transition-colors"
                              >
                                {rel.name}
                              </Link>
                            </div>
                          </td>
                          <td className="px-5 py-4" style={{ color: "#a3a3a3" }}>
                            {rel.brand ?? "—"}
                          </td>
                          <td className="px-5 py-4" style={{ color: "#a3a3a3" }}>
                            {(rel.variantCount ?? 0) > 0 ? `${rel.variantCount} sizes` : "—"}
                          </td>
                          <td className="px-5 py-4">
                            {rel.price ? (
                              <span className="font-bold" style={{ color: "var(--gold)" }}>
                                ₹{rel.price.toLocaleString("en-IN")}
                              </span>
                            ) : (
                              <span style={{ color: "#737373" }}>On Request</span>
                            )}
                          </td>
                          <td className="px-5 py-4">
                            <Link
                              href={`/products/${categorySlug}/${subSlug}/${rel.slug.current}`}
                              className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-200 hover:brightness-110 whitespace-nowrap"
                              style={{ background: "var(--gold)", color: "#0f0f0f" }}
                            >
                              View →
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile cards */}
                <div className="md:hidden flex flex-col divide-y divide-yellow-900/20">
                  {related.map((rel) => (
                    <Link
                      key={rel._id}
                      href={`/products/${categorySlug}/${subSlug}/${rel.slug.current}`}
                      className="flex items-center gap-4 p-4 hover:bg-white/5 transition-colors"
                    >
                      <div
                        className="relative rounded-xl overflow-hidden flex-shrink-0"
                        style={{ width: "60px", height: "60px", background: "rgba(234,179,8,0.06)" }}
                      >
                        {rel.imageUrl ? (
                          <Image src={rel.imageUrl} alt={rel.name} fill className="object-cover" sizes="60px" />
                        ) : (
                          <div className="flex items-center justify-center h-full">
                            <GearIcon />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-white text-sm truncate">{rel.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#737373" }}>
                          {rel.brand ?? ""}{rel.brand && rel.price ? " · " : ""}
                          {rel.price ? `₹${rel.price.toLocaleString("en-IN")}` : "On Request"}
                        </p>
                      </div>
                      <span className="text-xs font-bold flex-shrink-0" style={{ color: "var(--gold)" }}>View →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── BOTTOM CTA ────────────────────────────────────────── */}
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
                  Ready to Order?
                </h3>
                <p style={{ color: "#737373" }}>
                  Get pricing, availability, and lead times — we reply within the hour.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <button
                  onClick={() => openEnquiryModal(product?.name)}
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-center transition-all duration-200 hover:scale-105 hover:brightness-110"
                  style={{ background: "var(--gold)", color: "#0f0f0f" }}
                >
                  📋 Send Enquiry
                </button>
                <a
                  href="tel:+919962061514"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-center transition-all duration-200 hover:bg-white/5 border"
                  style={{ color: "white", borderColor: "rgba(255,255,255,0.2)" }}
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
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
