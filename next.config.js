/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['yeung.in', 'personal-webpage-26n.pages.dev'],
  },
  
  // 添加webpack配置以优化构建输出
  webpack: (config, { dev, isServer }) => {
    // 生产环境下的优化
    if (!dev && !isServer) {
      // 分割大型chunks
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        maxSize: 1000000, // 1MB
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](@next|next|react|react-dom)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            priority: 30,
            name(module) {
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name: 'shared',
            minChunks: 2,
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
  
  // 启用压缩
  compress: true,
  
  // 使用standalone输出模式
  output: 'standalone',
  
  // 添加Cloudflare Pages特定配置
  trailingSlash: false,
  
  // 确保静态资产正确加载
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://yeung.in' : '',
}

module.exports = nextConfig
