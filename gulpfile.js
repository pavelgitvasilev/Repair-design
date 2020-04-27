const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

function buildCSS (done) {
  src ('css/**/**.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(dest('dist/css/'));
  done();
};

function buildJS (done){
  src(['js/**.js', '!js/**.min.js'])
    .pipe(minify({ext:{
      min:'.js'}}))
    .pipe(dest('dist/js/'));
  src('js/**.min.js').pipe(dest('dist/js/'));
  done();
};

function html(done){
  src('**.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(dest('dist/'));
  done();
}

function php(done){
  src('**.php')
  .pipe(dest('dist/'));

  src('phpmailer/**/**')
  .pipe(dest('dist/phpmailer/'));
  done();
}

function fonts(done){
  src('fonts/**/**')
  .pipe(dest('dist/fonts/'));
  done();
}

function imgmin(done){
  src('img/**/**.png')
        .pipe(tinypng({
            key: '5gHqg6c4tFWRgHT5qwW7VfCJBFB8z4MY',           
        }))
        .pipe(dest('dist/img/'));
  src('img/**/**.jpg')
        .pipe(tinypng({
            key: '5gHqg6c4tFWRgHT5qwW7VfCJBFB8z4MY',           
        }))
        .pipe(dest('dist/img/'));
  src('img/**/**.jpeg')
        .pipe(tinypng({
            key: '5gHqg6c4tFWRgHT5qwW7VfCJBFB8z4MY',           
        }))
        .pipe(dest('dist/img/'));
        
  src('img/**/**.svg')
        .pipe(dest('dist/img/'));
        done();
  src('img/**/**.ico')
        .pipe(dest('dist/img/'));
        done();
}

exports.serve = bs
exports.build = series(buildCSS, buildJS,html,php,fonts,imgmin);
exports.buildCSS = buildCSS;
exports.buildJS = buildJS;
exports.imgmin = imgmin;