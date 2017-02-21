System.register(["@angular/core", "../pipes/orderName.pipe", "../pipes/topN.pipe", "../pipes/searchTerm.pipe"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, orderName_pipe_1, topN_pipe_1, searchTerm_pipe_1, PipesModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (orderName_pipe_1_1) {
                orderName_pipe_1 = orderName_pipe_1_1;
            },
            function (topN_pipe_1_1) {
                topN_pipe_1 = topN_pipe_1_1;
            },
            function (searchTerm_pipe_1_1) {
                searchTerm_pipe_1 = searchTerm_pipe_1_1;
            }
        ],
        execute: function () {
            PipesModule = (function () {
                function PipesModule() {
                }
                return PipesModule;
            }());
            PipesModule = __decorate([
                core_1.NgModule({
                    declarations: [
                        orderName_pipe_1.OrderNamePipe,
                        topN_pipe_1.TopNPipe,
                        searchTerm_pipe_1.SearchTermPipe
                    ],
                    exports: [
                        orderName_pipe_1.OrderNamePipe,
                        topN_pipe_1.TopNPipe,
                        searchTerm_pipe_1.SearchTermPipe
                    ]
                })
            ], PipesModule);
            exports_1("PipesModule", PipesModule);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/pipes/pipes.module.js.map