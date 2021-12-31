module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [require('path').join(__dirname, 'styles')],
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
