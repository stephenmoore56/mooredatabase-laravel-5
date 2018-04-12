System.register(["@angular/core", "../lib/speciesList", "../services/data.service"], function (exports_1, context_1) {
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
    var core_1, speciesList_1, data_service_1, SpeciesAllComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (speciesList_1_1) {
                speciesList_1 = speciesList_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }
        ],
        execute: function () {
            SpeciesAllComponent = /** @class */ (function (_super) {
                __extends(SpeciesAllComponent, _super);
                function SpeciesAllComponent(_reportDataService) {
                    var _this = _super.call(this) || this;
                    _this._reportDataService = _reportDataService;
                    return _this;
                }
                SpeciesAllComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._reportDataService
                        .getSpeciesAll()
                        .subscribe(function (r) {
                        _this.setBirds(r);
                        _this.sortDirection = -1;
                        _this.sortResults('common_name');
                    }, function (error) { return console.log("Error: ", error); });
                    this._reportDataService
                        .getOrdersAll()
                        .subscribe(function (r) { return _this.orders = r; }, function (error) { return console.log("Error: ", error); });
                    window.document.title = "MOORE+DATABASE - All Species";
                    this.pageTitle = "All Species Sighted";
                };
                SpeciesAllComponent = __decorate([
                    core_1.Component({
                        selector: 'report',
                        templateUrl: 'templates/reports/speciesList.html',
                        providers: [
                            data_service_1.DataService
                        ]
                    }),
                    __metadata("design:paramtypes", [data_service_1.DataService])
                ], SpeciesAllComponent);
                return SpeciesAllComponent;
            }(speciesList_1.SpeciesList));
            exports_1("SpeciesAllComponent", SpeciesAllComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesAll/speciesall.component.js.map