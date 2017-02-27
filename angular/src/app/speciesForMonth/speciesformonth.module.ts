import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {SpeciesForMonthComponent} from './speciesformonth.component';
import {ReportWidgetsModule} from '../partials/reportwidgets.module';
import {routing} from './speciesformonth.routing';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
    imports: [
        routing,
        HttpModule,
        ReportWidgetsModule,
        PipesModule
    ],
    declarations: [
        SpeciesForMonthComponent
    ]
})
export class SpeciesForMonthModule {
}