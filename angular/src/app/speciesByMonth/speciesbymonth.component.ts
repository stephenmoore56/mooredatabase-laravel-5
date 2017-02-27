import {Component, OnInit} from "@angular/core";
import {Result} from "../lib/result";
import {Sortable} from "../lib/sortable";
import {ReportDataService} from "../services/reportData.service";
import {ReportChartService} from "../services/reportChart.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesByMonth.html',
    providers: [
        ReportDataService,
        ReportChartService
    ]
})
export class SpeciesByMonthComponent extends Sortable implements OnInit {

    public months: Result[] = [];

    constructor(private _reportChartService: ReportChartService, private _reportDataService: ReportDataService) {
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