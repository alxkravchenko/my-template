const gulp = require('gulp');

module.exports = function public() {
  return gulp.src('src/public/**/*.*')
    .pipe(gulp.dest('dist'))
};
