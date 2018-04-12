System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    // private methods
    function deg2rad(deg) {
        return deg * (Math.PI / 180);
    }
    function km2mile(km) {
        return km * 0.621371192;
    }
    function round(value, precision) {
        var multiplier = Math.pow(10, precision || 0);
        return Math.round(value * multiplier) / multiplier;
    }
    function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
        // implementation of haversine formula
        var R = 6371; // mean radius of the earth in km
        var dLat = deg2rad(lat2 - lat1); // deg2rad below
        var dLon = deg2rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    }
    var core_1, LATITUDE_HOME, LONGITUDE_HOME, GeoService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            // constants for home coordinates
            LATITUDE_HOME = 45.009613;
            LONGITUDE_HOME = -93.246839;
            GeoService = /** @class */ (function () {
                function GeoService() {
                }
                //noinspection JSMethodCanBeStatic
                GeoService.prototype.getDistanceFromHomeInMiles = function (latitude, longitude) {
                    var km = getDistanceFromLatLonInKm(latitude, longitude, LATITUDE_HOME, LONGITUDE_HOME);
                    return round(km2mile(km), 2);
                };
                GeoService = __decorate([
                    core_1.Injectable()
                ], GeoService);
                return GeoService;
            }());
            exports_1("GeoService", GeoService);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/services/geo.service.js.map