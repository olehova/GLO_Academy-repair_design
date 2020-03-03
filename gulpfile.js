/*jshint esversion: 6 */

const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', (done) => {
  console.log("Привет, мир!");
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// minify css using gulp
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
 
gulp.task('cssmin',  (done) => {
    gulp.src('css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min.css'}))
        .pipe(gulp.dest('dist'));
    done();
});
