import {Component, OnInit} from "@angular/core";
import {Result} from "../lib/result";
import {Sortable} from "../lib/sortable";
import {DataService} from "../services/data.service";
import {ChartService} from "../services/chart.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesYTD.html',
    providers: [
        DataService,
        ChartService
    ]
})
export class SpeciesYTDComponent extends Sortable implements OnInit {

    public years: Result[] = [];
    public monthDay: string;

    constructor(private _reportChartService: ChartService, private _reportDataService: DataService) {
        super();
    }

    ngOnInit() {
        this._reportDataService
            .getSpeciesYTD()
            .subscribe(
                r => {
                    this.years = r;
                    this.monthDay = this.years[0].monthDay;
                },
                error => console.log("Error: ", error),
                () => this._reportChartService.drawChartSpeciesByYear(this.years, 'chart_div_1')
            );
        window.document.title = `MOORE+DATABASE - Species YTD`;
    }

}