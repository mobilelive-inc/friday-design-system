const path = require('path');
const fs = require('fs');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReplaceInFileWebpackPlugin = require('replace-in-file-webpack-plugin');
const getEntries = fs
  .readdirSync('src/components')
  .map((component) => `./src/components/${component}/index.js`)

module.exports = {
  entry: "./src/components",
  output: {
    path: path.resolve('./dist/components/'),
    filename: (pathData) => {
      return '[file].js';
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
      {
        loader: 'url-loader',
        test: /\.(svg|eot|ttf|woff|woff2)?$/,
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.font\.js/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'webfonts-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'fonts.css',
    }),
  ],
};