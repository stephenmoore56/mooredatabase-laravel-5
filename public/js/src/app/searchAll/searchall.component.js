System.register(["@angular/core", "../lib/speciesList", "../services/reportData.service"], function (exports_1, context_1) {
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
    var core_1, speciesList_1, reportData_service_1, SearchAllComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (speciesList_1_1) {
                speciesList_1 = speciesList_1_1;
            },
            function (reportData_service_1_1) {
                reportData_service_1 = reportData_service_1_1;
            }
        ],
        execute: function () {
            SearchAllComponent = (function (_super) {
                __extends(SearchAllComponent, _super);
                function SearchAllComponent(_reportDataService) {
                    var _this = _super.call(this) || this;
                    _this._reportDataService = _reportDataService;
                    _this.searchTerm = ' ';
                    _this.orderId = -1;
                    return _this;
                }
                SearchAllComponent.prototype.search = function () {
                    var _this = this;
                    // pass a space rather than a empty string or some other falsey value
                    if (!this.searchTerm) {
                        this.searchTerm = ' ';
                    }
                    this._reportDataService
                        .getSearchAll(this.searchTerm, this.orderId)
                        .subscribe(function (r) { return _this.setBirds(r); }, function (error) { return console.log("Error: ", error); });
                };
                SearchAllComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._reportDataService
                        .getOrdersAll()
                        .subscribe(function (r) { return _this.orders = r; }, function (error) { return console.log("Error: ", error); });
                };
                return SearchAllComponent;
            }(speciesList_1.SpeciesList));
            SearchAllComponent = __decorate([
                core_1.Component({
                    selector: 'report',
                    templateUrl: 'templates/reports/searchAll.html',
                    providers: [
                        reportData_service_1.ReportDataService
                    ]
                }),
                __metadata("design:paramtypes", [reportData_service_1.ReportDataService])
            ], SearchAllComponent);
            exports_1("SearchAllComponent", SearchAllComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/searchAll/searchall.component.js.map