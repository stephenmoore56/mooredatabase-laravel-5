import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpeciesList} from "../lib/speciesList";
import {ReportDataService} from "../services/reportData.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesForYear.html',
    providers: [
        ReportDataService
    ]
})
export class SpeciesForYearComponent extends SpeciesList implements OnInit {

    public yearNumber: number;

    constructor(private _reportDataService: ReportDataService,
                private _route: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.yearNumber = Number.parseInt(params['year']);
        });
        this._reportDataService
            .getSpeciesForYear(this.yearNumber)
            .subscribe(
                r => this.setBirds(r),
                error => console.log("Error: ", error)
            );
        this._reportDataService
            .getOrdersAll()
            .subscribe(
                r => this.orders = r,
                error => console.log("Error: ", error)
            );
        window.document.title = `MOORE+DATABASE - Species For Year ${this.yearNumber}`;
    }

}