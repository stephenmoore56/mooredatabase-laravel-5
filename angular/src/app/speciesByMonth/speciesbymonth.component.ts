import {Component, OnInit} from "@angular/core";
import {Result} from "../lib/result";
import {Sortable} from "../lib/sortable";
import {DataService} from "../services/data.service";
import {ChartService} from "../services/chart.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesByMonth.html',
    providers: [
        DataService,
        ChartService
    ]
})
export class SpeciesByMonthComponent extends Sortable implements OnInit {

    public months: Result[] = [];

    constructor(private _reportChartService: ChartService, private _reportDataService: DataService) {
        super();
    }

    ngOnInit() {
        this._reportDataService
            .getSpeciesByMonth()
            .subscribe(r => this.months = r,
                error => console.log("Error: ", error),
                () => this._reportChartService.drawChartSpeciesByMonth(this.months, 'chart_div_1')
            );
        window.document.title = `MOORE+DATABASE - Species By Month`;
    }

}