/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // 移除basePath配置，Cloudflare Pages不需要它
}

module.exports = nextConfig
