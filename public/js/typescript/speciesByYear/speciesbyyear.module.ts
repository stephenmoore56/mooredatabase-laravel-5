import {NgModule}       from '@angular/core';
import {CommonModule}   from '@angular/common';
import {FormsModule}    from '@angular/forms';
import {HttpModule}     from '@angular/http';
import {SpeciesByYearComponent}   from './speciesbyyear.component';
import {routing}        from './speciesbyyear.routing';

@NgModule({
    imports: [
        routing,
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        SpeciesByYearComponent
    ]
})
export class SpeciesByYearModule {
}