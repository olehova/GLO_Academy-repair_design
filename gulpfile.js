/*jshint esversion: 6 */

const {src, dest, watch} = require('gulp');
//import { src, dest, watch } from 'gulp';
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./src"
      }
  });
  watch("./src/*.html").on('change', browserSync.reload);
  watch("./src/sass/**/*.sass", serveSass);
  watch("./src/scss/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
  // watch("./sass/**/*.sass", serveSass);
}

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./src/sass/*.sass")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(dest("./src/css"))
      .pipe(browserSync.stream());
}

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./src/sass/**/*.sass", "./src/scss/**/*.scss")
      .pipe(sass())
      .pipe(dest("./src/css"))
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
