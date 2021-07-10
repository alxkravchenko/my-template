const gulp = require('gulp');
const buffer = require('vinyl-buffer');
const imagemin = require('gulp-imagemin');

module.exports = function imageMinify() {
  return gulp.src(
    ['src/assets/images/**/*.{gif,png,jpg,jpeg,svg,webp}', 'src/assets/images/*.{gif,png,jpg,jpeg,svg,webp}',
    '!src/assets/images/sprite/**/*']
  )
    // .pipe(buffer())
    // .pipe(imagemin([
    //   imagemin.gifsicle({interlaced: true}),
    //   imagemin.mozjpeg({
    //     quality: 75,
    //     progressive: true
    //   }),
    //   imagemin.optipng({optimizationLevel: 5}),
    //   imagemin.svgo({
    //     plugins: [
    //       {removeViewBox: true},
    //       {cleanupIDs: false}
    //     ]
    //   })
    // ]))
    .pipe(gulp.dest('dist/assets/images/'))
};
