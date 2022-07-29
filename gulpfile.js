const { watch, task, series } = require('gulp');
const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

gulp.task('watch:scss', function () {
    return watch('scss/**/*.scss', task('scss'));
});

gulp.task('scss', function () {
    return gulp.src('scss/main.scss', {allowEmpty: true})
        .pipe(concat('output.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('default', series('scss', 'watch:scss'));