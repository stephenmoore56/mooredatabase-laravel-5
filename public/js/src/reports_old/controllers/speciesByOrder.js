(function() {
    'use strict';
    mooredatabaseReportsApp.controller('speciesByOrderCtrl', ["$scope", "speciesByOrderData", "reportCharts",
        function speciesByOrderCtrl($scope, speciesByOrderData, reportCharts) {

            speciesByOrderData.getData().then(function(data) {
                $scope.data = data;
                reportCharts.drawChartSpeciesByOrder(data, "chart_div_1");
            });

            /* initial sort order */
            $scope.predicate = ['common_name'];
            $scope.reverse = false;
            $scope.sortResults = function(predicate) {
                $scope.reverse = (JSON.stringify($scope.predicate) === JSON.stringify(predicate)) ? !$scope.reverse : false;
                $scope.predicate = predicate;
            };

        }
    ]);
})();