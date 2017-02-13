import {Component, OnInit} from "@angular/core";
import {Result} from "../result";
import {Sortable} from "../sortable";
import {ReportDataService} from "../reportData.service";
import {ReportChartService} from "../reportChart.service";

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
    }

}