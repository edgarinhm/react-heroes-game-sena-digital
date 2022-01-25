const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    port: 8080,
    static: '../build',
    compress: true,
    client: {
      overlay: true,
    },
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
        test: /.(css|sass|scss)$/,
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('http://fordevs.herokuapp.com/api'),
    }),
    new HtmlWebpackPlugin({
      template: './public/template.dev.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
