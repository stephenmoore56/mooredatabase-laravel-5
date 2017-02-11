System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, NavBarReportsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            NavBarReportsComponent = (function () {
                function NavBarReportsComponent() {
                }
                return NavBarReportsComponent;
            }());
            NavBarReportsComponent = __decorate([
                core_1.Component({
                    selector: '[ng-nav-bar-reports]',
                    template: "\n    <li><a [routerLink]=\"['/reports/months']\" routerLinkActive=\"active\">Species & Trips By Month</a></li>\n    <li><a [routerLink]=\"['/reports/years']\" routerLinkActive=\"active\">Species & Trips By Year</a></li>\n    <li><a [routerLink]=\"['/reports/orders']\" routerLinkActive=\"active\">Species By Order</a></li>\n    <li><a [routerLink]=\"['/reports/locations']\" routerLinkActive=\"active\">Species By Location</a></li>\n    <li><a [routerLink]=\"['/reports/all']\" routerLinkActive=\"active\">All Species Sighted</a></li>\n    <li><a [routerLink]=\"['/reports/search']\" routerLinkActive=\"active\">Search All Species</a></li>\n"
                })
            ], NavBarReportsComponent);
            exports_1("NavBarReportsComponent", NavBarReportsComponent);
        }
    };
});
//# sourceMappingURL=navbarreports.component.js.map