import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SpeciesForOrderComponent} from "./speciesfororder.component";
import {ReportWidgetsModule} from "../reportPartials/reportwidgets.module";
import {routing} from "./speciesfororder.routing";

@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpModule,
        FormsModule,
        ReportWidgetsModule
    ],
    declarations: [
        SpeciesForOrderComponent
    ]
})
export class SpeciesForOrderModule {
}