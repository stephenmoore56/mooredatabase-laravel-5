System.register(["@angular/router", "./speciesbymonth.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, speciesbymonth_component_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speciesbymonth_component_1_1) {
                speciesbymonth_component_1 = speciesbymonth_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: speciesbymonth_component_1.SpeciesByMonthComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    };
});
//# sourceMappingURL=speciesbymonth.routing.js.map