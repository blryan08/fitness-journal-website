import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: path.join(__dirname), // Sets the root to the directory where next.config.js is located
  },
};

export default nextConfig;
