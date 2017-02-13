import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
// import {Result} from '../result';
import {SpeciesList} from "../speciesList";
import {ReportDataService} from "../reportData.service";
// child components
import {BackButtonComponent} from "../reportPartials/backbutton.component";
import {OrderFilterComponent} from "../reportPartials/orderfilter.component";
import {SearchBirdsComponent} from "../reportPartials/searchbirds.component";
import {SpeciesCountComponent} from "../reportPartials/speciescount.component";
import {SpeciesListComponent} from "../reportPartials/specieslist.component";
import {TopNComponent} from "../reportPartials/topn.component";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesForOrder.html',
    providers: [
        ReportDataService
    ],
    directives: [
        // child components are directives
        BackButtonComponent,
        OrderFilterComponent,
        SearchBirdsComponent,
        SpeciesCountComponent,
        SpeciesListComponent,
        TopNComponent
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