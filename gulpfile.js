var gulp = require('gulp'),
    clean = require('gulp-clean'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    uglifyJs = require('gulp-uglifyjs'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync');

var config = {
    src: {
        pug: './source/pug/**/*.pug',
        sass: './source/sass/main/*.sass',
        sassWatch: './source/sass/**/*.sass',
        js: './source/js/**/*.js',
        img: './source/img/**/*',
    },
    build: {
        pug: './build',
        sass: './build/css',
        js: './build/js',
        img: './build/img',
    },
    server: './build',
    clean: './build'
};

gulp.task('clean', function() {
    gulp.src(config.clean, { read: false })
        .pipe(clean());
});

//gulp.task('pug', function() {
//    gulp.src(config.src.pug)
//        .pipe(pug())
//        .pipe(gulp.dest(config.build.pug))
//        .pipe(browserSync.reload({ stream: true }));
//});

gulp.task('sass', function() {
    gulp.src(config.src.sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(config.build.sass))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('js', function() {
    gulp.src(config.src.js)
        // .pipe(concat('final.min.js'))
        .pipe(uglifyJs())
        .pipe(gulp.dest(config.build.js))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('img', function() {
    gulp.src(config.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(config.build.img))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('watch', function() {
//    gulp.watch(config.src.pug, ['pug']);
    gulp.watch(config.src.sassWatch, ['sass']);
    gulp.watch(config.src.js, ['js']);
    gulp.watch(config.src.img, ['img']);
});

gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: config.server
        }
    });
});

gulp.task('default', ['sass', 'js', 'img', 'watch', 'server'], function() {
//    console.log('Gulp отработал!');
});