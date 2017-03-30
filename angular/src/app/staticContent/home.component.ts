import {Component, OnInit} from "@angular/core";
import {Result} from "../lib/result";
import {DataService} from "../services/data.service";
import {ChartService} from "../services/chart.service";

@Component({
    selector: 'relative-path',
    templateUrl: 'templates/static/home.html',
    providers: [
        ChartService,
        DataService
    ]
})

export class HomeComponent implements OnInit {

    public years: Result[] = [];

    constructor(private _reportChartService: ChartService,
                private _reportDataService: DataService) {
        window.document.title = 'MOORE+DATABASE - Home';
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