const webpackMerge = require('webpack-merge');
const common = require('./webpack/webpack.base.js');
const modeConfig = (env) => require(`./webpack/webpack.${env}.js`);

module.exports = ({
  mode = 'production'
}) => webpackMerge(common, modeConfig(mode));

