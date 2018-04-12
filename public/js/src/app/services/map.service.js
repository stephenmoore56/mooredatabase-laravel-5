System.register(["@angular/core", "@angular/router"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, LATITUDE_HOME, LONGITUDE_HOME, MapService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }
        ],
        execute: function () {
            // constants for home coordinates
            LATITUDE_HOME = 45.009613;
            LONGITUDE_HOME = -93.246839;
            MapService = /** @class */ (function () {
                function MapService(_router) {
                    this._router = _router;
                }
                MapService.prototype.drawLocationsMap = function (locations, map_div) {
                    var _this = this;
                    // create a new map
                    var map = new google.maps.Map(document.getElementById(map_div), {
                        zoom: 6,
                        center: new google.maps.LatLng(45.856, -93.214),
                        mapTypeId: google.maps.MapTypeId.ROADMAP
                    });
                    // click on marker takes you to location detail page
                    var buildClickHandler = function (i) {
                        return function () {
                            return _this._router.navigateByUrl("/reports/locations/" + locations[i].id);
                        };
                    };
                    // popups that show when hovering over marker
                    var infowindow = new google.maps.InfoWindow();
                    var showInfoWindow = function (chartData, marker) {
                        return function () {
                            infowindow.setContent("" + "<p><strong>" + chartData[0] + "</strong><br />" +
                                chartData[1] + "<br />" +
                                chartData[2] + " " + chartData[3] + "<br />" +
                                chartData[4] + " miles</p>");
                            infowindow.maxWidth = 200;
                            infowindow.open(map, marker);
                            return true;
                        };
                    };
                    // copy data for info windows into a separate array
                    var chartData = [];
                    var i;
                    for (i in locations) {
                        chartData.push([locations[i].location_name,
                            locations[i].county_name + ' County, ' + locations[i].state_code,
                            locations[i].latitude,
                            locations[i].longitude,
                            locations[i].distance]);
                    }
                    // put gold star on map to indicate home
                    var icon = {
                        url: 'images/star_gold.png',
                        scaledSize: new google.maps.Size(20, 20)
                    };
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(LATITUDE_HOME, LONGITUDE_HOME),
                        map: map,
                        icon: icon
                    });
                    var homeData = [];
                    homeData.push('Home', 'Hennepin County, MN', LATITUDE_HOME, LONGITUDE_HOME, 0);
                    google.maps.event.addListener(marker, 'mouseover', showInfoWindow(homeData, marker));
                    // put location markers on map
                    var j;
                    icon = {
                        url: 'images/circle_blue.png',
                        scaledSize: new google.maps.Size(15, 15)
                    };
                    for (j in chartData) {
                        var marker_1 = new google.maps.Marker({
                            position: new google.maps.LatLng(chartData[j][2], chartData[j][3]),
                            map: map,
                            icon: icon
                        });
                        google.maps.event.addListener(marker_1, 'click', buildClickHandler(j));
                        google.maps.event.addListener(marker_1, 'mouseover', showInfoWindow(chartData[j], marker_1));
                    }
                };
                MapService.prototype.drawLocationMap = function (latitude, longitude, map_canvas_id) {
                    // create a new topo map
                    var map = new google.maps.Map(document.getElementById(map_canvas_id), {
                        zoom: 13,
                        center: new google.maps.LatLng(latitude, longitude),
                        mapTypeId: google.maps.MapTypeId.TERRAIN
                    });
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(latitude, longitude),
                        map: map,
                        title: latitude + " " + longitude
                    });
                    // popup that shows when hovering over marker
                    var infowindow = new google.maps.InfoWindow();
                    var showInfoWindow = function (chartData, marker) {
                        return function () {
                            infowindow.setContent("Lat/Lng: " + chartData[0] + " " + chartData[1]);
                            infowindow.maxWidth = 200;
                            infowindow.open(map, marker);
                            return true;
                        };
                    };
                    var chartData = [latitude, longitude];
                    google.maps.event.addListener(marker, 'mouseover', showInfoWindow(chartData, marker));
                };
                MapService = __decorate([
                    core_1.Injectable(),
                    __metadata("design:paramtypes", [router_1.Router])
                ], MapService);
                return MapService;
            }());
            exports_1("MapService", MapService);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/services/map.service.js.map