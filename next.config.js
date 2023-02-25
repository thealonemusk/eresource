const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  pageExtensions: ['page.tsx'],
  basePath: isProd ? '/decentralized-energy-trading-app' : '',
};

module.exports = nextConfig;
