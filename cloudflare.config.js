// Cloudflare Pages configuration for Next.js
module.exports = {
  // 配置Cloudflare Pages如何处理Next.js应用
  build: {
    command: "npm run pages:build",
    directory: ".vercel/output/static",
    environment: {
      NODE_VERSION: "20.0.0",
      NEXT_TELEMETRY_DISABLED: "1"
    }
  },
  // 配置路由和缓存
  routes: [
    // 静态资源缓存
    {
      pattern: "/_next/static/*",
      headers: {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
    // 图片缓存
    {
      pattern: "/images/*",
      headers: {
        "cache-control": "public, max-age=86400"
      }
    },
    // API路由
    {
      pattern: "/api/*",
      headers: {
        "cache-control": "no-cache"
      }
    },
    // 其他路由
    {
      pattern: "/*",
      headers: {
        "cache-control": "public, max-age=3600, s-maxage=86400"
      }
    }
  ]
};
