import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/__l5e/:path*",
        destination: "https://ffcb9ee7-8a7d-46fa-bfe4-7cb7678bd299.lovable.app/__l5e/:path*",
      },
    ];
  },
};

export default nextConfig;