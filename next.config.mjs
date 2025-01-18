/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.esahubble.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
