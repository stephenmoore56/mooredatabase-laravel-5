import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {FormsModule}         from '@angular/forms';
import {RouterModule}        from '@angular/router';
import {BackButtonComponent}   from '../reportPartials/backbutton.component';
import {OrderFilterComponent}   from '../reportPartials/orderfilter.component';
import {SearchBirdsComponent}   from '../reportPartials/searchbirds.component';
import {SpeciesCountComponent}   from '../reportPartials/speciescount.component';
import {SpeciesListComponent}   from '../reportPartials/specieslist.component';
import {SpeciesListYearComponent}   from '../reportPartials/specieslistyear.component';
import {TopNComponent}   from '../reportPartials/topn.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        BackButtonComponent,
        OrderFilterComponent,
        SearchBirdsComponent,
        SpeciesCountComponent,
        SpeciesListComponent,
        SpeciesListYearComponent,
        TopNComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        BackButtonComponent,
        OrderFilterComponent,
        SearchBirdsComponent,
        SpeciesCountComponent,
        SpeciesListComponent,
        SpeciesListYearComponent,
        TopNComponent
    ]
})
export class ReportWidgetsModule {
}