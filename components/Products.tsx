import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

interface Category {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
  imageUrl?: string;
}

const GearIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" className="w-10 h-10" aria-hidden="true">
    <circle cx="32" cy="32" r="28" stroke="#eab308" strokeWidth="1.5" opacity="0.4" />
    <circle cx="32" cy="32" r="20" stroke="#eab308" strokeWidth="1.5" opacity="0.4" />
    <circle cx="32" cy="32" r="8" stroke="#eab308" strokeWidth="2" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
      <rect key={i} x="29" y="2" width="6" height="10" rx="1" fill="#eab308" opacity="0.5" transform={`rotate(${a} 32 32)`} />
    ))}
  </svg>
);

async function getCategories(): Promise<Category[]> {
  return client.fetch(
    `*[_type == "category"] | order(displayOrder asc) [0...6] {
      _id, name, slug, description, "imageUrl": image.asset->url
    }`
  );
}

export default async function Products() {
  const categories = await getCategories();

  return (
    <section
      id="products"
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border"
            style={{
              color: "var(--gold)",
              borderColor: "var(--gold-border)",
              background: "var(--gold-dim)",
            }}
          >
            Our Products
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Engineered for the
            <br />
            <span className="gradient-text">Modern Production Line</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#a3a3a3" }}>
            Explore our comprehensive catalog of high-performance machinery, from heavy-duty
            metal forming to micron-level machining. Every machine is built to run
            relentlessly — designed for maximum uptime and backed by our lifetime parts guarantee.
          </p>
        </div>

        {/* Grid */}
        {categories.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat._id}
                href={`/products/${cat.slug.current}`}
                className="card-hover group relative rounded-2xl border overflow-hidden flex flex-col"
                style={{
                  background: "var(--bg-primary)",
                  borderColor: "rgba(234,179,8,0.1)",
                }}
              >
                <div
                  className="relative w-full flex items-center justify-center overflow-hidden"
                  style={{ height: "220px", background: "#f5f5f0" }}
                >
                  {cat.imageUrl ? (
                    <Image
                      src={cat.imageUrl}
                      alt={cat.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  ) : (
                    <GearIcon />
                  )}
                  {cat.imageUrl && (
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(26,26,26,0.8) 0%, transparent 60%)" }}
                    />
                  )}
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-white font-bold text-lg mb-2 leading-snug group-hover:text-yellow-300 transition-colors duration-200">
                    {cat.name}
                  </h3>
                  {cat.description && (
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "#737373" }}>
                      {cat.description}
                    </p>
                  )}
                  <div
                    className="text-sm font-bold flex items-center gap-1 mt-auto transition-colors duration-200 group-hover:gap-2"
                    style={{ color: "var(--gold)" }}
                  >
                    Explore <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p style={{ color: "#525252" }}>Catalog coming soon — contact us for the full range.</p>
          </div>
        )}
      </div>
    </section>
  );
}
