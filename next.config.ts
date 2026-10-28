import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './lib/sanityImageLoader.ts',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Old WordPress shop links (still inside thousands of brochure PDFs) go to the products page.
  // Temporary (307) for now; utm tag shows brochure visits in Google Analytics.
  async redirects() {
    return [
      {
        source: "/shop/:path*",
        destination: "/products?utm_source=brochure&utm_medium=pdf",
        permanent: false,
      },
      {
        source: "/product-category/:path*",
        destination: "/products?utm_source=brochure&utm_medium=pdf",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
