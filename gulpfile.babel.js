// 引入欲使用的套件模組
import gulp from 'gulp';
import babelify from 'babelify';
import browserify from 'browserify';//Browserify lets you require('modules') in the browser by bundling up all of your dependencies
// 轉成 gulp 讀取的 vinyl（黑膠）流
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';

import gutil from 'gulp-util';
import image from 'gulp-image';
import sass from 'gulp-sass';//編譯sass
import uglify from 'gulp-uglify';//壓縮js

// auto reload server
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;


const dirs = {
  src: 'src',
  dest: 'dist'
};

const stylesPaths = {
  src: `${dirs.src}/styles/*.scss`,
  dest: `${dirs.dest}/css`
};

const scriptsPaths = {
  src: `${dirs.src}/scripts/*.js`,
  dest: `${dirs.dest}/lib`
};

const jsPaths = {
  src: `${dirs.src}/js/*.js`,
  dest: `${dirs.dest}/js`
};

const imagesPaths = {
  src: `${dirs.src}/images/**/*`,
  dest: `${dirs.dest}/imgs`
};

const htmlPaths = {
  src: `${dirs.src}/*.html`,
  dest: `${dirs.dest}`
};


// 編譯 Scss 任務，完成後送到 dist/css/main.css
gulp.task('styles', () => {
  gulp.src(stylesPaths.src)
    .pipe(sass())         // 編譯 Scss
    .pipe(gulp.dest(stylesPaths.dest))  
});

// 編譯 JavaScript 轉譯、合併、壓縮任務，完成後送到 dist/js/bundle.js
gulp.task('scripts', function(){
    return browserify({
        entries: ['./src/scripts/main.js'],
        debug: true
    })
    .transform(babelify) // 轉譯
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer()) // 從 streaming 轉回 buffered vinyl 檔案
    .pipe(sourcemaps.init({loadMaps: true})) // 由於我們壓縮了檔案，要用 sourcemaps 來對應原始文件方便除錯
        .pipe(uglify()) // 壓縮檔案
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./')) 
    .pipe(gulp.dest(scriptsPaths.dest));
});

// 純前端不壓縮
gulp.task('uglify', function() {
  return gulp.src(jsPaths.src)
      // .pipe(uglify())
      // .pipe(rename(function(path) {
      //     path.basename += ".min";
      //     path.extname = ".js";
      // }))
      .pipe(gulp.dest(jsPaths.dest));
});

// 複製 images 任務，完成後送到 dist/images
gulp.task('images', function() {
  gulp.src(imagesPaths.src)
    .pipe(image())
    .pipe(gulp.dest(imagesPaths.dest));
});

// gulp.task('icons',function(){
//   gulp.src(iconsPaths.src)
//     .pipe(image())
//     .pipe(gulp.dest(iconsPaths.dest));
// });

gulp.task('html',function(){
  gulp.src(htmlPaths.src)
    .pipe(gulp.dest(htmlPaths.dest));
});

// 監聽是否有檔案更新
gulp.task('watch',function () {
  gulp.watch(stylesPaths.src, ['styles']);
  gulp.watch(scriptsPaths.src, ['scripts']);
  gulp.watch(htmlPaths.src, ['html']);
});



// 啟動測試用 server
gulp.task('server', function() {
  browserSync.init({
      server: "./dist",
      port: 8080,
      browser: "google chrome"
  });
  gulp.watch(`${stylesPaths.dest}/*`).on("change", reload);
  gulp.watch(`${scriptsPaths.dest}/*`).on("change", reload);
  gulp.watch(`${imagesPaths.dest}/*`).on("change", reload);
  gulp.watch(`${htmlPaths.dest}/*`).on("change", reload);
});


// 兩種任務類型，第一種會啟動 server
// gulp.task('default', ['scripts', 'styles', 'images','icons','html','watch','server']);
gulp.task('default', ['watch','server']);
gulp.task('compile', ['scripts']);
gulp.task('build', ['images','scripts', 'styles','html']);
