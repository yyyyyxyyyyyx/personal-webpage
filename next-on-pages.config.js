/** @type {import('@cloudflare/next-on-pages').PagesPluginOptions} */
module.exports = {
  // 启用兼容模式
  experimental: {
    ppr: false,
    serverActions: {
      allowedOrigins: ['*.pages.dev', 'yeung.in'],
    },
  },
  // 确保静态资产正确加载
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://yeung.in' : '',
  // 优化图像处理
  images: {
    unoptimized: true,
    domains: ['yeung.in', '*.pages.dev'],
  },
};
