/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@workspace/ui'],
  output: "standalone",
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  }
};
export default nextConfig;
