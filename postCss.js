var fs = require('fs');
var postcss = require('postcss');
var mediaVariables = require('postcss-media-variables');
var cssVariables = require('postcss-css-variables');
var customMedia = require('postcss-custom-media');
var calc = require('postcss-calc');
var mycss = fs.readFileSync('./libs/static/dist/css-variables.css', 'utf8');

// Process your CSS
//var output;

postcss()
  .use(mediaVariables()) // first run
  .use(customMedia(/* options */))
  .use(cssVariables(/* options */))
  .use(calc(/* options */))
  .use(mediaVariables()) // second run
  .process(mycss, { from: 'undefined' })
  .then(function (data) {
    fs.writeFile('./libs/static/dist/css-variables.css', data, function (err) {
      if (err) {
        return console.log(err);
      } else {
        console.log('file has been processed');
      }
    });
  }).css;
