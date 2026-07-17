import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",

  // images: {
  //   unoptimized: true, // 🔥 VERY IMPORTANT for static export
  // },
  async redirects() {
    return [
      {
        source: "/products/air-receiver-vessels",
        destination: "/products/air-receiver-vessels-manufacturer",
        permanent: true,
      },
      {
        source: "/products/:category/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Public media filenames are deployment assets. Let browsers and the
        // reverse proxy reuse them instead of revalidating large files on
        // every page visit (the homepage video alone is about 14 MB).
        source:
          "/:asset*.:extension(avif|gif|ico|jpeg|jpg|png|svg|webp|webm|mp4|woff|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
