import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectDir = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: projectDir,
  turbopack: {
    root: projectDir,
  },
  // Lokale Bilder aus /public ohne Optimizer-Probleme im Dev
  images: {
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
