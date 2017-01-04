(function() {
    'use strict';
    mooredatabaseReportsApp.controller('speciesByYearCtrl', ["$scope", "speciesByYearData", "reportCharts",
        function speciesByMonthCtrl($scope, speciesByYearData, reportCharts) {

            speciesByYearData.getData().then(function(data) {
                $scope.data = data;
                reportCharts.drawChartSpeciesByYear(data, "chart_div_1");
            });

            /* initial sort order */
            $scope.predicate = ['common_name'];
            $scope.sortResults = function(predicate) {
                $scope.reverse = (JSON.stringify($scope.predicate) === JSON.stringify(predicate)) ? !$scope.reverse : false;
                $scope.predicate = predicate;
            };

        }
    ]);
})();