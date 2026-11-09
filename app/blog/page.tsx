import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialStrip from "@/components/SocialStrip";
import SchemaMarkup from "@/components/SchemaMarkup";
import BlogList from "@/components/BlogList";
import { getPosts, formatDate } from "@/lib/blog-posts";

export const revalidate = 3600;

const URL = "https://www.maxmachines.in/blog";
const TITLE = "Machine Guides and Blog | Max Machine Tools";
const DESC =
  "Practical guides from Max Machine Tools: how to choose a lathe, cut graphite, measure marking punches and more. Written by people who sell and service these machines.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: URL,
    siteName: "Max Machine Tools",
    images: [{ url: "https://www.maxmachines.in/logo.png", width: 1200, height: 1200, alt: "Max Machine Tools" }],
    locale: "en_IN",
    type: "website",
  },
};

export default async function BlogPage() {
  const posts = await getPosts();

  const counts = new Map<string, number>();
  posts.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1));

  const cards = posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    dateLabel: formatDate(p.date),
    readTime: p.readTime,
    coverUrl: p.coverUrl,
    coverAlt: p.coverAlt,
  }));

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)", color: "white" }}>
      <Navbar />

      <section className="relative overflow-hidden text-center" style={{ paddingTop: "80px" }}>
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 60%, #1a1200 0%, #0f0d00 35%, #0f0f0f 70%)" }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="font-black uppercase"
            style={{ fontSize: "clamp(80px, 16vw, 220px)", color: "rgba(234,179,8,0.05)", letterSpacing: "0.05em" }}
          >
            Guides
          </span>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 py-16 lg:py-20">
          <nav className="flex items-center justify-center gap-2 text-xs mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-yellow-300" style={{ color: "#737373" }}>Home</Link>
            <span style={{ color: "#737373" }}>/</span>
            <span style={{ color: "var(--gold)" }}>Blog</span>
          </nav>
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
            Machine Guides
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Guides from the shop floor</h1>
          <p className="text-base sm:text-lg" style={{ color: "var(--text-muted)" }}>
            Straight answers on choosing, using and maintaining industrial machines, from a company that has been
            trading in machinery since 1963.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-8">
        {posts.length === 0 ? (
          <p className="text-center" style={{ color: "var(--text-muted)" }}>
            Our first guides are being published. Please check back soon, or browse our{" "}
            <Link href="/products" style={{ color: "var(--gold)" }}>machines</Link>.
          </p>
        ) : (
          <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
            <BlogList posts={cards} />

            <aside className="space-y-6">
              <div className="rounded-xl p-5" style={{ background: "var(--bg-secondary)", border: "1px solid var(--gold-border)" }}>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
                  Latest posts
                </h3>
                <ul className="space-y-4">
                  {posts.slice(0, 5).map((p, i) => (
                    <li key={p.slug} className="flex gap-3">
                      <span className="text-xl italic font-semibold" style={{ color: "rgba(234,179,8,0.5)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <Link href={`/blog/${p.slug}`} className="text-sm font-semibold hover:text-yellow-300">
                        {p.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-5" style={{ background: "var(--bg-secondary)", border: "1px solid var(--gold-border)" }}>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
                  Categories
                </h3>
                <ul className="space-y-3">
                  {Array.from(counts.entries()).map(([c, n]) => (
                    <li key={c} className="flex items-center justify-between text-sm">
                      <span>{c}</span>
                      <span
                        className="text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{ background: "var(--gold-dim)", color: "var(--gold)" }}
                      >
                        {n}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl p-5" style={{ background: "#1a1500", border: "1px solid var(--gold)" }}>
                <h3 className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>
                  Stay updated
                </h3>
                <p className="text-sm mb-4" style={{ color: "#d4d4d4" }}>
                  New machines, guides and videos on our WhatsApp Channel.
                </p>
                <a
                  href="https://whatsapp.com/channel/0029Vb6Sttp1yT2HqDtufu2f?utm_source=website&utm_medium=blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-lg text-sm font-semibold"
                  style={{ background: "var(--gold)", color: "#0f0f0f" }}
                >
                  Join the channel
                </a>
              </div>
            </aside>
          </div>
        )}
      </section>

      <SocialStrip />
      <Footer />
      <WhatsAppButton />

      <SchemaMarkup
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Max Machine Tools - Machine Guides",
            url: URL,
            publisher: { "@type": "Organization", name: "Max Machine Tools", url: "https://www.maxmachines.in" },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `${URL}/${p.slug}`,
              datePublished: p.date,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.maxmachines.in" },
              { "@type": "ListItem", position: 2, name: "Blog", item: URL },
            ],
          },
        ]}
      />
    </main>
  );
}
