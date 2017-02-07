(function() {
    'use strict';
    mooredatabaseReportsApp.controller('speciesByLocationCtrl', ["$scope", "$filter", "speciesByLocationData", "speciesByCountyData", "reportCharts",
        function speciesByLocationCtrl($scope, $filter, speciesByLocationData, speciesByCountyData, reportCharts) {

            speciesByLocationData.getData().then(function(data) {
                $scope.data = data;
            });

            speciesByCountyData.getData().then(function(data) {
                var sortedData = $filter('orderBy')(data, data.speciesCount, true);
                reportCharts.drawChartSpeciesByCounty(sortedData, "chart_div_1");
            });

            /* initial sort order */
            $scope.predicate = ['location_name'];
            $scope.sortResults = function(predicate) {
                $scope.reverse = (JSON.stringify($scope.predicate) === JSON.stringify(predicate)) ? !$scope.reverse : false;
                $scope.predicate = predicate;
            };

        }
    ]);
})();