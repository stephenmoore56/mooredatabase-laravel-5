import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {SearchAllComponent} from "./searchall.component";
import {ReportWidgetsModule} from "../reportPartials/reportwidgets.module";
import {routing} from "./searchall.routing";

@NgModule({
    imports: [
        routing,
        HttpModule,
        ReportWidgetsModule
    ],
    declarations: [
        SearchAllComponent
    ]
})
export class SearchAllModule {
}