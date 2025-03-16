/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // 禁用图像优化，因为Cloudflare Pages不支持
  images: {
    unoptimized: true,
  },
  
  // 使用静态导出模式
  output: 'export',
  
  // 禁用webpack优化，避免生成过大的文件
  webpack: (config) => {
    // 禁用压缩
    if (config.optimization && config.optimization.minimizer) {
      config.optimization.minimizer = [];
    }
    return config;
  },
  
  // 确保生成的静态文件可以在任何路径下访问
  trailingSlash: true,
  
  // 禁用严格模式以避免潜在问题
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
