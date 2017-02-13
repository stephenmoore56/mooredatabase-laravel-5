import {Component, OnInit} from "@angular/core";
import {SpeciesList} from "../speciesList";
import {ReportDataService} from "../reportData.service";

@Component({
    selector: 'report',
    templateUrl: 'templates/reports/searchAll.html',
    providers: [
        ReportDataService
    ]
})
export class SearchAllComponent extends SpeciesList implements OnInit {

    public searchTerm: string = ' ';
    public orderId: number = -1;

    constructor(private _reportDataService: ReportDataService) {
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
                r => {
                    this.birds = r;
                    this.originalBirds = r;
                },
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
    }

}