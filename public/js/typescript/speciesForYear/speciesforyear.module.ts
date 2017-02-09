import {NgModule} from '@angular/core';
import {HttpModule}    from '@angular/http';
import {SpeciesForYearComponent}   from './speciesforyear.component';
import {ReportWidgetsModule} from '../reportPartials/reportwidgets.module';
import {routing} from './speciesforyear.routing';

@NgModule({
    imports: [
        routing,
        HttpModule,
        ReportWidgetsModule
    ],
    declarations: [
        SpeciesForYearComponent
    ]
})
export class SpeciesForYearModule {
}