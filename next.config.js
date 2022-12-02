/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// module.exports = nextConfig;

module.exports = {
  nextConfig,
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
};
