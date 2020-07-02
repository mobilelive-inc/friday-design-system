const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "src/images",
        to: "images",
      },
      {
        from: "src/fonts",
        to: "fonts",
      },
    ]),
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            // Limit at 50k. Above that it emits separate files

            // url-loader sets mimetype if it's passed.
            // Without this it derives it from the file extension
            mimetype: "application/font-woff",

            // Output below fonts directory
            name: "./fonts/[name].[ext]",
            publicPath: "../", // Take the directory into account
          },
        },
      },
    ],
  },
};
