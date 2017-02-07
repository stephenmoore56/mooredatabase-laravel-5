(function() {
    'use strict';
    mooredatabaseReportsApp.controller('speciesForOrderCtrl', ["$scope", "speciesForOrderData",
        function speciesForOrderCtrl($scope, speciesForOrderData) {

            $scope.orderId = $('#orderId').val().trim();

            speciesForOrderData.getData($scope.orderId).then(function(data) {
                $scope.data = data;
                $scope.orderName = data[0].order_name;
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