/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // Esto le dice a Next: "Si no es una ruta mía, no te metas"
  async rewrites() {
    return {
      fallback: [
        {
          source: '/admin/:path*',
          destination: '/admin/:path*', 
        },
      ],
    }
  },
};

module.exports = nextConfig;