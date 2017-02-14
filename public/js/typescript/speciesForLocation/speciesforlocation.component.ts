import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Result} from "../result";
import {SpeciesList} from "../speciesList";
import {ReportDataService} from "../reportData.service";
import {ReportMapService} from "../reportMap.service";
import {BackButtonComponent} from "../reportPartials/backbutton.component";
import {SpeciesCountComponent} from "../reportPartials/speciescount.component";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesForLocation.html',
    providers: [
        ReportDataService,
        ReportMapService
    ],
    directives: [
        BackButtonComponent,
        SpeciesCountComponent
    ]
})
export class SpeciesForLocationComponent extends SpeciesList implements OnInit {

    public birds: Result[] = [];
    public locationId: number;
    public location: Result = [];

    constructor(private _reportDataService: ReportDataService,
                private _route: ActivatedRoute,
                private _reportMapService: ReportMapService) {
        super();
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.locationId = Number.parseInt(params['id']);
        });
        this._reportDataService
            .getSpeciesForLocation(this.locationId)
            .subscribe(
                r => {
                    this.birds = r;
                    this.originalBirds = r;
                },
                error => console.log("Error: ", error)
            );
        this._reportDataService
            .getLocation(this.locationId)
            .subscribe(
                r => this.location = r[0],
                error => console.log("Error: ", error),
                () => this._reportMapService.drawLocationMap(this.location.latitude, this.location.longitude, 'map_div_1')
            );
        this._reportDataService
            .getOrdersAll()
            .subscribe(
                r => this.orders = r,
                error => console.log("Error: ", error)
            );
    }

}