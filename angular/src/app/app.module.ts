import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {NavBarComponent} from "./navbar/navbar.component";
import {NavBarBrandComponent} from "./navbar/navbarbrand.component";
import {NavBarReportsComponent} from "./navbar/navbarreports.component";
import {CarouselComponent} from "./staticContent/carousel.component";
import {AppRoutingModule} from "./app.routes";
import {HomeComponent} from "./staticContent/home.component";
import {CertificationsComponent} from "./staticContent/certifications.component";
import {EducationComponent} from "./staticContent/education.component";
import {TrainingComponent} from "./staticContent/training.component";
import {ContactComponent} from "./staticContent/contact.component";
import {ReportWidgetsModule} from "./partials/reportwidgets.module";

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        ReportWidgetsModule
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        NavBarBrandComponent,
        NavBarReportsComponent,
        CarouselComponent,
        HomeComponent,
        EducationComponent,
        TrainingComponent,
        CertificationsComponent,
        ContactComponent
    ],
    bootstrap: [
        AppComponent,
        CarouselComponent,
        NavBarComponent,
        NavBarBrandComponent,
        NavBarReportsComponent
    ]
})
export class AppModule {
}