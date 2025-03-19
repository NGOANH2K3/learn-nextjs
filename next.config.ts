import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;

// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   experimental: {
//     appDir: true, // Bật App Router
//   },
// };

// export default nextConfig;


