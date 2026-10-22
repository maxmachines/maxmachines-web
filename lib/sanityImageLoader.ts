// Sends picture resizing to Sanity's own image service (free, large allowance)
// instead of Vercel Image Optimization (small Hobby limits).
// Sanity pictures get ?w=<width>&auto=format (WebP/AVIF) and fit=max (never enlarged).
// Anything else (logo, icons in /public) is served as it is.
export default function sanityImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const q = quality ?? 80;
  if (src.startsWith("https://cdn.sanity.io/")) {
    const url = new URL(src);
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(q));
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "max");
    return url.toString();
  }
  return `${src}${src.includes("?") ? "&" : "?"}w=${width}&q=${q}`;
}
