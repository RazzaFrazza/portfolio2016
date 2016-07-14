
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var bootlint = require('gulp-bootlint');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
gulp.task('default', ['watch']);


gulp.task('jshint', function () {
    'use strict';
    return gulp.src('../sourceAssets/javascript/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('build-css', function () {
    'use strict';
    return gulp.src('../sourceAssets/scss/*.scss')
        .pipe(sourcemaps.init())  // Process the original sources
        .pipe(sass())
        .pipe(sourcemaps.write()) // Add the map to mo dified source.
        .pipe(gulp.dest('../assets/css/'));
});

gulp.task('bootlint', function() {
    return gulp.src('../index.html')
        .pipe(bootlint());
});

 

gulp.task('css', function () {
  var processors = [
        autoprefixer
  ];
  return gulp.src('../sourceAssets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('../assets/css/'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function () {
    'use strict';
    gulp.watch('../sourceAssets/js/*.js', ['jshint']);
    gulp.watch('../sourceAssets/scss/*.scss', ['build-css']);
    gulp.watch('../sourceAssets/scss/*.scss', ['css']);
    gulp.watch('../index.html', ['bootlint']);
    gulp.watch('../sourceAssets/images/projectPreviews/*', ['imagemin']);
});