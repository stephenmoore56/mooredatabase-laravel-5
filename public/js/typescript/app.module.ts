import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavBarComponent} from './navbar.component';
import {NavBarBrandComponent} from './navbarbrand.component';
import {NavBarReportsComponent} from './navbarreports.component';
import {CarouselComponent} from './carousel.component';
import {routing} from './app.routes';
import {HomeComponent} from './home.component';
import {CertificationsComponent} from './certifications.component';
import {EducationComponent} from './education.component';
import {TrainingComponent} from './training.component';
import {ContactComponent} from './contact.component';
import {ReportWidgetsModule} from './reportPartials/reportwidgets.module';

@NgModule({
    imports: [
        BrowserModule,
        routing,
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
        NavBarComponent,
        NavBarBrandComponent,
        NavBarReportsComponent,
        CarouselComponent
    ]
})
export class AppModule {
}