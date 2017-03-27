import {Component, OnInit} from "@angular/core";
import {Result} from "../lib/result";
import {Sortable} from "../lib/sortable";
import {DataService} from "../services/data.service";
import {ChartService} from "../services/chart.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesByOrder.html',
    providers: [
        DataService,
        ChartService
    ]
})
export class SpeciesByOrderComponent extends Sortable implements OnInit {

    public orders: Result[] = [];
    public totalSpecies: number;
    public totalSightings: number;

    constructor(private _reportChartService: ChartService, private _reportDataService: DataService) {
        super();
    }

    ngOnInit() {
        this._reportDataService
            .getSpeciesByOrder()
            .subscribe(r => this.orders = r,
                error => console.log("Error: ", error),

                () => {
                    this._reportChartService.drawChartSpeciesByOrder(this.orders, 'chart_div_1');
                    this.calculateTotalCounts();
                }
            );
        window.document.title = `MOORE+DATABASE - Species By Order`;
    }

    private calculateTotalCounts() {
        this.totalSpecies = this.orders
            .map(function (myOrder) {
                return myOrder.speciesCount;
            })
            .reduce(function (total, num) {
                return total + num;
            }, 0);
        this.totalSightings = this.orders
            .map(function (myOrder) {
                return myOrder.sightingCount;
            })
            .reduce(function (total, num) {
                return total + num;
            }, 0);
    }

}