import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpeciesList} from "../speciesList";
import {ReportDataService} from "../reportData.service";
import {BackButtonComponent} from "../reportPartials/backbutton.component";
import {SpeciesCountComponent} from "../reportPartials/speciescount.component";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesForMonth.html',
    providers: [
        ReportDataService
    ],
    directives: [
        BackButtonComponent,
        SpeciesCountComponent
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