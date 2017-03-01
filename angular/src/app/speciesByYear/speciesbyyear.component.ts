import {Component, OnInit} from "@angular/core";
import {Result} from "../lib/result";
import {Sortable} from "../lib/sortable";
import {DataService} from "../services/data.service";
import {ChartService} from "../services/chart.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesByYear.html',
    providers: [
        DataService,
        ChartService
    ]
})
export class SpeciesByYearComponent extends Sortable implements OnInit {

    public years: Result[] = [];

    constructor(private _reportChartService: ChartService, private _reportDataService: DataService) {
        super();
    }

    ngOnInit() {
        this._reportDataService
            .getSpeciesByYear()
            .subscribe(r => this.years = r,
                error => console.log("Error: ", error),
                () => this._reportChartService.drawChartSpeciesByYear(this.years, 'chart_div_1')
            );
        window.document.title = `MOORE+DATABASE - Species By Year`;
    }

}