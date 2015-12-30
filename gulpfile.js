
// *    Gulpfile
// * ---------------------
// * This file contains the gulp build-process.
// * ---------------------

// *   Core
// * ---------------------

'use strict';

// * Require gulp modules

const gulp   = require('gulp');
const jade   = require('gulp-jade');
const prefix = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const sass   = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./__test__/src/scss/test.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 2 versions'],
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./__test__/css'));
});

gulp.task('jade', function() {
  return gulp.src('./__test__/src/jade/*.jade')
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest('./__test__/'));
});

// * Tasks
// * ---------------------

// * Default task

gulp.task('default', ['watch']);

gulp.task('watch', ['sass', 'jade'], function() {

  gulp.watch([
    './src/*.scss', './src/**/*.scss',
    './__test__/src/scss/test.scss',
    './__test__/src/scss/**/*.scss',
  ], ['sass']);

  gulp.watch([
    './__test__/src/jade/*.jade',
    './__test__/src/jade/*/**.jade',
  ], ['jade']);

});
