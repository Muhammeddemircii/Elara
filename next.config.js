/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Statik dosyalara doğru erişim için
  async rewrites() {
    return [
      {
        source: '/locales/:path*',
        destination: '/public/locales/:path*'
      }
    ]
  }
}

module.exports = nextConfig
