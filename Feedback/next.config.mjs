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
            key: 'X-Frame-Options',
            value: 'ALLOWALL', // Canvas iframe에서 표시 허용
          },
          {
            key: 'Content-Security-Policy',
            value: 'frame-ancestors *', // 모든 부모 도메인에서 iframe 허용
          },
        ],
      },
    ];
  },
}

export default nextConfig
