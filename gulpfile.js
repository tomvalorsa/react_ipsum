var gulp = require('gulp'),
    watch = require('gulp-watch')

gulp.task('html', function(){
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
})

gulp.task('css', function(){
  return gulp.src('src/*.css')
    .pipe(gulp.dest('dist'))
})

gulp.task('assets', function(){
  return gulp.src('src/images/*')
    .pipe(gulp.dest('dist/images'))
})

gulp.task('data', function(){
  return gulp.src('src/data/*')
    .pipe(gulp.dest('dist/data'))
})

gulp.task('copy', ['html', 'css', 'assets', 'data'])

gulp.task('default', ['copy'], function(cb){ })

gulp.task('watch', ['copy'], function(cb){
  gulp.watch('src/*.html', ['html'])
  gulp.watch('src/*.css', ['css'])
  gulp.watch('src/images/*', ['assets'])
  gulp.watch('src/data/*', ['data'])
})