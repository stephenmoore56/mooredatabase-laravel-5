(function() {
    'use strict';
    var baseURL = "http://lumen.moore-database.com";
    // var baseURL = "http://lumen.local";
    mooredatabaseReportsApp.factory('speciesByMonthData', ['$http', function($http) {
        return {
            getData: function() {
                return $http.get(baseURL + "/api/reports/speciesByMonth").then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('speciesByYearData', ['$http', function($http) {
        return {
            getData: function() {
                return $http.get(baseURL + "/api/reports/speciesByYear").then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('speciesForMonthData', ['$http', function($http) {
        return {
            getData: function(monthNumber) {
                return $http.get(baseURL + '/api/reports/speciesForMonth/' + monthNumber.toString()).then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('speciesForYearData', ['$http', function($http) {
        return {
            getData: function(year) {
                return $http.get(baseURL + '/api/reports/speciesForYear/' + year.toString()).then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('speciesDetailData', ['$http', function($http) {
        return {
            getData: function(speciesId) {
                return $http.get(baseURL + '/api/reports/speciesDetail/' + speciesId.toString()).then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('monthsForSpeciesData', ['$http', function($http) {
        return {
            getData: function(speciesId) {
                return $http.get(baseURL + '/api/reports/monthsForSpecies/' + speciesId.toString()).then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('speciesByOrderData', ['$http', function($http) {
        return {
            getData: function() {
                return $http.get(baseURL + "/api/reports/speciesByOrder").then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('speciesForOrderData', ['$http', function($http) {
        return {
            getData: function(orderId) {
                return $http.get(baseURL + '/api/reports/speciesForOrder/' + orderId.toString()).then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('speciesAllData', ['$http', function($http) {
        return {
            getData: function() {
                return $http.get(baseURL + "/api/reports/speciesAll").then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('listOrdersData', ['$http', function($http) {
        return {
            getData: function() {
                return $http.get(baseURL + "/api/reports/listOrders").then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('listOrdersAllData', ['$http', function($http) {
        return {
            getData: function() {
                return $http.get(baseURL + "/api/reports/listOrdersAll").then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('searchAllData', ['$http', function($http) {
        return {
            getData: function(searchString, orderId) {
                return $http.get(baseURL + '/api/reports/searchAll/' + searchString + '/' + orderId.toString()).then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('speciesByLocationData', ['$http', function($http) {
        return {
            getData: function() {
                return $http.get(baseURL + "/api/reports/speciesByLocation").then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('speciesByCountyData', ['$http', function($http) {
        return {
            getData: function() {
                return $http.get(baseURL + "/api/reports/speciesByCounty").then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('speciesForLocationData', ['$http', function($http) {
        return {
            getData: function(locationId) {
                return $http.get(baseURL + '/api/reports/speciesForLocation/' + locationId.toString()).then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]).factory('locationDetailData', ['$http', function($http) {
        return {
            getData: function(locationId) {
                return $http.get(baseURL + '/api/reports/locationDetail/' + locationId.toString()).then(function(response) {
                    return response.data.data;
                });
            }
        };
    }]);
})();