System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, OrderNamePipe;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            OrderNamePipe = (function () {
                function OrderNamePipe() {
                }
                OrderNamePipe.prototype.transform = function (birds, orderName) {
                    // apply the order name filter
                    if (orderName !== 'All' && orderName != null) {
                        return birds.filter(function (bird) {
                            if (bird.order_name === orderName) {
                                return true;
                            }
                        });
                    }
                    else {
                        return birds;
                    }
                };
                return OrderNamePipe;
            }());
            OrderNamePipe = __decorate([
                core_1.Pipe({
                    name: 'orderName',
                    pure: true
                })
            ], OrderNamePipe);
            exports_1("OrderNamePipe", OrderNamePipe);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/pipes/orderName.pipe.js.map