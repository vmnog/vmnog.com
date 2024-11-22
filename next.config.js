const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media0.giphy.com',
      },
      {
        protocol: 'https',
        hostname: 'i.giphy.com',
      },
    ],
  },
}

module.exports = withContentlayer(nextConfig)
