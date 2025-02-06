/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.esahubble.org",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "images-assets.nasa.gov",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
