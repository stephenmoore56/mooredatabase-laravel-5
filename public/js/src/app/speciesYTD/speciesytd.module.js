System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/http", "./speciesytd.component", "./speciesytd.routing"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, http_1, speciesytd_component_1, speciesytd_routing_1, SpeciesYTDModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (speciesytd_component_1_1) {
                speciesytd_component_1 = speciesytd_component_1_1;
            },
            function (speciesytd_routing_1_1) {
                speciesytd_routing_1 = speciesytd_routing_1_1;
            }
        ],
        execute: function () {
            SpeciesYTDModule = /** @class */ (function () {
                function SpeciesYTDModule() {
                }
                SpeciesYTDModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            speciesytd_routing_1.routing,
                            common_1.CommonModule,
                            http_1.HttpModule,
                            forms_1.FormsModule
                        ],
                        declarations: [
                            speciesytd_component_1.SpeciesYTDComponent
                        ]
                    })
                ], SpeciesYTDModule);
                return SpeciesYTDModule;
            }());
            exports_1("SpeciesYTDModule", SpeciesYTDModule);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesYTD/speciesytd.module.js.map