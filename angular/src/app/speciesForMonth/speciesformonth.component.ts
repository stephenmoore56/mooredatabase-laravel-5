import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpeciesList} from "../lib/speciesList";
import {DataService} from "../services/data.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesList.html',
    providers: [
        DataService
    ]
})
export class SpeciesForMonthComponent extends SpeciesList implements OnInit {

    public monthNumber: number;
    public monthName: string;

    constructor(private _reportDataService: DataService,
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
                    this.setBirds(r);
                    this.monthName = this.birds[0].monthName;
                    window.document.title = `MOORE+DATABASE - Species For Month of ${this.monthName}`;
                    this.pageTitle = `Species For Month of ${this.monthName}`;
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