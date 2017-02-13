import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SpeciesByOrderComponent} from "./speciesbyorder.component";
import {routing} from "./speciesbyorder.routing";


@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        SpeciesByOrderComponent
    ]
})
export class SpeciesByOrderModule {
}