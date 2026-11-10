import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SocialStrip from "@/components/SocialStrip";
import SchemaMarkup from "@/components/SchemaMarkup";
import EnquireButton from "@/components/EnquireButton";
import ShareButtons from "@/components/ShareButtons";
import { waLink } from "@/lib/whatsapp";
import { getPosts, getPost, formatDate } from "@/lib/blog-posts";

export const revalidate = 3600;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Guide not found | Max Machine Tools" };

  const url = `https://www.maxmachines.in/blog/${post.slug}`;
  const title = `${post.title} | Max Machine Tools`;
  return {
    title: { absolute: title },
    description: post.description,
    keywords: post.keywords.length ? post.keywords : undefined,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: post.description,
      url,
      siteName: "Max Machine Tools",
      images: [{ url: post.coverUrl ? `${post.coverUrl}?w=1200&h=630&fit=crop&auto=format` : "https://www.maxmachines.in/logo.png", width: 1200, height: 630, alt: post.coverAlt || post.title }],
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const url = `https://www.maxmachines.in/blog/${post.slug}`;
  const more = (await getPosts()).filter((p) => p.slug !== post.slug).slice(0, 3);

  const jsonLd: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      mainEntityOfPage: url,
      image: post.coverUrl ?? "https://www.maxmachines.in/logo.png",
      author: { "@type": "Organization", name: "Max Machine Tools", url: "https://www.maxmachines.in" },
      publisher: {
        "@type": "Organization",
        name: "Max Machine Tools",
        url: "https://www.maxmachines.in",
        logo: { "@type": "ImageObject", url: "https://www.maxmachines.in/logo.png" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.maxmachines.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.maxmachines.in/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (post.faqs.length > 0) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)", color: "white" }}>
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 lg:px-8" style={{ paddingTop: "110px", paddingBottom: "60px" }}>
        <nav className="flex items-center gap-2 text-xs mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-yellow-300" style={{ color: "#737373" }}>Home</Link>
          <span style={{ color: "#737373" }}>/</span>
          <Link href="/blog" className="hover:text-yellow-300" style={{ color: "#737373" }}>Blog</Link>
          <span style={{ color: "#737373" }}>/</span>
          <span style={{ color: "var(--gold)" }}>{post.category}</span>
        </nav>

        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "var(--gold)" }}>
          {post.category}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">{post.title}</h1>
        <p className="text-sm mb-8" style={{ color: "#737373" }}>
          By Max Machine Tools &middot; {formatDate(post.date)}
          {post.updated ? ` (updated ${formatDate(post.updated)})` : ""} &middot; {post.readTime}
        </p>

        <div className="mb-8"><ShareButtons url={url} title={post.title} /></div>

        {post.coverUrl && (
          <div
            className="relative overflow-hidden rounded-xl mb-8"
            style={{ border: "1px solid var(--gold-border)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${post.coverUrl}?w=1200&auto=format`}
              alt={post.coverAlt || post.title}
              className="w-full block"
            />
          </div>
        )}

        <p className="text-lg mb-10" style={{ color: "#d4d4d4", lineHeight: 1.7 }}>{post.intro}</p>

        {post.sections.map((s) => (
          <section key={s.heading} className="mb-10">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--gold)" }}>{s.heading}</h2>
            {s.paragraphs.map((t, i) => (
              <p key={i} className="mb-4" style={{ color: "#d4d4d4", lineHeight: 1.75 }}>{t}</p>
            ))}
            {s.bullets.length > 0 && (
              <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: "#d4d4d4", lineHeight: 1.7 }}>
                {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            )}
            {s.steps.length > 0 && (
              <ol className="list-decimal pl-6 mb-4 space-y-2" style={{ color: "#d4d4d4", lineHeight: 1.7 }}>
                {s.steps.map((b, i) => <li key={i}>{b}</li>)}
              </ol>
            )}
          </section>
        ))}

        {post.faqs.length > 0 && (
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--gold)" }}>Frequently asked questions</h2>
            <div className="space-y-5">
              {post.faqs.map((f) => (
                <div key={f.q}>
                  <h3 className="text-lg font-semibold mb-1">{f.q}</h3>
                  <p style={{ color: "#d4d4d4", lineHeight: 1.7 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {post.related.length > 0 && (
          <section className="mb-10 rounded-xl p-6" style={{ background: "var(--bg-secondary)", border: "1px solid var(--gold-border)" }}>
            <h2 className="text-lg font-semibold mb-3">Related machines</h2>
            <ul className="space-y-2">
              {post.related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href} style={{ color: "var(--gold)" }} className="hover:underline">{r.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="mb-10"><ShareButtons url={url} title={post.title} /></div>

        <section className="rounded-xl p-6 text-center" style={{ background: "var(--bg-secondary)", border: "1px solid var(--gold-border)" }}>
          <h2 className="text-xl font-semibold mb-2">Need help choosing a machine?</h2>
          <p className="mb-5" style={{ color: "var(--text-muted)" }}>
            Tell us what you make and we will suggest the right machine. Supplied across India and for export.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={waLink("919962061514", { type: "generic" })}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-lg font-semibold"
              style={{ background: "var(--gold)", color: "#0f0f0f" }}
            >
              Chat on WhatsApp
            </a>
            <EnquireButton
              label="Send an enquiry"
              message={`Hi Max Machine Tools, I read your guide "${post.title}" and need advice.`}
              includePageUrl
              className="px-5 py-3 rounded-lg font-semibold"
              style={{ border: "1px solid var(--gold)", color: "var(--gold)", background: "transparent" }}
            />
          </div>
        </section>
      </article>

      {more.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: "var(--gold)" }}>More guides</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {more.map((m) => (
              <Link
                key={m.slug}
                href={`/blog/${m.slug}`}
                className="block rounded-xl p-5 transition-transform hover:-translate-y-1"
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--gold-border)" }}
              >
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--gold)" }}>{m.category}</p>
                <h3 className="text-base font-semibold mb-2">{m.title}</h3>
                <span className="text-sm font-semibold" style={{ color: "var(--gold)" }}>Read Article &rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <SocialStrip />
      <Footer />
      <WhatsAppButton />
      <SchemaMarkup data={jsonLd} />
    </main>
  );
}
