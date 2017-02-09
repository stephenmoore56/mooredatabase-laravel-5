import {NgModule} from '@angular/core';
import {HttpModule}    from '@angular/http';
import {SpeciesForMonthComponent}   from './speciesformonth.component';
import {ReportWidgetsModule} from '../reportPartials/reportwidgets.module';
import {routing} from './speciesformonth.routing';

@NgModule({
    imports: [
        routing,
        HttpModule,
        ReportWidgetsModule
    ],
    declarations: [
        SpeciesForMonthComponent
    ]
})
export class SpeciesForMonthModule {
}