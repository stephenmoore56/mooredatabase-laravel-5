System.register(["@angular/core"], function (exports_1, context_1) {
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
    var core_1, ImageService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            ImageService = (function () {
                function ImageService() {
                    this.images = [
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/millcitymuseum.jpg',
                            alt: 'Mill City Museum'
                        },
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/abstract.jpg',
                            alt: 'Abstract'
                        },
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/basilica.jpg',
                            alt: 'Basilica'
                        },
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/minnehahacreek.jpg',
                            alt: 'Minnehaha Creek'
                        },
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/powerplant1.jpg',
                            alt: 'Power Plant'
                        },
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/powerplant2.jpg',
                            alt: 'Power Plant'
                        },
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/powerplant3.jpg',
                            alt: 'Power Plant'
                        },
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/stainedglass.jpg',
                            alt: 'Stained Glass'
                        },
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/statefairride.jpg',
                            alt: 'State Fair'
                        },
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/temperance.jpg',
                            alt: 'Temperance River'
                        },
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/tiger.jpg',
                            alt: 'Tiger'
                        },
                        {
                            src: 'https://s3.amazonaws.com/mooredatabase-carousel/troutlily.jpg',
                            alt: 'Trout Lily'
                        }
                    ];
                }
                ImageService.prototype.getRandomImage = function () {
                    var index = Math.floor(Math.random() * (this.images.length - 1));
                    return this.images[index];
                };
                return ImageService;
            }());
            ImageService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [])
            ], ImageService);
            exports_1("ImageService", ImageService);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/services/image.service.js.map