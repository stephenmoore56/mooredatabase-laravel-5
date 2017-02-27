import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SpeciesForOrderComponent} from "./speciesfororder.component";
import {ReportWidgetsModule} from "../partials/reportwidgets.module";
import {routing} from "./speciesfororder.routing";
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
        SpeciesForOrderComponent
    ]
})
export class SpeciesForOrderModule {
}