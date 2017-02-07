(function() {
    'use strict';
    mooredatabaseReportsApp.controller('speciesDetailCtrl', ["$scope", "speciesDetailData", "monthsForSpeciesData", "reportCharts",
        function speciesDetailCtrl($scope, speciesDetailData, monthsForSpeciesData, reportCharts) {

            $scope.speciesId = $('#speciesId').val().trim();

            speciesDetailData.getData($scope.speciesId).then(function(data) {
                $scope.bird = data[0];
                $scope.common_name = data[0].common_name;
                if ($scope.bird.last_seen !== null) {
                    $scope.showChart = true;
                    monthsForSpeciesData.getData($scope.speciesId).then(function(data) {
                        $scope.data = data;
                        reportCharts.drawChartMonthsForSpecies(data, "chart_div_1");
                    });
                } else {
                    $scope.showChart = false;
                }
            });

            $scope.goBack = function() {
                window.history.back();
            };

            /* initial sort order */
            $scope.predicate = ['common_name'];
            $scope.sortResults = function(predicate) {
                $scope.reverse = (JSON.stringify($scope.predicate) === JSON.stringify(predicate)) ? !$scope.reverse : false;
                $scope.predicate = predicate;
            };

        }
    ]);
})();