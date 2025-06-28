/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
                      {
              key: 'Content-Security-Policy',
              value: "frame-ancestors 'self' https://lms.kimhaksa.com;",
            },
        ],
      },
    ];
  },
}

export default nextConfig
