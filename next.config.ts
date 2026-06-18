import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.rophim.me',
            },
            {
                protocol: 'https',
                hostname: 'static.nutscdn.com',
            },
            {
                protocol: 'https',
                hostname: 'phimimg.com',
            },
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
            },
        ],
    },
};

export default nextConfig;
