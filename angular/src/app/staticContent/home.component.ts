import {Component, OnInit} from "@angular/core";
import {ImageService} from '../services/image.service';
import {Image} from '../lib/image';

@Component({
    selector: 'relative-path',
    templateUrl: 'templates/static/home.html',
    providers: [
        ImageService
    ]
})

export class HomeComponent implements OnInit {

    image: Image;

    constructor(private _imageService: ImageService) {
        window.document.title = 'MOORE+DATABASE - Home';
    }

    ngOnInit() {
        this.image = this._imageService.getRandomImage();
    }
}