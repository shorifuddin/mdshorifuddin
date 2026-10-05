/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/home-1', destination: '/', permanent: true },
      { source: '/portfolio', destination: '/works', permanent: true },
      { source: '/portfolio/:slug', destination: '/works/:slug', permanent: true },
    ];
  },
};
module.exports = nextConfig;
