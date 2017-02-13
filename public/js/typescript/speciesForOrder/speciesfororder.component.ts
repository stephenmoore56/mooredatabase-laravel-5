import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpeciesList} from "../speciesList";
import {ReportDataService} from "../reportData.service";
// child components
import {BackButtonComponent} from "../reportPartials/backbutton.component";
import {SpeciesCountComponent} from "../reportPartials/speciescount.component";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesForOrder.html',
    providers: [
        ReportDataService
    ],
    directives: [
        // child components are directives
        BackButtonComponent,
        SpeciesCountComponent
    ]
})
export class SpeciesForOrderComponent extends SpeciesList implements OnInit {

    public orderId: number;
    public orderName: string;

    constructor(private _reportDataService: ReportDataService,
                private _route: ActivatedRoute) {
        super();
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.orderId = Number.parseInt(params['id']);
        });
        this._reportDataService
            .getSpeciesForOrder(this.orderId)
            .subscribe(
                r => {
                    this.birds = r;
                    this.originalBirds = r;
                    this.orderName = this.birds[0].order_name;
                },
                error => console.log("Error: ", error)
            );
    }

}