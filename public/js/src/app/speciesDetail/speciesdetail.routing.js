System.register(["@angular/router", "./speciesdetail.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, speciesdetail_component_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speciesdetail_component_1_1) {
                speciesdetail_component_1 = speciesdetail_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: speciesdetail_component_1.SpeciesDetailComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesDetail/speciesdetail.routing.js.map