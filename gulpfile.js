
// *    Gulpfile
// * ---------------------
// * This file contains the gulp build-process.
// * ---------------------

// *   Core
// * ---------------------

// * Require gulp modules

var gulp   = require("gulp"),
    rename = require("gulp-rename"),
    prefix = require("gulp-autoprefixer"),
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
  return sass("scss/fundament-grid.scss", {sourcemap: false})
    .pipe(prefix({
        browsers: ["last 2 versions", "Explorer >= 10", "Android >= 4.4"]
    }))
    .pipe(rename("fundament-grid.css"))
    .pipe(gulp.dest("./dist"));
});

gulp.task("test", function () {
  return sass("test/css/test.scss", {sourcemap: false})
    .pipe(prefix({
        browsers: ["last 2 versions", "Explorer >= 10", "Android >= 4.4"]
    }))
    .pipe(gulp.dest("./test/css"));
});

// * Tasks
// * ---------------------

// * Default task

gulp.task("default", ["watch"]);


gulp.task("watch", ["sass"], function(){
    gulp.watch(["./scss/*.scss", "./scss/**/*.scss"], ["sass"])
})
