
const gulp = require('gulp');

// Include Our Plugins
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const autoprefixer = require('gulp-autoprefixer');
const minifyHTML = require('gulp-minify-html');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');

/* Cleans Directories ------------------------------------------------------- */
gulp.task('clean', () => del(['dist/**', 'babel/']));

/* Lint Task ---------------------------------------------------------------- */
gulp.task('lint', () =>
  gulp.src('src/js/*.js')
    .pipe(eslint())
    .pipe(eslint.format()));

/* HTML Minification -------------------------------------------------------- */
gulp.task('html', () => {
  const opts = {
    conditionals: true,
    spare: true,
  };
  return gulp.src('src/*.html')
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest('dist/'));
});

/* Compile Our Sass --------------------------------------------------------- */
gulp.task('sass', () =>
  (
    gulp.src('src/scss/lib/*.css')
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist/css')),
    gulp.src('src/scss/lib/lib.scss')
      .pipe(sass())
      .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist/css')),
    gulp.src('src/scss/app/app.scss')
      .pipe(sass())
      .pipe(autoprefixer({ browsers: ['last 2 versions'], cascade: false }))
      .pipe(rename({ suffix: '.min' }))
      .pipe(cleanCSS())
      .pipe(gulp.dest('dist/css'))
  ));
/* Babel Transpiling -------------------------------------------------------- */
gulp.task('babel', () =>
  gulp.src('src/js/**/*.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('babel')));

/* Concatenate & Minify JS -------------------------------------------------- */
gulp.task('scripts', () =>
  (
    gulp.src([
      // List of Library Files
      'node_modules/jquery/dist/jquery.slim.min.js',
      'node_modules/tether/dist/js/tether.min.js',
      'node_modules/bootstrap/dist/js/bootstrap.min.js',
      'node_modules/highcharts/highstock.js'
    ])
      .pipe(concat('lib.js'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('dist/js')),
    gulp.src('babel/**/*.js')
      .pipe(concat('app.js'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
  ));

/* Image Minification ------------------------------------------------------- */
gulp.task('images', () => {
  return gulp.src('src/assets/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/assets'));
});

/* Watch Files For Changes -------------------------------------------------- */
gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.**', gulp.series('sass'));
  gulp.watch('src/js/**/*.js', gulp.series('babel', 'scripts'));
  gulp.watch('src/assets/**/*', gulp.series('images'));
  gulp.watch('src/**/*.html', gulp.series('html', 'scripts'));
  gulp.watch('dist/**/*.**').on('change', browserSync.reload);
});

/* Spins up localhost ------------------------------------------------------- */
gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
});

/* Default Task ------------------------------------------------------------- */
gulp.task('default', gulp.series('clean', 'images', 'lint', 'babel', 'html', 'sass', 'scripts',
  gulp.parallel('watch', 'serve')));

/* Distribution Prep Task --------------------------------------------------- */
gulp.task('dist', gulp.series('clean', 'lint', 'babel',
  gulp.parallel('html', 'sass', 'scripts', 'images')));
