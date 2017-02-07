(function() {
    'use strict';
    mooredatabaseReportsApp
        .directive("speciesList", function() {
            return {
                replace: true,
                restrict: "E",
                templateUrl: "/templates/directives/species-list.html"
            };
        })
        .directive("speciesListYear", function() {
            return {
                replace: true,
                restrict: "E",
                templateUrl: "/templates/directives/species-list-year.html"
            };
        });
})();