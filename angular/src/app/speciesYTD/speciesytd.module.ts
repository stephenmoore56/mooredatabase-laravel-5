import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SpeciesYTDComponent} from "./speciesytd.component";
import {routing} from "./speciesytd.routing";

@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        SpeciesYTDComponent
    ]
})
export class SpeciesYTDModule {
}