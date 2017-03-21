import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {DucksAndWarblersComponent} from "./ducksAndWarblers.component";
import {routing} from "./ducksAndWarblers.routing";

@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        DucksAndWarblersComponent
    ]
})
export class DucksAndWarblersModule {
}