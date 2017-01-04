(function() {
    'use strict';
    mooredatabaseReportsApp.controller('speciesForLocationCtrl', ["$scope", "speciesForLocationData", "locationDetailData", "listOrdersData",
        function speciesForLocationCtrl($scope, speciesForLocationData, locationDetailData, listOrdersData) {
            $scope.locationId = $('#locationId').val().trim();

            // sharing this template with one that shows chart in lower panel
            $scope.showChart = true;

            locationDetailData.getData($scope.locationId).then(function(data) {
                $scope.location = data[0];
            });

            speciesForLocationData.getData($scope.locationId).then(function(data) {
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