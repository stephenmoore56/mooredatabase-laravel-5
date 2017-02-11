import {Component, OnInit} from '@angular/core';
import {Result} from '../result';
import {Sortable} from '../sortable';
import {ReportDataService} from '../reportData.service';

// child components
import {BackButtonComponent}   from '../reportPartials/backbutton.component';
import {OrderFilterComponent}   from '../reportPartials/orderfilter.component';
import {SearchBirdsComponent}   from '../reportPartials/searchbirds.component';
import {SpeciesCountComponent}   from '../reportPartials/speciescount.component';
import {SpeciesListComponent}   from '../reportPartials/specieslist.component';
import {TopNComponent}   from '../reportPartials/topn.component';

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesAll.html',
    providers: [
        ReportDataService
    ],
    directives: [
        // child components are directives
        BackButtonComponent,
        OrderFilterComponent,
        SearchBirdsComponent,
        SpeciesCountComponent,
        SpeciesListComponent,
        TopNComponent
    ]
})
export class SpeciesAllComponent extends Sortable implements OnInit {

    public birds: Result[] = [];

    constructor(private _reportDataService: ReportDataService) {
        super();
    }

    ngOnInit() {
        this._reportDataService
            .getSpeciesAll()
            .subscribe(
                r => this.birds = r,
                error => console.log("Error: ", error)
            );
    }

}