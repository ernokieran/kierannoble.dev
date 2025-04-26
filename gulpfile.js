const gulp = require('gulp'),
    purgecss = require('gulp-purgecss'),
    sass = require('gulp-sass')(require('sass')),
    terser = require('gulp-terser'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename');

const jsFiles = ['./kierannoble.dev/UI/Layout/Slideshow/_Slideshow.js'];

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
        .pipe(terser())
        .pipe(rename('site.min.js'))
        .pipe(gulp.dest('./kierannoble.dev/wwwroot/js'));
});

gulp.task('default', gulp.parallel(['css', 'js']));