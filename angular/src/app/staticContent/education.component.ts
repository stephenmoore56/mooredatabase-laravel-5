import {Component, OnInit} from "@angular/core";
import {ImageService} from '../services/image.service';
import {Image} from '../lib/image';

@Component({
    selector: 'relative-path',
    templateUrl: 'templates/static/education.html',
    providers: [
        ImageService
    ]
})

export class EducationComponent implements OnInit {

    public image: Image;

    constructor(private _imageService: ImageService) {
        window.document.title = 'MOORE+DATABASE - Education';
    }

    ngOnInit() {
        this.image = this._imageService.getRandomImage();
    }
}