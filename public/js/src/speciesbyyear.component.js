System.register(["@angular/core", "./sortable", "./reportData.service", "./reportChart.service"], function (exports_1, context_1) {
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
    var core_1, sortable_1, reportData_service_1, reportChart_service_1, SpeciesByYearComponent;
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
            console.log('in report comp');
            SpeciesByYearComponent = (function (_super) {
                __extends(SpeciesByYearComponent, _super);
                function SpeciesByYearComponent(_reportChartService, _reportDataService) {
                    var _this = _super.call(this) || this;
                    _this._reportChartService = _reportChartService;
                    _this._reportDataService = _reportDataService;
                    _this.years = [];
                    return _this;
                }
                SpeciesByYearComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._reportDataService
                        .getSpeciesByYear()
                        .subscribe(function (r) { return _this.years = r; }, function (error) { return console.log("Error: ", error); }, function () { return _this._reportChartService.drawChartSpeciesByYear(_this.years, 'chart_div_1'); });
                };
                return SpeciesByYearComponent;
            }(sortable_1.Sortable));
            SpeciesByYearComponent = __decorate([
                core_1.Component({
                    selector: 'report',
                    templateUrl: 'templates/reports/speciesByYear.html'
                }),
                __metadata("design:paramtypes", [reportChart_service_1.ReportChartService, reportData_service_1.ReportDataService])
            ], SpeciesByYearComponent);
            exports_1("SpeciesByYearComponent", SpeciesByYearComponent);
        }
    };
});
//# sourceMappingURL=speciesbyyear.component.js.map