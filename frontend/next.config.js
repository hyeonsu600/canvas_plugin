/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['lms.kimhaksa.com', 'localhost:3001'], // 명시적으로 허용할 Origin 목록
      // 또는
      // disableHostCheck: true, // 이 옵션은 매우 위험하므로 사용하지 않는 것이 좋습니다.
    },
  },
};

module.exports = nextConfig;