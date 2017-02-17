System.register(["@angular/router", "./speciesbylocation.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, speciesbylocation_component_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speciesbylocation_component_1_1) {
                speciesbylocation_component_1 = speciesbylocation_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: speciesbylocation_component_1.SpeciesByLocationComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesByLocation/speciesbylocation.routing.js.map