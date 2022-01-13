const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, '../build'),
        filename: '[name].[contenthash].js',
        publicPath: '',
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
            },
            {
                type: 'asset',
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
