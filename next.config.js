/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
        });

        return config;
    },
};

module.exports = nextConfig;
