
  
const HtmlWebPackPlugin = require('html-webpack-plugin');
const {
  entryPath, appHtml,outputPath, publicUrlOrPath
} = require('./paths')

module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    entryPath
  ],
  output: {
    filename: 'bundle.js',
    path: outputPath,
    publicPath: publicUrlOrPath,
  },
  devServer: {
    compress: true,
    host: 'localhost',
    port: 3000,
    contentBase: outputPath,
    publicPath: 'http://localhost:3000/',
    historyApiFallback: true,
    // respond to 404s with index.html
    hot: true,
    watchContentBase: true,
    stats: {
      colors: true, chunks: true,
    },
    // enable HMR on the server
    // open the browser when start server
    open: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    overlay: {
      warnings: true,
      errors: true,
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: appHtml,
      filename: './index.html',
    }),
  ],
};
