/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@workspace/ui'],
  output: "standalone",
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"]
  }
};
export default nextConfig;
