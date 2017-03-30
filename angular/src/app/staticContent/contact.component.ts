import {Component, OnInit} from "@angular/core";
import {Image} from '../lib/image';
import {DataService} from "../services/data.service";

@Component({
    selector: 'relative-path',
    templateUrl: 'templates/static/contact.html'
})

export class ContactComponent implements OnInit {

    public image: Image;

    constructor(private _reportDataService: DataService) {
        window.document.title = 'MOORE+DATABASE - Contact Me';
    }

    ngOnInit() {
        this._reportDataService
            .getCarouselImage()
            .subscribe(
                r => this.image = r[0],
                error => console.log("Error: ", error)
            );
    }
}