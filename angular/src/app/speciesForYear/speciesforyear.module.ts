import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {SpeciesForYearComponent} from "./speciesforyear.component";
import {ReportWidgetsModule} from "../partials/reportwidgets.module";
import {routing} from "./speciesforyear.routing";
import {RouterModule} from "@angular/router";
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
    imports: [
        routing,
        HttpModule,
        ReportWidgetsModule,
        RouterModule,
        PipesModule
    ],
    declarations: [
        SpeciesForYearComponent
    ]
})
export class SpeciesForYearModule {
}