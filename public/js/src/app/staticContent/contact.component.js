System.register(["@angular/core", "../services/image.service"], function (exports_1, context_1) {
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
    var core_1, image_service_1, ContactComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (image_service_1_1) {
                image_service_1 = image_service_1_1;
            }
        ],
        execute: function () {
            ContactComponent = (function () {
                function ContactComponent(_imageService) {
                    this._imageService = _imageService;
                    window.document.title = 'MOORE+DATABASE - Contact Me';
                }
                ContactComponent.prototype.ngOnInit = function () {
                    this.image = this._imageService.getRandomImage();
                };
                return ContactComponent;
            }());
            ContactComponent = __decorate([
                core_1.Component({
                    selector: 'relative-path',
                    templateUrl: 'templates/static/contact.html',
                    providers: [
                        image_service_1.ImageService
                    ]
                }),
                __metadata("design:paramtypes", [image_service_1.ImageService])
            ], ContactComponent);
            exports_1("ContactComponent", ContactComponent);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/staticContent/contact.component.js.map