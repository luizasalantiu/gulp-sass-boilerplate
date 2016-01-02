var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    del = require('del'),
    package = require('./package.json');

var paths = {
    output: {
        scripts: 'dist/js',
        styles: 'dist/css'
    },
    input: {
        scripts: [
            'src/scripts/*.js'
        ],
        sass: [
            'src/styles/reset.scss',
            'src/styles/styles.scss'
        ]
    }
};

gulp.task('scripts', function() {
    return gulp.src(paths.input.scripts)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest(paths.output.scripts))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.output.scripts))
        .pipe(notify({
            message: 'Scripts task complete'
        }));
});

gulp.task('lint', function() {
    return gulp.src(paths.input.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('styles', function() {
    return sass(paths.input.sass)
        .pipe(autoprefixer('last 2 version'))
        .pipe(concat('application.css'))
        .pipe(gulp.dest(paths.output.styles))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest(paths.output.styles))
        .pipe(notify({
            message: 'Styles task complete'
        }));
});

gulp.task('watch', function() {
    gulp.watch(paths.input.sass, ['styles']);
    gulp.watch(paths.input.scripts, ['scripts']);
});

gulp.task('clean', function() {
    return del([paths.output.styles, paths.output.scripts]);
});

gulp.task('default', [
    'lint',
    'clean',
    'scripts',
    'styles'
]);