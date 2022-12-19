/** @type {import('next').NextConfig} */
const environment = process.env.NODE_ENV
const isDevelopment = environment === 'development';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.discordapp.com'],
  },
  async redirects() {
    return [
      {
        source: '/discord',
        destination: isDevelopment ? 'http://localhost:3001/auth/discord' : 'https://doggoslabs-backend.herokuapp.com/auth/discord',
        permanent: false
      }
    ];
  },
}

module.exports = nextConfig
