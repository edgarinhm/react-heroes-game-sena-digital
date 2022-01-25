const { merge } = require('webpack-merge');

module.exports = (env, { mode }) => {
  const isProduction = mode === 'production';

  const { CleanWebpackPlugin } = require('clean-webpack-plugin');
  const path = require('path');

  const commonConfig = {
    entry: './src/main/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx', '.json', 'scss'],
      alias: {
        '@': path.join(__dirname, 'src'),
      },
    },
    plugins: [new CleanWebpackPlugin()],
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
        },
        {
          type: 'asset/inline',
          test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        },
      ],
    },
  };

  const envConfig = require(`./webpack/${mode}.config.js`);
  return merge(commonConfig, envConfig);
};
