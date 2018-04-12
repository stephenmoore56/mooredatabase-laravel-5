System.register(["@angular/core", "../lib/sortable", "../services/data.service", "../services/chart.service"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
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
    var core_1, sortable_1, data_service_1, chart_service_1, SpeciesByOrderComponent;
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
            }
        ],
        execute: function () {
            SpeciesByOrderComponent = /** @class */ (function (_super) {
                __extends(SpeciesByOrderComponent, _super);
                function SpeciesByOrderComponent(_reportChartService, _reportDataService) {
                    var _this = _super.call(this) || this;
                    _this._reportChartService = _reportChartService;
                    _this._reportDataService = _reportDataService;
                    _this.orders = [];
                    return _this;
                }
                SpeciesByOrderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._reportDataService
                        .getSpeciesByOrder()
                        .subscribe(function (r) { return _this.orders = r; }, function (error) { return console.log("Error: ", error); }, function () {
                        _this._reportChartService.drawChartSpeciesByOrder(_this.orders, 'chart_div_1');
                        _this.calculateTotalCounts();
                    });
                    window.document.title = "MOORE+DATABASE - Species By Order";
                };
                SpeciesByOrderComponent.prototype.calculateTotalCounts = function () {
                    this.totalSpecies = this.orders
                        .map(function (myOrder) {
                        return myOrder.speciesCount;
                    })
                        .reduce(function (total, num) {
                        return total + num;
                    }, 0);
                    this.totalSightings = this.orders
                        .map(function (myOrder) {
                        return myOrder.sightingCount;
                    })
                        .reduce(function (total, num) {
                        return total + num;
                    }, 0);
                };
                SpeciesByOrderComponent = __decorate([
                    core_1.Component({
                        selector: 'report',
                        templateUrl: 'templates/reports/speciesByOrder.html',
                        providers: [
                            data_service_1.DataService,
                            chart_service_1.ChartService
                        ]
                    }),
                    __metadata("design:paramtypes", [chart_service_1.ChartService, data_service_1.DataService])
                ], SpeciesByOrderComponent);
                return SpeciesByOrderComponent;
            }(sortable_1.Sortable));
            exports_1("SpeciesByOrderComponent", SpeciesByOrderComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesByOrder/speciesbyorder.component.js.map