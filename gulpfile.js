
// *    Gulpfile
// * ---------------------
// * This file contains the gulp build-process.
// * ---------------------

// *   Core
// * ---------------------

// * Require gulp modules

var gulp   = require("gulp"),
    rename = require("gulp-rename"),
    sass   = require("gulp-ruby-sass");

// * scss
// * 1. handle errors
// * 2. sass
// * 3. prefix
// * --> write out
// * 4. minify
// * --> write out
// * ---------------------

gulp.task("sass", function () {
  gulp.src("scss/fundament-grid.scss")
    .pipe(sass())
    .pipe(rename("fundament-grid.css"))
    .pipe(gulp.dest("./dist"));
});


// * Tasks
// * ---------------------

// * Default task

gulp.task("default", ["sass"]);
