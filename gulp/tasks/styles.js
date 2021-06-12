const gulp = require('gulp');
const plumber = require('gulp-plumber');
const scss = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');

module.exports = function styles() {
  return gulp.src('src/assets/styles/style.scss')
    .pipe(plumber())
    .pipe(gulpif(!argv.prod, sourcemaps.init()))
    .pipe(scss({
      outputStyle: 'expanded',
      indentType: "tab",
      indentWidth: 1
    }))
    .pipe(autoprefixer({
      cascade: false,
      overrideBrowserslist: ['last 5 versions']
    }))
    .pipe(gulpif(argv.prod, cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    })))
    .pipe(gulp.dest('dist/assets/css'))
};
