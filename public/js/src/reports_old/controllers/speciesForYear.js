(function() {
    'use strict';
    mooredatabaseReportsApp.controller('speciesForYearCtrl', ["$scope", "speciesForYearData", "listOrdersData",
        function speciesForYearCtrl($scope, speciesForYearData, listOrdersData) {

            $scope.year = $('#year').val().trim();

            speciesForYearData.getData($scope.year).then(function(data) {
                $scope.data = data;
            });

            listOrdersData.getData().then(function(data) {
                $scope.orders = data;
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