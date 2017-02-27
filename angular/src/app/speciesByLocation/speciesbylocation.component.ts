import {Component, OnInit} from "@angular/core";
import {Result} from "../lib/result";
import {Sortable} from "../lib/sortable";
import {ReportDataService} from "../services/reportData.service";
import {ReportChartService} from "../services/reportChart.service";
import {ReportMapService} from "../services/reportMap.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesByLocation.html',
    providers: [
        ReportDataService,
        ReportChartService,
        ReportMapService
    ]
})
export class SpeciesByLocationComponent extends Sortable implements OnInit {

    public locations: Result[] = [];
    public counties: Result[] = [];

    constructor(private _reportChartService: ReportChartService,
                private _reportDataService: ReportDataService,
                private _reportMapService: ReportMapService) {
        super();
    }

    ngOnInit() {
        this._reportDataService
            .getSpeciesByLocation()
            .subscribe(
                r => this.locations = r,
                error => console.log("Error: ", error),
                () => this._reportMapService.drawLocationsMap(this.locations, 'map_div_1')
            );
        this._reportDataService
            .getSpeciesByCounty()
            .subscribe(r => this.counties = r,
                error => console.log("Error: ", error),
                () => this._reportChartService.drawChartSpeciesByCounty(this.counties, 'chart_div_1')
            );
        window.document.title = `MOORE+DATABASE - Species By Location`;
    }

}