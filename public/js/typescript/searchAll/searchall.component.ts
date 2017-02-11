import {Component, OnInit} from '@angular/core';
import {Result} from '../result';
import {Sortable} from '../sortable';
import {ReportDataService} from '../reportData.service';
import {SpeciesListComponent}   from '../reportPartials/specieslist.component';

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/searchAll.html',
    providers: [
        ReportDataService
    ],
    directives: [
        SpeciesListComponent
    ]
})
export class SearchAllComponent extends Sortable implements OnInit {

    public birds: Result[] = [];
    public orders: Result[] = [];
    public searchTerm: string = ' ';
    public orderId: number = -1;

    constructor(private _reportDataService: ReportDataService) {
        super();
    }

    search(): void {
        // pass a space rather than a empty string or some other falsey value
        if (!this.searchTerm) {
            this.searchTerm = ' ';
        }
        this._reportDataService
            .getSearchAll(this.searchTerm, this.orderId)
            .subscribe(
                r => this.birds = r,
                error => console.log("Error: ", error)
            );
    }

    ngOnInit(): void {
        this._reportDataService
            .getOrdersAll()
            .subscribe(
                r => this.orders = r,
                error => console.log("Error: ", error)
            );
    }

}