import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Result} from "../lib/result";
import {SpeciesList} from "../lib/speciesList";
import {DataService} from "../services/data.service";
import {ChartService} from "../services/chart.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesDetail.html',
    providers: [
        DataService,
        ChartService
    ]
})
export class SpeciesDetailComponent extends SpeciesList implements OnInit {

    public bird: Result;
    public months: Result[];
    public speciesId: number;

    constructor(private _reportDataService: DataService,
                private _reportChartService: ChartService,
                private _route: ActivatedRoute) {
        super();
        this.bird = new Result();
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.speciesId = Number.parseInt(params['id']);
        });
        this._reportDataService
            .getSpeciesDetail(this.speciesId)
            .subscribe(
                r => this.bird = r[0],
                error => console.log("Error: ", error),
                () => {
                    window.document.title = `MOORE+DATABASE - ${this.bird.common_name}`;
                    // don't query for sightings or draw chart for birds not seen
                    if (this.bird.last_seen != null) {
                        this._reportDataService
                            .getMonthsForSpecies(this.speciesId)
                            .subscribe(
                                r => this.months = r,
                                error => console.log("Error: ", error),
                                () => this._reportChartService.drawChartMonthsForSpecies(this.months, 'chart_div_1')
                            );
                    }
                }
            );
    }

    goBack() {
        window.history.back();
    }

}