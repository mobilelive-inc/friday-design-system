const path = require('path');
const getPublicUrlOrPath = require('react-dev-utils/getPublicUrlOrPath');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

// We use `PUBLIC_URL` environment variable or "homepage" field to infer
// "public path" at which the app is served.
// webpack needs to know it to put the right <script> hrefs into HTML even in
// single-page apps that may serve index.html for nested URLs like /todos/42.
// We can't use a relative path in HTML because we don't want to load something
// like /todos/42/static/js/bundle.7289d.js. We have to know the root.
const publicUrlOrPath = getPublicUrlOrPath(
  process.env.NODE_ENV === 'development',
  require(resolveApp('package.json')).homepage,
  process.env.PUBLIC_URL,
);

module.exports = {
  root: path.resolve(__dirname, '../'),
  appPublic: resolveApp('public'),
  publicUrlOrPath,
  outputPath: resolveApp('dist'),
  entryPath: resolveApp('src/index.js'),
  appHtml: resolveApp('public/index.html'),
  images: resolveApp('public/images'),
  imagesFolder: 'images',
  fontsFolder: 'fonts',
  cssFolder: 'css',
  jsFolder: 'js',
};
