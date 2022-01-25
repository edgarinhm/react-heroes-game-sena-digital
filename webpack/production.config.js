const MinicssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('https://fordevs.herokuapp.com/api'),
    }),
    new MinicssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new BundleAnalyzerPlugin(),
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
