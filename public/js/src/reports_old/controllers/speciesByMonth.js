(function() {
    'use strict';
    mooredatabaseReportsApp.controller('speciesByMonthCtrl', ["$scope", "speciesByMonthData", "reportCharts",
        function speciesByMonthCtrl($scope, speciesByMonthData, reportCharts) {

            speciesByMonthData.getData().then(function(data) {
                $scope.data = data;
                reportCharts.drawChartSpeciesByMonth(data, "chart_div_1");
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