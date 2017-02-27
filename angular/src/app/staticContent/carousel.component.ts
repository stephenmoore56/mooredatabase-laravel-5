import {Component, OnInit} from "@angular/core";

declare var $: any;

@Component({
    selector: '[ng-carousel]',
    templateUrl: 'templates/static/carousel.html'
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