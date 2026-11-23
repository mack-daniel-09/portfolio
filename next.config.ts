import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is used for the profile photo so it isn't re-compressed at the default 75.
    qualities: [75, 90],
  },
};

export default nextConfig;
