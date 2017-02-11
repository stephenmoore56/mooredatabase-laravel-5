System.register(["@angular/router", "./searchall.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, searchall_component_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (searchall_component_1_1) {
                searchall_component_1 = searchall_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: '', component: searchall_component_1.SearchAllComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forChild(routes));
        }
    };
});
//# sourceMappingURL=searchall.routing.js.map