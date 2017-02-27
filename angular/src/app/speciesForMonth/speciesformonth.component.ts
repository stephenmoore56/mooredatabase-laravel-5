import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpeciesList} from "../lib/speciesList";
import {ReportDataService} from "../services/reportData.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesForMonth.html',
    providers: [
        ReportDataService
    ]
})
export class SpeciesForMonthComponent extends SpeciesList implements OnInit {

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
                    this.setBirds(r);
                    this.monthName = this.birds[0].monthName;
                    window.document.title = `MOORE+DATABASE - Species For Month of ${this.monthName}`;
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