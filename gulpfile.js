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
    {
      title: "Fred",
      image_url: '123'
    },
    { title: "Bill" },
    { title: "Harry" }
  ],
  contact_tel: "+7 812 333-33-33",
  contact_email: "info@burobiz.ru",
  footer_links: [
    {
      url: '/businesses',
      text: 'Бизнесы'
    },
    {
      url: '/services',
      text: 'Услуги'
    }
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
      include: true,
      require: ['slim/include'],
      options: 'include_dirs=["./src/slim/includes"]',
      data: data
    }))
    .pipe(gulp.dest("build/html"));
});