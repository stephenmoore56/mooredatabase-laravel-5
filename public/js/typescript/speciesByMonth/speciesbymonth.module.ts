import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {HttpModule}    from '@angular/http';
import {SpeciesByMonthComponent}   from './speciesbymonth.component';
import {routing} from './speciesbymonth.routing';


@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        SpeciesByMonthComponent
    ]
})
export class SpeciesByMonthModule {
}