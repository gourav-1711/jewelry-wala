/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [10, 25, 50, 75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-50951b7722e041bebc7b86688a160a35.r2.dev",
      },
    ],
  },
};

export default nextConfig;
