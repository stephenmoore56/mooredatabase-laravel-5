(() => {
    "use strict";
    let gulp = require('gulp'),
        args = require('yargs').argv,
        del = require('del'),
        config = require('./gulp.config')(),
        runSequence = require('run-sequence'),
        // lazy loading plugins; can use $. and name of plugin without gulp-
        $ = require('gulp-load-plugins')({
            lazy: true
        });

    gulp.task('js', () => {
        log('Analyzing code and code style...');
        return gulp.src(config.alljs)
            .pipe($.if(args.verbose, $.print()))
            .pipe($.jshint())
            .pipe($.jshint.reporter('jshint-stylish', {
                verbose: true
            }))
            .pipe($.jscs());
    });

    // concatenate and minify JavaScript files
    gulp.task('uglify', (cb) => {
        runSequence('uglify-reports', 'js-inject-reports', cb);
    });
    // concatenate and minify report AngularJS application files
    gulp.task('uglify-reports', () => {
        log('Concatenating and minifying Angular report files...');
        return gulp.src(config.reportfiles)
            .pipe($.concat(config.reportminfile)) //the name of the resulting file
            .pipe($.uglify())
            .pipe($.rev())
            .pipe(gulp.dest('.'));
    });
    // inject minified JS into reports partial
    gulp.task('js-inject-reports', () => {
        let target = gulp.src(config.reportsScriptPartial);
        let sources = gulp.src(config.reportsJsInjectSources, {
            read: false
        });
        return target.pipe($.inject(sources))
            .pipe($.replace('/public', ''))
            .pipe(gulp.dest('./app/views/partials'));
    });

    // compile and minify SASS to CSS with compass
    gulp.task('css', (cb) => {
        runSequence('clean-css', 'compass', 'clean-sass-cache', 'css-inject', cb);
    });
    // remove existing CSS files
    gulp.task('clean-css', () => {
        var files = config.cssfiles;
        return clean(files);
    });
    // compile SASS
    gulp.task('compass', () => {
        log('Compiling SASS -> CSS...');
        return gulp.src(config.sassfiles)
            .pipe($.if(args.verbose, $.print()))
            .pipe($.plumber())
            .pipe($.compass({
                config_file: config.configrb,
                css: config.builddir,
                sass: config.sassdir
            }))
            .pipe($.rev())
            .pipe(gulp.dest(config.cssdir));
    });
    // remove existing CSS files
    gulp.task('clean-sass-cache', () => {
        var files = config.sasscache;
        return clean(files);
    });
    // watcher task for CSS
    gulp.task('css-watch', () => {
        gulp.watch(config.sassfiles, ['css']);
    });
    // inject CSS into stylesheets partial
    gulp.task('css-inject', () => {
        let target = gulp.src('./resources/views/partials/head.blade.php');
        let sources = gulp.src(['./public/css/*.css'], {
            read: false
        });
        return target.pipe($.inject(sources))
            .pipe($.replace('/public', ''))
            .pipe(gulp.dest('./resources/views/partials'));
    });

    // logging utility
    function log(msg) {
        if (typeof(msg) === 'object') {
            for (let item in msg) {
                if (msg.hasOwnProperty(item)) {
                    $.util.log($.util.colors.blue(msg[item]));
                }
            }
        } else {
            $.util.log($.util.colors.blue(msg));
        }
    }

    // for clearing directories
    function clean(path) {
        log('Cleaning: ' + $.util.colors.red(path));
        return del(path);
    }
})();