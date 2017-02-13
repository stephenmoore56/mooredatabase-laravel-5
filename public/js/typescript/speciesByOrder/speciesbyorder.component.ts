import {Component, OnInit} from "@angular/core";
import {Result} from "../result";
import {Sortable} from "../sortable";
import {ReportDataService} from "../reportData.service";
import {ReportChartService} from "../reportChart.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesByOrder.html',
    providers: [
        ReportDataService,
        ReportChartService
    ]
})
export class SpeciesByOrderComponent extends Sortable implements OnInit {

    public orders: Result[] = [];

    constructor(private _reportChartService: ReportChartService, private _reportDataService: ReportDataService) {
        super();
    }

    ngOnInit() {
        this._reportDataService
            .getSpeciesByOrder()
            .subscribe(r => this.orders = r,
                error => console.log("Error: ", error),
                () => this._reportChartService.drawChartSpeciesByOrder(this.orders, 'chart_div_1')
            );
    }

}