import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SpeciesForLocationComponent} from "./speciesforlocation.component";
import {ReportWidgetsModule} from "../partials/reportwidgets.module";
import {routing} from "./speciesforlocation.routing";
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpModule,
        FormsModule,
        ReportWidgetsModule,
        PipesModule
    ],
    declarations: [
        SpeciesForLocationComponent
    ]
})
export class SpeciesForLocationModule {
}