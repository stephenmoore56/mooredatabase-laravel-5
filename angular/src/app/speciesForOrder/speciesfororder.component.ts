import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {SpeciesList} from "../lib/speciesList";
import {DataService} from "../services/data.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesListNoOrders.html',
    providers: [
        DataService
    ]
})
export class SpeciesForOrderComponent extends SpeciesList implements OnInit {

    public orderId: number;
    public orderName: string;

    constructor(private _reportDataService: DataService,
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
                    this.setBirds(r);
                    this.orderName = this.birds[0].order_name;
                    window.document.title = `MOORE+DATABASE - Species For Order ${this.orderName}`;
                    this.pageTitle = `Species for Order ${this.orderName}`;
                },
                error => console.log("Error: ", error)
            );
    }

}