const { watch, task, series, parallel } = require('gulp');
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    merge = require("merge-stream"),
    sass = require('gulp-sass')(require('sass'));

let jsConfig = require('./jsbundleconfig.json');

gulp.task('build:scss', function () {
    return gulp.src('UI/main.scss', {allowEmpty: true})
    .pipe(concat('output.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build:js', function() {
    const tasks = Object.values(jsConfig.bundleGroups).flat().map(function (options) {
        return gulp.src(options.inputFiles, { cwd: jsConfig.baseDir })
            .pipe(concat(options.outputFileName))
            .pipe(gulp.dest(jsConfig.baseOutDir));
    })
    
    return merge(tasks);
});

gulp.task('build', parallel('build:scss', 'build:js'));

gulp.task('watch', function () {
    return watch('UI/**', series('build'));
});

gulp.task('default', parallel('build:scss', 'build:js'));