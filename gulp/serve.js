const gulp = require('gulp');

const imageMinify = require('./imageMinify');
const svgSprite = require('./spriteSVG');
const styles = require('./styles');
const pug2html = require('./pug');
const script = require('./scripts');
const csslibs = require('./csslibs');
const jslibs = require('./jslibs');

const server = require('browser-sync').create();

// Запуск сервера а также слежка за файлами
module.exports = function serve(cb) {
  server.init({
    server: 'dist',
    notify: false,
    open: true,
    cors: true
  });

  gulp.watch(['src/assets/images/*/*.{gif,png,jpg,jpeg,svg,webp}', 'src/assets/images/*.{gif,png,jpg,jpeg,svg,webp}'], gulp.series(imageMinify)).on('change', server.reload);
  gulp.watch('src/assets/images/sprite/svg/*.svg', gulp.series(svgSprite)).on('change', server.reload);
  gulp.watch('src/assets/styles/**/*.scss', gulp.series(styles)).on('change', server.reload);
  gulp.watch('src/assets/libs/**/*.css', gulp.series(csslibs)).on('change', server.reload);
  gulp.watch('src/assets/libs/**/*.js', gulp.series(jslibs)).on('change', server.reload);
  gulp.watch('src/assets/js/**/*.js', gulp.series(script)).on('change', server.reload);
  gulp.watch('src/views/**/*.pug', gulp.series(pug2html));
  gulp.watch('dist/*.html').on('change', server.reload);

  return cb()
};
