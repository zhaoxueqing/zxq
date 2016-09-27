/**
 * Created by admin on 2016/9/25.
 */
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'),
    uglify= require('gulp-uglify'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    htmlmin = require('gulp-htmlmin');

gulp.task('jsmin', function () {
    //压缩src/js目录下的所有js文件
    //除了test1.js和test2.js（**匹配src/js的0个或多个子文件夹）
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
gulp.task('testCssmin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});
gulp.task('testConcat', function () {
    gulp.src('dist/js/*.js')
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('dist/js'));
});

gulp.task('testImagemin', function () {
    gulp.src('src/img/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});
gulp.task('testImagemin', function () {
    gulp.src('src/img/phiz/*.{png,jpg,gif,ico}')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/phiz'));
});
gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    gulp.src('src/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/'));
});
//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径