System.register(["@angular/core", "../services/data.service"], function (exports_1, context_1) {
    "use strict";
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
    var core_1, data_service_1, EducationComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_service_1_1) {
                data_service_1 = data_service_1_1;
            }
        ],
        execute: function () {
            EducationComponent = /** @class */ (function () {
                function EducationComponent(_reportDataService) {
                    this._reportDataService = _reportDataService;
                    window.document.title = 'MOORE+DATABASE - Education';
                }
                EducationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._reportDataService
                        .getCarouselImage()
                        .subscribe(function (r) { return _this.image = r[0]; }, function (error) { return console.log("Error: ", error); });
                };
                EducationComponent = __decorate([
                    core_1.Component({
                        selector: 'relative-path',
                        templateUrl: 'templates/static/education.html'
                    }),
                    __metadata("design:paramtypes", [data_service_1.DataService])
                ], EducationComponent);
                return EducationComponent;
            }());
            exports_1("EducationComponent", EducationComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/staticContent/education.component.js.map