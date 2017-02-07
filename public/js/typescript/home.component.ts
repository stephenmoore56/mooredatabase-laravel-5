import {Component} from '@angular/core';

@Component({
    selector: 'absolute-path',
    templateUrl: 'templates/static-content/index.html'
})
export class HomeComponent {
    public staticPage: boolean = true;
}