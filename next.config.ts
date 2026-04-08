import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "suit-park-production.up.railway.app",
        port: "",
        pathname: "/storage/**",
      },
      // If your production environment uses https, add this as well
      {
        protocol: "https",
        hostname: "suit-park-production.up.railway.app",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
