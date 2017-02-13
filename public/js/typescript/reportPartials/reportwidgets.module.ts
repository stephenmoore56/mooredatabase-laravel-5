import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BackButtonComponent} from "../reportPartials/backbutton.component";
import {SpeciesCountComponent} from "../reportPartials/speciescount.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        BackButtonComponent,
        SpeciesCountComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        BackButtonComponent,
        SpeciesCountComponent
    ]
})
export class ReportWidgetsModule {
}