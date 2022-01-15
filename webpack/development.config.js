const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    port: 3000,
    static: '../build',
    open: 'chrome',
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
        use: ['style-loader', 'css-loader', 'sass-loader'],
        test: /.(css|sass|scss)$/,
      },
    ],
  },
  plugins: [
    new DefinePlugin({
      API_URL: JSON.stringify('http://fordevs.herokuapp.com/api'),
    }),
    new HtmlWebpackPlugin({
      template: './public/template.dev.html',
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
