const path = require('path');
const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ actions, loaders, stage, getConfig }) => {
  const config = getConfig();

  if (config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
  } else {
    config.resolve = {
      alias: { '@': path.resolve(__dirname, 'src') },
    };
  }

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.GATSBY_ADMIN_USERNAME': JSON.stringify(process.env.GATSBY_ADMIN_USERNAME),
      'process.env.GATSBY_ADMIN_PASSWORD': JSON.stringify(process.env.GATSBY_ADMIN_PASSWORD),
    })
  );

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config);

  if (stage === 'build-html' || stage === 'develop-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
