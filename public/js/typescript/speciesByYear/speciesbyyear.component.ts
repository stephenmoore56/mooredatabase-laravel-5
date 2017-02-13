import {Component, OnInit} from "@angular/core";
import {Result} from "../result";
import {Sortable} from "../sortable";
import {ReportDataService} from "../reportData.service";
import {ReportChartService} from "../reportChart.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesByYear.html',
    providers: [
        ReportDataService,
        ReportChartService
    ]
})
export class SpeciesByYearComponent extends Sortable implements OnInit {

    public years: Result[] = [];

    constructor(private _reportChartService: ReportChartService, private _reportDataService: ReportDataService) {
        super();
    }

    ngOnInit() {
        this._reportDataService
            .getSpeciesByYear()
            .subscribe(r => this.years = r,
                error => console.log("Error: ", error),
                () => this._reportChartService.drawChartSpeciesByYear(this.years, 'chart_div_1')
            );
    }

}