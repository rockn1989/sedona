"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var autoprefixer = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");
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


gulp.task("cssbuild", function() {
    gulp.src("less/style.less")
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer({browsers: browsers}))
        .pipe(gulp.dest("css"))
        .pipe(server.reload({stream: true}));
});

gulp.task('serve',["cssbuild"], function () {
   server.init({
       server: ".",
       notify: false,
       open: true,
       ui: false
   });
    
    gulp.watch("less/**/*.less", ["cssbuild"]);
    gulp.watch("*.html").on("change", server.reload);
    
});

