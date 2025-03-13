import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['source.unsplash.com'],  // Adicione utfs.io à lista de domínios permitidos
  },
};

export default nextConfig;
