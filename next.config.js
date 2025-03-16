/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    if (config.optimization && config.optimization.minimizer) {
      config.optimization.minimizer = [];
    }
    return config;
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
