System.register(["@angular/core", "@angular/http", "./speciesforyear.component", "../reportPartials/reportwidgets.module", "./speciesforyear.routing"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, speciesforyear_component_1, reportwidgets_module_1, speciesforyear_routing_1, SpeciesForYearModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (speciesforyear_component_1_1) {
                speciesforyear_component_1 = speciesforyear_component_1_1;
            },
            function (reportwidgets_module_1_1) {
                reportwidgets_module_1 = reportwidgets_module_1_1;
            },
            function (speciesforyear_routing_1_1) {
                speciesforyear_routing_1 = speciesforyear_routing_1_1;
            }
        ],
        execute: function () {
            SpeciesForYearModule = (function () {
                function SpeciesForYearModule() {
                }
                return SpeciesForYearModule;
            }());
            SpeciesForYearModule = __decorate([
                core_1.NgModule({
                    imports: [
                        speciesforyear_routing_1.routing,
                        http_1.HttpModule,
                        reportwidgets_module_1.ReportWidgetsModule
                    ],
                    declarations: [
                        speciesforyear_component_1.SpeciesForYearComponent
                    ]
                })
            ], SpeciesForYearModule);
            exports_1("SpeciesForYearModule", SpeciesForYearModule);
        }
    };
});
//# sourceMappingURL=speciesforyear.module.js.map