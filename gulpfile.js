const gulp =  require('gulp');
const cleanCSS =  require('gulp-clean-css');
const jsmin =  require('gulp-jsmin');
const Fontmin =  require('fontmin');

/* Сожми и перенеси CSS файлы */

gulp.task('minify-css', () => {
  return gulp.src('css/*.css')
  .pipe(cleanCSS())
  .pipe(gulp.dest('build/css/'))
});

/* Перенеси сжатые JS-файлы */
gulp.task('move-js', () => {
  return gulp.src('js/*.min.js')
  .pipe(gulp.dest('build/js'))
});

/* Сожми Js-файлы и перенеси в build */
gulp.task('minify-js', () => {
  return gulp.src(['js/*.js','!js/*.min.js'])
  .pipe(jsmin())
  .pipe(gulp.dest('build/js'))
});

gulp.task('build', gulp.series('minify-css','move-js','minify-js'));