const { watch, series, parallel } = require('gulp');
const gulp = require('gulp'),
    concat = require('gulp-concat'),
    fs = require('fs'),
    requirejs = require('requirejs'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass')(require('sass'));
    

function _buildVersion() {
    let _date = new Date();
    let _version = [
        _date.getFullYear(),
        _padTo2Digits(_date.getMonth() + 1),
        _padTo2Digits(_date.getDate()),
        '-',
        _padTo2Digits(_date.getHours()),
        _padTo2Digits(_date.getMinutes()),
    ].join('');

    fs.writeFileSync('version.txt', _version);

    function _padTo2Digits(number) {
        return number.toString().padStart(2, '0');
    };
};

gulp.task('build:scss', function () {
    return gulp.src('UI/main.scss', {allowEmpty: true})
    .pipe(concat('output.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build:js', function() {
    _buildVersion();
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
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('build', parallel('build:scss', 'build:js'));

gulp.task('watch', function () {
    return watch('UI/**', series('build'));
});

gulp.task('default', parallel('build:scss', 'build:js'));