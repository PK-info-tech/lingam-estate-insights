/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/lands",
        destination: "/properties",
        permanent: true,
      },
      {
        source: "/lands/:slug",
        destination: "/properties/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
