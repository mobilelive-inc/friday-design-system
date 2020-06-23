function defaultTask(cb) {
  // place code for your default task here
  cb();
}

const fileinclude = require('gulp-file-include');
const gulp = require('gulp');

gulp.task('fileinclude', function() {
  gulp.src(['index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

exports.default = defaultTask;
