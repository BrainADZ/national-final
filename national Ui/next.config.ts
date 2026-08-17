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
        source: "/products/nitrogen-buffer-gas-storage-tanks",
        destination: "/products/nitrogen-buffer-tank-manufacturer",
        permanent: true,
      },
      {
        source: "/products/heat-exchanger-shells-columns",
        destination: "/products/heat-exchanger-shell-manufacturer",
        permanent: true,
      },
      {
        source: "/products/transitions-reducers-elbows",
        destination: "/products/duct-transition-manufacturer",
        permanent: true,
      },
      { source: "/products/repair-modification-jobs", destination: "/products/industrial-repair-modification-jobs", permanent: true },
      { source: "/products/base-plates", destination: "/products/base-plate-manufacturer", permanent: true },
      { source: "/products/pipe-saddles-supports", destination: "/products/pipe-saddle-manufacturer", permanent: true },
      { source: "/products/jack-stools-temporary-supports", destination: "/products/jack-stool-manufacturer", permanent: true },
      { source: "/products/liners-hard-wear-plate", destination: "/products/wear-plate-liner-manufacturer", permanent: true },
      { source: "/products/ahu-ducts-gi-ss", destination: "/products/ahu-duct-manufacturer", permanent: true },
      { source: "/products/industrial-ducting-systems", destination: "/products/industrial-ducting-system-manufacturer", permanent: true },
      { source: "/products/insulated-duct-casing", destination: "/products/insulated-duct-casing-manufacturer", permanent: true },
      { source: "/products/hoppers-flakes-hoppers", destination: "/products/hopper-flakes-hopper-manufacturer", permanent: true },
      { source: "/products/silos-storage-bins", destination: "/products/silo-storage-bin-manufacturer", permanent: true },
      { source: "/products/chutes-transitions", destination: "/products/chute-transition-manufacturer", permanent: true },
      { source: "/products/tow-bin-tow-can", destination: "/products/tow-bin-tow-can-manufacturer", permanent: true },
      { source: "/products/pig-launcher-pig-receiver-systems", destination: "/products/pig-launcher-receiver-system-manufacturer", permanent: true },
      { source: "/products/pipeline-spools-fabrication", destination: "/products/pipeline-spool-fabrication", permanent: true },
      { source: "/products/headers-manifolds-special-piping", destination: "/products/headers-manifolds-manufacturer", permanent: true },
      { source: "/products/compressor-suction-discharge-ducting", destination: "/products/compressor-suction-discharge-ducting-manufacturer", permanent: true },
      { source: "/products/piping-supports", destination: "/products/piping-supports-manufacturer", permanent: true },
      { source: "/products/venturi-scrubbers", destination: "/products/venturi-scrubber-manufacturer", permanent: true },
      { source: "/products/wet-scrubber-systems", destination: "/products/wet-scrubber-system-manufacturer", permanent: true },
      { source: "/products/ducting-flue-gas-lines", destination: "/products/ducting-flue-gas-lines-manufacturer", permanent: true },
      { source: "/products/scrubber-internals-liners", destination: "/products/scrubber-internals-liners-manufacturer", permanent: true },
      { source: "/products/horizontal-storage-tanks", destination: "/products/horizontal-storage-tank-manufacturer", permanent: true },
      { source: "/products/vertical-storage-tanks", destination: "/products/vertical-storage-tank-manufacturer", permanent: true },
      { source: "/products/blowdown-flash-tanks", destination: "/products/blowdown-flash-tank-manufacturer", permanent: true },
      { source: "/products/water-holding-utility-vessels", destination: "/products/water-holding-utility-vessel-manufacturer", permanent: true },
      { source: "/products/filter-vessels", destination: "/products/filter-vessel-manufacturer", permanent: true },
      { source: "/products/custom-pressure-vessels", destination: "/products/custom-pressure-vessel-manufacturer", permanent: true },
      { source: "/products/condensers-water-condensers", destination: "/products/condenser-manufacturer", permanent: true },
      { source: "/products/process-skids-packages", destination: "/products/process-skid-manufacturer", permanent: true },
      { source: "/products/special-purpose-process-vessels", destination: "/products/special-purpose-process-vessel-manufacturer", permanent: true },
      { source: "/products/custom-chemical-process-equipment", destination: "/products/custom-chemical-process-equipment-manufacturer", permanent: true },
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
