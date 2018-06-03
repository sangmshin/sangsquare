var gulp = require('gulp');
var sass = require('gulp-sass');
var bs = require('browser-sync').create(); // create a browser sync instance.

gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src('./scss/*.scss')
                .pipe(sass())
                .pipe(gulp.dest('./css'))
                .pipe(bs.reload({stream: true})); // prompts a reload after compilation
});


gulp.task('copy-js', function() {
  return gulp.src(['./src_scripts/*.js'])
    .pipe(gulp.dest('./scripts/'))
    .pipe(bs.reload({stream: true}));
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./scss/*.scss", ['sass']);
    gulp.watch("./src_scripts/*.js", ['copy-js']);
    gulp.watch("./*.*").on('change', bs.reload);
});

gulp.task('default', ['sass', 'copy-js', 'watch', 'browser-sync'])

