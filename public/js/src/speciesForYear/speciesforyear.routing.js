System.register(["@angular/router", "./speciesforyear.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, speciesforyear_component_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speciesforyear_component_1_1) {
                speciesforyear_component_1 = speciesforyear_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: speciesforyear_component_1.SpeciesForYearComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    };
});
//# sourceMappingURL=speciesforyear.routing.js.map