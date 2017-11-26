
// *    Gulpfile
// * ---------------------
// * This file contains the gulp build-process.
// * ---------------------

'use strict';

const gulp = require('gulp');
const pug = require('gulp-pug');
const prefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sasslint = require('gulp-sass-lint')
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

gulp.task('default', function () {
  return gulp.src('./__test__/src/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('pug', () => {
  return gulp.src('./__test__/src/pug/*.pug')
    .pipe(pug({
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

gulp.task('watch', ['sass', 'pug'], () => {
  gulp.watch([
    './scss/*.scss', './scss/**/*.scss',
    './__test__/src/scss/test.scss',
    './__test__/src/scss/**/*.scss',
  ], ['sass']);

  gulp.watch([
    './__test__/src/pug/*.pug',
    './__test__/src/pug/*/**.pug',
  ], ['pug']);
});
