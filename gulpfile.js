var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested');

gulp.task('default', function () {
    console.log('hi');
});

function html() {
    console.log('html task');
}

function style() {
    console.log('Sass or PostCSS task');
    return gulp.src('./asset/css/style.css')
        .pipe(postcss([cssvars, nested, autoprefixer]))
        .pipe(gulp.dest('./temp/style'));
}

gulp.task('watch', function () {

    watch('index.html', function () {
        html();
    });

    watch('./asset/css/style.css', function () {
        style();
    });

})