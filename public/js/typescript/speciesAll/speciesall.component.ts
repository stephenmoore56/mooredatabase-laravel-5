import {Component, OnInit} from "@angular/core";
import {Result} from "../result";
import {SpeciesList} from "../speciesList";
import {ReportDataService} from "../reportData.service";
import {BackButtonComponent} from "../reportPartials/backbutton.component";
import {SpeciesCountComponent} from "../reportPartials/speciescount.component";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesAll.html',
    providers: [
        ReportDataService
    ],
    directives: [
        BackButtonComponent,
        SpeciesCountComponent
    ]
})
export class SpeciesAllComponent extends SpeciesList implements OnInit {

    public birds: Result[] = [];

    constructor(private _reportDataService: ReportDataService) {
        super();
    }

    ngOnInit() {
        this._reportDataService
            .getSpeciesAll()
            .subscribe(
                r => {
                    this.birds = r;
                    this.originalBirds = r;
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
    }

}