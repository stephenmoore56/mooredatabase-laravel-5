import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Result} from "../lib/result";
import {SpeciesList} from "../lib/speciesList";
import {DataService} from "../services/data.service";
import {MapService} from "../services/map.service";
import {GeoService} from "../services/geo.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/speciesForLocation.html',
    providers: [
        DataService,
        MapService,
        GeoService
    ]
})
export class SpeciesForLocationComponent extends SpeciesList implements OnInit {

    public locationId: number;
    public location: Result;

    constructor(private _reportDataService: DataService,
                private _route: ActivatedRoute,
                private _reportMapService: MapService,
                private _geoService: GeoService) {
        super();
        this.location = new Result();
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.locationId = Number.parseInt(params['id']);
            this._reportDataService
                .getSpeciesForLocation(this.locationId)
                .subscribe(
                    r => this.setBirds(r),
                    error => console.log("Error: ", error)
                );
            this._reportDataService
                .getLocation(this.locationId)
                .subscribe(
                    r => {
                        this.location = r[0];
                        this.location.distance = this._geoService.getDistanceFromHomeInMiles(this.location.latitude, this.location.longitude);
                        window.document.title = `MOORE+DATABASE - Species For ${this.location.location_name}`;
                    },
                    error => console.log("Error: ", error),
                    () => this._reportMapService.drawLocationMap(this.location.latitude, this.location.longitude, 'map_div_1')
                );
        });
        this._reportDataService
            .getOrdersAll()
            .subscribe(
                r => this.orders = r,
                error => console.log("Error: ", error)
            );
    }

    public goBack(): void {
        window.history.back();
    }

}