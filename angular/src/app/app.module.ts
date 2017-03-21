import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {NavBarComponent} from "./navbar/navbar.component";
import {NavBarBrandComponent} from "./navbar/navbarbrand.component";
import {NavBarReportsComponent} from "./navbar/navbarreports.component";
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
        ReportWidgetsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        NavBarComponent,
        NavBarBrandComponent,
        NavBarReportsComponent,
        HomeComponent,
        EducationComponent,
        TrainingComponent,
        CertificationsComponent,
        ContactComponent
    ],
    bootstrap: [
        AppComponent,
        NavBarComponent,
        NavBarBrandComponent,
        NavBarReportsComponent
    ]
})
export class AppModule {
}