/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s.gravatar.com', 'https://avatars.githubusercontent.com/u/92696504?v=4', 'avatars.githubusercontent.com', 'images.unsplash.com']
  }
}

module.exports = nextConfig
