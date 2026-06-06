import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dynamically disable standalone output on Vercel to prevent build issues,
  // but keep it active for Docker containerization.
  output: process.env.VERCEL ? undefined : "standalone",
  
  transpilePackages: ["framer-motion"],
  
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

  // Apply production-grade security headers
  headers: async () => {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
