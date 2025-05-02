const
    cleanCss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    purgecss = require('gulp-purgecss'),
    rename = require('gulp-rename')
    sass = require('gulp-sass')(require('sass')),
    terser = require('gulp-terser');

const jsFiles = [
    './kierannoble.dev/UI/Layout/Blackout/_Blackout.js',
    './kierannoble.dev/UI/Layout/Slideshow/_Slideshow.js'
];

gulp.task('css', function () {
    return gulp.src('./kierannoble.dev/UI/site.scss')
        .pipe(purgecss({
            content: ['./kierannoble.dev/**/**.cs', './kierannoble.dev/**/**.cshtml']
        }))
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(cleanCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./kierannoble.dev/wwwroot/css'))
});

gulp.task('js', function () {
    return gulp.src(jsFiles)
        .pipe(concat('site.js'))
        .pipe(terser())
        .pipe(rename('site.min.js'))
        .pipe(gulp.dest('./kierannoble.dev/wwwroot/js'));
});

gulp.task('default', gulp.parallel(['css', 'js']));