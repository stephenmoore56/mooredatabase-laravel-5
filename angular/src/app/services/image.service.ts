import {Injectable} from "@angular/core";
import {Image} from '../lib/image';

@Injectable()
export class ImageService {

    images: Image[];

    constructor() {
        this.images = [
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/millcitymuseum.jpg',
                alt: 'Mill City Museum'
            },
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/abstract.jpg',
                alt: 'Abstract'
            },
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/basilica.jpg',
                alt: 'Basilica'
            },
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/minnehahacreek.jpg',
                alt: 'Minnehaha Creek'
            },
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/powerplant1.jpg',
                alt: 'Power Plant'
            },
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/powerplant2.jpg',
                alt: 'Power Plant'
            },
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/powerplant3.jpg',
                alt: 'Power Plant'
            },
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/stainedglass.jpg',
                alt: 'Stained Glass'
            },
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/statefairride.jpg',
                alt: 'State Fair'
            },
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/temperance.jpg',
                alt: 'Temperance River'
            },
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/tiger.jpg',
                alt: 'Tiger'
            },
            {
                src: 'https://s3.amazonaws.com/mooredatabase-carousel/troutlily.jpg',
                alt: 'Trout Lily'
            }
        ];
    }

    public getRandomImage(): Image {
        let index = Math.floor(Math.random() * (this.images.length - 1));
        return this.images[index];
    }
}
