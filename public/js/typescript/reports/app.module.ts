import {NgModule}       from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';

// Declarations
import {AppComponent} from './app.component';
import {HomeComponent} from './home.component';
import {CertificationsComponent} from './certifications.component';
import {EducationComponent} from './education.component';
import {TrainingComponent} from './training.component';
import {ContactComponent} from './contact.component';
import {NavBarComponent} from './navbar.component';
import {NavBarBrandComponent} from './navbarbrand.component';
import {routing} from './app.routes';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        EducationComponent,
        TrainingComponent,
        CertificationsComponent,
        ContactComponent,
        NavBarComponent,
        NavBarBrandComponent,
    ],
    bootstrap: [
        AppComponent,
        NavBarComponent,
        NavBarBrandComponent
    ]
})
export class AppModule {
}