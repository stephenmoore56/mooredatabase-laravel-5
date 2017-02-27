import {Component, OnInit} from "@angular/core";
import {ImageService} from '../services/image.service';
import {Image} from '../lib/image';

@Component({
    selector: 'relative-path',
    templateUrl: 'templates/static/certifications.html',
    providers: [
        ImageService
    ]
})

export class CertificationsComponent implements OnInit {

    image: Image;

    constructor(private _imageService: ImageService) {
        window.document.title = 'MOORE+DATABASE - Certifications';
    }

    ngOnInit() {
        this.image = this._imageService.getRandomImage();
    }
}