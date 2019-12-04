const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const svgSprite = require('gulp-svg-sprite');

gulp.task('svgSprite', function () {
    return gulp.src('/Users/polzovatel/Documents/projects/sprite/*.svg') // svg files for sprite
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"  //sprite file name
                }
            },
        }
        ))
        .pipe(gulp.dest('/Users/polzovatel/Documents/projects/Photograph/img/'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
})

gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'))
});