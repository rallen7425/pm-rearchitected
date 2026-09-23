import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/resources/strategy-discovery", destination: "/resources/discovery-research", permanent: true },
      { source: "/resources/ux-design", destination: "/resources/design-for-pms", permanent: true },
      { source: "/resources/roadmapping-execution", destination: "/resources/agile-development-deployment", permanent: true },
      { source: "/resources/technology", destination: "/resources/technology-for-pms", permanent: true },
      { source: "/resources/ai-agentic-practice", destination: "/resources/understanding-ai", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "substackcdn.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "substack-post-media.s3.amazonaws.com" },
    ],
  },
};

export default nextConfig;
