import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: "build", // Changes the build output directory to `build`
  images: {
    unoptimized: false, // Re-enable Image Optimization for SSR
  },
};

export default nextConfig;
