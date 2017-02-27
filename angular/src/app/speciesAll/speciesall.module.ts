import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {SpeciesAllComponent} from "./speciesall.component";
import {ReportWidgetsModule} from "../partials/reportwidgets.module";
import {routing} from "./speciesall.routing";
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
    imports: [
        routing,
        HttpModule,
        ReportWidgetsModule,
        PipesModule
    ],
    declarations: [
        SpeciesAllComponent
    ]
})
export class SpeciesAllModule {
}