import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SpeciesDetailComponent} from "./speciesdetail.component";
import {routing} from "./speciesdetail.routing";

@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        SpeciesDetailComponent
    ]
})
export class SpeciesDetailModule {
}