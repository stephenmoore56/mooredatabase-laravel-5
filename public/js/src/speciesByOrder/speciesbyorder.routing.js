System.register(["@angular/router", "./speciesbyorder.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, speciesbyorder_component_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (speciesbyorder_component_1_1) {
                speciesbyorder_component_1 = speciesbyorder_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: speciesbyorder_component_1.SpeciesByOrderComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    };
});
//# sourceMappingURL=speciesbyorder.routing.js.map