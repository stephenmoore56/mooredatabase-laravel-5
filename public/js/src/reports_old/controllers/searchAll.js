(function() {
    'use strict';
    mooredatabaseReportsApp.controller('searchAllCtrl', ["$scope", "searchAllData", "listOrdersAllData",
        function searchAllCtrl($scope, searchAllData, listOrdersAllData) {

            /* order drop down */
            listOrdersAllData.getData().then(function(data) {
                $scope.orders = data;
            });

            /* initial sort order */
            $scope.predicate = ['common_name'];
            $scope.sortResults = function(predicate) {
                $scope.reverse = (JSON.stringify($scope.predicate) === JSON.stringify(predicate)) ? !$scope.reverse : false;
                $scope.predicate = predicate;
            };

            /* search function */
            $scope.searchString = ' ';
            $scope.orderId = -1;
            $scope.searchAll = function() {
                $scope.searchString = $scope.searchString === '' ? ' ' : $scope.searchString;
                searchAllData.getData($scope.searchString, $scope.orderId).then(function(data) {
                    $scope.data = data;
                });
            };

        }
    ]);
})();