import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpeciesList} from "../speciesList";
import {ReportDataService} from "../reportData.service";
import {BackButtonComponent} from "../reportPartials/backbutton.component";
import {SpeciesCountComponent} from "../reportPartials/speciescount.component";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesForYear.html',
    providers: [
        ReportDataService
    ],
    directives: [
        // child components are directives
        BackButtonComponent,
        SpeciesCountComponent
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
                r => {
                    this.birds = r;
                    this.originalBirds = r;
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