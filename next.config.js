/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|eot|otf|ttf|woff|woff2)$/i,
      loader: "file-loader",
      options: {
        publicPath: "/_next",
        name: "static/media/[name].[hash].[ext]",
      },
    });

    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    return config;
  },
};

module.exports = nextConfig;
