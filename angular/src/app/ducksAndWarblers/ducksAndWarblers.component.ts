import {Component, OnInit} from "@angular/core";
import {Result} from "../lib/result";
import {DataService} from "../services/data.service";
import {ChartService} from "../services/chart.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/ducksAndWarblers.html',
    providers: [
        DataService,
        ChartService
    ]
})
export class DucksAndWarblersComponent implements OnInit {

    public temperatures: Result[] = [];
    public ducksAndWarblers: Result[] = [];
    public test: number;

    constructor(private _reportChartService: ChartService,
                private _reportDataService: DataService) {
    }

    ngOnInit() {
        this._reportDataService
            .getMonthlyTemperatures()
            .subscribe(r => this.temperatures = r,
                error => console.log("Error: ", error),
                () => this._reportChartService.drawChartMonthlyTemperatures(this.temperatures, 'chart_div_2')
            );
        this._reportDataService
            .getDucksAndWarblers()
            .subscribe(r => this.ducksAndWarblers = r,
                error => console.log("Error: ", error),
                () => this._reportChartService.drawChartDucksAndWarblers(this.ducksAndWarblers, 'chart_div_1')
            );
        window.document.title = `MOORE+DATABASE - Species By Year`;
    }

}