System.register(["@angular/core", "@angular/router", "../sortable", "../reportData.service", "../reportPartials/backbutton.component", "../reportPartials/orderfilter.component", "../reportPartials/searchbirds.component", "../reportPartials/speciescount.component", "../reportPartials/specieslist.component", "../reportPartials/topn.component"], function (exports_1, context_1) {
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
    var core_1, router_1, sortable_1, reportData_service_1, backbutton_component_1, orderfilter_component_1, searchbirds_component_1, speciescount_component_1, specieslist_component_1, topn_component_1, SpeciesForLocationComponent, _a;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (sortable_1_1) {
                sortable_1 = sortable_1_1;
            },
            function (reportData_service_1_1) {
                reportData_service_1 = reportData_service_1_1;
            },
            function (backbutton_component_1_1) {
                backbutton_component_1 = backbutton_component_1_1;
            },
            function (orderfilter_component_1_1) {
                orderfilter_component_1 = orderfilter_component_1_1;
            },
            function (searchbirds_component_1_1) {
                searchbirds_component_1 = searchbirds_component_1_1;
            },
            function (speciescount_component_1_1) {
                speciescount_component_1 = speciescount_component_1_1;
            },
            function (specieslist_component_1_1) {
                specieslist_component_1 = specieslist_component_1_1;
            },
            function (topn_component_1_1) {
                topn_component_1 = topn_component_1_1;
            }
        ],
        execute: function () {
            SpeciesForLocationComponent = (function (_super) {
                __extends(SpeciesForLocationComponent, _super);
                function SpeciesForLocationComponent(_reportDataService, _route) {
                    var _this = _super.call(this) || this;
                    _this._reportDataService = _reportDataService;
                    _this._route = _route;
                    _this.birds = [];
                    _this.location = [];
                    return _this;
                }
                SpeciesForLocationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._route.params.subscribe(function (params) {
                        _this.locationId = Number.parseInt(params['id']);
                    });
                    this._reportDataService
                        .getSpeciesForLocation(this.locationId)
                        .subscribe(function (r) { return _this.birds = r; }, function (error) { return console.log("Error: ", error); });
                    this._reportDataService
                        .getLocation(this.locationId)
                        .subscribe(function (r) { return _this.location = r[0]; }, function (error) { return console.log("Error: ", error); });
                };
                return SpeciesForLocationComponent;
            }(sortable_1.Sortable));
            SpeciesForLocationComponent = __decorate([
                core_1.Component({
                    selector: 'report',
                    templateUrl: 'templates/reports/speciesForLocation.html',
                    providers: [
                        reportData_service_1.ReportDataService
                    ],
                    directives: [
                        // child components are directives
                        backbutton_component_1.BackButtonComponent,
                        orderfilter_component_1.OrderFilterComponent,
                        searchbirds_component_1.SearchBirdsComponent,
                        speciescount_component_1.SpeciesCountComponent,
                        specieslist_component_1.SpeciesListComponent,
                        topn_component_1.TopNComponent
                    ]
                }),
                __metadata("design:paramtypes", [reportData_service_1.ReportDataService, typeof (_a = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _a || Object])
            ], SpeciesForLocationComponent);
            exports_1("SpeciesForLocationComponent", SpeciesForLocationComponent);
        }
    };
});
//# sourceMappingURL=speciesforlocation.component.js.map