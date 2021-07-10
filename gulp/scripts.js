const gulp = require('gulp');
const babel = require('gulp-babel');
const argv = require('yargs').argv;

module.exports = function script() {
  return gulp.src('src/assets/js/*.js')
    // .pipe(babel({
    //   presets: ['@babel/env']
    // }))
    .pipe(gulp.dest('dist/assets/js/'));
};
