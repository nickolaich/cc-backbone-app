var gulp = require("gulp"),
    amdOptimize = require("amd-optimize"),
    concat = require("gulp-concat"),
    eventStream = require("event-stream"),
    order = require("gulp-order"),
    htmlreplace = require('gulp-html-replace'),
    rimraf = require('rimraf'),
    rjs = require('gulp-requirejs'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-minify-css'),
    prefixer = require('gulp-autoprefixer');

var appPath = 'app/',
    buildsPath = './build';

// Clean builds
gulp.task('clean', function (cb) {
    rimraf(buildsPath, cb);
});

// Build static html
gulp.task('build:html', function () {
    //Select files in source (templates) and move to build's templates
    //gulp.src(['app/templates/**/*.html'])
      //  .pipe(gulp.dest('build/templates/'));

    gulp.src('index.html') //Select files in source
        .pipe(htmlreplace({
            'js': ['main-bundle.js'],
            'css': 'assets/css/main.css'
        }))
        .pipe(gulp.dest('./build/')); //Move to dest
});

gulp.task('build:css', function () {
    gulp.src([
        'assets/css/*.css',
        'bower_components/bootstrap/dist/css/bootstrap.css',
        'bower_components/jquery-ui/themes/redmond/jquery-ui.css'
    ]) //Get all css files
        //.pipe(sourcemaps.init()) //Init sourcemaps
        //.pipe(sass()) //Build sass
        .pipe(prefixer()) //add prefixes
        .pipe(cssmin()) //minify
        //.pipe(sourcemaps.write())// write sourcemaps
        .pipe(concat("main.css"))
        .pipe(gulp.dest('build/assets/css/')); //copy to build
});

gulp.task('build:image', function () {
    gulp.src('assets/img/**/*.*') //Выберем наши картинки
        /*.pipe(imagemin({ //Сожмем их
         progressive: true,
         svgoPlugins: [{removeViewBox: false}],
         use: [pngquant()],
         interlaced: true
         }))*/
        .pipe(gulp.dest('build/assets/img/')); //И бросим в build
});

gulp.task('build:fonts', function () {
    gulp.src('assets/fonts/**/*.*')
        .pipe(gulp.dest('build/assets/fonts/'))
});


// Build JS using require.js optimizer
gulp.task('build:rjs', function () {
    rjs({
        mainConfigFile:'app/require.config.js',
        baseUrl: 'app/',
        out: 'main-bundle.js',
        include: "almond",
        name: "main",
        optimize: "none"
    })
        //.pipe(sourcemaps.init()) //Init sourcemaps
        .pipe(uglify()) //compress js
        //.pipe(sourcemaps.write()) //write sourcemaps
        .pipe(gulp.dest('./build/')); // pipe it to the output DIR
});

// Build JS using require.js optimizer
gulp.task('build:rjs:dev', function () {
    rjs({
        mainConfigFile:'app/require.config.js',
        baseUrl: appPath,
        out: 'main-bundle.js',
        include: "almond",
        name: "main",
        optimize: "none"
    })
        .pipe(gulp.dest('./build/'));
});


// Build production version
gulp.task('build', [
    'build:html',
    'build:rjs',
    'build:css',
    'build:fonts',
    'build:image'
]);

// Build dev version
gulp.task('build:dev', [
    'build:html',
    'build:rjs:dev',
    'build:css',
    'build:fonts',
    'build:image'
]);