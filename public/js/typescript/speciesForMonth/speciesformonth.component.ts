import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Sortable} from '../sortable';
import {ReportDataService} from '../reportData.service';
import {BackButtonComponent}   from '../reportPartials/backbutton.component';
import {OrderFilterComponent}   from '../reportPartials/orderfilter.component';
import {SearchBirdsComponent}   from '../reportPartials/searchbirds.component';
import {SpeciesCountComponent}   from '../reportPartials/speciescount.component';
import {SpeciesListComponent}   from '../reportPartials/specieslist.component';
import {TopNComponent}   from '../reportPartials/topn.component';

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesForMonth.html',
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
export class SpeciesForMonthComponent extends Sortable implements OnInit {

    public monthNumber: number;
    public monthName: string;

    constructor(private _reportDataService: ReportDataService,
                private _route: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.monthNumber = Number.parseInt(params['month']);
        });
        this._reportDataService
            .getSpeciesForMonth(this.monthNumber)
            .subscribe(
                r => {
                    this.birds = r;
                    this.originalBirds = r;
                    this.monthName = this.birds[0].monthName;
                },
                error => console.log("Error: ", error)
            );
        this._reportDataService
            .getOrdersAll()
            .subscribe(
                r => this.orders = r,
                error => console.log("Error: ", error)
            );
    }

}