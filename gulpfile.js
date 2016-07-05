"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var rename = require("gulp-rename");
var csscomb = require("gulp-csscomb");
var server = require("browser-sync");


var browsers = [
    "last 1 version",
    "last 2 Chrome versions",
    "last 2 Firefox versions",
    "last 2 Opera versions",
    "last 2 Edge versions",
    "ie 11",
    "ie 10",
    "ie 9"
];

gulp.task('csscomb', function() {
    return gulp.src('css/style.css')
        .pipe(csscomb())
        .pipe(gulp.dest('css'));
});

gulp.task("svgmin", function () {
    return gulp.src("img/*.svg")
        .pipe(svgmin())
        .pipe(gulp.dest("build/img/"));
});

gulp.task("svgstore:dev", function () {
    return gulp
        .src("img/**/*.svg")
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("spriteSvg.svg"))
        .pipe(gulp.dest("img/"));
});

gulp.task("cssbuild:dev", function() {
    gulp.src("less/style.less")
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer({browsers: browsers}))
        .pipe(gulp.dest("css"))
        .pipe(server.reload({stream: true}));
});

gulp.task('serve',["cssbuild:dev","svgstore:dev"], function () {
   server.init({
       server: ".",
       notify: false,
       open: true,
       ui: false
   });
    
    gulp.watch("less/**/*.less", ["cssbuild:dev"]);
    gulp.watch("*.html").on("change", server.reload);
    
});

