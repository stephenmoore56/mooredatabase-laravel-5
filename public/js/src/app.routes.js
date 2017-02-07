System.register(["@angular/router", "./home.component", "./certifications.component", "./education.component", "./training.component", "./contact.component"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, certifications_component_1, education_component_1, training_component_1, contact_component_1, routes, routing;
    return {
        setters: [
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (certifications_component_1_1) {
                certifications_component_1 = certifications_component_1_1;
            },
            function (education_component_1_1) {
                education_component_1 = education_component_1_1;
            },
            function (training_component_1_1) {
                training_component_1 = training_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            }
        ],
        execute: function () {
            routes = [
                { path: 'home', component: home_component_1.HomeComponent },
                { path: 'certifications', component: certifications_component_1.CertificationsComponent },
                { path: 'education', component: education_component_1.EducationComponent },
                { path: 'training', component: training_component_1.TrainingComponent },
                { path: 'contact', component: contact_component_1.ContactComponent },
                { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(routes));
        }
    };
});
//# sourceMappingURL=app.routes.js.map