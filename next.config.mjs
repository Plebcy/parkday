/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['framer-motion'],
    webpackBuildWorker: false,
    workerThreads: false,
    cpus: 1
  },
  images: {
    remotePatterns: []
  }
};

export default nextConfig;
