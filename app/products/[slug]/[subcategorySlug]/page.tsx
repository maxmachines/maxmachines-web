import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquireButton from "@/components/EnquireButton";
import { client } from "@/sanity/lib/client";

/* ─── Types ──────────────────────────────────────────────────────── */
interface ParentCategory {
  _id: string;
  name: string;
  slug: { current: string };
}

interface Subcategory {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  imageUrl?: string;
  parentCategory: ParentCategory;
}

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  shortDescription?: string;
  brand?: string;
  countryOfManufacture?: string;
  featured?: boolean;
  imageUrl?: string;
  variantCount?: number;
}

/* ─── Helpers ────────────────────────────────────────────────────── */
const countryFlags: Record<string, string> = {
  india: "🇮🇳",
  taiwan: "🇹🇼",
  japan: "🇯🇵",
  italy: "🇮🇹",
  usa: "🇺🇸",
};
const countryLabels: Record<string, string> = {
  india: "India",
  taiwan: "Taiwan",
  japan: "Japan",
  italy: "Italy",
  usa: "USA",
};

/* ─── Data fetchers ──────────────────────────────────────────────── */
async function getSubcategory(subcategorySlug: string): Promise<Subcategory | null> {
  return client.fetch<Subcategory | null>(
    `*[_type == "subcategory" && slug.current == $subcategorySlug][0] {
      _id, name, slug, description,
      "imageUrl": image.asset->url,
      "parentCategory": parentCategory->{_id, name, slug}
    }`,
    { subcategorySlug }
  );
}

async function getProducts(subcategorySlug: string): Promise<Product[]> {
  return client.fetch<Product[]>(
    `*[_type == "product" && subcategory->slug.current == $subcategorySlug && active == true] | order(displayOrder asc, featured desc) {
      _id, name, slug, shortDescription, brand, countryOfManufacture, featured,
      "imageUrl": images[0].asset->url,
      "variantCount": count(variants)
    }`,
    { subcategorySlug }
  );
}

/* ─── SSG params ─────────────────────────────────────────────────── */
export async function generateStaticParams() {
  const subs = await client.fetch<{ subSlug: string; catSlug: string | null }[]>(
    `*[_type == "subcategory"]{ "subSlug": slug.current, "catSlug": parentCategory->slug.current }`
  );
  return subs
    .filter((s) => s.catSlug)
    .map((s) => ({ slug: s.catSlug as string, subcategorySlug: s.subSlug }));
}

/* ─── Metadata ───────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; subcategorySlug: string }>;
}): Promise<Metadata> {
  const { slug, subcategorySlug } = await params;
  const subcategory = await getSubcategory(subcategorySlug);

  if (!subcategory) {
    return { title: "Subcategory Not Found | Max Machine Tools" };
  }

  const title = `${subcategory.name} | Max Machine Tools`;
  const description =
    subcategory.description ||
    `Explore our range of ${subcategory.name.toLowerCase()} — supplied Pan-India and for export by Max Machine Tools.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.maxmachines.in/products/${slug}/${subcategorySlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.maxmachines.in/products/${slug}/${subcategorySlug}`,
      siteName: "Max Machine Tools",
      images: [
        {
          url: subcategory.imageUrl || "https://www.maxmachines.in/logo.png",
          width: 1200,
          height: subcategory.imageUrl ? 800 : 1200,
          alt: subcategory.name,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [subcategory.imageUrl || "https://www.maxmachines.in/logo.png"],
    },
  };
}

/* ─── SVG Icons ──────────────────────────────────────────────────── */
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

const ChevronRight = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M7 4l6 6-6 6" />
  </svg>
);

const ArrowRight = () => (
  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M4 10h12M10 4l6 6-6 6" />
  </svg>
);

