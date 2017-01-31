(function() {
    'use strict';
    module.exports = () => {
        let config = {
            alljs: [
                "./*.js",
                "./public/js/admin/**/*.js"],
            sassdir: './public/sass',
            sassfiles: './public/sass/*.scss',
            builddir: './public/sass/build',
            cssdir: './public/css',
            cssfiles: [
                './public/css/*.css',
                './public/sass/build/*.css'
            ],
            configrb: './config.rb',
            sasscache: './.sass-cache/',
            reportfiles: [
                './public/js/src/reports/app.js',
                './public/js/src/reports/charts.js',
                './public/js/src/reports/dataServices.js',
                './public/js/src/reports/filters.js',
                './public/js/src/reports/directives/speciesList.js',
                './public/js/src/reports/controllers/*.js'
            ],
            reportminfile: './public/js/dist/reports/app.min.js',
            reportsScriptPartial: './app/views/partials/reportsjs.blade.php',
            reportsJsInjectSources: './public/js/dist/reports/*.min.js',
            staticfiles: [
                './public/js/src/static/app.js'
            ],
            staticminfile: './public/js/dist/static/app.min.js',
            staticScriptPartial: './app/views/partials/staticjs.blade.php',
            staticJsInjectSources: './public/js/dist/static/*.min.js'
        };
        return config;
    };
})();