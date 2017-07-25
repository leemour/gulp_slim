var gulp = require('gulp'),
    minify = require('gulp-minify'),
    livereload = require('gulp-livereload'),
    slim = require("gulp-slim"),
    browserSync = require('browser-sync').create();

//gulp.task('sass', function () {
//  gulp.src('sass/**/*.sass')
//    .pipe(sass().on('error', sass.logError))
//    .pipe(gulp.dest('css'))
//    .pipe(livereload());
//});
//
//gulp.task('sass:watch', function () {
//  gulp.watch('./sass/**/*.sass', ['sass']);
//});
//
//gulp.task('watch', function() {
//  livereload.listen();
//  gulp.watch('sass/**/*.sass', ['sass']);
//});

var data = {
  locale: 'ru',
  title: "Главная - Бизнес Бюро",
  description: "Описание главной",
  keywords: "Ключевики главной",
  body_class: "pages home",
  businesses: [
    { title: "Fred" },
    { title: "Bill" },
    { title: "Harry" }
  ]
}

gulp.task('default', function() {
  gulp.src('src/js/**/*.js', { base: 'src' })
  .pipe(minify())
  .pipe(gulp.dest('build'));  // Writes 'build/js/somedir/somefile.js'
});

gulp.task('slim', function(){
  gulp.src("src/slim/*.slim")
    .pipe(slim({
      pretty: true,
      data: data
    }))
    .pipe(gulp.dest("build/html"));
});