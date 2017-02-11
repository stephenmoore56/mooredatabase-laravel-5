import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Result} from '../result';
import {Sortable} from '../sortable';
import {ReportDataService} from '../reportData.service';
import {ReportChartService} from '../reportChart.service';

import {BackButtonComponent}   from '../reportPartials/backbutton.component';
import {OrderFilterComponent}   from '../reportPartials/orderfilter.component';
import {SearchBirdsComponent}   from '../reportPartials/searchbirds.component';
import {SpeciesCountComponent}   from '../reportPartials/speciescount.component';
import {SpeciesListComponent}   from '../reportPartials/specieslist.component';
import {TopNComponent}   from '../reportPartials/topn.component';

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesDetail.html',
    providers: [
        ReportDataService,
        ReportChartService
    ],
    directives: [
        // child components are directives
        BackButtonComponent,
        OrderFilterComponent,
        SearchBirdsComponent,
        SpeciesCountComponent,
        SpeciesListComponent,
        TopNComponent
    ]
})
export class SpeciesDetailComponent extends Sortable implements OnInit {

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