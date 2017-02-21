System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, SearchTermPipe;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            SearchTermPipe = (function () {
                function SearchTermPipe() {
                }
                SearchTermPipe.prototype.transform = function (birds, searchTerm) {
                    // apply the search term filter
                    if (searchTerm == undefined || searchTerm.trim() !== '') {
                        var regex_1 = new RegExp(searchTerm, 'i');
                        return birds.filter(function (bird) {
                            if (bird.common_name.match(regex_1) ||
                                bird.scientific_name.match(regex_1) ||
                                bird.order_name.match(regex_1) ||
                                bird.family.match(regex_1) ||
                                bird.subfamily.match(regex_1)) {
                                return true;
                            }
                        });
                    }
                    else {
                        return birds;
                    }
                };
                return SearchTermPipe;
            }());
            SearchTermPipe = __decorate([
                core_1.Pipe({
                    name: 'searchTerm',
                    pure: true
                })
            ], SearchTermPipe);
            exports_1("SearchTermPipe", SearchTermPipe);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/pipes/searchTerm.pipe.js.map