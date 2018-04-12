System.register(["@angular/core", "../services/data.service", "../services/chart.service"], function (exports_1, context_1) {
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
    var core_1, data_service_1, chart_service_1, DucksAndWarblersComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            },
            function (chart_service_1_1) {
                chart_service_1 = chart_service_1_1;
            }
        ],
        execute: function () {
            DucksAndWarblersComponent = /** @class */ (function () {
                function DucksAndWarblersComponent(_reportChartService, _reportDataService) {
                    this._reportChartService = _reportChartService;
                    this._reportDataService = _reportDataService;
                    this.temperatures = [];
                    this.ducksAndWarblers = [];
                }
                DucksAndWarblersComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._reportDataService
                        .getMonthlyTemperatures()
                        .subscribe(function (r) { return _this.temperatures = r; }, function (error) { return console.log("Error: ", error); }, function () { return _this._reportChartService.drawChartMonthlyTemperatures(_this.temperatures, 'chart_div_2'); });
                    this._reportDataService
                        .getDucksAndWarblers()
                        .subscribe(function (r) { return _this.ducksAndWarblers = r; }, function (error) { return console.log("Error: ", error); }, function () { return _this._reportChartService.drawChartDucksAndWarblers(_this.ducksAndWarblers, 'chart_div_1'); });
                    window.document.title = "MOORE+DATABASE - Species By Year";
                };
                DucksAndWarblersComponent = __decorate([
                    core_1.Component({
                        selector: 'report',
                        templateUrl: 'templates/reports/ducksAndWarblers.html',
                        providers: [
                            data_service_1.DataService,
                            chart_service_1.ChartService
                        ]
                    }),
                    __metadata("design:paramtypes", [chart_service_1.ChartService,
                        data_service_1.DataService])
                ], DucksAndWarblersComponent);
                return DucksAndWarblersComponent;
            }());
            exports_1("DucksAndWarblersComponent", DucksAndWarblersComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/ducksAndWarblers/ducksAndWarblers.component.js.map