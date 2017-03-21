import {Component, OnInit} from "@angular/core";
import {ImageService} from '../services/image.service';
import {Image} from '../lib/image';

@Component({
    selector: 'relative-path',
    templateUrl: 'templates/static/training.html',
    providers: [
        ImageService
    ]
})

export class TrainingComponent implements OnInit {

    public image: Image;

    constructor(private _imageService: ImageService) {
        window.document.title = 'MOORE+DATABASE - Training';
    }

    ngOnInit() {
        this.image = this._imageService.getRandomImage();
    }
}