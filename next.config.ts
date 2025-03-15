import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['page.tsx', 'page.ts', 'api.ts'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
};

export default nextConfig;
