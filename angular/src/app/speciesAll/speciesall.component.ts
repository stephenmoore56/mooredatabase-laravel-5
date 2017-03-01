import {Component, OnInit} from "@angular/core";
import {Result} from "../lib/result";
import {SpeciesList} from "../lib/speciesList";
import {DataService} from "../services/data.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesAll.html',
    providers: [
        DataService
    ]
})
export class SpeciesAllComponent extends SpeciesList implements OnInit {

    public birds: Result[] = [];

    constructor(private _reportDataService: DataService) {
        super();
    }

    ngOnInit() {
        this._reportDataService
            .getSpeciesAll()
            .subscribe(
                r => {
                    this.setBirds(r);
                    this.sortDirection = 1;
                    this.sortResults('common_name');
                },
                error => console.log("Error: ", error)
            );
        this._reportDataService
            .getOrdersAll()
            .subscribe(
                r => this.orders = r,
                error => console.log("Error: ", error)
            );
        window.document.title = `MOORE+DATABASE - All Species`;
    }

}