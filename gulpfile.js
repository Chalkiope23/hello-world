'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
 return gulp.src('app/scss/style.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('app/css'))
   .pipe(browserSync.reload({
    stream: true
    }))
});

gulp.task('watch',['browserSync', 'sass'], function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload);
});

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
    })
  })
