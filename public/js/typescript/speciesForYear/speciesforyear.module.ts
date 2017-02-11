import {NgModule} from '@angular/core';
import {HttpModule}    from '@angular/http';
import {SpeciesForYearComponent}   from './speciesforyear.component';
import {ReportWidgetsModule} from '../reportPartials/reportwidgets.module';
import {routing} from './speciesforyear.routing';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        routing,
        HttpModule,
        ReportWidgetsModule,
        RouterModule,
    ],
    declarations: [
        SpeciesForYearComponent
    ]
})
export class SpeciesForYearModule {
}