const MinicssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new MinicssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  module: {
    rules: [
      {
        use: [MinicssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        test: /.(css|sass|scss)$/,
      },
    ],
  },
};
