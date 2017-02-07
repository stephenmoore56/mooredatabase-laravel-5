System.register(["@angular/core", "@angular/platform-browser", "./app.component", "./navbar.component", "./navbarbrand.component", "./carousel.component", "./app.routes", "./home.component", "./certifications.component", "./education.component", "./training.component", "./contact.component"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, app_component_1, navbar_component_1, navbarbrand_component_1, carousel_component_1, app_routes_1, home_component_1, certifications_component_1, education_component_1, training_component_1, contact_component_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (navbarbrand_component_1_1) {
                navbarbrand_component_1 = navbarbrand_component_1_1;
            },
            function (carousel_component_1_1) {
                carousel_component_1 = carousel_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
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
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [
                        platform_browser_1.BrowserModule,
                        app_routes_1.routing
                    ],
                    declarations: [
                        app_component_1.AppComponent,
                        navbar_component_1.NavBarComponent,
                        navbarbrand_component_1.NavBarBrandComponent,
                        carousel_component_1.CarouselComponent,
                        home_component_1.HomeComponent,
                        education_component_1.EducationComponent,
                        training_component_1.TrainingComponent,
                        certifications_component_1.CertificationsComponent,
                        contact_component_1.ContactComponent
                    ],
                    bootstrap: [
                        app_component_1.AppComponent,
                        navbar_component_1.NavBarComponent,
                        navbarbrand_component_1.NavBarBrandComponent,
                        carousel_component_1.CarouselComponent
                    ]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=app.module.js.map