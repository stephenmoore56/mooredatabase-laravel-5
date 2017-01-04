(function() {
    'use strict';
    mooredatabaseReportsApp.controller('speciesAllCtrl', ["$scope", "speciesAllData", "listOrdersData",
        function speciesAllCtrl($scope, speciesAllData, listOrdersData) {

            speciesAllData.getData().then(function(data) {
                $scope.data = data;
            });

            listOrdersData.getData().then(function(data) {
                $scope.orders = data;
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