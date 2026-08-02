import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/led-wall",
        destination: "/services/led-wall-hire",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
