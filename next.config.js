/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [process.env.NEXT_PUBLIC_DOMAIN, 'lh3.googleusercontent.com'],
    },
    experimental: {
        appDir: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
};

module.exports = nextConfig;
