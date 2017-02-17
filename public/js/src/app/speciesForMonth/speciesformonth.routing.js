System.register(["@angular/router", "./speciesformonth.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, speciesformonth_component_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speciesformonth_component_1_1) {
                speciesformonth_component_1 = speciesformonth_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: speciesformonth_component_1.SpeciesForMonthComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/speciesForMonth/speciesformonth.routing.js.map