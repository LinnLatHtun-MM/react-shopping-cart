/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'demo2.pavothemes.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'cdn.dummyjson.com',
                port: '',
            }
        ],
    },
};

export default nextConfig;