System.register(["@angular/core", "@angular/router", "../lib/result", "../lib/speciesList", "../services/reportData.service", "../services/reportChart.service"], function (exports_1, context_1) {
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
    var core_1, router_1, result_1, speciesList_1, reportData_service_1, reportChart_service_1, SpeciesDetailComponent;
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
            function (reportData_service_1_1) {
                reportData_service_1 = reportData_service_1_1;
            },
            function (reportChart_service_1_1) {
                reportChart_service_1 = reportChart_service_1_1;
            }
        ],
        execute: function () {
            SpeciesDetailComponent = (function (_super) {
                __extends(SpeciesDetailComponent, _super);
                function SpeciesDetailComponent(_reportDataService, _reportChartService, _route) {
                    var _this = _super.call(this) || this;
                    _this._reportDataService = _reportDataService;
                    _this._reportChartService = _reportChartService;
                    _this._route = _route;
                    _this.bird = new result_1.Result();
                    return _this;
                }
                SpeciesDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._route.params.subscribe(function (params) {
                        _this.speciesId = Number.parseInt(params['id']);
                    });
                    this._reportDataService
                        .getSpeciesDetail(this.speciesId)
                        .subscribe(function (r) { return _this.bird = r[0]; }, function (error) { return console.log("Error: ", error); }, function () {
                        // don't query for sightings or draw chart for birds not seen
                        if (_this.bird.last_seen != null) {
                            _this._reportDataService
                                .getMonthsForSpecies(_this.speciesId)
                                .subscribe(function (r) { return _this.months = r; }, function (error) { return console.log("Error: ", error); }, function () { return _this._reportChartService.drawChartMonthsForSpecies(_this.months, 'chart_div_1'); });
                        }
                    });
                };
                SpeciesDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                return SpeciesDetailComponent;
            }(speciesList_1.SpeciesList));
            SpeciesDetailComponent = __decorate([
                core_1.Component({
                    selector: 'report',
                    templateUrl: 'templates/reports/speciesDetail.html',
                    providers: [
                        reportData_service_1.ReportDataService,
                        reportChart_service_1.ReportChartService
                    ]
                }),
                __metadata("design:paramtypes", [reportData_service_1.ReportDataService,
                    reportChart_service_1.ReportChartService,
                    router_1.ActivatedRoute])
            ], SpeciesDetailComponent);
            exports_1("SpeciesDetailComponent", SpeciesDetailComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesDetail/speciesdetail.component.js.map