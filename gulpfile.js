
// *    Gulpfile
// * ---------------------
// * This file contains the gulp build-process.
// * ---------------------

'use strict';

const gulp = require('gulp');
const jade = require('gulp-jade');
const prefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sassdoc = require('sassdoc');

gulp.task('sass', () => {
  return gulp.src('./__test__/src/scss/test.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 2 versions'],
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./__test__/css'));
});

gulp.task('jade', () => {
  return gulp.src('./__test__/src/jade/*.jade')
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest('./__test__/'));
});

gulp.task('sassdoc', () => {
  return gulp.src('./scss/**/*.scss')
    .pipe(sassdoc({
      display: {
        alias: true
      }
    }));
});

gulp.task('default', ['watch']);

gulp.task('watch', ['sass', 'jade'], () => {
  gulp.watch([
    './scss/*.scss', './scss/**/*.scss',
    './__test__/src/scss/test.scss',
    './__test__/src/scss/**/*.scss',
  ], ['sass']);

  gulp.watch([
    './__test__/src/jade/*.jade',
    './__test__/src/jade/*/**.jade',
  ], ['jade']);
});
