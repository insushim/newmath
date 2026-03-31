import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Cloudflare Workers deployment
  serverExternalPackages: [],
};

// Enable OpenNext Cloudflare dev mode when running locally
if (process.env.NODE_ENV === "development") {
  // @ts-expect-error -- optional cloudflare dev integration
  import("@opennextjs/cloudflare").then((m: { initOpenNextCloudflareForDev: () => void }) => m.initOpenNextCloudflareForDev()).catch(() => {});
}

export default nextConfig;
