import {Component, OnInit} from "@angular/core";
import {SpeciesList} from "../lib/speciesList";
import {DataService} from "../services/data.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/searchAll.html',
    providers: [
        DataService
    ]
})
export class SearchAllComponent extends SpeciesList implements OnInit {

    public searchTerm: string = ' ';
    public orderId: number = -1;

    constructor(private _reportDataService: DataService) {
        super();
    }

    search(): void {
        // pass a space rather than a empty string or some other falsey value
        if (!this.searchTerm) {
            this.searchTerm = ' ';
        }
        this._reportDataService
            .getSearchAll(this.searchTerm, this.orderId)
            .subscribe(
                r => this.setBirds(r),
                error => console.log("Error: ", error)
            );
    }

    ngOnInit(): void {
        this._reportDataService
            .getOrdersAll()
            .subscribe(
                r => this.orders = r,
                error => console.log("Error: ", error)
            );
        window.document.title = `MOORE+DATABASE - Search All Species`;
    }
}