(function() {
    'use strict';
    mooredatabaseReportsApp.controller('speciesForMonthCtrl', ["$scope", "speciesForMonthData", "listOrdersData",
        function speciesForMonthCtrl($scope, speciesForMonthData, listOrdersData) {

            $scope.monthNumber = $('#monthNumber').val().trim();

            speciesForMonthData.getData($scope.monthNumber).then(function(data) {
                $scope.data = data;
                $scope.monthName = data[0].monthName;
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