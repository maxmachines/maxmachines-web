import { client } from "@/sanity/lib/client";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets: string[];
  steps: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string; // YYYY-MM-DD
  updated?: string | null;
  readTime: string;
  intro: string;
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  related: { label: string; href: string }[];
  keywords: string[];
  coverUrl?: string | null;
  coverAlt?: string | null;
};

const POST_FIELDS = `
  "slug": slug.current,
  title,
  description,
  "category": coalesce(category, "Guide"),
  "date": publishedAt,
  "updated": updatedAt,
  "readTime": coalesce(readTime, "5 min read"),
  intro,
  "sections": coalesce(sections[]{
    heading,
    "paragraphs": coalesce(paragraphs, []),
    "bullets": coalesce(bullets, []),
    "steps": coalesce(steps, [])
  }, []),
  "faqs": coalesce(faqs[]{ "q": question, "a": answer }, []),
  "related": coalesce(related[]{ label, href }, []),
  "keywords": coalesce(keywords, []),
  "coverUrl": coverImage.asset->url,
  "coverAlt": coverImage.alt
`;

export async function getPosts(): Promise<BlogPost[]> {
  return client.fetch<BlogPost[]>(
    `*[_type == "blogPost" && defined(slug.current) && defined(publishedAt)] | order(publishedAt desc) { ${POST_FIELDS} }`
  );
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  return client.fetch<BlogPost | null>(
    `*[_type == "blogPost" && slug.current == $slug][0] { ${POST_FIELDS} }`,
    { slug }
  );
}

export function formatDate(iso: string): string {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
