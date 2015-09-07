
// *    Gulpfile
// * ---------------------
// * This file contains the gulp build-process.
// * ---------------------

// *   Core
// * ---------------------

// * Require gulp modules

var gulp   = require("gulp");
var rename = require("gulp-rename");
var prefix = require("gulp-autoprefixer");
var sass   = require("gulp-sass");
var jade   = require("gulp-jade");

gulp.task("sass", function() {
  return gulp.src("./__test__/src/scss/test.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(prefix({
      browsers: ["last 2 versions", "Explorer >= 10", "Android >= 4.4"],
    }))
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("./__test__/css"));
});

gulp.task("jade", function() {
  return gulp.src("./__test__/src/jade/*.jade")
    .pipe(jade({
      pretty: true,
    }))
    .pipe(gulp.dest("./__test__/"));
});

// * Tasks
// * ---------------------

// * Default task

gulp.task("default", ["watch"]);

gulp.task("watch", ["sass", "jade"], function() {

  gulp.watch([
    "./src/*.scss", "./src/**/*.scss",
    "./__test__/src/scss/test.scss",
    "./__test__/src/scss/**/*.scss",
  ], ["sass"]);

  gulp.watch([
    "./__test__/src/jade/*.jade",
    "./__test__/src/jade/*/**.jade",
  ], ["jade"]);

});
