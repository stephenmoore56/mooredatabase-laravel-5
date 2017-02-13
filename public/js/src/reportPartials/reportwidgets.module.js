System.register(["@angular/core", "@angular/common", "@angular/forms", "@angular/router", "../reportPartials/backbutton.component", "../reportPartials/speciescount.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, common_1, forms_1, router_1, backbutton_component_1, speciescount_component_1, ReportWidgetsModule;
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
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (backbutton_component_1_1) {
                backbutton_component_1 = backbutton_component_1_1;
            },
            function (speciescount_component_1_1) {
                speciescount_component_1 = speciescount_component_1_1;
            }
        ],
        execute: function () {
            ReportWidgetsModule = (function () {
                function ReportWidgetsModule() {
                }
                return ReportWidgetsModule;
            }());
            ReportWidgetsModule = __decorate([
                core_1.NgModule({
                    imports: [
                        common_1.CommonModule,
                        router_1.RouterModule,
                    ],
                    declarations: [
                        backbutton_component_1.BackButtonComponent,
                        speciescount_component_1.SpeciesCountComponent
                    ],
                    exports: [
                        common_1.CommonModule,
                        forms_1.FormsModule,
                        backbutton_component_1.BackButtonComponent,
                        speciescount_component_1.SpeciesCountComponent
                    ]
                })
            ], ReportWidgetsModule);
            exports_1("ReportWidgetsModule", ReportWidgetsModule);
        }
    };
});
//# sourceMappingURL=reportwidgets.module.js.map