const path  = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin ({
            inject: true,
            template: 'src/index.html',
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/assets/images',
                to: 'assets/images'
            }
        ]),
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            allChunks: true,
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_module/,
                use: {
                    loader: 'babel-loader'
                }
            },
            { // css / sass / scss loader for webpack
                test: /\.(css|sass|scss)$/,
                use: ExtractTextPlugin.extract({
                  use: ['css-loader', 'sass-loader'],
                })
            },
            {
                test: /\.(woff2|svg)$/,
                loader: 'url-loader',
            },
            {
                test: /\.(jpg|png|gif|woff|ttf|eot)$/,
                use: {
                  loader: 'file-loader',
                },
            },
        ]
    }
};
