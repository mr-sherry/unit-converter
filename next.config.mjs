/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "converter.miftatech.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
