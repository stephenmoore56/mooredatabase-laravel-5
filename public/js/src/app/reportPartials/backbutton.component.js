System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, BackButtonComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            BackButtonComponent = (function () {
                function BackButtonComponent() {
                }
                BackButtonComponent.prototype.goBack = function () {
                    window.history.back();
                };
                ;
                return BackButtonComponent;
            }());
            BackButtonComponent = __decorate([
                core_1.Component({
                    selector: 'back-button',
                    template: "\n    <div class=\"form-group\" style=\"margin-bottom: 10px;\">\n        <button id=\"backButton\" type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"goBack()\">\n            <span class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span>Back\n        </button>\n    </div>\n"
                })
            ], BackButtonComponent);
            exports_1("BackButtonComponent", BackButtonComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/reportPartials/backbutton.component.js.map