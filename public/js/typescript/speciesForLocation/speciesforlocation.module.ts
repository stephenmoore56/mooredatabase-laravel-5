import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {SpeciesForLocationComponent}   from './speciesforlocation.component';
import {ReportWidgetsModule} from '../reportPartials/reportwidgets.module';
import {routing} from './speciesforlocation.routing';

@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpModule,
        FormsModule,
        ReportWidgetsModule
    ],
    declarations: [
        SpeciesForLocationComponent
    ]
})
export class SpeciesForLocationModule {
}