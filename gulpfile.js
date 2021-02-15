const gulp = require('gulp');
const script = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
const public = require('./gulp/tasks/public');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const csslibs = require('./gulp/tasks/csslibs');
const jslibs = require('./gulp/tasks/jslibs');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const serve = require('./gulp/tasks/serve');

const dev = gulp.parallel(pug2html, script, styles, csslibs, jslibs, imageMinify, spriteSVG, fonts, public);

exports.default = gulp.series(
  clean,
  dev,
  serve
);
