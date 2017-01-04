var mooredatabaseStaticApp;
mooredatabaseStaticApp = angular.module('mooredatabaseStaticApp', ['ngRoute'], ['$interpolateProvider', function($interpolateProvider) {
        'use strict';
        /* so Blade and Angular curly braces don't conflict */
        $interpolateProvider.startSymbol('<%');
        $interpolateProvider.endSymbol('%>');
    }])
    .config(['$routeProvider', function($routeProvider) {
        'use strict';
        /* routing for static pages (SPA) */
        $routeProvider
            .when('/home', {
                templateUrl: '/templates/static-content/index.html'
            })
            .when('/', {
                templateUrl: '/templates/static-content/index.html'
            })
            .when('/education', {
                templateUrl: '/templates/static-content/education.html'
            })
            .when('/training', {
                templateUrl: '/templates/static-content/training.html'
            })
            .when('/certifications', {
                templateUrl: '/templates/static-content/certifications.html'
            })
            .when('/contact', {
                templateUrl: '/templates/static-content/contact.html'
            })
            .otherwise('/home');
    }]);
mooredatabaseStaticApp.config(['$locationProvider', function($locationProvider) {
    'use strict';
    $locationProvider.hashPrefix('');
}]);
