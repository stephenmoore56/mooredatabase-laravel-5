System.config({
    paths: {
        'npm:': 'https://unpkg.com/'
    },
    //map tells the System loader where to look for things
    map: {

        'app': 'js/src',
        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        'tslib': 'npm:tslib',
        'rxjs': 'https://unpkg.com/rxjs',
        'rxjs-compat': 'npm:rxjs-compat',
        'rxjs/operators': 'npm:rxjs/operators',
        'typescript': 'npm:typescript@2.1.6/lib/typescript.js'
    },
    //packages defines our app package
    packages: {
        app: {
            main: './main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'rxjs-compat': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        'rxjs/operators': {
            main: 'index.js',
            defaultExtension: 'js'
        }
    }
});
