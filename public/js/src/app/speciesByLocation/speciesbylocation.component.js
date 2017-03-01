System.register(["@angular/core", "../lib/sortable", "../services/data.service", "../services/chart.service", "../services/map.service"], function (exports_1, context_1) {
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
    var core_1, sortable_1, data_service_1, chart_service_1, map_service_1, SpeciesByLocationComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sortable_1_1) {
                sortable_1 = sortable_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (chart_service_1_1) {
                chart_service_1 = chart_service_1_1;
            },
            function (map_service_1_1) {
                map_service_1 = map_service_1_1;
            }
        ],
        execute: function () {
            SpeciesByLocationComponent = (function (_super) {
                __extends(SpeciesByLocationComponent, _super);
                function SpeciesByLocationComponent(_reportChartService, _reportDataService, _reportMapService) {
                    var _this = _super.call(this) || this;
                    _this._reportChartService = _reportChartService;
                    _this._reportDataService = _reportDataService;
                    _this._reportMapService = _reportMapService;
                    _this.locations = [];
                    _this.counties = [];
                    return _this;
                }
                SpeciesByLocationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._reportDataService
                        .getSpeciesByLocation()
                        .subscribe(function (r) { return _this.locations = r; }, function (error) { return console.log("Error: ", error); }, function () { return _this._reportMapService.drawLocationsMap(_this.locations, 'map_div_1'); });
                    this._reportDataService
                        .getSpeciesByCounty()
                        .subscribe(function (r) { return _this.counties = r; }, function (error) { return console.log("Error: ", error); }, function () { return _this._reportChartService.drawChartSpeciesByCounty(_this.counties, 'chart_div_1'); });
                    window.document.title = "MOORE+DATABASE - Species By Location";
                };
                return SpeciesByLocationComponent;
            }(sortable_1.Sortable));
            SpeciesByLocationComponent = __decorate([
                core_1.Component({
                    selector: 'report',
                    templateUrl: 'templates/reports/speciesByLocation.html',
                    providers: [
                        data_service_1.DataService,
                        chart_service_1.ChartService,
                        map_service_1.MapService
                    ]
                }),
                __metadata("design:paramtypes", [chart_service_1.ChartService,
                    data_service_1.DataService,
                    map_service_1.MapService])
            ], SpeciesByLocationComponent);
            exports_1("SpeciesByLocationComponent", SpeciesByLocationComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesByLocation/speciesbylocation.component.js.map