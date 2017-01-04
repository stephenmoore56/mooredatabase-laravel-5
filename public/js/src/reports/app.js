var mooredatabaseReportsApp;
mooredatabaseReportsApp = angular.module('mooredatabaseReportsApp', ['ngRoute'], ['$interpolateProvider', function($interpolateProvider) {
    'use strict';
    /* so Blade and Angular curly braces don't conflict */
    $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
}]);