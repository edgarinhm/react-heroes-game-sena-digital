const { merge } = require('webpack-merge');
const common = require('./webpack.common');

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: 'development',
    devServer: {
        port: 3000,
        static: '../build',
        open: 'chrome',
        compress: true,
        client: {
            overlay: true,
        },
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
};

module.exports = merge(common, devConfig);
