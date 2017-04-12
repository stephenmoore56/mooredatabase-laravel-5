System.register(["@angular/core", "@angular/router", "../lib/result", "../lib/speciesList", "../services/data.service", "../services/map.service", "../services/geo.service"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var core_1, router_1, result_1, speciesList_1, data_service_1, map_service_1, geo_service_1, SpeciesForLocationComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (result_1_1) {
                result_1 = result_1_1;
            },
            function (speciesList_1_1) {
                speciesList_1 = speciesList_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            },
            function (geo_service_1_1) {
                geo_service_1 = geo_service_1_1;
            }
        ],
        execute: function () {
            SpeciesForLocationComponent = (function (_super) {
                __extends(SpeciesForLocationComponent, _super);
                function SpeciesForLocationComponent(_reportDataService, _route, _reportMapService, _geoService) {
                    var _this = _super.call(this) || this;
                    _this._reportDataService = _reportDataService;
                    _this._route = _route;
                    _this._reportMapService = _reportMapService;
                    _this._geoService = _geoService;
                    _this.location = new result_1.Result();
                    return _this;
                }
                SpeciesForLocationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._route.params.subscribe(function (params) {
                        _this.locationId = Number.parseInt(params['id']);
                    });
                    this._reportDataService
                        .getSpeciesForLocation(this.locationId)
                        .subscribe(function (r) { return _this.setBirds(r); }, function (error) { return console.log("Error: ", error); });
                    this._reportDataService
                        .getLocation(this.locationId)
                        .subscribe(function (r) {
                        _this.location = r[0];
                        _this.location.distance = _this._geoService.getDistanceFromHomeInMiles(_this.location.latitude, _this.location.longitude);
                        window.document.title = "MOORE+DATABASE - Species For " + _this.location.location_name;
                    }, function (error) { return console.log("Error: ", error); }, function () { return _this._reportMapService.drawLocationMap(_this.location.latitude, _this.location.longitude, 'map_div_1'); });
                    this._reportDataService
                        .getOrdersAll()
                        .subscribe(function (r) { return _this.orders = r; }, function (error) { return console.log("Error: ", error); });
                };
                SpeciesForLocationComponent.prototype.goBack = function () {
                    window.history.back();
                };
                return SpeciesForLocationComponent;
            }(speciesList_1.SpeciesList));
            SpeciesForLocationComponent = __decorate([
                core_1.Component({
                    selector: 'report',
                    templateUrl: 'templates/reports/speciesForLocation.html',
                    providers: [
                        data_service_1.DataService,
                        map_service_1.MapService,
                        geo_service_1.GeoService
                    ]
                }),
                __metadata("design:paramtypes", [data_service_1.DataService,
                    router_1.ActivatedRoute,
                    map_service_1.MapService,
                    geo_service_1.GeoService])
            ], SpeciesForLocationComponent);
            exports_1("SpeciesForLocationComponent", SpeciesForLocationComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesForLocation/speciesforlocation.component.js.map