const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

module.exports = function csslibs() {
    return gulp.src('src/assets/libs/**/*.css')
        .pipe(concat('libs.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/assets/css'))
};