import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow importing JSON asset files
  webpack(config) {
    return config;
  },
};

export default nextConfig;