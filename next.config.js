const MOCK_IMAGE_DOMAINS = ['via.assets.so'];

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [...MOCK_IMAGE_DOMAINS, process.env.NEXT_PUBLIC_DOMAIN],
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
