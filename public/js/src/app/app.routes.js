System.register(["@angular/core", "@angular/router", "./staticContent/home.component", "./staticContent/certifications.component", "./staticContent/education.component", "./staticContent/training.component", "./staticContent/contact.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, router_1, home_component_1, certifications_component_1, education_component_1, training_component_1, contact_component_1, routes, AppRoutingModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
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
                { path: 'reports/months', loadChildren: 'app/app/speciesByMonth/speciesbymonth.module#SpeciesByMonthModule' },
                {
                    path: 'reports/months/:month',
                    loadChildren: 'app/app/speciesForMonth/speciesformonth.module#SpeciesForMonthModule'
                },
                { path: 'reports/years', loadChildren: 'app/app/speciesByYear/speciesbyyear.module#SpeciesByYearModule' },
                { path: 'reports/years/:year', loadChildren: 'app/app/speciesForYear/speciesforyear.module#SpeciesForYearModule' },
                { path: 'reports/orders', loadChildren: 'app/app/speciesByOrder/speciesbyorder.module#SpeciesByOrderModule' },
                { path: 'reports/orders/:id', loadChildren: 'app/app/speciesForOrder/speciesfororder.module#SpeciesForOrderModule' },
                {
                    path: 'reports/locations',
                    loadChildren: 'app/app/speciesByLocation/speciesbylocation.module#SpeciesByLocationModule'
                },
                {
                    path: 'reports/locations/:id',
                    loadChildren: 'app/app/speciesForLocation/speciesforlocation.module#SpeciesForLocationModule'
                },
                { path: 'reports/all', loadChildren: 'app/app/speciesAll/speciesall.module#SpeciesAllModule' },
                { path: 'reports/search', loadChildren: 'app/app/searchAll/searchall.module#SearchAllModule' },
                {
                    path: 'reports/ducksAndWarblers',
                    loadChildren: 'app/app/ducksAndWarblers/ducksAndWarblers.module#DucksAndWarblersModule'
                },
                { path: 'reports/species/:id', loadChildren: 'app/app/speciesDetail/speciesdetail.module#SpeciesDetailModule' },
                { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' }
            ];
            AppRoutingModule = (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = __decorate([
                core_1.NgModule({
                    imports: [
                        router_1.RouterModule.forRoot(routes)
                    ],
                    exports: [
                        router_1.RouterModule
                    ]
                })
            ], AppRoutingModule);
            exports_1("AppRoutingModule", AppRoutingModule);
        }
    };
});
//# sourceMappingURL=/var/www/html/mooredatabase-laravel-5/angular/src/app/app.routes.js.map