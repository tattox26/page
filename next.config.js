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
  async rewrites() {
    return {
      fallback: [
        {
          source: '/admin/:path*',
          destination: 'http://samcopropiedad.com/admin/:path*', // ← apunta a Laravel
        },
        {
          source: '/storage/:path*',
          destination: 'http://samcopropiedad.com/storage/:path*', // ← agrega esto
        },
      ],
    }
  },
};

module.exports = nextConfig;