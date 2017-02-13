import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SpeciesByLocationComponent} from "./speciesbylocation.component";
import {routing} from "./speciesbylocation.routing";


@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        SpeciesByLocationComponent
    ]
})
export class SpeciesByLocationModule {
}