var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./project/sass/main/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./project/css'))
});

gulp.task('watch', function () {
  gulp.watch('./project/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'watch']);