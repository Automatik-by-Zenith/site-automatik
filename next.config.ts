import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  distDir: "build", // Changes the build output directory to `build`
  images: {
    unoptimized: false, // Re-enable Image Optimization for SSR
  },
  ...(isProduction && {
    redirects: async () => [
      {
        source: "/wave-editor",
        destination: "/404",
        permanent: false,
      },
    ],
  }),
};

export default nextConfig;
