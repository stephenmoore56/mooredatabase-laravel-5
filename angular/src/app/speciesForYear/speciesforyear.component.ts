import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpeciesList} from "../lib/speciesList";
import {DataService} from "../services/data.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesForYear.html',
    providers: [
        DataService
    ]
})
export class SpeciesForYearComponent extends SpeciesList implements OnInit {

    public yearNumber: number;

    constructor(private _reportDataService: DataService,
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