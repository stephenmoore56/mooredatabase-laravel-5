System.register(["@angular/router", "./speciesytd.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, speciesytd_component_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speciesytd_component_1_1) {
                speciesytd_component_1 = speciesytd_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: speciesytd_component_1.SpeciesYTDComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesYTD/speciesytd.routing.js.map