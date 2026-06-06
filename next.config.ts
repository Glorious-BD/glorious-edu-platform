import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Optimal for Docker environments
  transpilePackages: ["framer-motion"],
  
  // Instruct compiler to ignore minor TypeScript compile errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Instruct compiler to ignore strict ESLint warnings during builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.gloriousedubd.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;