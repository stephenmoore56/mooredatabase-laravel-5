import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {SpeciesAllComponent} from "./speciesall.component";
import {ReportWidgetsModule} from "../reportPartials/reportwidgets.module";
import {routing} from "./speciesall.routing";

@NgModule({
    imports: [
        routing,
        HttpModule,
        ReportWidgetsModule
    ],
    declarations: [
        SpeciesAllComponent
    ]
})
export class SpeciesAllModule {
}