System.register(["@angular/core", "@angular/router", "../lib/speciesList", "../services/data.service"], function (exports_1, context_1) {
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
    var core_1, router_1, speciesList_1, data_service_1, SpeciesForOrderComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speciesList_1_1) {
                speciesList_1 = speciesList_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }
        ],
        execute: function () {
            SpeciesForOrderComponent = (function (_super) {
                __extends(SpeciesForOrderComponent, _super);
                function SpeciesForOrderComponent(_reportDataService, _route) {
                    var _this = _super.call(this) || this;
                    _this._reportDataService = _reportDataService;
                    _this._route = _route;
                    return _this;
                }
                SpeciesForOrderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._route.params.subscribe(function (params) {
                        _this.orderId = Number.parseInt(params['id']);
                    });
                    this._reportDataService
                        .getSpeciesForOrder(this.orderId)
                        .subscribe(function (r) {
                        _this.setBirds(r);
                        _this.orderName = _this.birds[0].order_name;
                        window.document.title = "MOORE+DATABASE - Species For Order " + _this.orderName;
                    }, function (error) { return console.log("Error: ", error); });
                };
                return SpeciesForOrderComponent;
            }(speciesList_1.SpeciesList));
            SpeciesForOrderComponent = __decorate([
                core_1.Component({
                    selector: 'report',
                    templateUrl: 'templates/reports/speciesForOrder.html',
                    providers: [
                        data_service_1.DataService
                    ]
                }),
                __metadata("design:paramtypes", [data_service_1.DataService,
                    router_1.ActivatedRoute])
            ], SpeciesForOrderComponent);
            exports_1("SpeciesForOrderComponent", SpeciesForOrderComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesForOrder/speciesfororder.component.js.map