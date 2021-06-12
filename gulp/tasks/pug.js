const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const htmlformat = require('gulp-format-html');

module.exports = function pug2html() {
  return gulp.src('src/views/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({pretty: true}))
    .pipe(htmlformat())
    .pipe(plumber.stop())
    .pipe(gulp.dest('dist'))
};
