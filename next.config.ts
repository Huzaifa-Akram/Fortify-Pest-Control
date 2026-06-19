import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project so Next.js doesn't pick up
  // an unrelated lockfile from a parent directory.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
