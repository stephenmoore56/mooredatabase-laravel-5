import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Result} from "../result";
import {SpeciesList} from "../speciesList";
import {ReportDataService} from "../reportData.service";
import {ReportChartService} from "../reportChart.service";
import {BackButtonComponent} from "../reportPartials/backbutton.component";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesDetail.html',
    providers: [
        ReportDataService,
        ReportChartService
    ],
    directives: [
        BackButtonComponent
    ]
})
export class SpeciesDetailComponent extends SpeciesList implements OnInit {

    public bird: Result = [];
    public months: Result[] = [];
    public speciesId: number;

    constructor(private _reportDataService: ReportDataService,
                private _reportChartService: ReportChartService,
                private _route: ActivatedRoute) {
        super();
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