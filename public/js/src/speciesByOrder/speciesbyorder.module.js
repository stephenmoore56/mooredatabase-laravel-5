System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/http", "./speciesbyorder.component", "./speciesbyorder.routing"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, http_1, speciesbyorder_component_1, speciesbyorder_routing_1, SpeciesByOrderModule;
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
            function (speciesbyorder_component_1_1) {
                speciesbyorder_component_1 = speciesbyorder_component_1_1;
            },
            function (speciesbyorder_routing_1_1) {
                speciesbyorder_routing_1 = speciesbyorder_routing_1_1;
            }
        ],
        execute: function () {
            SpeciesByOrderModule = (function () {
                function SpeciesByOrderModule() {
                }
                return SpeciesByOrderModule;
            }());
            SpeciesByOrderModule = __decorate([
                core_1.NgModule({
                    imports: [
                        speciesbyorder_routing_1.routing,
                        common_1.CommonModule,
                        http_1.HttpModule,
                        forms_1.FormsModule
                    ],
                    declarations: [
                        speciesbyorder_component_1.SpeciesByOrderComponent
                    ]
                })
            ], SpeciesByOrderModule);
            exports_1("SpeciesByOrderModule", SpeciesByOrderModule);
        }
    };
});
//# sourceMappingURL=speciesbyorder.module.js.map