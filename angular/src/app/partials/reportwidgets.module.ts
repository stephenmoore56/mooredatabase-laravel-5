import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {BackButtonComponent} from "./backbutton.component";
import {SpeciesCountComponent} from "./speciescount.component";

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