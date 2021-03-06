module.exports = {
  distDir: 'build',
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    });
    return config;
  },
};
