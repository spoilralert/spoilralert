/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com", "image.tmdb.org"],
  },
};

module.exports = nextConfig;
