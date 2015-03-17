
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
    sass   = require("gulp-ruby-sass"),
    jade   = require("gulp-jade");


gulp.task("sass", function () {
  return sass("./__test__/src/scss/test.scss", {sourcemap: false})
    .pipe(prefix({
        browsers: ["last 2 versions", "Explorer >= 10", "Android >= 4.4"]
    }))
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("./__test__/css"));
});

gulp.task("jade", function(){
  return gulp.src("./__test__/src/jade/*.jade")
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest("./__test__/"))
});


// * Tasks
// * ---------------------

// * Default task

gulp.task("default", ["watch"]);

gulp.task("watch", ["sass", "jade"], function(){

    gulp.watch([
<<<<<<< HEAD
      "./src/*.scss", "./src/**/*.scss",
=======
      "./scss/*.scss", "./scss/**/*.scss",
>>>>>>> origin/mixin
      "./__test__/src/scss/test.scss",
      "./__test__/src/scss/**/*.scss"
    ], ["sass"]);

    gulp.watch([
      "./__test__/src/jade/*.jade",
      "./__test__/src/jade/*/**.jade"
    ], ["jade"]);

})
