'use strict';

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');

var options = {
  'remoteUrl': 'https://github.com/ridhoq/tweets-vs-commits.git',
  'origin': 'origin',
  'branch': 'gh-pages'
};

gulp.task('deploy', function () {
  return gulp.src('dist/**/*')
    .pipe(deploy());
});
