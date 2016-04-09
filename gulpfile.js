var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var notifier = require('node-notifier');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var open = require('gulp-open');

var notify = function(error) {
  var message = 'In: ';
  var title = 'Error: ';

  if(error.description) {
    title += error.description;
  } else if (error.message) {
    title += error.message;
  }

  if(error.filename) {
    var file = error.filename.split('/');
    message += file[file.length-1];
  }

  if(error.lineNumber) {
    message += '\nOn Line: ' + error.lineNumber;
  }

  console.log(title);
  notifier.notify({title: title, message: message});
};

gulp.task('sass', function () {
  return gulp.src('./src/menu.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('menu.css'))
    .pipe(gulp.dest('./'))
});

gulp.task('watch-sass', function () {
  return gulp.watch('./src/menu.scss', ['sass']);
});

gulp.task('open', function(){
  setTimeout(function() {
    gulp.src('./index.html')
    .pipe(open());
  }, 3000);
});

var bundler = watchify(browserify({
  entries: ['./src/app.jsx'],
  transform: [reactify],
  extensions: ['.jsx'],
  debug: true,
  cache: {},
  packageCache: {},
  fullPaths: true
}));

function bundle() {
  return bundler
    .bundle()
    .on('error', notify)
    .pipe(source('main.js'))
    .pipe(gulp.dest('./'))
}
bundler.on('update', bundle)

gulp.task('build', function() {
  bundle()
});

gulp.task('default', ['build', 'sass', 'watch-sass', 'open']);
