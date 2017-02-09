import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
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
    templateUrl: 'templates/reports/speciesForLocation.html',
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
export class SpeciesForLocationComponent extends Sortable implements OnInit {

    public birds: Result[] = [];
    public locationId: number;
    public location: Result = [];

    constructor(private _reportDataService: ReportDataService,
                private _route: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.locationId = Number.parseInt(params['id']);
        });
        this._reportDataService
            .getSpeciesForLocation(this.locationId)
            .subscribe(
                r => this.birds = r,
                error => console.log("Error: ", error)
            );
        this._reportDataService
            .getLocation(this.locationId)
            .subscribe(
                r => this.location = r[0],
                error => console.log("Error: ", error)
            );
    }

}