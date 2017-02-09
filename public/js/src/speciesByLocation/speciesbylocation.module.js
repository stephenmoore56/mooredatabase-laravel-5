System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/http", "./speciesbylocation.component", "./speciesbylocation.routing"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, http_1, speciesbylocation_component_1, speciesbylocation_routing_1, SpeciesByLocationModule;
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
            function (speciesbylocation_component_1_1) {
                speciesbylocation_component_1 = speciesbylocation_component_1_1;
            },
            function (speciesbylocation_routing_1_1) {
                speciesbylocation_routing_1 = speciesbylocation_routing_1_1;
            }
        ],
        execute: function () {
            SpeciesByLocationModule = (function () {
                function SpeciesByLocationModule() {
                }
                return SpeciesByLocationModule;
            }());
            SpeciesByLocationModule = __decorate([
                core_1.NgModule({
                    imports: [
                        speciesbylocation_routing_1.routing,
                        common_1.CommonModule,
                        http_1.HttpModule,
                        forms_1.FormsModule
                    ],
                    declarations: [
                        speciesbylocation_component_1.SpeciesByLocationComponent
                    ]
                })
            ], SpeciesByLocationModule);
            exports_1("SpeciesByLocationModule", SpeciesByLocationModule);
        }
    };
});
//# sourceMappingURL=speciesbylocation.module.js.map