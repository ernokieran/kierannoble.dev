const { watch, series, parallel } = require('gulp');
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    requirejs = require("requirejs"),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass')(require('sass'));

gulp.task('build:scss', function () {
    return gulp.src('UI/main.scss', {allowEmpty: true})
    .pipe(concat('output.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build:js', function() {
    requirejs.optimize({
        baseUrl: ".",
        include: [
            "init"
        ],
        inlineText: true,
        mainConfigFile: "requireconfig.js",
        out: "dist/site.js",
        paths: {
            knockout: "UI/Utilities/ThirdParty/Knockout/knockout.3.5.0-min",
            text: "UI/Utilities/ThirdParty/RequireText/text.min"
        },
        removeCombined: true
    });

    return gulp.src("dist/site.js")
        // .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', parallel('build:scss', 'build:js'));

gulp.task('watch', function () {
    return watch('UI/**', series('build'));
});

gulp.task('default', parallel('build:scss', 'build:js'));