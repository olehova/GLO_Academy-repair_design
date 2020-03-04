/*jshint esversion: 6 */

const {src, dest, watch} = require('gulp');
//import { src, dest, watch } from 'gulp';
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


// Static server
function bs() {
  serveSass();
  serveLesson15Sass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./src/*.html").on('change', browserSync.reload);
  watch("./src/sass/**/*.sass", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
  watch("./lesson_15/sass/**/*.sass", serveLesson15Sass);
}

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./src/sass/*.sass")
      .pipe(sass())
      .pipe(dest("./src/css"))
      .pipe(browserSync.stream());
}

// Compile sass into CSS & auto-inject into browsers
function serveLesson15Sass() {
  return src("./lesson_15/src/sass/*.sass")
      .pipe(sass())
      .pipe(dest("./dist/lesson_15/css"))
      .pipe(browserSync.stream());
}

exports.serve = bs;

// minify css using gulp
/* const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
 
gulp.task('cssmin',  (done) => {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min.css'}))
        .pipe(gulp.dest('dist'));
    done();
}); */
