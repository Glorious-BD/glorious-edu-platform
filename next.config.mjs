/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  transpilePackages: ["framer-motion"],
  
  // Ignore TypeScript type errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Ignore ESLint warnings/errors during builds
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