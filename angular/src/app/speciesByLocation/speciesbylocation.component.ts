import {Component, OnInit} from "@angular/core";
import {Result} from "../lib/result";
import {Sortable} from "../lib/sortable";
import {DataService} from "../services/data.service";
import {ChartService} from "../services/chart.service";
import {MapService} from "../services/map.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesByLocation.html',
    providers: [
        DataService,
        ChartService,
        MapService
    ]
})
export class SpeciesByLocationComponent extends Sortable implements OnInit {

    public locations: Result[] = [];
    public counties: Result[] = [];

    constructor(private _reportChartService: ChartService,
                private _reportDataService: DataService,
                private _reportMapService: MapService) {
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