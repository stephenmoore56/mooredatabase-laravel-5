System.register(["@angular/router", "./speciesbyyear.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, speciesbyyear_component_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speciesbyyear_component_1_1) {
                speciesbyyear_component_1 = speciesbyyear_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: speciesbyyear_component_1.SpeciesByYearComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    };
});
//# sourceMappingURL=speciesbyyear.routing.js.map