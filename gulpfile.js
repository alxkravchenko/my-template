const gulp = require('gulp');
const script = require('./gulp/scripts');
const fonts = require('./gulp/fonts');
const public = require('./gulp/public');
const imageMinify = require('./gulp/imageMinify');
const styles = require('./gulp/styles');
const csslibs = require('./gulp/csslibs');
const jslibs = require('./gulp/jslibs');
const clean = require('./gulp/clean');
const pug2html = require('./gulp/pug');
const spriteSVG = require('./gulp/spriteSVG');
const serve = require('./gulp/serve');

const dev = gulp.parallel(pug2html, script, styles, csslibs, jslibs, imageMinify, spriteSVG, fonts, public);

exports.default = gulp.series(
  clean,
  dev,
  serve
);
