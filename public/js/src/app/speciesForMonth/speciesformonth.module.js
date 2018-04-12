System.register(["@angular/core", "@angular/http", "./speciesformonth.component", "../partials/reportwidgets.module", "./speciesformonth.routing", "../pipes/pipes.module"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, speciesformonth_component_1, reportwidgets_module_1, speciesformonth_routing_1, pipes_module_1, SpeciesForMonthModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (speciesformonth_component_1_1) {
                speciesformonth_component_1 = speciesformonth_component_1_1;
            },
            function (reportwidgets_module_1_1) {
                reportwidgets_module_1 = reportwidgets_module_1_1;
            },
            function (speciesformonth_routing_1_1) {
                speciesformonth_routing_1 = speciesformonth_routing_1_1;
            },
            function (pipes_module_1_1) {
                pipes_module_1 = pipes_module_1_1;
            }
        ],
        execute: function () {
            SpeciesForMonthModule = /** @class */ (function () {
                function SpeciesForMonthModule() {
                }
                SpeciesForMonthModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            speciesformonth_routing_1.routing,
                            http_1.HttpModule,
                            reportwidgets_module_1.ReportWidgetsModule,
                            pipes_module_1.PipesModule
                        ],
                        declarations: [
                            speciesformonth_component_1.SpeciesForMonthComponent
                        ]
                    })
                ], SpeciesForMonthModule);
                return SpeciesForMonthModule;
            }());
            exports_1("SpeciesForMonthModule", SpeciesForMonthModule);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesForMonth/speciesformonth.module.js.map