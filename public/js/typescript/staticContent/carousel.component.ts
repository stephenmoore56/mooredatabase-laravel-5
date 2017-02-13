import {Component, OnInit} from "@angular/core";

@Component({
    selector: '[ng-carousel]',
    templateUrl: 'templates/static-content/carousel.html'
})
export class CarouselComponent implements OnInit {
    ngOnInit() {
        // start the carousel after loading it
        $('.carousel').carousel({
            interval: 3000
        });
        $('.carousel').carousel('cycle');
    }
}