const { merge } = require('webpack-merge');

module.exports = (env, { mode }) => {
  const isProduction = mode === 'production';

  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  const CopyPlugin = require('copy-webpack-plugin');
  const path = require('path');

  const commonConfig = {
    entry: './src/main/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction
        ? 'static/layout/js/[name].[contenthash].js'
        : 'static/layout/js/main.js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', 'scss'],
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: 'src/assets/locales/',
            to: 'static/i18n/[path][name][ext]',
          },
        ],
      }),
    ],
    module: {
      rules: [
        {
          use: 'babel-loader',
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
        },
        {
          type: 'asset/resource',
          test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
          generator: {
            filename: isProduction
              ? 'static/layout/media/[hash][ext]'
              : 'static/layout/media/[name][ext]',
          },
        },
        {
          type: 'asset/inline',
          test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
          generator: {
            filename: isProduction
              ? 'static/layout/icons/[hash][ext]'
              : 'static/layout/icons/[name][ext]',
          },
        },
      ],
    },
  };

  const envConfig = require(`./webpack/${mode}.config.js`);
  return merge(commonConfig, envConfig);
};
