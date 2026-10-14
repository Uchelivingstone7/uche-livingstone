import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90],
  },
  async redirects() {
    return [
      { source: "/publications", destination: "/news", permanent: true },
      { source: "/writing", destination: "/publication", permanent: true },
      { source: "/writing/:slug", destination: "/publication/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
