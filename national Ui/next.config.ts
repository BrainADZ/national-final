import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",

  // images: {
  //   unoptimized: true, // 🔥 VERY IMPORTANT for static export
  // },
  async redirects() {
    return [
      {
        source: "/products/:category/:slug",
        destination: "/products/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
