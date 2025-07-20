import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/trame/:path*',
        destination: 'http://localhost:8080/:path*',
      },
    ]
  },
};

export default nextConfig;