/* ─── Product Card ───────────────────────────────────────────────── */
function ProductCard({
  product,
  categorySlug,
  subcategorySlug,
}: {
  product: Product;
  categorySlug: string;
  subcategorySlug: string;
}) {
  const flag = product.countryOfManufacture ? countryFlags[product.countryOfManufacture] : null;
  const country = product.countryOfManufacture ? countryLabels[product.countryOfManufacture] : null;

  return (
    <div
      className="rounded-2xl border overflow-hidden flex flex-col group border-[rgba(234,179,8,0.14)] hover:border-[rgba(234,179,8,0.5)] hover:shadow-[0_8px_32px_rgba(234,179,8,0.08)] transition-[border-color,box-shadow] duration-300"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Image */}
      <Link href={`/products/${categorySlug}/${subcategorySlug}/${product.slug.current}`}>
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "200px", background: "rgba(234,179,8,0.04)" }}
        >
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <GearIcon />
            </div>
          )}
          {product.imageUrl && (
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(26,26,26,0.7) 0%, transparent 50%)" }}
            />
          )}
          {product.featured && (
            <span
              className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded-full"
              style={{ background: "var(--gold)", color: "#0f0f0f" }}
            >
              ★ Featured
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-3">
          {product.brand && (
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full border"
              style={{ color: "var(--gold)", borderColor: "rgba(234,179,8,0.3)", background: "rgba(234,179,8,0.07)" }}
            >
              {product.brand}
            </span>
          )}
          {flag && country && (
            <span
              className="text-xs font-semibold px-2 py-0.5 rounded-full border"
              style={{ color: "#a3a3a3", borderColor: "rgba(163,163,163,0.2)", background: "rgba(163,163,163,0.05)" }}
            >
              {flag} {country}
            </span>
          )}
        </div>

        <Link href={`/products/${categorySlug}/${subcategorySlug}/${product.slug.current}`}>
          <h3 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-yellow-300 transition-colors duration-200">
            {product.name}
          </h3>
        </Link>

        {product.shortDescription && (
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#a3a3a3" }}>
            {product.shortDescription}
          </p>
        )}

        {(product.variantCount ?? 0) > 0 && (
          <p className="text-xs mb-3" style={{ color: "#737373" }}>
            {product.variantCount} size variant{(product.variantCount ?? 0) > 1 ? "s" : ""} available
          </p>
        )}

        {/* Actions */}
        <div className="flex gap-2 mt-auto pt-2">
          <Link
            href={`/products/${categorySlug}/${subcategorySlug}/${product.slug.current}`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:brightness-110"
            style={{ background: "var(--gold)", color: "#0f0f0f" }}
          >
            View Machine <ArrowRight />
          </Link>
          <EnquireButton
            productName={product.name}
            label="Enquire"
            className="px-4 py-2.5 rounded-xl text-sm font-bold border transition-all duration-200 hover:bg-white/5"
            style={{ color: "white", borderColor: "rgba(255,255,255,0.2)" }}
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default async function SubcategoryPage({
  params,
}: {
  params: Promise<{ slug: string; subcategorySlug: string }>;
}) {
  const { slug, subcategorySlug } = await params;
  const subcategory = await getSubcategory(subcategorySlug);

  if (!subcategory) notFound();

  const products = await getProducts(subcategorySlug);
  const categoryName = subcategory.parentCategory?.name;

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ paddingTop: "80px" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 55% 40%, #181408 0%, #0f0e08 40%, #0f0f0f 100%)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(234,179,8,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(234,179,8,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <GearBackground />
        <div
          className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(circle at 80% 20%, rgba(234,179,8,0.08) 0%, transparent 60%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-4 pb-2 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs mb-2" aria-label="Breadcrumb">
            <Link href="/products" className="transition-colors hover:text-yellow-300" style={{ color: "#737373" }}>
              Catalog
            </Link>
            <ChevronRight />
            <Link href={`/products/${slug}`} className="transition-colors hover:text-yellow-300" style={{ color: "#737373" }}>
              {categoryName}
            </Link>
            <ChevronRight />
            <span style={{ color: "var(--gold)" }}>{subcategory.name}</span>
          </nav>

          <h1 className="font-black leading-tight tracking-tight mb-2 text-4xl lg:text-5xl">
            <span style={{ color: "var(--gold)" }}>{subcategory.name}</span>
          </h1>

          {subcategory.description && (
            <p className="text-base leading-snug max-w-2xl mx-auto mt-2" style={{ color: "#a3a3a3" }}>
              {subcategory.description}
            </p>
          )}
        </div>
      </section>

      {/* ── PRODUCTS GRID ────────────────────────────────────────── */}
      <section className="pt-3 pb-10 lg:pb-16" style={{ background: "var(--bg-primary)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-black text-white mb-1">
              {products.length > 0 ? (
                <>
                  <span style={{ color: "var(--gold)" }}>
                    {products.length} Machine{products.length !== 1 ? "s" : ""}
                  </span>{" "}
                  Available
                </>
              ) : (
                "Coming Soon"
              )}
            </h2>
            <p className="text-sm max-w-xl mx-auto" style={{ color: "#a3a3a3" }}>
              {products.length === 0
                ? "We're adding our full range to the catalog. Contact us for the complete list."
                : "Click a machine to view full specifications, variants, and pricing."}
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  categorySlug={slug}
                  subcategorySlug={subcategorySlug}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="flex justify-center mb-6">
                <GearIcon />
              </div>
              <p style={{ color: "#525252" }}>
                No machines listed yet. Contact us for the full range.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
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
                Can&apos;t Find What You Need?
              </h3>
              <p style={{ color: "#737373" }}>
                We stock more than what&apos;s listed. Call us or drop a WhatsApp message.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <EnquireButton
                productName={subcategory.name}
                label="📋 Send Enquiry"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-center transition-all duration-200 hover:scale-105 hover:brightness-110"
                style={{ background: "var(--gold)", color: "#0f0f0f" }}
              />
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
  );
}
