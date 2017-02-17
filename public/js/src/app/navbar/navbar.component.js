System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, NavBarComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            NavBarComponent = (function () {
                function NavBarComponent() {
                }
                return NavBarComponent;
            }());
            NavBarComponent = __decorate([
                core_1.Component({
                    selector: '[ng-nav-bar]',
                    template: "\n    <li><a [routerLink]=\"['/education']\" routerLinkActive=\"active\">Education</a></li>\n    <li><a [routerLink]=\"['/certifications']\" routerLinkActive=\"active\">Certifications</a></li>\n    <li><a [routerLink]=\"['/training']\" routerLinkActive=\"active\">Training</a></li>\n    <li><a [routerLink]=\"['/contact']\" routerLinkActive=\"active\">Contact Me</a></li>\n    "
                })
            ], NavBarComponent);
            exports_1("NavBarComponent", NavBarComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/navbar/navbar.component.js.map