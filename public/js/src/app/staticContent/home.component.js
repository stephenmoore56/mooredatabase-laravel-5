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
    var core_1, data_service_1, chart_service_1, HomeComponent;
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
            HomeComponent = /** @class */ (function () {
                function HomeComponent(_reportChartService, _reportDataService) {
                    this._reportChartService = _reportChartService;
                    this._reportDataService = _reportDataService;
                    this.years = [];
                    window.document.title = 'MOORE+DATABASE - Home';
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._reportDataService
                        .getSpeciesByYear()
                        .subscribe(function (r) { return _this.years = r; }, function (error) { return console.log("Error: ", error); }, function () { return _this._reportChartService.drawChartSpeciesByYear(_this.years, 'chart_div_1'); });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'relative-path',
                        templateUrl: 'templates/static/home.html',
                        providers: [
                            chart_service_1.ChartService,
                            data_service_1.DataService
                        ]
                    }),
                    __metadata("design:paramtypes", [chart_service_1.ChartService,
                        data_service_1.DataService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/staticContent/home.component.js.map