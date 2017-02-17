System.register(["@angular/core", "../classes/sortable", "../services/reportData.service", "../services/reportChart.service"], function (exports_1, context_1) {
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
    var core_1, sortable_1, reportData_service_1, reportChart_service_1, SpeciesByMonthComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sortable_1_1) {
                sortable_1 = sortable_1_1;
            },
            function (reportData_service_1_1) {
                reportData_service_1 = reportData_service_1_1;
            },
            function (reportChart_service_1_1) {
                reportChart_service_1 = reportChart_service_1_1;
            }
        ],
        execute: function () {
            SpeciesByMonthComponent = (function (_super) {
                __extends(SpeciesByMonthComponent, _super);
                function SpeciesByMonthComponent(_reportChartService, _reportDataService) {
                    var _this = _super.call(this) || this;
                    _this._reportChartService = _reportChartService;
                    _this._reportDataService = _reportDataService;
                    _this.months = [];
                    return _this;
                }
                SpeciesByMonthComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._reportDataService
                        .getSpeciesByMonth()
                        .subscribe(function (r) { return _this.months = r; }, function (error) { return console.log("Error: ", error); }, function () { return _this._reportChartService.drawChartSpeciesByMonth(_this.months, 'chart_div_1'); });
                };
                return SpeciesByMonthComponent;
            }(sortable_1.Sortable));
            SpeciesByMonthComponent = __decorate([
                core_1.Component({
                    selector: 'report',
                    templateUrl: 'templates/reports/speciesByMonth.html',
                    providers: [
                        reportData_service_1.ReportDataService,
                        reportChart_service_1.ReportChartService
                    ]
                }),
                __metadata("design:paramtypes", [reportChart_service_1.ReportChartService, reportData_service_1.ReportDataService])
            ], SpeciesByMonthComponent);
            exports_1("SpeciesByMonthComponent", SpeciesByMonthComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesByMonth/speciesbymonth.component.js.map