var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function () {
    console.log('hi');
});

function html() {
    console.log('html task');
}

function style() {
    console.log('Sass or PostCSS task');
}

gulp.task('watch', function () {

    watch('index.html', function () {
        html();
    });

    watch('./asset/css/style.css', function () {
        style();
    });

})