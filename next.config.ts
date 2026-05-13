import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/super-mario-galaxy-experience",
  assetPrefix: "/super-mario-galaxy-experience/",
};

export default nextConfig;