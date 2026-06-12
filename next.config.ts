import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Evita que Next.js use el lockfile de C:\Users\User\ como raíz del proyecto
  outputFileTracingRoot: path.resolve(__dirname),
  images: {
    qualities: [75, 92],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
