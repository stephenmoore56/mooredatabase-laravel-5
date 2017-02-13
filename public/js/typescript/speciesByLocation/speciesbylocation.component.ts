import {Component, OnInit} from "@angular/core";
import {Result} from "../result";
import {Sortable} from "../sortable";
import {ReportDataService} from "../reportData.service";
import {ReportChartService} from "../reportChart.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesByLocation.html',
    providers: [
        ReportDataService,
        ReportChartService
    ]
})
export class SpeciesByLocationComponent extends Sortable implements OnInit {

    public locations: Result[] = [];
    public counties: Result[] = [];

    constructor(private _reportChartService: ReportChartService, private _reportDataService: ReportDataService) {
        super();
    }

    ngOnInit() {
        this._reportDataService
            .getSpeciesByLocation()
            .subscribe(r => this.locations = r,
                error => console.log("Error: ", error)
            );
        this._reportDataService
            .getSpeciesByCounty()
            .subscribe(r => this.counties = r,
                error => console.log("Error: ", error),
                () => this._reportChartService.drawChartSpeciesByCounty(this.counties, 'chart_div_1')
            );
    }

}