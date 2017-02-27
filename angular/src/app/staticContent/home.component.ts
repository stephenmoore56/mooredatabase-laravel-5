import {Component} from "@angular/core";

@Component({
    selector: 'relative-path',
    templateUrl: 'templates/static/home.html'
})
export class HomeComponent {
    public staticPage: boolean = true;

    constructor() {
        window.document.title = 'MOORE+DATABASE - Home';
    }
}