const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

module.exports = function script() {
  return gulp.src('src/assets/libs/**/*.js')
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/assets/js'))
};
