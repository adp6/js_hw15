const {src, dest, series, parallel, watch} = require('gulp');
const htmlmin = require('gulp-html-minifier-terser');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const minifyInline = require('gulp-minify-inline');
function minhtml(){
    return src('app/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(dest('dist/'))
}

function scsstocss(){
    return src('app/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('dist/'))
}

function mincss(){
    return src('dist/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/'))
}

function combinejs(){
    return src('app/*.js')
    .pipe(concat('index.js'))
    .pipe(dest('dist/'))
}


function all(){
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
    watch('app/index.html',minhtml)
    watch('app/*.scss', series(scsstocss, mincss))
    watch('app/*.js',combinejs)
    watch(`app/*.*`).on('change', browserSync.reload);
}
exports.default = all;