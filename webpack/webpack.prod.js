const MinicssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

/** @type {import('webpack').Configuration} */
const prodConfig = {
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins: [new MinicssExtractPlugin()],
    module: {
        rules: [
            {
                use: [MinicssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                test: /.(css|sass|scss)$/,
            },
        ],
    },
};

module.exports = merge(common, prodConfig);
