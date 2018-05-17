'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
 return gulp.src('app/scss/style.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function () {
    gulp.watch('app/scss/**/*.scss', ['sass']);
});
